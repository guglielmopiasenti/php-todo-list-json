<?php

require __DIR__ . '/../includes/opendb.php';

// checking POST
$task_text = $_POST['task'] ?? null;
if($task_text){

    $new_task = ['text' => $task_text, 'done' => false, 'id' => count($tasks) + 1];

    $tasks[] = $new_task;
    $json_tasks = json_encode($tasks);
    file_put_contents($database_path, $json_tasks);
}

// specifing that response is in JSON 
header('Content-type: application/json');


// Converting in JSON
echo json_encode($tasks);
?>