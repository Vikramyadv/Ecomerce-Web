"use client";

import { useState, useRef, useEffect } from "react";
import useDetectOutsideClick from "@/utils/detectOutsideClickHook";
import {
  Box,
  FilledInput,
  InputAdornment,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Hamburger2 from "../../../public/Assets/user/topnav/hamburger2.svg";
import MiniLogo from "../../../public/Assets/user/topnav/miniLogo.svg";
import LocationIcon from "../../../public/Assets/user/topnav/location.svg";
import Hamburger from "../../../public/Assets/user/topnav/hamburger.svg";
import Logo from "../../../public/Assets/user/topnav/logo.svg";
import SearchIcon from "../../../public/Assets/user/topnav/search.svg";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import Profile from "../../../public/Assets/user/topnav/purse.svg";
import Support from "../../../public/Assets/user/topnav/buzz.svg";
import Orders from "../../../public/Assets/user/topnav/coaching.svg";
import MyCart from "../../../public/Assets/user/topnav/wishlist.svg";
import CartIcon from "../../../public/Assets/user/topnav/cart.svg";

import BagIconMobile from "../../../public/Assets/user/topnav/mobilebottom/Store.svg";
import BuzzIconMobile from "../../../public/Assets/user/topnav/mobilebottom/Buzz.svg";
import CoachingIconMobile from "../../../public/Assets/user/topnav/mobilebottom/Coaching.svg";
import WishlistIconMobile from "../../../public/Assets/user/topnav/mobilebottom/Wishlist.svg";
import CartIconMobile from "../../../public/Assets/user/topnav/mobilebottom/Cart.svg";

import AvatarIcon from "../../../public/Assets/user/topnav/avatar.svg";
import { usePathname, useRouter } from "next/navigation";
import MobileBurgerMenu from "./MobileBurgerMenu/MobileBurgerMenu";
import useDebounce from "@/utils/debouncingHook";
import ArrowDropDownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import useLocalStorageItem from "@/utils/useLocalStorageItem";
import useLocalStorage from "@/utils/useLocalStorageHook";
import ViewCart from "../MyCart/page";

export const UserNav = ({
  setBurgerCategoryActive,
  burgerCategoryActive,
  categoryRef,
}) => {
  const [isLocationWindowOpen, setIsLocationWindowOpen] = useState(false);
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const avatarBodyRef = useRef(null);
  const avatarIconRef = useRef(null);
  const burgerRef = useRef(null);
  const [mobileBurgerActive, setMobileBurgerActive] = useState(false);

  useDetectOutsideClick(
    avatarBodyRef,
    () => {
      setIsAvatarDropdownOpen(false);
    },
    avatarIconRef
  );

  const handleOpenAvatarDropdown = () => {
    if (user) setIsAvatarDropdownOpen(!isAvatarDropdownOpen);
    if (!user) router.push("/login");
  };

  useDetectOutsideClick(
    burgerRef,
    () => {
      setBurgerCategoryActive(false);
    },
    categoryRef
  );

  const matches = useMediaQuery("(max-width:1000px)");

  const [searchQuery, setSearchQuery] = useState("");

  let debounceQuery = useDebounce(searchQuery, 400);

  const handleSearch = async (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      router.push(`/search?query=${searchQuery}#coaches`);
    }
  };
  const [viewCartVisible, setViewCartVisible] = useState(false);

  // useEffect(() => {
  //   if (debounceQuery) router.push(`/search?query=${debounceQuery}`);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [debounceQuery]);

  // //////////////////// HANDLING NAV LINK REDIRECTS ////////////////////////
  // function handleRedirect(href) {
  //   if (href == "#") {
  //     toast.info("This service is currently unavailable", {
  //       style: {
  //         background: "#3cb0ad",
  //         color: "#fff",
  //         border: "1px solid #249692",
  //       },
  //     });
  //     return;
  //   }
  //   router.push(`${href}`);
  // }
  /////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <MobileBurgerMenu
        active={mobileBurgerActive}
        setActive={setMobileBurgerActive}
      />
      <Box
        width={"100%"}
        sx={{
          height: {
            xs: "55px",
            sm: "55px",
            md: "92px",
          },
        }}
        top={"0px"}
        position={"sticky"}
        zIndex={"99"}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
            // border: "3px solid green",
          }}
          // border={"3px solid green"}
          display={"flex"}
          bgcolor={"white"}
          alignItems={"center"}
          height={"100%"}
          justifyContent={"space-evenly"}
          maxWidth={"100%"}
        >
          <Box
            minWidth={"20%"}
            display={"flex"}
            sx={{ justifyContent: "center" }}
          >
            {/* <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                style={{
                  translate: "0 3px",
                  maxWidth: "163px",
                  maxHeight: "28px",
                }}
              />
            </Link> */}
          </Box>
          <Box
            minWidth={"50%"}
            display={"flex"}
            sx={{ justifyContent: "center" }}
          >
            <Box
              style={{
                height: "50px",
                width: "40vw",
                maxWidth: "700px",
                marginLeft: "1.88%",
                display: "flex",
                borderRadius: "5px",
                overflow: "hidden",
                border: "1px solid #F38332",
              }}
            >
              <Box
                sx={{
                  maxHeight: "50px",
                  width: "33%",
                  background: "#fff",
                  color: "#1C1C1C",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    paddingLeft: "8px",
                  }}
                >
                  All Category
                </span>
                <ArrowDropDownIcon sx={{ color: "#3CB0AD", scale: "1.7" }} />
              </Box>
              <FilledInput
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "85%",
                  maxHeight: "50px",
                  background: "#FFFFFF",
                  paddingBottom: "15px",
                  border: "1px solid #F38332",
                  borderLeft: "2px solid #F38332",
                  borderRadius: "0",
                  // ":focus": {
                  //   background: "#E6F5F5",
                  // },
                }}
                value={searchQuery}
                onChange={(e) => handleSearch(e)}
                onKeyDown={(e) => handleEnter(e)}
                disableUnderline={true}
                placeholder="Search"
                id="filled-adornment-search"
                // startAdornment={
                //   <InputAdornment
                //     position="start"
                //     sx={{
                //       translate: "0 8px",
                //       height: "100%",
                //     }}
                //   >
                //     <Image src={SearchIcon} alt="search" />
                //   </InputAdornment>
                // }
                label="Amount"
              />
              <Box
                sx={{
                  maxHeight: "100%",
                  width: "25%",
                  minWidth: "70px",
                  maxWidth: "100px",
                  background: "#F38332",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "0 1px 1px 0",
                }}
              >
                Search
              </Box>
            </Box>
          </Box>

          {/* Icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "30%",
              flexGrow: "grow",
            }}
          >
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              width={"100%"}
              maxWidth={"328px"}
              alignItems={"center"}
              justifyContent={"space-around"}
              sx={{ mx: "1rem" }}
            >
              {[
                { img: Profile, label: "Profile", href: "/profile" },
                { img: Support, label: "Support", href: "#" },
                { img: Orders, label: "Orders", href: "/orders" },
                { img: MyCart, label: "My Cart", href: "#" },
              ].map((item, index) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    key={index}
                    onClick={() => {
                      if (item.label === "My Cart") {
                        setViewCartVisible(true);
                      } else {
                        handleRedirect(nav.href);
                      }
                    }}
                  >
                    <Image
                      // onClick={() => handleRedirect(item.href)}
                      style={{ cursor: "pointer", scale: "0.9" }}
                      src={item.img}
                      alt="bagIcon"
                    />
                    <Typography>{item.label}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
      <>
        <Box
          sx={{
            width: "100%",
            display: { xs: "flex", sm: "flex", md: "none" },
            justifyContent: "center",
            paddingTop: "15px",
            paddingBottom: "10px",
            background: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <FilledInput
              sx={{
                display: "flex",
                alignItems: "center",
                width: "65%",
                maxHeight: "50px",
                background: "#FFFFFF",
                paddingBottom: "15px",
                borderRadius: " 5px 0 0 5px",
                border: "2px solid #F38332",
                paddingBottom: "15px",
                ":focus": {
                  background: "#E6F5F5",
                },
              }}
              value={searchQuery}
              onChange={(e) => handleSearch(e)}
              onKeyDown={(e) => handleEnter(e)}
              disableUnderline={true}
              placeholder="Search"
              id="filled-adornment-search"
              // startAdornment={
              //   <InputAdornment
              //     position="start"
              //     sx={{
              //       translate: "0 8px",
              //       height: "100%",
              //     }}
              //   >
              //     <Image src={SearchIcon} alt="search" />
              //   </InputAdornment>
              // }
              label="Amount"
            />
            <Box
              sx={{
                maxHeight: "100%",
                width: "25%",
                minWidth: "70px",
                maxWidth: "100px",
                background: "#F38332",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0 5px 5px 0",
              }}
            >
              Search
            </Box>
          </Box>
        </Box>
      </>
      {viewCartVisible && <ViewCart setViewCartVisible={setViewCartVisible} />}
    </>
  );
};

export const UserNavMobile = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [viewCartVisible, setViewCartVisible] = useState(false);
  const navItems = [
    {
      title: "Profile",
      img: Profile,
      href: "/profile",
    },
    {
      title: "Support",
      img: Support,
      href: "#",
    },
    {
      title: "Orders",
      img: Orders,
      href: "#",
    },
    {
      title: "MyCart",
      img: MyCart,
      href: "#",
    },
  ];

  function handleRedirect(href) {}

  return (
    <>
      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.15)  0px 0px 15px 4px",
          width: "100%",
          height: "55px",
          display: {
            xs: "block",
            sm: "block",
            md: "none",
          },
          zIndex: "99",
        }}
        position={"fixed"}
        bottom={0}
        height={"60px"}
      >
        <Box
          bgcolor={"#fff"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          sx={{ width: "100%", height: "100%" }}
        >
          {navItems.map((nav, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                height: "100%",
                width: "55px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "6px",
                paddingBottom: "4px",
                justifyContent: "space-around",
                textAlign: "center",
              }}
            >
              <Image
                style={{
                  width: "17.95px",
                  height: "18.46px",
                  cursor: "pointer",
                }}
                src={nav.img}
                alt={nav.title}
                onClick={() => {
                  if (nav.title === "MyCart") {
                    setViewCartVisible(true);
                  } else {
                    handleRedirect(nav.href);
                  }
                }}
              />
              <span style={{ fontSize: "10px", fontWeight: "800" }}>
                {nav.title}
              </span>
              {nav.href === pathname && (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "5px",
                    left: "27.5px",
                    translate: "-4.5px 0",
                    width: "9px",
                    height: "4px",
                    borderRadius: "2px",
                    background: "#3CB0AD",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
      {viewCartVisible && <ViewCart setViewCartVisible={setViewCartVisible} />}
    </>
  );
};
