import { HISTORY_SERVICE_ENDPOINT } from "../constants";

const axios = require("axios");

export async function addQuestionToHistory(user, question) {
    const res = await axios.post(HISTORY_SERVICE_ENDPOINT + `${user}`, question);
    console.log(res)
    return res;
}

export async function getUserQuestionHistory(user) {
    const res = await axios.get(HISTORY_SERVICE_ENDPOINT + `${user}`);
    console.log(res.data)
    return res.data.questionHistory;
}
