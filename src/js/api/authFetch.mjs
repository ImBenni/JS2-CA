import { load } from "../storage/index.mjs"

/**
 * Creates header information.
 */
export function headers() {
    const token = load("token");

    return { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

/**
 * Creates authorized information.
 */
export async function authFetch(url, options =  {}) {
return fetch(url, {
    ...options,
    headers: headers()
})
}
