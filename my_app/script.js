const { createApp } = Vue;

const app = createApp({
    data(){
        return {
            tasks:[],
            newTask:'',
        }
    },
    methods:{
        addTask(){
            // preparing data
            const data = {'task': this.newTask};

            // preparing confing
            const config = {
                headers: {'Content-Type': 'multipart/form-data'}
            }
            axios.post('http://localhost:8888/php-todo-list-json/api/tasks/', data, config)
            .then(res => {
                this.tasks = res.data;
            });
        }
    },
    created(){
        axios.get('http://localhost:8888/php-todo-list-json/api/tasks/')
        .then(res => {
            this.tasks = res.data;
            this.newTask = '';    
        })
    }
})

app.mount('#root')