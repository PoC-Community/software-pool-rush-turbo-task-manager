import {
    Button,
    FormControl,
    FormLabel,
    Input, List, ListItem, Modal,
    ModalBody, ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Select
} from "@chakra-ui/react";

export default  function CreateNewTask({ show, handleClick }: {show: boolean, handleClick: any}) {
    let data = [{name: "Marc", id: 1},{name: "David", id: 2},{name: "Jean", id: 3},{name: "Diane", id: 4},{name: "Daniel", id: 5}]

    let listOptions = data.map((people, i) => {
        return (
            <option value={people.name} key={i}>{people.name}</option>
        );
    });

    return (
        <Modal
            isOpen={show}
            onClose={handleClick}
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Create your task</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <FormControl my="5">
                        <FormLabel>Name</FormLabel>
                        <Input placeholder='Name'/>
                    </FormControl>
                    <FormControl my="5">
                        <FormLabel>Assign to</FormLabel>
                        <Select placeholder='Select...'>{listOptions}</Select>
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