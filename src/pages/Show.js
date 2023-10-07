import {Link, useLoaderData, Form} from "react-router-dom";


function Show(props) {

    // grab idea from loader
    const idea = useLoaderData()

	return (
        <>
            <div>
                <h1>Name: {idea.name}</h1>
                <h2>Engine: {idea.engine}</h2>
                <h2>Engine Documentation: {idea.engineDocs}</h2>
                <h2>Description: {idea.description}</h2>
                <img src={idea.image} alt={idea.name}/>
            </div>
            <Form method="delete" action={`/delete/${idea.id}`}>
                <button>Delete {idea.name}</button>
            </Form>
            <Link to="/ideas/"><button>Back Home</button></Link>
        </>
    );
}

export default Show;
