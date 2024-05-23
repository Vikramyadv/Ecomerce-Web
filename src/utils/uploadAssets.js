import AWS from "aws-sdk";
import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  BUCKET_NAME,
} from "./getEnv";

// Set your AWS credentials and region
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION, // e.g., 'us-west-1'
});

const s3 = new AWS.S3();

// Function to upload image to S3
export function uploadProfilePic(base64Image, objectName, fileN, cb) {
  const buffer = Buffer.from(base64Image, "base64");
  let ext = fileN.split(".");
  const now = Date.now();
  const fileName = `uploads/${objectName}-${now}.${ext[ext.length - 1]}`;
  const params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: buffer,
    ContentType: "image/jpeg", // Set content type based on your image type
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error("Upload Error", err);
    } else {
      let url = data?.Location?.split("https://sportjack.s3.ap-south-1.amazonaws.com")[1]
      cb(url);
    }
  });
}
