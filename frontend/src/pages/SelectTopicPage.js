import { Button, Stack, Typography, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { getAllTopics } from "../services/QuestionService";

const SelectTopicPage = () => {
    const { user, setUser } = useContext(UserContext);
    const [topics, setTopics] = useState([]);
    const navigate = useNavigate();

    const clickTopic = (e) => {
        console.log(e.currentTarget.textContent);
        setUser((prevState) => {
            return {
                ...prevState,
                topic: e.currentTarget.textContent,
            };
        });
        navigate("/matching");
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        fetchTopics();
        console.log("fetching topics...");
    }, []);

    async function fetchTopics() {
        await getAllTopics().then((topics) => setTopics(topics));
    }

    return (
        <Stack padding="5%">
            <Typography variant="h2">Select Topic</Typography>
            <br></br>
            <Grid container columnSpacing={2}>
                {topics.map((topic, i) => (
                    <Grid key={i} item>
                        <br></br>
                        <Button variant={"contained"} onClick={clickTopic}>
                            {topic}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default SelectTopicPage;
