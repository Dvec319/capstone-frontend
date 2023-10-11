import { Form, Link } from "react-router-dom";

function Create(props) {
	return (
		<div className="createDiv">
			<h2>Add an Idea!</h2>
			<Form method='post' action='/ideas/create' className="createForm">
                <fieldset className="createFieldset">
                    <label htmlFor="nameField" className="createLabel">Name: </label>
                    <input type="text" name="name" placeholder="Name" id="nameField" className="createInput" required/>
                    <label htmlFor="engineField" className="createLabel">Engine: </label>
                    <input type="text" name="engine" placeholder="Engine" id="engineField" className="createInput" required/>
                    <label htmlFor="engineDocsField" className="createLabel">Engine Docs: </label>
                    <input type="text" name="engineDocs" placeholder="Engine Documentation Link" id="engineDocsField" className="createInput" required/>
                    <label htmlFor="descriptionField" className="createLabel">Description: </label>
                    <input type="text" name="description" placeholder="Description" id="descriptionField" className="createInput" required/>
                    <label htmlFor="imageField" className="createLabel">Image: </label>
                    <input type="text" name="image" placeholder="Image of anything" id="imageField" className="createInput" required/>
                    <input type="submit" value="Add an Idea" className="createAdd"/>
                </fieldset>
            </Form>
            <Link to="/"><button className="createHome">Back Home</button></Link>
		</div>
	);
}

export default Create;
