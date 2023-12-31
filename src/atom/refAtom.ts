import { atom } from "recoil";

export const showSideMenuState = atom<boolean>({
  key: "showSideMenu",
  default: false,
});
