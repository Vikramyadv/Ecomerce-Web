"use client";
import { ApiConstant } from "@/constants";
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMethod } from "../API";
import { logout, setBrowsingMode, setData } from "@/redux/app/appSlice";
import Loading from "@/component/Loading/Loading";
import { Box } from "@mui/material";
import { getToken } from "@/actions/setCoockie.action";
import { notFound, useParams, useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { BASE_URL } from "../getEnv";
import NotFound from "@/app/not-found";
// import useLocalStorage from "../useLocalStorageHook";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [currentuser, setCurrentuser] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state?.app?.data);
  // const [localUser, setLocalUser] = useLocalStorage("session", {});

  useEffect(() => {
    async function checkAuth() {
      try {
        let user = await getMethod(`${ApiConstant.Base}/auth/me`);
        setCurrentuser(user?.data);
      } catch (e) {
        setLoading(false);
        console.log("Error : ", e.message);
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  // useEffect(() => {
  //   if (localUser) {
  //     dispatch(setData(localUser));
  //   }
  // }, [localUser]);

  useEffect(() => {
    if (currentuser) {
      setLoading(true);
      dispatch(setData(currentuser?.data));
      // setLocalUser(currentuser?.data);
      setLoading(false);
    }
  }, [currentuser, dispatch]);

  if (user) return <>{children}</>;

  return <>{children}</>;

  // return (
  //   <>
  //     {loading ? (
  //       <Box
  //         sx={{
  //           width: "100%",
  //           height: "100vh",
  //           display: "flex",
  //           background: "#FDFDFD",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           flexDirection: "column",
  //         }}
  //       >
  //         <Loading />
  //       </Box>
  //     ) : (
  //       children
  //     )}
  //   </>
  // );
};

export function ClientSideAuthProvider({ children }) {
  const dispatch = useDispatch();
  const [currentuser, setCurrentuser] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state?.app?.data);

  useEffect(() => {
    async function checkAuth() {
      try {
        let user = await getMethod(`${ApiConstant.Base}/auth/me`);
        setCurrentuser(user?.data);
      } catch (e) {
        console.log("Error : ", e.message);
        dispatch(logout({ message: "Token Expired" }));
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  useEffect(() => {
    if (currentuser) {
      setLoading(true);
      dispatch(setData(currentuser?.data));
      setLoading(false);
    }
  }, [currentuser, dispatch]);

  if (user) return <>{children}</>;

  return (
    <>
      {loading ? (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            background: "#FDFDFD",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Loading />
        </Box>
      ) : (
        children
      )}
    </>
  );
}

export function ProtectedCoachRoute({ children }) {
  const user = useSelector((state) => state.app?.data);
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (user && user?.role === "coach") {
      dispatch(setBrowsingMode({ role: "coach" }));
    }
    setLoading(false);
  }, [dispatch, router, user]);

  if (user && user?.role === "user") {
    return (
      <NotFound
        link={{
          path: "/user/coach-signup",
          label: "Signup As a Coach",
          message: "you are Not a coach, want to Signup as a coach?",
        }}
      />
    );
  }

  if (!loading && !user)
    return (
      <NotFound
        link={{
          path: "/login",
          label: "Login",
          message: "You are not logged in, want to login?",
        }}
      />
    );

  return (
    <>
      {loading ? (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Loading />
        </Box>
      ) : (
        children
      )}
    </>
  );
}

export function ProtectedAcademyRoute({ children }) {
  const appState = useAppSelector((state) => state.app);
  const dispatch = useDispatch();
  const [academy, setAcademy] = useState(appState?.selectedAcademy);
  const [loading, setLoading] = useState(true);
  const user = useMemo(() => appState?.data, [appState?.data]);
  const params = useParams();

  useEffect(() => {
    const fetchAcademy = async () => {
      setLoading(true);
      const academy = await fetch(
        `${BASE_URL}/web/academy/${params.slug}`
      ).then((res) => res.json());

      let isAdmin = String(academy?.data?.adminCoach?._id) === String(user._id);

      if (!isAdmin) {
        isAdmin = academy?.data?.coaches?.find(
          (c) => c.isAdmin && String(c.coach) === user._id
        );
      }

      if (!isAdmin) {
        setAcademy(null);
        setLoading(false);
        return;
      }
      setAcademy(academy?.data);
      if (academy) {
        dispatch(setBrowsingMode({ role: "academy", academy: academy?.data }));
      }
      setLoading(false);
    };
    if (user && loading) fetchAcademy();
  }, [dispatch, loading, params.slug, user]);

  if (!loading && !academy) return notFound();

  return (
    <>
      {loading ? (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Loading />
        </Box>
      ) : (
        children
      )}
    </>
  );
}

export default AuthProvider;
