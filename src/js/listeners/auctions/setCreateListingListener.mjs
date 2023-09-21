import { createListings } from "../../api/listings/createBid.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";


export async function setCreateListingListener() {

    const form = document.querySelector("#createListing");

    try{

        if(form) {
            form.addEventListener("submit", async (event) => {
                event.preventDefault()

                const form = event.target
                const formData = new formData(form);
                const listing = Object.fromEntries(formData.entries())

                createListings({...listing})
            })
        }
    } catch(error){
        displayMessage("type", error, "#message")
    }

}