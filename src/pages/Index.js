import { Link, useLoaderData } from "react-router-dom";

function Index (props) {

    // grabbing loader data
    const ideas = useLoaderData()

    return (
        <div>
            {ideas.map((idea) => {
                return (
                    <div key={idea.id}>
                        <Link to={`/ideas/${idea.id}`}>
                        <h1>{idea.name}</h1>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Index;