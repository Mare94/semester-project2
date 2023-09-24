import { listingBids } from "../../api/listings/index.mjs";
import { displayMessage } from "../../ui/common/index.mjs";



export async function setBidFormListener(){

    const form = document.querySelector("#createBid");

    if(form) {
        form.addEventListener("submit", async (event) =>{

            event.preventDefault();

            const form = event.target;
            const formData = new formData(form);

            const bidData = Object.fromEntries(formData.entries())

            try{

                await listingBids(bidData);
                displayMessage("success", "A bid has been made", "#message");
            } catch(error) {
                displayMessage("danger", error, "#message");
            }

        });
    }
}



