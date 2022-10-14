import { createPost } from "../api/posts/index.mjs";

/**
 * A listener for when creating new posts
 */
export function setCreatePostFormListener() {
    const form = document.getElementById("createPost");
    const pageTitle = document.getElementById("title");
    const pageBody = document.getElementById("body");
    const pageMedia = document.getElementById("media");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
        
            document.querySelectorAll('input').forEach( input => {
                if(input.value === ""){
                    input.setAttribute("disabled", true);
                }
            });

            const title = pageTitle.value;
            const body = pageBody.value;
            const media = pageMedia.value;

            createPost({
                title: title,
                body: body,
                media: media,
                })
            form.reset();
        })
    }
}