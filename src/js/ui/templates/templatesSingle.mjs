import { displayMessage } from "../ui/common/displayMessage.mjs";

export function templateSingleListing(listingData) {
    const endsAt = new Date(listingData.endsAt).toLocaleString();
    const readListing = document.createElement("div");

    try {
        const loader = document.querySelector("#loader");
        loader.style.display = "none";

        readListing.innerHTML = `
        <div id="message"></div>
        <div class"card m-auto mt-3 col-11 col-md-9 col-lg-8 p-4 d-flex flex-row">
            <div class"p-4 col-6">
                <img src="${listingData?.media}" class="card-img">
            </div>
            
            <div class"p-4 col-6">
                <h5 class="card-title">${listingData.title}</h5>
                <p>Seller: ${listingData.seller.name}</p>
                <p>Bids: ${listingData._count.bids}</p>
                <p>Description: ${listingData.description}</p>
                <p><small>Deadline: ${endsAt}</small></p>
            </div>
        </div>
        `;
        
        return readListing;
    
    } catch(error) {
         displayMessage("type", error, "#message");
    }
}

export function renderSingleListing(listingDataList, parent) {
    parent.innerHTML = ""
    parent.append(templateSingleListing(listingDataList))
}