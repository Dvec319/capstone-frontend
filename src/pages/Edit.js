import { Link, Form, useLoaderData } from "react-router-dom";

function Edit (props) {

    const idea = useLoaderData()

    return (
        <div className="editDiv">
            <h2 className="editH2">Edit {idea.name}</h2>
            <Form method="post" action={`/ideas/update/${idea.id}`}>
                <fieldset className="editFieldset">
                    <label htmlFor="nameField" className="editLabel">Name: </label>
                    <input type="text" name="name" placeholder="Name" id="nameField" defaultValue={idea.name} className="editInput" required/>
                    <label htmlFor="engineField" className="editLabel">Engine: </label>
                    <input type="text" name="engine" placeholder="Engine" id="engineField" defaultValue={idea.engine} className="editInput" required/>
                    <label htmlFor="engineDocsField" className="editLabel">Engine Docs: </label>
                    <input type="text" name="engineDocs" placeholder="Engine Documentation Link" id="engineDocsField" defaultValue={idea.engineDocs} className="editInput" required/>
                    <label htmlFor="descriptionField" className="editLabel">Description: </label>
                    <input type="text" name="description" placeholder="Description" id="descriptionField" defaultValue={idea.description} className="editInput" required/>
                    <label htmlFor="imageField" className="editLabel">Image: </label>
                    <input type="text" name="image" placeholder="Image of anything" id="imageField" defaultValue={idea.image} className="editInput" required/>
                    <input type="submit" value={`Edit ${idea.name}`} className="editButton"/>
                </fieldset>
            </Form>
            <Link to="/"><button className="editHome">Back Home</button></Link>
        </div>
    )
}

export default Edit;