import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export function TransactionForm({ onClose, isOpen }) {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  function handleFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleFormSubmit(formData);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"blue.400"}>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter transaction description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl mt={"5"}>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter transaction amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup
              mt={"5"}
              value={value}
              onChange={setValue}
              display={"flex"}
              gap={"5"}
            >
              <Radio
                checked={formData.type === "income"}
                value="income"
                colorScheme="blue"
                name="type"
                onChange={handleFormChange}
              >
                Income
              </Radio>
              <Radio
                checked={formData.type === "expense"}
                value="expense"
                colorScheme="red"
                name="type"
                onChange={handleFormChange}
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              mr={"4"}
              onClick={onClose}
              bg={"red.500"}
              color={"white"}
              _hover={{ bg: "red.600" }}
            >
              Cancel
            </Button>
            <Button
              onClick={onClose}
              type="submit"
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "blue.600" }}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
