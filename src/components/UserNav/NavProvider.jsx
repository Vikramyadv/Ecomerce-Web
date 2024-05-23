"use client";

import React, { useRef, useState } from "react";
import { UserNav, UserNavMobile } from "./UserNav";
// import SportsCategory from "../SportsCategory/SportsCategory";
import { Box } from "@mui/material";

const NavProvider = ({ children }) => {
  const [burgerCategoryActive, setBurgerCategoryActive] = useState(false);

  const categoryRef = useRef(null);

  return (
    <>
      <UserNav
        setBurgerCategoryActive={setBurgerCategoryActive}
        burgerCategoryActive={burgerCategoryActive}
        categoryRef={categoryRef}
      />
      {burgerCategoryActive && (
        <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
          {/* <SportsCategory categoryRef={categoryRef} /> */}
        </Box>
      )}
      {children}
      <UserNavMobile />
    </>
  );
};

export default NavProvider;
