const axios = require("axios");

let HISTORY_SERVICE_ENDPOINT = ''

if (process.env.NODE_ENV === "production") {
    HISTORY_SERVICE_ENDPOINT = process.env.REACT_APP_HISTORY_SERVICE_CLOUD_ENDPOINT;
} else {
    HISTORY_SERVICE_ENDPOINT = process.env.REACT_APP_HISTORY_SERVICE_LOCAL_ENDPOINT;
}

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
