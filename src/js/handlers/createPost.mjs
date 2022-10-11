import { createPost } from "../api/posts/index.mjs";

export function setCreatePostFormListener() {
    const form = document.getElementById("createPost");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
        
            document.querySelectorAll('input').forEach( input => {
                if(input.value === ""){
                    input.setAttribute("disabled", true);
                }
            });

            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())

    
            // Send to the API
            createPost(post)
        })
    }
}