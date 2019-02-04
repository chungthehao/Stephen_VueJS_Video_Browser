<template>
    <div>
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList></VideoList>
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
const API_KEY = 'AIzaSyCvt5Zj-LH380jAflpjGTQnHylxAYGM1rU';

export default {
    name: 'App', // để sau này dễ debug
    components: {
        //SearchBar: SearchBar // Cách cũ
        SearchBar, // ES6, vì key - value giống nhau
        VideoList
    },
    methods: {
        onTermChange(newSearchTerm) { // đây chính là callback func (event handler)
            console.log('Ở App: '+newSearchTerm);

            axios
                .get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: API_KEY,
                        type: 'video', // loại muốn search là video
                        part: 'snippet', // chỉ lấy thông tin cơ bản thôi, ko lấy hết
                        q: newSearchTerm // q: short for 'query'
                    }
                })
                .then(response => console.log(response));
        }
    }
}
</script>
