# CS3219-AY22-23-Project
Please nagivate to the specific service directory and run the corresponding commands.

## User Service
1. Rename `.env.sample` file to `.env`.
2. Create a Cloud DB URL using Mongo Atlas.
3. Enter the DB URL created as `DB_CLOUD_URI` in `.env` file.
4. Install npm packages using `npm i`.
5. Run User Service using `npm run dev`.

## Frontend
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

* TO RUN LOCALLY
1. Create a `.env` file with a line `LOCAL_DB_URL="mongodb://localhost:27017/questionsDb"` in the `history-service` folder.
2. Install npm packages using `npm i`.
3. Run History Service using `npm start`.

* TO RUN WITH CLOUD DB

1. Create a Cloud DB URL using Mongo Atlas.
2. Enter the DB URL created as `DB_CLOUD_URL` in the `.env` file.
3. Install npm packages using `npm i`.
4. Run User Service using `npm start`.


## Matching Service

* TO RUN LOCALLY

1. Install npm packages using `npm i`.
2. Run History Service using `npm start`.
- Please note that an `SQLite` database would be created.

* TO RUN WITH CLOUD DB

1. Create a Cloud instance of `PostgreSQL`.
2. Create `.env` file and populate following variables:
```
PORT
CLOUD_DB_URL
CLOUD_DB_USERNAME
CLOUD_DB_PASSWORD
CLOUD_DB_PORT
```
3. Install npm packages using `npm i`.
4. Run User Service using `npm start`.


## Collaboration Service

* TO RUN LOCALLY
1. Start a Local Redis server which listens to port`6379`.
2. Install npm packages using `npm i`.
3. Run History Service using `npm start`.

* TO RUN WITH CLOUD DB

1. Create a Cloud instance of Redis.
2. Create `.env` file and populate following variables:
```
CLOUD_REDIS_URL
CLOUD_REDIS_PORT
CLOUD_REDIS_USERNAME
CLOUD_REDIS_PASSWORD
```
3. Install npm packages using `npm i`.
4. Run User Service using `npm start`.


## Chat Service
1. Install npm packages using `npm i`.
3. Run History Service using `npm start`.
