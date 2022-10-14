import * as listeners from "./handlers/index.mjs";
const path = location.pathname;


if (path === "/profile/") {
    listeners.logOut();

} else if (path === "/profile/login/") {
    listeners.setLoginFormListener();
    listeners.logOut();
    
} else if (path === "/profile/register/") {
    listeners.setRegisterFormListener();
    listeners.logOut();

} else if (path === "/profile/edit/") {
    listeners.setUpdatePostFormListener();
    listeners.logOut();

} else if (path === "/post/edit/") {
    listeners.setUpdatePostFormListener();
    listeners.logOut();

} else if (path === "/post/create/") {
    listeners.setCreatePostFormListener();
    listeners.logOut();

} else {
    listeners.logOut();

}
