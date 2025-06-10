import { createBrowserRouter } from "react-router";

import App from "./App";
import Home from "./pages/Home";
import CadastroUsuario from "./Pages/CadastroUsuario";
import CadastraLivro from "./Pages/CadastraLivro";
import EditarLivro from "./Pages/EditarLivro";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children:[
            {
                 path:"/",
                element: <Home />,
            },
            {
                 path:"/home",
                element: <Home />,
            },
            {
                 path:"/cadastrausuario",
                element: <CadastroUsuario />,
            },
            {
                 path:"/cadastralivro",
                element: <CadastraLivro />,
            },
            {
                 path:"/editalivro/:id",
                element: <EditarLivro />,
            }
        ]
    }
])
export default router;