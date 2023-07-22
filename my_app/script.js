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
        deleteTask(taskId) { 
            // Prepare the data
            const data = { id: taskId }; 
        
            // Prepare the config
            const config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
        
            axios.post(`http://localhost:8888/php-todo-list-json/api/tasks/delete/`, data, config)
                .then(res => {
                    this.tasks = res.data;
                });
        },
        toggleDone(taskId) {
                 // preparing data
                 const data = {id: taskId};

                 // preparing confing
                 const config = {
                     headers: {'Content-Type': 'multipart/form-data'}
                 }
                 axios.post('http://localhost:8888/php-todo-list-json/api/tasks/toggle/', data, config)
                 .then(res => {
                     this.tasks = res.data;
                 });
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