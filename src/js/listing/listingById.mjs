import * as templates from "../ui/templates/index.mjs";
import * as listingsMethod from "../api/listings/index.mjs";


// function to get listings by their ID
// also looks at bid amount

export async function listingById() {
    const listingContainer = document.querySelector("#listing");
    const bidContainer = document.querySelector("#bid");

    if(listingContainer) {
        const listing = await listingsMethod.readListing();
        const bidList = listing.bid.sort(function(a, b) {
            const amountA = a.amount;
            const amountB = b.amount;

            if(amountA < amountB) return 1;
            if(amountA > amountB) return -1;
            return 0
        });

        templates.renderSingleListing(listing, listingContainer);
        templates.renderBids(bidList, bidContainer);
    }
}

listingById();