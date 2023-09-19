import { authFetch } from "../authFetch.mjs";
import { BASE_URL } from "../../constants/constants.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
    if(!profileData.name) {
        throw new Error("An error occured while updating")
    }

    const updateProfileUrl = `${BASE_URL}${action}/${profileData.name}/media`;
    const response = await authFetch(updateProfileUrl, {
        method,
        body: JSON.stringify(profileData)
    });

    return await response.json();
}