import url from "../url";

// Show loader for an Idea
const ideaLoader = async ({params}) => {
    // grab id
    const id = params.id
    // api call
    const response = await fetch(url + id)
    // turn response into a JS object
    const idea = await response.json()
    // return JS object for the Show component
    return idea
}

export default ideaLoader;