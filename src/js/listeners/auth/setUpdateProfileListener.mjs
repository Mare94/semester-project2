import { readProfile, updateProfile } from "../../api/profile/index.mjs";
import { load } from "../../storage/storage.mjs";

// handles the updating of profiles

export async function setUpdateProfileFormListener() {
    const form = document.querySelector("#updateProfile");

    if(form) {
        const { name, email } = load("profile");

        form.name.value = name;
        form.email.value = email;

        const button = form.querySelector("button");
        button.disabled = true;

        const profile = await readProfile(name);
        
        form.avatar.value = profile.avatar;

        button.disabled = false;

        form.addEventListener("submit", (event) =>{
            event.preventDefault()
            const form = event.target;

            const formData = new formData(form);
            const profile = Object.fromEntries(formData.enteries())

            profile.name = name;
            profile.email = email;

            updateProfile(profile)
        })
    }
};