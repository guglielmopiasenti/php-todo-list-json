<?php
// Initial data
$database_path = __DIR__ . '/../../database/tasks.json';

// getting files from JSON
$json_data = file_get_contents($database_path);
