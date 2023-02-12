import {Button} from "@chakra-ui/react";
import {FC, useState} from "react";
import ModifyTask from "../Modal/ModifyTask";

const ButtonModalModifyTask: FC = () => {
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
            <Button type="submit" onClick={handleClick}>Modify</Button>
            <ModifyTask show={open} handleClick={handleClick}/>
        </div>
    )
}

export default ButtonModalModifyTask