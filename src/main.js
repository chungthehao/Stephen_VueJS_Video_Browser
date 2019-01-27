// Khi chạy, ko thấy có file vue cùng cấp với main.js,
// webpack sẽ tự tìm trong folder node_modules
import Vue from 'vue';

// Khi import file mình tự tạo ra, dùng relative path
import App from './App';

// Tạo vue instance
new Vue({
    // Chỉ cho vue biết là cần render ra đâu!
    // (còn có chức năng khác đã đc biết là chỉ ra cho vue biết template là thằng nào)
    // cái này <=> ~.$mount('#app')~
    // el: '#app',

    // Another way to tell vue instance how to show some content on the screen

    // Thực ra là, mà ngta để gọn thành 'h', kiểu như là 1 convention nhiều ng theo
    // render(createElement) {
    //     return createElement(App);
    // }

    // Cách viết dưới <=> render: function(h) { return h(App); } ---> có cách viết dùng arrow func
    // render(h) {
    //     return h(App);
    // }

    render: h => h(App)

}).$mount('#app');