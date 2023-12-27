import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTransactionStore = defineStore("transaction", () => {
  const transactions = ref([]);

  function addTransaction(transaction) {
    transactions.value.push(transaction);
  }
  return { transactions, addTransaction };
});
