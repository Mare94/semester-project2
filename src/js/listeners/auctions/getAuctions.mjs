import { displayAuctions } from "../../ui/templates/index.mjs";
import { displayMessage } from "../../ui/common/index.mjs";
import * as api from "../../api/auctions/index.mjs"

export async function getAuctions() {
    
    const container = document.querySelector("#auctions");

    try {
        const auctions = await api.get();
        displayAuctions(auctions, container);
    } catch(error) {
        displayMessage("danger", error, container);
    }
}