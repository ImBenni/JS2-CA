import { register } from "../api/auth/register.mjs"

export function setRegisterFormListener() {
    const form = document.getElementById("registerForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
        
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
            const action = form.action;
            const method = form.method;
    
    
            // Send to the API
            register(profile)
        })
    }
}