<?php
// Initial data
$database_path = __DIR__ . '/../../database/tasks.json';

// getting files from JSON
$json_data = file_get_contents($database_path);

// converting in PHP array 
$tasks = json_decode($json_data, true);




// checking POST
$new_task = $_POST['task'] ?? null;
if($new_task){
    $tasks[] = $new_task;
    $json_tasks = json_encode($tasks);
    file_put_contents($database_path, $json_tasks);
}

// specifing that response is in JSON
header('Content-type: application/json');

// Converting in JSON
echo json_encode($tasks);
?>