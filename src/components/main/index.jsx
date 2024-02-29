import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { ExpenseView } from "../expense-view";
import { Summary } from "../summary";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    allTransactions,
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;
    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"}>
      <Flex
        alignItems={"center"}
        justifyContent={["flex-end", "space-between"]}
        bg={"#eee"}
        p={"5"}
        position={"sticky"}
        top={"0"}
      >
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button
            onClick={onOpen}
            bg={"blue.400"}
            color={"white"}
            _hover={{ bg: "blue.600" }}
          >
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Flex
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
        gap={"4"}
        px={"4"}
        mb={"4"}
      >
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "income")}
          type={"income"}
        />
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "expense")}
          type={"expense"}
        />
      </Flex>
    </Flex>
  );
}
