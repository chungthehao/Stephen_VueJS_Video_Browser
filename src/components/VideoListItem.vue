<template>
    <li @click="onVideoSelect" class="list-group-item media">
        <img class="mr-3" :src="imgSrc" />
        <div class="media-body">
            {{ video.snippet.title }}
        </div>
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
    },
    methods: {
        onVideoSelect() {
            this.$emit('videoSelect', this.video);
        }
    }
}
</script>

<style scoped>
    li {
        display: flex;
        cursor: pointer;
    }

    li:hover {
        background-color: #eee;
    }
</style>
