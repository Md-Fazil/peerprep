import { Button, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const SelectDiffcultyPage = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const clickDifficulty = (e) => {
        console.log(e.target.id);
        setUser((prevState) => {
            return {
                ...prevState,
                difficultyLevel: e.target.value,
            };
        });
        navigate("/matching");
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <Stack padding="5%">
            <Typography variant="h2">Select Difficulty</Typography>

            <Button
                style={{ margin: "2%", fontWeight: "bold" }}
                id="btn-easy"
                value="easy"
                color="success"
                size="large"
                variant="contained"
                onClick={clickDifficulty}
            >
                Easy
            </Button>

            <Button
                style={{
                    borderColor: "orange",
                    backgroundColor: "orange",
                    margin: "2%",
                    fontWeight: "bold",
                }}
                id="btn-medium"
                value="medium"
                size="large"
                variant="contained"
                onClick={clickDifficulty}
            >
                Medium
            </Button>

            <Button
                style={{ margin: "2%", fontWeight: "bold" }}
                id="btn-hard"
                value="hard"
                color="error"
                size="large"
                variant="contained"
                onClick={clickDifficulty}
            >
                Hard
            </Button>
        </Stack>
    );
};

export default SelectDiffcultyPage;
