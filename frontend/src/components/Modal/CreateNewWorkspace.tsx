import {
    Button,
    FormControl,
    FormLabel,
    Input, Modal,
    ModalBody, ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {FC, useState} from "react";

export default  function CreateNewWorkspace({ show, handleClick }: {show: boolean, handleClick: any}) {
    const [name, setName] = useState<string>("");
    const onClose = () => {
        show = false
    }

    return (
        <Modal
            isOpen={show}
            onClose={handleClick}
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Create your workspace</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <FormControl my="1">
                        <FormLabel>Name</FormLabel>
                        <Input placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}/>
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={handleClick}>
                        Save
                    </Button>
                    <Button onClick={handleClick}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}