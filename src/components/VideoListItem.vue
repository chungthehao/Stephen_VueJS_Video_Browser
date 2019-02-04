<template>
    <li class="list-group-item">
        <img :src="imgSrc" />
        {{ video.snippet.title }}
    </li>
</template>

<script>
export default {
    name: 'VideoListItem',
    // Chỉ cần dạng mảng --> props: ['video'] cũng đc.
    props: {
        video: Object // Prop Validation
    },
    computed: {
        imgSrc() {
            return this.video.snippet.thumbnails.default.url;
        }
    }
}
</script>

<style>

</style>
