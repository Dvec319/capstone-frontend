import { redirect } from "react-router-dom";
import url from "../url";

// Update Action
const updateAction = async ({request, params}) => {
    // grab the id
    const id = params.id
    // parse form data
    const formData = await request.formData();
    // construct updated idea
    const updatedIdea = {
        name: formData.get("name"),
        engine: formData.get("engine"),
        engineDocs: formData.get("engineDocs"),
        description: formData.get("description"),
        image: formData.get("image")
    }
    // request to update Idea
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedIdea)
    })

    // redirect to Show page
    return redirect(`/ideas/${id}`)
};

export default updateAction;