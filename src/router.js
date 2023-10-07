import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Create from "./pages/Create";
import Index from "./pages/Index";
import Show from "./pages/Show";
import ideasLoader from "./loaders/ideasLoader";
import ideaLoader from "./loaders/ideaLoader";
import createAction from "./actions/createAction";

const router = createBrowserRouter (createRoutesFromElements(
    <Route path="/" element={<App/>}>
       <Route path="ideas" element={<Index/>} loader={ideasLoader} />
       <Route path="ideas/:id" element={<Show/>} loader={ideaLoader}/>
       <Route path="ideas/create" element={<Create/>} action={createAction} />
       <Route path="update/:id" />
       <Route path="delete/:id" />
    </Route>
))

export default router;