<?php
    include('config.php');
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = htmlspecialchars(trim($_POST["username"]), ENT_QUOTES, 'UTF-8');
        $profile_picture = trim($_POST["profile_picture"]);
        $credits = intval($_POST["credits"]);
        if (empty($username) || empty($profile_picture)) {
            die("Gebruikersnaam en profielfoto zijn verplicht!");
        }
        $stmt = $conn->prepare("SELECT * FROM leaderboard WHERE name = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows === 0) {
            // Voeg de nieuwe speler toe aan de database
            $stmt = $conn->prepare("INSERT INTO leaderboard (name, profile_image, credits) VALUES (?, ?, ?)");
            $stmt->bind_param("ssi", $username, $profile_picture, $credits);
            if ($stmt->execute()) {
                echo "Speler succesvol toegevoegd!";
            } else {
                echo "Fout bij toevoegen speler: " . $conn->error;
            }
        } else {
            echo "Deze gebruikersnaam bestaat al!";
        }
        $stmt->close();
        $conn->close();
    }
?>
