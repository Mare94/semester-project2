import { save, load } from "../../storage/storage.mjs";
import { authFetch } from "../authFetch.mjs";
import { BASE_URL } from "../../constants/constants.mjs";

const action = "/listings";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export async function listingBids(bidData) {

    const profile = load("profile");
    const listingBidsUrl = `${BASE_URL}${action}`;

    const response = await authFetch(listingBidsUrl, {
        method: "POST",
        body: JSON.stringify({amount: +bidData.amount})
    })

    window.location.reload();
    save("profile", {...profile, credits: profile.credits - +bidData.amount})
    return await response.json();
}