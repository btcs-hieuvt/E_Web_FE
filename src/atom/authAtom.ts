import { ProfileType } from "@/types/auth";
import { atom } from "recoil";

const accessTokenState = atom<string | null>({
  key: "accessToken",
  default: null,
});

const profileState = atom<ProfileType | null>({
  key: "profile",
  default: null,
});

const loadingAuthState = atom<boolean>({
  key: "loadingAuth",
  default: false,
});

export { accessTokenState, loadingAuthState, profileState };
