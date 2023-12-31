import { load } from "../../storage/storage.mjs";

export const isLoggedIn = () => Boolean(load("token"));

export const profile = () => load("profile");