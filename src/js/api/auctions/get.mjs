import { BASE_URL } from "../../constants/constants.mjs";

export async function get() {
    const url = `${BASE_URL}/listings`;
    const response = await fetch(url);

    console.log(response);

    if(response.ok) {
        const json = await response.json();
        return json;
    }

    throw new Error("There was an error loading the auctions");
}