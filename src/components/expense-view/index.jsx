import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Convert from "../../convert";

export function ExpenseView({ type, data }) {
  return (
    <Box
      w={"full"}
      p={"4"}
      border={"1px solid"}
      borderColor={"gray.200"}
      borderRadius={"12"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"md"} color={type === "income" ? "blue.400" : "red.400"}>
          {type === "income" ? "Income" : "Expense"}
        </Heading>
      </Flex>
      {data.map((item, index) => (
        <Flex
          bg={type === "income" ? "blue.50" : "red.50"}
          mt={"4"}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px solid"}
          borderColor={type === "income" ? "blue.100" : "red.100"}
          p={"4"}
          borderRadius={"8"}
          key={index}
        >
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Text fontWeight="bold" color="gray.600">
              {item.description}
            </Text>
          </Flex>
          <Text>{Convert(item.amount)}</Text>
        </Flex>
      ))}
    </Box>
  );
}
