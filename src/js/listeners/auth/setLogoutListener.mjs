import * as storage from "../../storage/storage.mjs";

export function setLogoutFormListener() {
    const logoutBtn = document.querySelector("#logout");

    logoutBtn.addEventListener("click", ()=> {
        storage.remove("token");
        storage.remove("name");
        location.href = "/profile/login"
    });
}