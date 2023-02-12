import {Button} from "@chakra-ui/react";
import {FC, useState} from "react";
import {ViewIcon} from "@chakra-ui/icons";
import DetailTask from "../Modal/DetailTask";

const ButtonModalModifyTask : FC = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <div>
            <Button type="submit" onClick={handleClick}><ViewIcon/></Button>
            <DetailTask show={open} handleClick={handleClick}/>
        </div>
    )
}

export default ButtonModalModifyTask