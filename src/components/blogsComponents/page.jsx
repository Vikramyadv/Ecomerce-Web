import React from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import blogImage from "@/../../public/Assets/blogs/blogImage.png";
import Image from "next/image";
import profileIcon from "@/../../public/Assets/blogs/profileIcon.svg";
import dateIcon from "@/../../public/Assets/blogs/dateIcon.svg";
import commentIcon from "@/../../public/Assets/blogs/commentIcon.svg";
import profile1 from "@/../../public/Assets/blogs/profile1.svg";
import profile2 from "@/../../public/Assets/blogs/profile2.svg";
import profile3 from "@/../../public/Assets/blogs/profile3.svg";
import CustomInput from "@/components/shared/customInput";
import { PrimaryButton } from "../Buttons/CustomButton";
import mobileImage from "@/../../public/Assets/blogs/mobileImage.jpg";

const BannerSection = () => {
  const styles = {
    rootContainer: {
      display: "flex",
      flexDirection: { xs: "column-reverse", md: "column" },
    },
    bannerImageStyle: {
      width: { xs: "90%", md: "100%" },
      height: { xs: "34vh", md: "82vh" },
      margin: "auto",
      marginTop: { xs: "18px", md: "0px" },
      // display: { xs: "none", md: "block" },
    },
  };

  return (
    <>
      <Box sx={styles.rootContainer}>
        <Box sx={styles.bannerImageStyle}>
          <Image
            src={blogImage}
            alt="blogImage"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <DateSection />
      </Box>
    </>
  );
};

export default BannerSection;

export const DateSection = () => {
  const styles = {
    rootContainer: {
      position: "relative",
      marginTop: { xs: "", md: "-105px", lg: "-107px", xl: "-98px" },
    },
    description: {
      fontFamily: "Inter",
      fontWeight: "700",
      fontSize: "34px",
      lineHeight: "34px",
      display: { xs: "flex", md: "flex" },
      justifyContent: "center",
      margin: "auto",
      width: { xs: "61%", md: "100%" },
    },
    nameStyles: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "21px",
      color: "#777777",
      cursor: "pointer",
      marginLeft: "5px",
    },
    runningStyle: {
      fontFamily: "Asap",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
      color: "#F26522",
      backgroundColor: "#FFF0E4",
      borderRadius: "100px",
      padding: "8px 16px 8px 16px",
      cursor: "pointer",
    },
  };

  return (
    <Box sx={styles.rootContainer}>
      <Typography
        sx={{
          ...styles.description,
          fontFamily: "Inter",
          fontSize: "24px",
          marginTop: "24px",
          marginBottom: "40px",
          display: { xs: "flex", md: "none" },
        }}
      >
        Blogs
      </Typography>
      <Typography sx={styles.description}>
        Eleifend egestas vitae felis diam.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "column" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
            gap: "20px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Image src={profileIcon} alt="profileIcon" />
            <Typography sx={styles.nameStyles}>Name</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Image src={dateIcon} alt="dateIcon" />
            <Typography sx={styles.nameStyles}>Month DD,YYYY</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Image src={commentIcon} alt="commentIcon" width={18} height={18} />
            <Typography sx={styles.nameStyles}>82 Comment</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: { xs: "24px", md: "60px" },
          }}
        >
          <Typography sx={styles.runningStyle}>Runnig</Typography>
          <Typography sx={styles.runningStyle}>Sports</Typography>
          <Typography sx={styles.runningStyle}>Runner</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const ParagraphSection = () => {
  const styles = {
    firstLetter: {
      fontSize: "48px",
      fontWeight: "bold",
    },
    paragraphStyles: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "17px",
      lineHeight: "26px",
      marginLeft: { xs: "9px", md: "21px" },
    },
    rootContainer: {
      marginTop: { xs: "50px", md: "25px", lg: "30px" },
      marginLeft: "12px",
    },
    paragraphBox: {
      borderRadius: "10px",
      backgroundColor: "#ABABAB",
      height: "141.19px",
      padding: { xs: "17px", md: "40px" },
      display: "flex",
      justifyContent: "center",
      alignItem: "center",
      width: { xs: "88%", sm: "93%", md: "90%", lg: "93%", xl: "94%" },
      marginTop: "15px",
    },
    boxText: {
      fontFamily: "Inter",
      fontWeight: "500",
      fontSize: { xs: "16px", sm: "25px", md: "28px" },
      lineHeight: "35px",
      color: "#FFFFFF",
      margin: "auto",

      marginTop: { xs: "24px", md: "9px" },
    },
    personName: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: { xs: "8px", md: "16px" },
      lineHeight: "19.2px",
      color: "#DDDDDD",
      marginTop: "20px",
      marginLeft: { xs: "200px", md: "0px" },
    },
  };

  return (
    <Box sx={styles.rootContainer}>
      <Box sx={{ display: "flex" }}>
        <span style={styles.firstLetter}>L</span>
        <Typography sx={styles.paragraphStyles}>
          orem ipsum dolor sit amet consectetur. Orci tellus porttitor cum nulla
          purus nisl at platea. Tortor sed sed vel diam odio viverra sed morbi.
          Felis amet sapien nibh vel quis gravida accumsan. Enim ullamcorper et
          fermentum elit turpis nulla.
        </Typography>
      </Box>
      <Typography
        sx={{ ...styles.paragraphStyles, marginLeft: "5px", marginTop: "20px" }}
      >
        Amet in scelerisque adipiscing augue aliquam vestibulum dui ac sit. Sit
        et ut massa eget. Nec tortor sit volutpat nisi fermentum. Eu nibh id at
        tristique cursus. Amet condimentum faucibus cras tincidunt purus tempor.
        Nunc odio sed vitae nibh orci sit. Congue eleifend lacus nunc nisl. Ut
        tortor cursus pellentesque risus. Leo ut egestas donec in dolor elit
        egestas amet tellus. Arcu quam morbi non aliquam. Lorem ut diam non
        volutpat volutpat. Lectus sodales magna scelerisque leo blandit
        ultricies nibh. Lacus ultrices volutpat aliquam adipiscing sem
        sollicitudin ipsum lobortis vulputate. Faucibus suspendisse eu blandit
        ornare sagittis a feugiat id nam. A nisl diam libero vestibulum et sit
        nisi nibh feugiat.
      </Typography>
      <Typography
        sx={{ ...styles.paragraphStyles, marginLeft: "5px", marginTop: "20px" }}
      >
        Nunc eget cursus egestas faucibus odio purus congue. Leo molestie
        praesent facilisis viverra. Elementum dictum amet neque accumsan odio
        egestas. Dignissim viverra venenatis sagittis venenatis. Ultrices arcu
        consectetur nulla neque velit quis. Nibh pretium quam metus eleifend
        quis nunc ornare condimentum. Massa iaculis vulputate quis posuere
        ullamcorper est scelerisque maecenas mauris. Urna nunc facilisis donec
        sit scelerisque. Nullam in mi quisque magna. Duis platea at rhoncus
        aliquam vitae duis nisl ultrices molestie. Volutpat nisl volutpat
        elementum eros. Amet tempor aliquam feugiat et eget ultricies. Etiam id
        donec massa luctus. Auctor nam consectetur auctor viverra adipiscing eu.
        Elit velit ullamcorper ac mus pulvinar.
      </Typography>
      <Box sx={styles.paragraphBox}>
        <Box>
          <Typography sx={styles.boxText}>
            Adipisicing elit Qui ipsam natus aspernatur quaerat impedit eveniet
            ipsum dolor
          </Typography>
          <Typography sx={styles.personName}>- PERSON NAME</Typography>
        </Box>
      </Box>
      <Typography
        sx={{ ...styles.paragraphStyles, marginLeft: "5px", marginTop: "20px" }}
      >
        Neque imperdiet dictum viverra massa pulvinar gravida ipsum enim sed.
        Quam quis at scelerisque dui arcu consectetur euismod. Sed felis cursus
        vitae ultrices iaculis in duis suspendisse gravida. Nibh sed sit neque
        pretium mattis duis enim turpis. Ut in pretium dui mauris feugiat donec
        turpis vitae. Id bibendum vel et sed. Quis sem gravida adipiscing
        ultricies cursus. Curabitur neque auctor leo nisi sapien ligula amet.
        Mauris vestibulum suspendisse purus adipiscing dictum posuere fermentum
        velit cursus. Nulla consectetur neque ac vel parturient. Nisl egestas
        interdum viverra justo. Felis turpis lobortis fringilla odio orci amet
        eu scelerisque. Fermentum in vulputate hendrerit quam nulla volutpat
        feugiat. Dui hac et volutpat arcu. Nibh nibh consectetur viverra donec
        natoque parturient lectus.
      </Typography>
      <Typography
        sx={{ ...styles.paragraphStyles, marginLeft: "5px", marginTop: "20px" }}
      >
        Aenean pharetra sed in odio massa adipiscing quis elementum lectus. In
        et platea porttitor scelerisque. Diam congue magna purus sed sit metus
        semper. Scelerisque sed arcu cras neque aliquet cursus. Auctor amet
        vivamus eu integer pharetra aenean sed ultrices iaculis. Integer
        malesuada lorem massa amet. Cursus vitae arcu interdum cras id pretium.
        Fames cursus pulvinar congue a dictumst et. Imperdiet dui non donec
        sodales cursus mauris. Viverra dolor tristique at volutpat sed. Tortor
        vulputate aliquet habitant elementum. Vitae est sed euismod neque ut
        massa. Ipsum at integer etiam id risus nec. Tortor donec mattis cursus
        porta. Fringilla sagittis et aliquam tincidunt id.
      </Typography>
    </Box>
  );
};

export const CommentSection = () => {
  const styles = {
    rootContainer: {
      marginTop: "40px",
      marginLeft: "12px",
      width: { xs: "95%", md: "100%" },
    },
    commntText: {
      fontFamily: "Inter",
      fontWeight: "700",
      fontSize: "22px",
      lineHeight: "26.4px",
    },
    dateStyles: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "16.8px",
    },
  };
  return (
    <Box sx={styles.rootContainer}>
      <Typography sx={styles.commntText}>Comments</Typography>

      <Box sx={{ display: "flex", marginTop: "25px" }}>
        <Image src={profile1} alt="profile1" />
        <Box sx={{ marginLeft: "20px" }}>
          <Typography sx={styles.dateStyles}>Month DD, YYYY</Typography>
          <Typography sx={{ ...styles.dateStyles, fontWeight: "600" }}>
            Name XYZ
          </Typography>
          <Typography
            sx={{
              ...styles.dateStyles,
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "24px",
              marginTop: "10px",
            }}
          >
            Amet adipiscing tincidunt iaculis nec sed non egestas augue nunc.
            Posuere morbi congue odio laoreet odio arcu vitae.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", marginTop: "50px" }}>
        <Image src={profile2} alt="profile2" />
        <Box sx={{ marginLeft: "20px" }}>
          <Typography sx={styles.dateStyles}>Month DD, YYYY</Typography>
          <Typography sx={{ ...styles.dateStyles, fontWeight: "600" }}>
            Name XYZ
          </Typography>
          <Typography
            sx={{
              ...styles.dateStyles,
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "24px",
              marginTop: "10px",
            }}
          >
            Amet adipiscing tincidunt iaculis nec sed non egestas augue nunc.
            Posuere morbi congue odio laoreet odio arcu vitae.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", marginTop: "50px", marginLeft: "80px" }}>
        <Image src={profile3} alt="profile3" />
        <Box sx={{ marginLeft: "20px" }}>
          <Typography sx={styles.dateStyles}>Month DD, YYYY</Typography>
          <Typography sx={{ ...styles.dateStyles, fontWeight: "600" }}>
            Name XYZ
          </Typography>
          <Typography
            sx={{
              ...styles.dateStyles,
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "24px",
              marginTop: "10px",
            }}
          >
            Amet adipiscing tincidunt iaculis nec sed non egestas augue nunc.
            Posuere morbi congue odio laoreet odio arcu vitae.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const LeaveComment = () => {
  const styles = {
    leaveComment: {
      fontFamily: "Inter",
      fontWeight: "700",
      fontSize: "22px",
      lineHeight: "26.4px",
    },
    commentDescription: {
      fontFamily: "Inter",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "22.4px",
      marginTop: "10px",
    },
  };
  return (
    <Box
      sx={{
        backgroundColor: "#F8F8F8",
        marginLeft: { xs: "5%", md: "2%" },
        marginTop: "50px",
        width: { xs: "78%", md: "90%", lg: "93%" },
        padding: "24px",
      }}
    >
      <Typography sx={styles.leaveComment}>Leave Comment</Typography>
      <Typography sx={styles.commentDescription}>
        Your email address will not be published. Required fields are marked
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          marginTop: "24px",
        }}
      >
        <CustomInput
          styles={{
            border: "none",
            height: "31px",
            width: "80%",
            borderRadius: "4px",
          }}
          placeholder={"Full Name"}
        />
        <CustomInput
          styles={{
            border: "none",
            height: "31px",
            width: "80%",
            borderRadius: "4px",
          }}
          placeholder={"Enter Email Address"}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "80%", md: "90%" },
        }}
      >
        <CustomInput
          styles={{
            border: "none",
            borderRadius: "4px",
            height: "112px",
          }}
          placeholder={"Comment"}
        />
      </Box>

      <Box sx={{ marginTop: "15px", display: "flex" }}>
        <Checkbox defaultUnchecked />
        <Typography sx={{ ...styles.commentDescription, marginTop: "10px" }}>
          Save my name, email, and website in this browser for the next time I
          comment.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "94%",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <PrimaryButton
          style={{ backgroundColor: "#FF9017", marginLeft: { md: "auto" } }}
          content={"Post Comment"}
        ></PrimaryButton>
      </Box>
    </Box>
  );
};
