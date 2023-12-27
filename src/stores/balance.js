import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useTransactionStore } from "./transaction";

export const useBalanceStore = defineStore("balance", () => {
  const store = useTransactionStore();
  //   const balance = ref(0);

  const getIncome = computed(() => {
    store.transactions
      .filter((item) => item.type === "income")
      .map((item) => item.amount)
      .reduce((partialSum, a) => partialSum + a, 0);
  });

  const getExpense = computed(() => {
    store.transactions
      .filter((item) => item.type === "expense")
      .map((item) => item.amount)
      .reduce((partialSum, a) => partialSum + a, 0);
  });

  const balance = computed(() => {
    getIncome - getExpense;
  });
  return { balance, getIncome, getExpense };
});
