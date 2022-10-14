import { getPost } from "../api/posts/index.mjs";
import { renderPostTemplate } from "../templates/index.mjs";

const url = new URL(location.href);
const id = url.searchParams.get("id");

/**
 * Function that will get a single post.
 */

export async function getSinglePost() {
  const container = document.querySelector(".post-container");

  try {
    let post = await getPost(id);
    post = [post];

    container.innerHTML = "";
    renderPostTemplate(post, container);
  } catch (error) {
    console.log(error);
    container.innerHTML = "<div><p>There was an error loading the content<p></div>" + error;
  }
}
