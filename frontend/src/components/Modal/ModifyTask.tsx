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
import {useState} from "react";


export default  function ModifyTask({ show, handleClick }: {show: boolean, handleClick: any}) {
    let data = [{name: "Marc", id: 1},{name: "David", id: 2},{name: "Jean", id: 3},{name: "Diane", id: 4},{name: "Daniel", id: 5}]
    let listOptions = data.map((people, i) => {
        return (
            <option value={people.name} key={i}>{people.name}</option>
        );
    });
    const [username, setUsername] = useState<string>("");
    const [name, setName] = useState<string>("");

    return (
        <Modal
            isOpen={show}
            onClose={handleClick}
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Modify your task</ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <FormControl my="5">
                        <FormLabel>Name</FormLabel>
                        <Input placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}/>
                    </FormControl>
                    <FormControl my="5">
                        <FormLabel>Assign to</FormLabel>
                        <Select placeholder='Select...' onChange={(e) => setUsername(e.target.value)} value={username}>{listOptions}</Select>
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