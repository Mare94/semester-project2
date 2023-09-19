import { displayMessage } from "../../ui/common/index.mjs";
import { authFetch } from "../authFetch.mjs";
import { BASE_URL } from "../../constants/constants.mjs";

const action = "listings";

export async function createListings(listingData) {

    try {
        const createListingsUrl = BASE_URL + action;
        const response = await authFetch(createListingsUrl, {
            method: "POST",
            body: JSON.stringify(listingData)
        })

        window.location.reload()
        return await response.json();
    } catch(error) {
        displayMessage("danger", error, "#message")
    }
}