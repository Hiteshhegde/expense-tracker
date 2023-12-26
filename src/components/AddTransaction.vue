<script setup>
import { ref } from 'vue';

const transaction_description = ref(null);
const transaction_amount = ref(null);
const transcation_type = ref(null);

</script>
<template>
    <div class="add-transaction">
        <div class="title">Add a new transaction</div>
        <form>
            <label for="transaction-description">Description:</label>
            <input type="text" name="transaction" id="transaction-description" v-model="transaction_description">
            <label for="transaction-amount">Amount:</label>
            <input type="number" name="amount" id="transaction-amount" v-model="transaction_amount">
            <div class="transaction-type">
                <label for="transaction-type">Transaction Type:</label>
                <select name="transcation-type" id="transaction-type" v-model="transcation_type">
                    <option value="Choose">Choose:</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <button class="add">Add</button>
        </form>
    </div>
</template>

<style>

.add-transaction {
    background-color: rgb(255, 255, 255);
    color: black;

    padding: 10px;
    border-radius: 10px;
    
    min-width: 300px;

    display: flex;
    flex-direction: column;
    gap: 15px;
}

.title {
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 5px 0px; 
    border-bottom: 1px dashed;
}

.add-transaction > form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px 0px;
}

.add-transaction > form > label{
    letter-spacing: 1px;
    font-weight: 300;
}

.add-transaction > form > input {
    border-radius: 5px;
    border: 1px solid grey;
    background-color: rgb(255, 255, 255);
    
    padding: 5px;
    
    min-width: 250px;
    min-height: 20px;
}

.add-transaction > form select {
    /* all: unset; */
    border: 1px solid gray;
    border-radius: 3px;

    padding: 5px;
    width: fit-content;

    letter-spacing: 1px;

}

.transaction-type {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    margin-bottom: 10px;
}

.transaction-type > label {
    letter-spacing: 1px;
    font-weight: 300;
}

.add {
    all:unset;
    text-align: center;
    border-radius: 5px;

    padding: 5px;
    background: rgb(70, 158, 70);
    color: azure;

    letter-spacing: 1px;
    text-transform: uppercase;

    font-weight: 200;

    width: 70px;

    align-self: center;
}
</style>