# Bidding-App-with-Chat
A bidding system with a basic UI. Aiming at making the service scalable and also enabling live chat for bidding.

# Tech Stack
For now I have used React for frontend, backend consists of Redis, Socket.io, PostgreSQL.

# Enhancement
The only issue this app has for now is the fact that it serves real time data but while I am executing queries for one user connected to a socket if another user tries to enter real time data then his data will be lost and I'll fail to save it in Database. Reason being executiong the insert query takes - 3 to 5 ms (avg) while Javascript run time is - 1 ms. 

# How to resolve the issue ?
We can simply add a queue SD that is a consumer reads the Queue (AWS SQS preferably) to get the data stored to DB for all users using the app at the same time. 
