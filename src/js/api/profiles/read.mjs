import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs"
import { load } from "../../storage/index.mjs";

const action = "/profiles";

export async function getProfiles(id) {
    const getProfilesURL = `${API_SOCIAL_URL}${action}`;
    const response = await authFetch(getProfilesURL)

    return await response.json();
}

/**
 * A Function that will get the profile of the logged in user.
 */
export async function getProfile(name) {
    if (!name) {
        throw new Error("Get requires a Name");
    }

    const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;
    const response = await authFetch(getProfileURL)

    return await response.json();
}