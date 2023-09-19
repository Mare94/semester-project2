import { BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const flag = "?_seller=true&_bids=true";

export async function readListings() {
    const getListingsUrl = `${BASE_URL}${action}`;
    const response = await authFetch(getListingsUrl);

    return await response.json();
}

export async function readListing() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    const getListingUrl = `${BASE_URL}${action}/${id}${flag}`;
    const response = await authFetch(getListingUrl);

    return await response.json();
}

