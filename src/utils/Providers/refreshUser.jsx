"use client";
import "client-only";
import { useDispatch } from "react-redux";
import { getMethod } from "../API";
import { setData } from "@/redux/app/appSlice";
import { ApiConstant } from "@/constants";

const useRefreshUser = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    try {
      console.log("Calling Refresh Hook");
      let user = await getMethod(`${ApiConstant.Base}/auth/me`);
      if (user?.data) {
        console.log(user?.data);
        dispatch(setData(user?.data?.data));
      }
    } catch (error) {
      console.log("Error refreshing user data:", error);
    }
  };

  return refresh;
};

export default useRefreshUser;
