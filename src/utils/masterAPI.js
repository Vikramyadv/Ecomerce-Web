import {
  ACADEMIES_SEARCH_URL,
  AGE_GROUP_LIST_URL,
  COACHING_TYPE_LIST_URL,
  GENDER_LIST_URL,
  SPORT_SEARCH_URL,
  TIME_SLOTS_LIST_URL,
} from "@/constants";
import { getMethod } from "./API";

export const searchSports = async (query) => {
  try {
    const url = `${SPORT_SEARCH_URL}?keyword=${query}`;
    const response = await getMethod(url);
    return response;
  } catch (err) {
    console.log("Error : ", { err });
    return err?.response?.message;
  }
};

export const searchAcademies = async (query) => {
  try {
    const url = `${ACADEMIES_SEARCH_URL}?keyword=${query}`;
    const response = await getMethod(url);
    return response;
  } catch (err) {
    console.log({ err });
    return err?.response?.message;
  }
};

export const getGenderList = async () => {
  try {
    const genderListRes = await getMethod(GENDER_LIST_URL);
    return genderListRes;
  } catch (err) {
    console.log({ err });
    return err?.response?.message;
  }
};

export const getAgeGroupList = async () => {
  try {
    const ageGroupListRes = await getMethod(AGE_GROUP_LIST_URL);
    return ageGroupListRes;
  } catch (err) {
    console.log({ err });
    return err?.response?.message;
  }
};
export const getCoachingTypeList = async () => {
  try {
    const coachingTypeListRes = await getMethod(COACHING_TYPE_LIST_URL);
    return coachingTypeListRes;
  } catch (err) {
    console.log({ err });
    return err?.response?.message;
  }
};

export const getTimeSlotsList = async () => {
  try {
    const timeSlotsListRes = await getMethod(TIME_SLOTS_LIST_URL);
    return timeSlotsListRes;
  } catch (err) {
    console.log({ err });
    return err?.response?.message;
  }
};
