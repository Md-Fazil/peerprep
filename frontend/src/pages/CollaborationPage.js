import { Box, Button, Grid, Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { STATUS_CODE_CREATED } from "../constants";
import { UserContext } from "../contexts/UserContext";
import Chat from "../components/Chat";
import Editor from "../components/Editor";
import { useChatService } from "../hooks/useChatService";
import { getQuestion, getQuestionByTopic } from "../services/QuestionService";
import { addQuestionToHistory } from "../services/HistoryService";

let isLeaving = false;

function CollaborationPage() {
    const { user, setUser } = useContext(UserContext);
    const [question, setQuestion] = useState({});
    const [openToast, setOpenToast] = useState(true);
    const [openAddQnToast, setOpenAddQnToast] = useState(false);

    useEffect(() => {
        if (!user) {
            setUser(JSON.parse(localStorage.getItem("user")));
            setQuestion(JSON.parse(localStorage.getItem("question")));
        }
    }, []);

    async function fetchQuestion() {
        if (user.topic !== null) {
            await getQuestionByTopic(user.room, user.topic).then((qn) => setQuestion(qn));
        } else if (user.difficultyLevel !== null) {
            await getQuestion(user.room, user.difficultyLevel).then((qn) => setQuestion(qn));
        }
    }

    useEffect(() => {
        localStorage.setItem("question", JSON.stringify(question));
    }, [question]);

    // get question from QuestionService
    useEffect(() => {
        fetchQuestion();
        console.log("question in collab:", question);
    }, []);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
        if (isLeaving) {
            navigate("/home");
        }
    }, [user]);

    const { exitChat } = useChatService();

    let navigate = useNavigate();
    const handleLeave = () => {
        exitChat();
        setUser((prevState) => {
            return {
                ...prevState,
                room: null,
                difficultyLevel: null,
                topic: null,
                partnerUsername: null
            };
        });
        localStorage.removeItem("question");
        isLeaving = true;
    };

    const handleMarkQn = async () => {
        const res = await addQuestionToHistory(user.username, question);
        if (res && res.status === STATUS_CODE_CREATED) {
            setOpenAddQnToast(true);
        }
    };

    return (
        user && (
            <Box padding="1%">
                <Grid container justifyContent="space-between" alignItems="center">
                    <Button variant="outlined" color="success" onClick={handleMarkQn}>
                        Mark Question as Done
                    </Button>

                    <Button variant="outlined" color="error" onClick={handleLeave}>
                        Leave
                    </Button>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignItems="stretch">
                    <Grid item={true} xs={4} padding="1%">
                        <Typography variant="h3">Question</Typography>
                        <br></br>
                        <h2>{question.title}</h2>
                        {question.difficulty === "easy" && (
                            <h3 style={{ color: "green" }}>Difficulty: Easy</h3>
                        )}
                        {question.difficulty === "medium" && (
                            <h3 style={{ color: "orange" }}>Difficulty: Medium</h3>
                        )}
                        {question.difficulty === "hard" && (
                            <h3 style={{ color: "red" }}>Difficulty: Hard</h3>
                        )}
                        <h3>{question.question}</h3>
                    </Grid>

                    <Grid item={true} xs={5} padding="1%">
                        <Typography variant="h3">Code</Typography>
                        <br></br>
                        <Editor />
                    </Grid>

                    <Grid item={true} xs={3} padding="1%">
                        <Typography variant="h3">Chat</Typography>
                        <br></br>
                        <div style={{ position: "relative", height: "600px" }}>
                            <Chat></Chat>
                        </div>
                    </Grid>
                </Grid>

                <Snackbar
                    open={openToast}
                    autoHideDuration={3000}
                    message="Found a match!"
                    onClose={() => setOpenToast(false)}
                />

                <Snackbar
                    open={openAddQnToast}
                    autoHideDuration={3000}
                    message="Marked question as done"
                    onClose={() => setOpenAddQnToast(false)}
                />
            </Box>
        )
    );
}

export default CollaborationPage;
