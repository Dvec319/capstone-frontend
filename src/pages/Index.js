import { Link, useLoaderData } from "react-router-dom";

function Index (props) {

    // grabbing loader data
    const ideas = useLoaderData()

    return (
        <>
        <Link to={`/ideas/create`}><h1>Add and Idea</h1></Link>
            <div>
                {ideas.map((idea) => {
                    return (
                        <div key={idea.id}>
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