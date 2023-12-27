<script setup>
import { useBalanceStore } from '@/stores/balance';

const store = useBalanceStore();

</script>

<template>
    <div class="income-expense-card">
        <div class="income-expense-title">
            On a glance,
        </div>
        <div class="income-expense">
            <div class="income">
                <div class="income-text">Income:</div>
                <div class="income-amount">${{  store.getIncome }}</div>
            </div>
            <div class="pipe"></div>
            <div class="expense">
                <div class="expense-text">Expense:</div>
                <div class="expense-amount">${{ store.getExpense }}</div>
            </div>
        </div>
    </div>
</template>

<style>
.income-expense-card {
    border-radius: 10px;
    /* border: 1px solid rgb(134, 126, 121); */

    background-color: rgb(255, 255, 255);
    color: black;

    min-width: 300px;
    padding: 8px;

    display: flex;
    flex-direction: column;
    gap: 10px;
}

.income-expense-title {
    font-weight: 200;
    letter-spacing: 1px;
    padding: 5px 0px; 
    border-bottom: 1px dashed;
}
.income-expense {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 4px;
}


.income {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    padding: 5px;
}

.expense {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    width: 100%;
}

.income-text {
    font-weight: 200;
    letter-spacing: 1px;
    align-self: flex-start;
}

.expense-amount {
    align-self: flex-end;
}

.expense-text {
    font-weight: 200;
    letter-spacing: 1px;
    align-self: flex-start;
}

.income-amount {
    align-self: flex-end;
}

.pipe {
    background: rgba(169, 168, 168, 0.797);
    box-shadow: 0px 3px 6px 3px rgba(214, 214, 214, 0.764);
    width: 3px;
    border-radius: 10px;
    margin: 8px 0px;
}





</style>@/stores/transaction