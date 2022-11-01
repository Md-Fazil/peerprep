import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
} from "@mui/material";
import { useContext, useState, useEffect } from "react";

import { getUserQuestionHistory } from "../services/HistoryService";
import { UserContext } from "../contexts/UserContext";

function HistoryPage() {
    const { user, setUser } = useContext(UserContext);
    const [questions, setQuestions] = useState([]);

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState("");
    const [dialogMsg, setDialogMsg] = useState("");
    const closeDialog = () => setIsDialogOpen(false);

    useEffect(() => {
        if (!user) {
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    }, []);

    useEffect(() => {
        fetchQuestions();
    }, [user]);

    async function fetchQuestions() {
        await getUserQuestionHistory(user.username).then((qns) => setQuestions(qns));
    }

    const viewQuestion = (qn) => {
        setDialogTitle(qn.title);
        setDialogMsg(qn.question);
        setIsDialogOpen(true);
    };

    if (questions.length > 0) {
        return (
            <Box padding="5%">
                <Typography variant="h2" color="inherit" component="div">
                    History
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell align="right">Topic</TableCell>
                                <TableCell align="right">Difficulty</TableCell>
                                <TableCell align="right">Last Attempt</TableCell>
                                <TableCell align="right">More</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {questions.map((qn) => (
                                <TableRow
                                    key={qn.title}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell align="right">{qn.title}</TableCell>
                                    <TableCell align="right">{qn.topic}</TableCell>
                                    <TableCell align="right">{qn.difficulty}</TableCell>
                                    <TableCell align="right">
                                        {new Date(qn.lastAttempt).toLocaleString("en-GB", {
                                            timeZone: "Asia/Singapore",
                                        })}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button variant="outlined" onClick={() => viewQuestion(qn)}>
                                            View Question
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Dialog open={isDialogOpen} onClose={closeDialog}>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>{dialogMsg}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeDialog}>Done</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        );
    }

    return (
        <Box padding="5%">
            <Typography variant="h2" color="inherit" component="div">
                History
            </Typography>
            <br></br>
            <Typography variant="h5" color="inherit" component="div">
                History is empty :( start completing some questions!
            </Typography>
        </Box>
    );
}

export default HistoryPage;
