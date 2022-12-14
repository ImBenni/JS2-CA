import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs"

const action = "/posts";

/**
 * A Function that will get all Posts from the API.
 */
export async function getPosts() {
    const getPostsURL = `${API_SOCIAL_URL}${action}`;
    const response = await authFetch(getPostsURL)

    return await response.json();
}

/**
 * A Function that will get a single Post from the API.
 */
export async function getPost(id) {
    if (!id) {
        throw new Error("Get requires a postID");
    }

    const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;
    const response = await authFetch(getPostURL)

    return await response.json();
}
