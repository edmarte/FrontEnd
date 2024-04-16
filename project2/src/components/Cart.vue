<template>
    <Item :item="product"/>
</template>

<script setup lang="ts">
    import Item from './Item.vue'

    const product = [
        'Pizza da mãe',
        'Saborosa pizza caseira feita por sua mãe',
        79.9
    ]
</script>