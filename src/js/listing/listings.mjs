import * as templates from "../ui/templates/index.mjs";
import * as listingMethod from "../api/listings/index.mjs";


// function creating listings for all items

export async function allListings(){

    const listingsContainer = document.querySelector("#listings");
    
    if(listingsContainer) {

        const listings = await listingMethod.readListings();
        templates.renderTemplateListing(listings, container);
    };
}

allListings();