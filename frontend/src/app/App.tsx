import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";
import {useEffect} from "react";
import service from "../service/service";




const App = (): JSX.Element => {
    useEffect(() => {
        service.setupAxios()
    }, [])

    return (
        <RouterProvider router={Routes} />
    );
}

export default App;