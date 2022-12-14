import { getPost, updatePost } from "../api/posts/index.mjs";

/**
 * This will GET post based on id.
 */

export async function setUpdatePostFormListener() {
    const form = document.getElementById("editPost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const button = form.querySelector("button")
        button.disabled = true;

        const post = await getPost(id);
    
        form.title.value = post.title;
        form.body.value = post.body;
        form.media.value = post.media;

        button.disabled = false;

        form.addEventListener("submit", (event) => {
            event.preventDefault()
        
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
            post.id = id;

            updatePost(post)
            window.location = `/post/?id=${post.id}`;
        })
    }
}