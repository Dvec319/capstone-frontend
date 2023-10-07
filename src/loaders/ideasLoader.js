import url from "../url";

// Index Loader for Ideas
const ideasLoader = async () => {
    // api call
    const response = await fetch(url)
    // turn response into JS object
    const ideas = await response.json()
    // return the JS for the Index component
    return ideas
}

export default ideasLoader;