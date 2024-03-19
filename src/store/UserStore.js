// import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const userToken = atomWithStorage("userToken", "");
export const user = atomWithStorage("user", {});
