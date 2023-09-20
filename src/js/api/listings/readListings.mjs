import { BASE_URL } from "../../constants/constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const flag = "?_seller=true&_bids=true";


// function to get all listings

export async function readListings() {
    const getListingsUrl = `${BASE_URL}${action}`;
    const response = await authFetch(getListingsUrl);

    return await response.json();
}


// function to search listings by id

export async function searchListing(search) {

    const id = params.get("id");

    const searchListingsUrl = `${BASE_URL}${action}?sort=created&sortOrder=desc&${id}`;
    const response = await authFetch(searchListingsUrl);
    const result = await response.json();

    const lowerCaseSearch = search.toLowerCase();
    let filteredListing = result.filter(listing => listing.title.toLowerCase().includes(lowerCaseSearch))

    return filteredListing;
}



// function to get listings by id

export async function readListing() {

    const id = params.get("id");
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    

    const getListingUrl = `${BASE_URL}${action}/${id}${flag}`;
    const response = await authFetch(getListingUrl);

    return await response.json();
}

