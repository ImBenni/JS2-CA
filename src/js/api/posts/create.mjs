import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "post";

/**
 * Creates a new post from the inputs provided.
 * @param {string} postData This is the input information.
 */

export async function createPost(postData) {
  try {
    const createPostURL = API_SOCIAL_URL + action;

    const response = await authFetch(createPostURL, {
      method,
      body: JSON.stringify(postData),
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
