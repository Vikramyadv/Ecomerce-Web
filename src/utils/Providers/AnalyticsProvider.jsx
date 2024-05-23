"use client";
import { getToken } from "@/actions/setCoockie.action";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const AnalyticsProvider = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function awaitToken() {
      const token = await getToken();
      setToken(token);
    }
    awaitToken();
  }, []);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const profileSlug = pathname.split("/")[2];
  const id = searchParams.get("id");

  const visitDetails = {
    token,
    pathname,
    profileSlug,
    profileId: pathname.split("/")[1].toLowerCase() == "profile" && id,
    sportId: pathname.split("/")[1].toLowerCase() == "sport" && id,
  };

  console.log(visitDetails);

  return <></>;
};

export default AnalyticsProvider;
