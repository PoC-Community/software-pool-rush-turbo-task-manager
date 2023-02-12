import {Text} from "@chakra-ui/react";
import {FC} from "react";
import {Link} from "react-router-dom";

const LinkToDashboard: FC = () => {
    return (
        <Link to="/dashboard"><Text>Return to Dashboard</Text></Link>
    )
}

export default LinkToDashboard;