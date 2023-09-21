import { listingBids } from "../../api/listings/bid.mjs";
import { displayMessage } from "../../ui/common/index.mjs";


export async function setBidFormListener() {
    
    const form = document.querySelector("#createBid");

    try {
        
        if(form){
            form.addEventListener("submit", async (event) => {
                event.preventDefault()
                const form = event.target;
                const formData = new formData(form);

                const bidData = Object.fromEntries(formData.entries())

                listingBids(bidData);
            })
        }
    } catch(error) {
        displayMessage("danger", error, container);
    }
}