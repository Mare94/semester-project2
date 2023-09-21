import { searchListing } from "../../api/listings/readListings.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";

export async function setSearchFormListener() {

    const form = document.querySelector("#search")

    try {

        if(form){
            form.addEventListener("submit", (event) =>{
                event.preventDefault()

                const formData = new formData(event.target);
                const searchObject = Object.fromEntries(formData.entries())

                searchListing(searchObject.searchInput)
            })
        }
    } catch (error) {
        displayMessage("danger", error, "#message")
    }
}

setSearchFormListener();