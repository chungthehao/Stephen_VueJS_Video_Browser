<template>
    <ul>
        Video List
        {{ videos.length }}
    </ul>
</template>

<script>
export default {
    name: 'VideoList',
    props: {
        videos: Array // Property validation
    }
}
</script>

<style>

</style>
