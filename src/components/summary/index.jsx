import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { TransactionForm } from "../add-transaction";
import { TransactionChartSummary } from "../chart";
import Convert from "../../convert";

export function Summary({ onClose, isOpen, totalExpense, totalIncome }) {
  return (
    <Box overflow={"hidden"} bg={"white"} display={"flex"}>
      <Flex
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        m={"4"}
        border={"1px solid"}
        borderColor={"gray.200"}
        borderRadius={"12"}
      >
        <Flex
          flex={"1"}
          w={"full"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          py={"5"}
          borderRight={"1px solid"}
          borderColor={"gray.200"}
        >
          <Heading size={"md"} color={"gray.600"}>
            Balance is {Convert(totalIncome - totalExpense)}
          </Heading>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w={"full"}
            h={"100px"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>{Convert(totalIncome)}</Heading>
              <Text color={"gray.600"}>Total Income</Text>
            </Flex>
          </Flex>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w={"full"}
            h={"100px"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>{Convert(totalExpense)}</Heading>
              <Text color={"gray.600"}>Total Expense</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          flex={"1"}
          w={"full"}
          h={"full"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          py={"5"}
        >
          <Heading>
            <TransactionChartSummary
              income={totalIncome}
              expense={totalExpense}
            />
          </Heading>
        </Box>
      </Flex>
      <TransactionForm onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}
