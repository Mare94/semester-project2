import { searchListing } from "../../api/listings/readListings.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";



export async function setSearchFormListener(){

    const form = document.querySelector("#search");

    if(form) {
        form.addEventListener("submit", async (event) =>{

            event.preventDefault();

            const formData = new formData(event.target);

            const SearchData = Object.fromEntries(formData.entries())

            try{

                await searchListing(SearchData.searchInput);
                
            } catch(error) {
                displayMessage("danger", error, "#message");
            }

        });
    }
}

setSearchFormListener();



