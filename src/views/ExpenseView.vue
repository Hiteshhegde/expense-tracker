<script setup>
import HeaderComp from '@/components/Header.vue';
import Balance from '@/components/Balance.vue';
import IncomeExpense from '@/components/IncomeExpense.vue';
import TransactionList from '@/components/TransactionList.vue';
import AddTransaction from '@/components/AddTransaction.vue';
// add transactions


</script>

<template>
    <div class="main-card">
        <HeaderComp />
        <Balance/>
        <IncomeExpense/>
        <TransactionList />
        <AddTransaction />
    </div>
    
</template>

<style>
.main-card {
    /* height: 100%; */
    min-height: 800px;
    width: 500px;

    padding: 20px;
    
    background-color: rgb(206, 206, 206);
    border: 1px solid rgb(34, 34, 34);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

}
</style>

