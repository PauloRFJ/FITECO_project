import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Cadastrar from "../pages/Cadastrar";
import Home from "../pages/Home";
import Trilhas from "../pages/Trilhas";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/Cadastrar",
            element: <Cadastrar />
        },
        {
            path: "/Trilhas",
            element: <Trilhas />
        }            
        ]
    }    
])

export default routes