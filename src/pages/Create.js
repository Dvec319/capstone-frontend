import { Form } from "react-router-dom";

function Create(props) {
	return (
		<div>
			<h2>Add an Idea!</h2>
			<Form method='post' action='/ideas/create' className="createForm">
                <fieldset>
                    <label htmlFor="nameField">Name: </label>
                    <input type="text" name="name" placeholder="Name" id="nameField" required/>
                    <label htmlFor="engineField">Engine: </label>
                    <input type="text" name="engine" placeholder="Engine" id="engineField" required/>
                    <label htmlFor="engineDocsField">Engine Documentation: </label>
                    <input type="text" name="engineDocs" placeholder="Engine Documentation Link" id="engineDocsField" required/>
                    <label htmlFor="descriptionField">Description: </label>
                    <input type="text" name="description" placeholder="Description" id="descriptionField" required/>
                    <label htmlFor="imageField">Image: </label>
                    <input type="text" name="image" placeholder="Image of anything" id="imageField" required/>
                    <input type="submit" value="Add an Idea"/>
                </fieldset>
            </Form>
		</div>
	);
}

export default Create;
