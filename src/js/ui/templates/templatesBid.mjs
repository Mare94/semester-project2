 import { displayMessage } from "../common/displayMessage.mjs";

export function templateBid(bidData) {
    const readBid = document.createElement("div");

    try{
        const endsAt = new Date(bidData.endsAt).toLocaleString();
        
        const loader = document.querySelector("#loader");
        loader.style.display = "none";

        readBid.innerHTML = `
        <div id="message"></div>
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${bidData.media}" class="img-fluid rounded-start" alt="${bidData.title}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title">${bidData.title}</h5>
                            <p class="card-text">${bidData.seller.name}</p>
                            <p class="card-text">Description: ${bidData.description}</p>
                            <p class="card-text">Amount: ${bidData.amount}</p>
                            <p class="card-text">Bids: ${bidData._count.bids}</p>
                            <p class="card-text"><small class="text-body-secondary">Deadline: ${endsAt}</p>
                        </div>
                     </div>
              </div>
         </div>
        `;

        return readBid
    } catch(error) {
        displayMessage("type", error, "#message")
    }
}

export function renderBids(listingBidList, parent) {
    parent.innerHTML = ""
    listingBidList.map(bid => parent.append(templateBid(bid)));
}