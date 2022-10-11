import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
    // document.querySelectorAll('input').forEach( input => {
    //     if(input.value === ""){
    //         input.setAttribute("disabled", true);
    //     }
    // });

    const createPostURL = API_SOCIAL_URL + action;
   
    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();
}

