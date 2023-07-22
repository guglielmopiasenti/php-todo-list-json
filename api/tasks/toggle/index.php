<?php

require __DIR__ . '/../../includes/opendb.php';


$id = $_POST['id'] ?? null;
if($id){
    // converting in PHP array 
    $tasks = json_decode($json_data, true);
    $updated_tasks = [];

    foreach($tasks as $task){
        if ($task['id'] == $id) $task['done'] = !$task['done'];
        $updated_tasks[] = $task;
    }

    $tasks = json_encode($updated_tasks);
    file_put_contents($database_path, $json_tasks);
}

echo $tasks;

?>