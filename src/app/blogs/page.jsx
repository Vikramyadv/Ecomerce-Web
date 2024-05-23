import React from "react";
import { Box } from "@mui/material";
import BannerSection, {
  CommentSection,
  LeaveComment,
  ParagraphSection,
} from "@/components/blogsComponents/page";
import LeftContainer from "@/components/blogList/LeftContainer";
const Blogs = () => {
  const styles = {
    rootContainer: {
      display: "flex",
      gap: "1%",
      marginLeft: { md: "3%", lg: "5%", xl: "8%" },
    },
    leftContainer: {
      width: { md: "30%", lg: "25%", xl: "25%" },
      display: { xs: "none", md: "block" },
    },
    rightContainer: {
      width: { xs: "100%", md: "66%", lg: "71.5%", xl: "72%" },
    },
  };
  return (
    <Box sx={styles.rootContainer}>
      <Box sx={styles.leftContainer}>
        <LeftContainer />
      </Box>
      <Box sx={styles.rightContainer}>
        <BannerSection />
        <ParagraphSection />
        <CommentSection />
        <LeaveComment />
      </Box>
    </Box>
  );
};

export default Blogs;
