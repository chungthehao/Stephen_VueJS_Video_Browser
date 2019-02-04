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


<style scoped>
    /* 'scoped' để CSS trong này ko có tác dụng bên ngoài component này. */

    input {
        width: 75%
    }

    div {
        text-align: center;
        margin: 20px;
    }

</style>
