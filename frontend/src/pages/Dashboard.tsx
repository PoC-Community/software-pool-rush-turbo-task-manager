import {FC} from "react";
import { Text } from '@chakra-ui/react';

import {getToken} from "../service/token";
import {Navigate} from "react-router-dom";

const Dashboard: FC = () => {
    let redirect;

    if (getToken() == null || getToken() === "undefined")
        redirect = <Navigate to="/"/>

    return (
        <div>
            <Text>Dashboard</Text>
            {redirect}

        </div>
    );

}

export default Dashboard;