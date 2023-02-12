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

export default  function CreateNewBoard({ show, handleClick }: {show: boolean, handleClick: any}) {
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
                <ModalHeader>Create your board</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <FormControl my="1">
                        <FormLabel>Name</FormLabel>
                        <Input placeholder='Name'/>
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