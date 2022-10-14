export function logOut() {
    const logOutButton = document.getElementById("logout");
    console.log("working")
    
    logOutButton.addEventListener("click", () => {
      console.log("Pressed")
      localStorage.removeItem("profile");
      localStorage.removeItem("status");
      localStorage.removeItem("token");
      window.location = "/profile/login/";
    });
  }