<?php
    include('config.php');
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = $_POST['name'];
        $profile_image = $_POST['profile_image'];
        $credits = $_POST['credits'];
        $checkSql = "SELECT * FROM leaderboard WHERE name = ?";
        $stmt = $conn->prepare($checkSql);
        $stmt->bind_param("s", $name);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $updateSql = "UPDATE leaderboard SET credits = ? WHERE name = ?";
            $stmt = $conn->prepare($updateSql);
            $stmt->bind_param("is", $credits, $name);
        } else {
            $insertSql = "INSERT INTO leaderboard (name, profile_image, credits) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($insertSql);
            $stmt->bind_param("ssi", $name, $profile_image, $credits);
        }
        if ($stmt->execute()) {
            echo "Leaderboard bijgewerkt!";
        } else {
            echo "Fout bij updaten leaderboard: " . $conn->error;
        }
        $stmt->close();
        $conn->close();
    }
?>
