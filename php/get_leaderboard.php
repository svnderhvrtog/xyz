<?php
    include('config.php');
    $sql = "SELECT name, profile_image, credits FROM leaderboard ORDER BY credits DESC LIMIT 3";
    $result = $conn->query($sql);
    $leaderboard = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $leaderboard[] = $row;
        }
    }
    header('Content-Type: application/json');
    echo json_encode($leaderboard);
    $conn->close();
?>
