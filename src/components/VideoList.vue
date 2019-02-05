<template>
    <ul class="list-group col-md-4">
        <!-- 'etag' is a property provided by Youtube, it is a unique identifier -->
        <!-- This key property (v-bind:key="video.etag") is used whenever our list is updated, it enhances the performance of rerendering our list of items -->
        <VideoListItem  
            v-for="video in videos"
            :key="video.etag" 
            :video="video"
            @videoSelect="onVideoSelect"
        >
        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    props: {
        videos: Array // Property validation
    },
    methods: {
        onVideoSelect(video) {
            this.$emit('videoSelect', video); // pass along a video object
        }
    }
}
</script>

<style>

</style>
