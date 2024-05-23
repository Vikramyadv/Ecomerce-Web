export const AWS_ACCESS_KEY_ID = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;

export const AWS_SECRET_ACCESS_KEY =
  process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY;

export const AWS_REGION = process.env.NEXT_PUBLIC_AWS_REGION;

export const BUCKET_NAME = process.env.NEXT_PUBLIC_BUCKET_NAME;

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;

export const MIN_OTP_TIMER = process.env.NEXT_PUBLIC_MIN_OTP_TIMER || 30;

export const MAX_OTP_TIMER = process.env.NEXT_PUBLIC_MAX_OTP_TIMER || 30;

export const BASE_S3_URL = `https://${BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com`;

class GetEnv {
  AWS_ACCESS_KEY_ID;
  AWS_SECRET_ACCESS_KEY;
  AWS_REGION;
  BUCKET_NAME;
  BASE_URL;
  NODE_ENV;
  BASE_S3_URL;
  NEXT_PUBLIC_MAPS_API_KEY;

  constructor() {
    this.AWS_ACCESS_KEY_ID = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;
    this.AWS_SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY;
    this.AWS_REGION = process.env.NEXT_PUBLIC_AWS_REGION;
    this.BUCKET_NAME = process.env.NEXT_PUBLIC_BUCKET_NAME;
    this.BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    this.NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;
    this.BASE_S3_URL = `https://${this.BUCKET_NAME}.s3.${this.AWS_REGION}.amazonaws.com`;
    this.MAPS_API_KEY = process.env.NEXT_PUBLIC_MAPS_API_KEY;
  }
}

export const getEnv = new GetEnv();
