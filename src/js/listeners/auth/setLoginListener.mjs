import { login } from "../../api/auth/login.mjs";
import * as storage from "../../storage/storage.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";

// handles login of profiles

export function setLoginListener() {
    const form = document.querySelector("#loginForm");

    form.addEventListener("submit", async (event)=>{
        event.preventDefault()
        const form = event.target;

        const formData = new formData(form);
        const profile = Object.fromEntries(formData.entries())

        const button = form.querySelector("button");
        button.innerText = "Logging in...";
        const fieldset = form.querySelector("fieldset");
        fieldset.disabled = true;

        try {
            const { accessToken, ...user } = await login(profile)

            storage.save("token", accessToken);
            storage.save("profile", user);
            location.href = "/profile/"

        } catch (error) {
            displayMessage("danger", error, "#message")
        } finally {
            button.innerText = "Login";
            fieldset.disabled = false;
        }
    })
};