import { getProfile, updateProfile } from "../api/profiles/index.mjs";

import { load } from "../storage/index.mjs";

export async function setUpdateProfileListener() {
  const form = document.getElementById("editProfile");

  if (form) {
    const { name, email } = load("profile");
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true;

    const profile = await getProfile(name);

    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      document.querySelectorAll('input').forEach( input => {
        if(input.value === ""){
            input.setAttribute("disabled", true);
        }
    });

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

        profile.name = name;
        profile.email = email;

      // Send to the API
      updateProfile(profile);
    });
  }
}
