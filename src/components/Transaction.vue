<script setup>
const props = defineProps(['description', 'amount', 'date', 'type']);
const sign = props.type === 'income' ? '+': '-';
</script>

<template>
    <div class="transaction-card">
        <div class="transaction">
            <div class="transction-description"> {{ props.description }}</div>
            <div class="transaction-amount"><span>{{ sign }}</span> ${{ props.amount }}</div>
        </div>
        <div class="transaction-date">Posted {{ props.date }}</div>
    </div>
</template>

<style>
.transaction-card {
    padding: 2px 0px;
    margin-bottom: 10px;
    
    border-radius: 0px;
    border-bottom: 1px dashed black;

    display: flex;
    flex-direction: column;
    gap: 7px;
}

.transaction {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.transaction-date {
    font-size: 0.70rem;
    color: rgb(80, 80, 80);
    width: 100%;

    margin-bottom: 2px;
}

</style>