import { displayMessage } from "../ui/common/displayMessage.mjs";

export function templateListing(listingData) {
    const readListing = document.createElement("div");
    readListing.classList.add("listings")

    try {
        const endsAt = new Date(listingData.endsAt).toLocaleString();

        const loader = document.querySelector("#loader");
        loader.style.display = "none";

        readListing.innerHTML = `
                    <div id="message"></div>
                    <div class="card mb-3">
                        <img src="${listingData.media}" class="card-img-top" alt="${listingData.title}">
                        <div class="card-body">
                            <h5 class="card-title">${listingData.title}</h5>
                            <p class="card-text">Bids: ${listingData._count.bids}</p>
                            <p class="card-text">Deadline: ${endsAt}</p>
                            <p class="card-text"><a href="/listing/index.html?id=${listingData.id}"><button class="btn btn-secondary">Read more...</button></p>
                        </div>
                    </div>
        `

        return readListing;
    } catch(error) {
        displayMessage("type", error, "#message");
    }
}

export function renderTemplateListing(listingDataList, parent) {
    parent.innerHTML = ""
    listingDataList.map(data =>{
        parent.append(templateListing(data))
    })
};