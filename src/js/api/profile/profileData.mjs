import { load } from "../../storage/storage.mjs";

export function profileData() {
    const profile = load("profile")

    const profileName = document.querySelector("#username");
    if(profileName) {
        const name = profile.name;
        profileName.append(name)
    }

    const profileCredit = document.querySelector("#userCredit");
    if(profileCredit) {
        const credit = profile.credits
        profileCredit.append(credit)
    }

    const profileAvatar = document.querySelector("#userAvatar");
    profileAvatar.innerHTML = `<img src"${profile.avatar}" class="avatar-img">`;
}