<?php
// Initial data
$tasks = ["HTML", "CSS", "Responsive Design", "JavaScript", "PHP"];

// specifing that response is in JSON
header('Content-type: application/json');

// Converting in JSON
echo json_encode($tasks);
?>