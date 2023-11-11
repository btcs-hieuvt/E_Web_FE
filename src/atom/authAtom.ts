import { atom } from "recoil";

const accessTokenState = atom<string | null>({
  key: "accessToken",
  default: null,
});

const loadingAuthState = atom<boolean>({
  key: "loadingAuth",
  default: false,
});

export { accessTokenState, loadingAuthState };
