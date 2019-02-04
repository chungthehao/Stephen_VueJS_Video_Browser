<template>
    <div>
        <input type="text" @input="onInput">
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput(event) {
            this.$emit('termChange', event.target.value); // argument1: tên event muốn emit, argument2: thông tin muốn truyền kèm
        }
    }
}
</script>

<style>

</style>
