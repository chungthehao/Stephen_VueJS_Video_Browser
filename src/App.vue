<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
            <VideoDetail :video="selectedVideo"></VideoDetail>
            <VideoList 
                :videos="videos"
                @videoSelect="onVideoSelect"
            >
            </VideoList>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'YOUR API KEY';

export default {
    name: 'App', // để sau này dễ debug
    components: {
        //SearchBar: SearchBar // Cách cũ
        SearchBar, // ES6, vì key - value giống nhau
        VideoList,
        VideoDetail
    },
    data() {
        return {
            videos: [], // sẽ là 1 mảng các object, mỗi object đại diện cho 1 video
            selectedVideo: null
        };
    },
    methods: {
        onTermChange(newSearchTerm) { // đây chính là callback func (event handler)
            axios
                .get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: API_KEY,
                        type: 'video', // loại muốn search là video
                        part: 'snippet', // chỉ lấy thông tin cơ bản thôi, ko lấy hết
                        q: newSearchTerm // q: short for 'query'
                    }
                })
                .then(response => {
                    this.videos = response.data.items;
                });
        },

        onVideoSelect(video) { // Event handler của custom event 'videoSelect'
            this.selectedVideo = video; // Một khi update 'selectedVideo' data property, App component sẽ re-render, tận dụng cơ hội này, mình sẽ truyền obj này xuống VideoDetail component qua props
        }
    }
}
</script>
