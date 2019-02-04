<template>
    <li>
        {{ video.snippet.title }}
    </li>
</template>

<script>
export default {
    name: 'VideoListItem',
    // Chỉ cần dạng mảng --> props: ['video'] cũng đc.
    props: {
        video: Object // Prop Validation
    }
}
</script>

<style>

</style>
