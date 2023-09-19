import { authFetch } from "../authFetch.mjs";
import { BASE_URL } from "../../constants/constants.mjs";

const action = "/listings";

export async function readProfiles() {
    const readProfilesUrl = `${BASE_URL}${action}`;
    const response = await authFetch(readProfilesUrl);
    return await response.json(); 
}

export async function readProfile(name) {
    if(!name) {
        throw new Error("Error, something went wrong!")
    }

    const readProfileUrl = `${BASE_URL}${action}/${name}`;
    const response = await authFetch(readProfileUrl);
    return await response.json();
}