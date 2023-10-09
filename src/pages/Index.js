import { Link, useLoaderData } from "react-router-dom";

function Index (props) {

    // grabbing loader data
    const ideas = useLoaderData()

    return (
        <>
        <Link to={`/ideas/create`} className="indexA"><h1 className="indexH1">Add an Idea!</h1></Link>
            <div className="indexContainer">
                {ideas.map((idea) => {
                    return (
                        <div key={idea.id} className="indexCard">
                            <Link to={`/ideas/${idea.id}`}>
                            <img src={idea.image} alt={idea.name}/>
                            <h1>{idea.name}</h1>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Index;