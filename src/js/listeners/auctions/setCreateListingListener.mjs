import { createListings } from "../../api/listings/index.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";



export async function setCreateListingListener() {

    const form = document.querySelector("#createListing");

    if(form) {

        form.addEventListener("submit", async (event) => {
                event.preventDefault()

                const form = event.target
                const formData = new formData(form);
                const listing = Object.fromEntries(formData.entries())

                try{

                    await createListings(listing);
                    displayMessage("success", "Listing has been created", "#message");
                    
                } catch(error){

                    displayMessage("danger", error, "#message");
                }
                
    })

    }
}


















/*
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

        displayMessage("success", "Listing created", "#message")

    } catch(error){
        displayMessage("type", error, "#message")
    }

} */