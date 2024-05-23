"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import module from "./mobilemenu.module.scss";
import Link from "next/link";
import Image from "next/image";
import Cross from "../../../../public/Assets/close.svg";
// import { useSelector } from "react-redux";
// import { logout } from "@/redux/app/appSlice";
// import { useDispatch } from "react-redux";
// import AvatarDropdown from "@/component/AvatarDropdown/AvatarDropdown";
import { useRouter } from "next/navigation";
import useLocalStorageItem from "@/utils/useLocalStorageItem";

const MobileBurgerMenu = ({ active, setActive }) => {
  // const user = useSelector((state) => state.app?.data);
  const [manageActive, setManageActive] = useState(false);
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);

  const handleState = () => {
    setActive(!active);
  };

  return (
    <>
      {/* <Box sx={{ position: "relative" }}>
        {manageActive && (
          <AvatarDropdown
            mobile
            handleState={handleState}
            manageActive={manageActive}
            setManageActive={setManageActive}
            isAvatarDropdownOpen={isAvatarDropdownOpen}
            setIsAvatarDropdownOpen={setIsAvatarDropdownOpen}
          />
        )}
      </Box> */}
      {manageActive && (
        <Box
          sx={{
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "999",
            width: "100%",
            height: "100%",
            background: "#fff",
          }}
        />
      )}
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          background: active ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
          zIndex: "998",
          display: active ? "block" : "none",
        }}
      ></Box>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          transform: active ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: "999",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "85%",
            height: "100vh",
            background: "#fff",
            paddingTop: "8%",
            transform: active ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <Image
            onClick={() => handleState()}
            className={module.close__icon}
            src={Cross}
            alt="icon-image"
          />
          <NavTop
            manageActive={manageActive}
            setManageActive={setManageActive}
            // user={user}
            handleState={handleState}
          />
          <NavBottom
            // user={user}
            handleState={handleState}
          />
        </Box>
      </Box>
    </>
  );
};

const NavTop = ({ user, handleState, manageActive, setManageActive }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        paddingRight: "8%",
        paddingLeft: "8%",
        paddingY: "30px",
        height: "12%",
      }}
    >
      <Box
        sx={{
          height: "70px",
          width: "70px",
          borderRadius: "50%",
          background: "#000",
          marginRight: "10px",
        }}
      ></Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {user ? (
          <>
            <span className={module.heading}>{user?.fullName}</span>

            <span
              onClick={() => setManageActive(!manageActive)}
              className={module.sub__heading}
            >
              Manage account
            </span>
          </>
        ) : (
          <>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              href={"/login"}
            >
              <span className={module.heading}>Login or SignUp</span>
            </Link>
            {/* <span className={module.sub__heading}>Manage account</span> */}
          </>
        )}
      </Box>
    </Box>
  );
};

const NavBottom = ({ user, handleState }) => {
  const pincode = useLocalStorageItem("pincode");

  const Links = [
    [
      { title: "All Sports", href: "/all-sports" },
      {
        title: "Coaches",
        href: `/coaches-near-you?limit=10&page=1${
          pincode == "N/A" ? "" : `&pincode=${pincode}`
        }`,
      },
      { title: "Academies", href: "/academies-you-prefer?limit=10&page=1" },
      { title: "Your Bookings", href: "/user/bookings" },
      {
        title: "Register as Coach & Academy",
        title2: "Register or Create an Academy",
        href: "/user/coach-signup",
        href2: "/coach/create-academy",
      },
    ],
    [
      { title: "Contact Us", href: "/user/customer-care" },
      { title: "T&C", href: "/user/terms-and-conditions" },
      { title: "Privacy Policies", href: "/user/privacy-policy" },
    ],
  ];

  // const dispatch = useDispatch();
  const router = useRouter();
  // const role = user?.role;

  const handleLogout = () => {
    dispatch(logout());
    handleState();
    router.push("/");
  };

  return (
    <Box
      className={module.nav__links__parent}
      sx={{
        height: "88%",
        paddingLeft: "8%",
        paddingRight: "8%",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ height: "100%", paddingTop: "50px" }}>
        {Links?.map((i, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {i?.map((l, index) => {
              if (l?.title == "Register as Coach & Academy") {
                // if (role == "coach") {
                //   return (
                //     <Link
                //       onClick={() => handleState()}
                //       key={index}
                //       className={module.nav__link}
                //       href={l?.href2}
                //     >
                //       <NavContent title={l?.title2} />
                //     </Link>
                //   );
                // }
              }

              return (
                <Link
                  onClick={() => handleState()}
                  key={index}
                  className={module.nav__link}
                  href={l?.href}
                >
                  <NavContent title={l?.title} />
                </Link>
              );
            })}

            {index !== Links.length - 1 && (
              <Box
                sx={{
                  width: "100%",
                  height: "2px",
                  background: "#242424",
                  opacity: "0.4",
                  marginY: "10px",
                }}
              />
            )}
          </Box>
        ))}
        {user && (
          <span style={{ cursor: "pointer" }} onClick={() => handleLogout()}>
            Log Out
          </span>
        )}
      </Box>
    </Box>
  );
};

const NavContent = ({ title }) => {
  return <span>{title}</span>;
};

export default MobileBurgerMenu;
