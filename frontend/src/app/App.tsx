import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";

const App = (): JSX.Element => (
    <RouterProvider router={Routes} />
);

export default App;