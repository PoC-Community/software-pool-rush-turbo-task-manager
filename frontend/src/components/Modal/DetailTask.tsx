import {
    Button,
    FormControl,
    FormLabel,
    Input, List, ListItem, Modal,
    ModalBody, ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Select, Text
} from "@chakra-ui/react";
import {useState} from "react";


export default  function DetailTask({ show, handleClick}: {show: boolean, handleClick: any}) {
    return (
        <Modal
            isOpen={show}
            onClose={handleClick}
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Detail of your task</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <Text>...</Text>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleClick}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}