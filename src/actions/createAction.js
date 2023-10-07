import { redirect } from "react-router-dom";
import url from "../url";

// Create Action

const createAction = async ({request}) => {
    // grab form data
    const formData = await request.formData();

    // construct new idea
    const newIdea = {
        name: formData.get("name"),
        engine: formData.get("engine"),
        engineDocs: formData.get("engineDocs"),
        description: formData.get("description"),
        image: formData.get("image")
    }

    // request create a new idea
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newIdea)
    })

    // redirect to Index
    return redirect('/ideas/')
}

export default createAction;