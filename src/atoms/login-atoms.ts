import { atom, selector } from "recoil";
import dotenv from "dotenv";
dotenv.config();

const API_BASE_URL =
  process.env.API_BASE_URL || "https://desafio-apx-pet-finder.onrender.com";

const authAtom = atom({
  key: "auth-atom",
  default: {
    email: "",
    password: "",
  },
});

const authSelector = selector({
  key: "auth-selector",
  get: async ({ get }) => {
    const emailPassValues = get(authAtom);

    if (emailPassValues.email && emailPassValues.password) {
      const response = await fetch(API_BASE_URL + "/log-in", {
        headers: {
          "content-type": "application/json",
          authorization:
            "Bearer " + emailPassValues.email + " " + emailPassValues.password,
        },
      });
      const json = await response.json();
      const data = json.profile;

      return data;
    } else {
      return false;
    }
  },
});

export { authAtom, authSelector };
