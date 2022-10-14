import { register } from "../api/auth/register.mjs"

/**
 * A listener for when users register.
 */
export function setRegisterFormListener() {
    const form = document.getElementById("registerForm");

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
            const profile = Object.fromEntries(formData.entries())
            // const action = form.action;
            // const method = form.method;
    
            register(profile)
        })
    }
}