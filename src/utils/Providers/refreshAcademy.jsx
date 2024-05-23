"use client";
import "client-only";
import { useDispatch } from "react-redux";
import { getMethod } from "../API";
import { setBrowsingMode } from "@/redux/app/appSlice";
import { ApiConstant } from "@/constants";

const useRefreshAcademy = () => {
  const dispatch = useDispatch();

  const refresh = async (slug) => {
    try {
      console.log("Calling Refresh Hook for academy");
      let academy = await getMethod(`${ApiConstant.Base}/web/academy/${slug}`);
      if (academy?.data) {
        dispatch(
          setBrowsingMode({ role: "academy", academy: academy?.data?.data })
        );
      }
    } catch (error) {
      console.log("Error refreshing user data:", error);
    }
  };

  return refresh;
};

export default useRefreshAcademy;
