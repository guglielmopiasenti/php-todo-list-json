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
            axios.post('http://localhost:8888/php-todo-list-json/api/tasks/', data, config)
            .then()
        }
    },
    created(){
        axios.get('http://localhost:8888/php-todo-list-json/api/tasks/')
        .then((res => {
            this.tasks = res.data
        }))
    }
})

app.mount('#root')