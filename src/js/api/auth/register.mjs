import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

/**
 * Registers the user and saves the API Information to the Localstorage.
 * @param {string} profile This is the input information provided in the Register Form.
 */

export async function register(profile) {
    const registerURL = API_SOCIAL_URL + action;

    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(profile),
    })
    
      
    const result = await response.json()
    if (response.ok) {
      alert("You have now registered successfully!");
      location.href = "/profile/login";
    } else {
      alert("Something went wrong, please try again.")
    }
    return result
}

