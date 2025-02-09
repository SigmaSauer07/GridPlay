import { atom } from "recoil";

export const scoreState = atom({
  key: "scoreState",
  default: Array(2).fill(Array(10).fill("?")),
});
