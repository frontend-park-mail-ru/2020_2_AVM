import {ProfilePage} from "../../components/ProfilePage/ProfilePage.js";

export function profilePage(container) {
    container.innerHTML = '';

    const profile = new ProfilePage(container);
    profile.render();

}