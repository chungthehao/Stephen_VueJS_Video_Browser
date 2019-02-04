<template>
    <ul>
        <VideoListItem  
            v-for="video in videos" 
            :video="video"
        ></VideoListItem>
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
    }
}
</script>

<style>

</style>
