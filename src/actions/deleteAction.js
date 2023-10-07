import { redirect } from "react-router-dom";
import url from "../url";

// Delete Action
const deleteAction = async ({params}) => {
    // grab id
    const id = params.id
    
    // make a delete request
    await fetch(url + id, {
        method: "delete",
    })

    // redirect back to Index
    return redirect("/ideas/")
}

export default deleteAction;