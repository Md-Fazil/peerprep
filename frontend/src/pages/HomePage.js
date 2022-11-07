import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function HomePage() {
    const { user, setUser } = useContext(UserContext);
    let navigate = useNavigate();

    const goToDifficultyPage = () => {
        setUser((prevState) => {
            return {
                ...prevState,
                room: null,
                difficultyLevel: null,
                topic: null,
                partnerUsername: null,
            };
        });
        navigate("/selectDifficulty");
    };

    const goToTopicPage = () => {
        setUser((prevState) => {
            return {
                ...prevState,
                room: null,
                difficultyLevel: null,
                topic: null,
                partnerUsername: null,
            };
        });
        navigate("/selectTopic");
    };

    const goToHistoryPage = () => {
        navigate("/history");
    };

    return (
        <Stack padding="10%">
            <Typography variant="h2" component="div">
                Welcome to PeerPrep.
            </Typography>

            <br></br>
            <Button variant={"contained"} onClick={goToDifficultyPage}>
                Find a match via Difficulty!
            </Button>
            <br></br>
            <Button variant={"contained"} onClick={goToTopicPage}>
                Find a match via Topic!
            </Button>
            <br></br>
            <Button color="success" variant={"contained"} onClick={goToHistoryPage}>
                History of completed questions
            </Button>
        </Stack>
    );
}

export default HomePage;
