import { register } from "../../api/auth/register.mjs";
import { displayMessage } from "../../ui/common/index.mjs";

export function setRegisterListener() {
    const form = document.querySelector("#registerForm");

    if(form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const form = event.target;
            const formData = new formData(form);
            const profile = object.fromEntries(formData.entries());

            try {
                await register(profile);
                displayMessage("success", "Registration successful! You can now log in", "#message");
                form.reset();
            } catch(error) {
                displayMessage("danger", error, "#message");
                console.log(error);
            }
        });
    }
}