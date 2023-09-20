import * as templates from "../ui/templates/index.mjs";
import * as listingMethods from "../api/listings/index.mjs";


// function to search listings

export async function searchListings(search) {

    const container = document.querySelector("#listings");

    if(container) {

        const listings = await listingMethods.searchListing(search);
        templates.renderTemplateListing(listings, container);
    }
}