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
        },
        // function to delete todo item
        deleteTask(task) { 
            // Prepare the data
            const data = { task: task }; 
        
            // Prepare the config
            const config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
        
            axios.delete(`http://localhost:8888/php-todo-list-json/api/tasks/`, data, config)
                .then(() => {
                    this.tasks = this.tasks.filter((item) => item !== task);
                })
        },
        toggleDone(task) {
            task.done = !task.done;
        },
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