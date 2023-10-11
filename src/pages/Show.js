import {Link, useLoaderData, Form} from "react-router-dom";


function Show(props) {

    // grab idea from loader
    const idea = useLoaderData()

	return (
        <>
            <div className="showDiv">
                <h1 className="showH1">Name: {idea.name}</h1>
                <h2 className="showH2">Engine: {idea.engine}</h2>
                <h2 className="showH2">Engine Docs: {idea.engineDocs}</h2>
                <h2 className="showH2">Description: {idea.description}</h2>
                <img src={idea.image} alt={idea.name} className="showImage"/>
                <Form method="delete" action={`/delete/${idea.id}`} className="showForm">
                <button className="showButton">Delete {idea.name}</button>
                <Link to={`/ideas/update/${idea.id}`}><button className="showButton">Edit {idea.name}</button></Link>
                <Link to="/"><button className="showButton">Back Home</button></Link>
                </Form>
            </div>
        </>
    );
}

export default Show;
