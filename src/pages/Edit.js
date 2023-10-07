import { Link, Form, useLoaderData } from "react-router-dom";

function Edit (props) {

    const idea = useLoaderData()

    return (
        <>
        <Form method="post" action={`/ideas/update/${idea.id}`}>
            <fieldset>
                <label htmlFor="nameField">Name: </label>
                <input type="text" name="name" placeholder="Name" id="nameField" defaultValue={idea.name} required/>
                <label htmlFor="engineField">Engine: </label>
                <input type="text" name="engine" placeholder="Engine" id="engineField" defaultValue={idea.engine} required/>
                <label htmlFor="engineDocsField">Engine Documentation: </label>
                <input type="text" name="engineDocs" placeholder="Engine Documentation Link" id="engineDocsField" defaultValue={idea.engineDocs} required/>
                <label htmlFor="descriptionField">Description: </label>
                <input type="text" name="description" placeholder="Description" id="descriptionField" defaultValue={idea.description} required/>
                <label htmlFor="imageField">Image: </label>
                <input type="text" name="image" placeholder="Image of anything" id="imageField" defaultValue={idea.image} required/>
                <input type="submit" value={`Edit ${idea.name}`}/>
            </fieldset>
        </Form>
        <Link to="/"><button>Back Home</button></Link>
        </>
    )
}

export default Edit;