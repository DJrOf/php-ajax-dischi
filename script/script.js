const app = new Vue({
    el: '#root',
    data: {
        discs: mounted(),
        baseUri: 'http://localhost/php-ajax-dischi/data.php',
    },
    mounted() {
        axios.get(this.baseUri).then(res => {
            this.discs = res.data;
        }).catch(err => {console.error(err)});
    }
})


