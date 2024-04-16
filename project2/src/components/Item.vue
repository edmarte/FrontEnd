<template>
    <ul>
        <li v-for="i in item">{{ i }}</li>
    </ul>
</template>

<script setup lang="ts">
    type ItemProps = {
        name: string
        description: string
        price: number
    }

    const props = defineProps(['item'])
    props.item
//    const props = withDefaults(defineProps<ItemProps>(),{
//        name: 'Pizza',
//        description: 'descricao',
//        price: 23
//    })
</script>