import * as templates from "../ui/templates/index.mjs";
import * as listingMethod from "../api/listings/index.mjs";
import { displayMessage } from "../ui/common/index.mjs";

// function creating listings for all items

export async function allListings(){

    const listingsContainer = document.querySelector("#listings");
    
    if(listingsContainer) {

        try{
            
            const listings = await listingMethod.readListings();
            templates.renderTemplateListing(listings, container);
        } catch(error) {
            displayMessage("danger", error, "#message");
        }
        
    };
}

allListings();