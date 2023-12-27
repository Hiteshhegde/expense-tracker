<script setup>
import Transaction from './Transaction.vue';
import { ref } from 'vue';
import { useTransactionStore } from '@/stores/transaction';

const store = useTransactionStore();


const transactionList = ref([
    {
        description: "Direct Deposit-N9831",
        amount: 2411.00,
        date: "Dec 21 2023",
        type: 'income'
    },
    {
        description: "Tenent Web Access",
        amount: 1340.00,
        date: "Dec 22 2023",
        type: 'expense'
    },
    {
        description: "Joe's Liqour",
        amount: 40.00,
        date: "Dec 24 2023",
        type: 'expense'
    },
    {
        description: "O'hare DownTown Manhattan",
        amount: 340.00,
        date: "Dec 24 2023",
        type: 'expense'
    }
])

</script>

<template>
    <div class="transaction-list">
        <div class="list-title">Latest Transactions</div>
        <div class="list">
            <div v-for="transaction in store.transactions">
                <Transaction :description="transaction.description" 
                            :amount="transaction.amount" 
                            :date="transaction.date"
                            :type="transaction.type"
                            />
            </div>
        </div>
        
    </div>
</template>

<style>

.transaction-list {
    background-color: rgb(255, 255, 255);
    color: black;

    border-radius: 10px;

    min-width: 300px;
    min-height: 200px;

    padding: 10px;

    overflow: auto;
    
    display: flex;
    flex-direction: column;
    gap: 15px;

}

.list-title {
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 5px 0px; 
    border-bottom: 1px dashed;
}
</style>