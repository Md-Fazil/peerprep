const axios = require("axios");

let QUESTION_SERVICE_ENDPOINT = ''

if (process.env.REACT_APP_NODE_ENV === "production") {
    QUESTION_SERVICE_ENDPOINT = process.env.REACT_APP_QUESTION_SERVICE_CLOUD_ENDPOINT;
} else {
    QUESTION_SERVICE_ENDPOINT = process.env.REACT_APP_QUESTION_SERVICE_LOCAL_ENDPOINT;
}

export async function getQuestion(room_id, difficulty) {
    const res = await axios.get(QUESTION_SERVICE_ENDPOINT + `/difficulty/${difficulty}`, { params: { room: room_id } });
    console.log(res.data.question);
    return res.data.question;
}

export async function getAllTopics() {
    const res = await axios.get(QUESTION_SERVICE_ENDPOINT + `/topics`);
    console.log(res.data);
    return res.data.topics;
}

export async function getQuestionByTopic(room_id, topic) {
    const res = await axios.get(QUESTION_SERVICE_ENDPOINT + `/topics/${topic}`, { params: { room: room_id } });
    console.log(res.data.question);
    return res.data.question;
}
