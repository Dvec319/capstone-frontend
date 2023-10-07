import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Create from "./pages/Create";
import Index from "./pages/Index";
import Show from "./pages/Show";

const router = createBrowserRouter (createRoutesFromElements(
    <Route path="/" element={<App/>}>
       <Route path="ideas" element={<Index/>}/>
       <Route path="ideas/:id" element={<Show/>}/>
       <Route path="ideas/create" element={<Create/>} />
       <Route path="update/:id" />
       <Route path="delete/:id" />
    </Route>
))

export default router;