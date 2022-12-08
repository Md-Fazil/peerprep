# Peerprep Project
PeerPrep is a web application where students can help each other in technical interviews by attempting LeetCode-style algorithmic questions. They can play interviewer-interviewee roles and take turns solving a question while collaborating using a live Editor and Chat.

The application offers the following core functionalities:
1. Authentication
<p align="center"> 
<a  href="https://ibb.co/x8nDpTT"><img src="https://i.ibb.co/3Yx7DZZ/Screenshot-2022-12-08-at-11-44-33-AM.png" alt="Screenshot-2022-12-08-at-11-44-33-AM" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>Login Page</a><br/>
<a href="https://ibb.co/896dVrr"><img src="https://i.ibb.co/RczBW33/Screenshot-2022-12-08-at-11-41-32-AM.png" alt="Screenshot-2022-12-08-at-11-41-32-AM" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>Landing Page</a><br />  
</p>

2. Matching of users via difficulty and topic
<p align="center"> 
<a href="https://ibb.co/J5CvFj7"><img src="https://i.ibb.co/18brJGq/Screenshot-2022-12-08-at-11-41-42-AM.png" alt="Screenshot-2022-12-08-at-11-41-42-AM" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>Matching via difficulty</a><br />
<a href="https://ibb.co/RQH3c67"><img src="https://i.ibb.co/2cKvdM5/Screenshot-2022-12-08-at-11-41-59-AM.png" alt="Screenshot-2022-12-08-at-11-41-59-AM" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>Matching via topic</a><br />
<a href="https://ibb.co/3ys0nzx"><img src="https://i.ibb.co/pvP3SyH/Screenshot-2022-12-08-at-11-42-14-AM.png" alt="Screenshot-2022-12-08-at-11-42-14-AM" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>Matching Page with countdown timer</a><br />
</p>

3. Collaboration page for matched users with randomly generated question based on match criteria and collaboration via shared editor and chat. 
<p align="center"> 
<a href="https://ibb.co/zRDmtyJ"><img src="https://i.ibb.co/mqgRPL8/Screenshot-2022-12-08-at-11-43-28-AM.png" alt="Screenshot-2022-12-08-at-11-43-28-AM" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>Collaboration Page </a><br />
</p>

# Developer Guide
## User Service
To run the service locally:
1. Create a `.env` and populate the following variable:
```
DB_LOCAL_URI=
```
2. Create a Redis server which listens to port `6380`
3. Install npm packages using `npm i`.
4. Run History Service using `npm start`.

## Frontend
To run the service locally:
1. Create `.env` file 
```
REACT_APP_CHAT_SERVICE_CLOUD_ENDPOINT = *REDACTED*
REACT_APP_USER_SERVICE_CLOUD_ENDPOINT = *REDACTED*
REACT_APP_MATCHING_SERVICE_CLOUD_ENDPOINT = *REDACTED*
REACT_APP_QUESTION_SERVICE_CLOUD_ENDPOINT = *REDACTED*
REACT_APP_COLLABORATION_SERVICE_CLOUD_ENDPOINT = *REDACTED*
REACT_APP_HISTORY_SERVICE_CLOUD_ENDPOINT = *REDACTED*

REACT_APP_CHAT_SERVICE_LOCAL_ENDPOINT = "http://localhost:8080" 
REACT_APP_USER_SERVICE_LOCAL_ENDPOINT = "http://localhost:8000/api/user" 
REACT_APP_MATCHING_SERVICE_LOCAL_ENDPOINT = "http://localhost:8001" 
REACT_APP_QUESTION_SERVICE_LOCAL_ENDPOINT = "http://localhost:8002/api/questions" 
REACT_APP_COLLABORATION_SERVICE_LOCAL_ENDPOINT = "http://localhost:8008"
REACT_APP_HISTORY_SERVICE_LOCAL_ENDPOINT = "http://localhost:8003/api/history"
```
2. Install npm packages using `npm i`.
3. Run Frontend using `npm start`, which it will use all the `LOCAL` variables

## History Service

To run the service locally:
1. Create a `.env` file with a line `LOCAL_DB_URL="mongodb://localhost:27017/questionsDb"` in the `history-service` folder.
2. Install npm packages using `npm i`.
3. Run History Service using `npm start`.


## Matching Service

To run the service locally:
1. Install npm packages using `npm i`.
2. Run History Service using `npm start`.
- Please note that an `SQLite` database would be created.

## Collaboration Service

To run the services locally:
1. Start a Local Redis server which listens to port`6379`.
2. Install npm packages using `npm i`.
3. Run Collaboration Service using `npm start`.


## Chat Service
To run the services locally:
1. Install npm packages using `npm i`.
2. Run Chat Service using `npm start`.


## Question Service
To run the services locally:

1. Create local Redis server that listens to port `6379`
2. Create `.env` file and populate following variables:
```
LOCAL_DB_URL
```
3. Install npm packages using `npm i`.
4. Run Question Service using `npm start`.
