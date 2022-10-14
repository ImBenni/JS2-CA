import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

/**
 * Logs in the user and saved the API Information to the Localstorage.
 * @param {object} profile This is the input information provided in the login Form.
 */

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });

  const { accessToken, name } = await response.json();

  storage.save("token", accessToken);
  storage.save("profile", name);
  storage.save("status", "loggedIn");

  window.location = "/profile/";

  // console.log(response)
  // if (response.ok) {
  //     alert("You logged in!");
  // } else if (!response.ok) {
  //     alert("Invalid Email or Password!");
  // }
}
