import { login } from "../api/auth/login.mjs"

/**
 * A listener for when users log in.
 */
export function setLoginFormListener() {
    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
        
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
            // const action = form.action;
            // const method = form.method;
            
            login(profile)
            form.reset();
        })
    }
}