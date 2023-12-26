<script setup>

</script>

<template>
    <div class="balance-card">
        <div class="balance-title">Balance</div>
        <div class="balance-text">Remaining Balance:</div>
        <div class="balance">$965.00</div>
    </div>
</template>

<style>

.balance-card {
    /* border: 1px solid rgb(48, 40, 40); */
    border-radius: 10px;

    background-color: rgb(255, 255, 255);
    color: black;

    display: flex;
    flex-direction: column;
    gap:10px;

    min-width: 300px;
    padding: 10px;

    font-size: 0.85rem;
}

.balance {
    align-self: flex-end;
}

.balance-text {
    letter-spacing: 1px;
    font-weight: 200;
}

.balance-title {
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 5px 0px; 
    border-bottom: 1px dashed;
}
</style>