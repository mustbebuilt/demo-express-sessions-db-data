# Demo Express Sessions db data

This is a basic Express app for demoing session in stored in mongoDB.

User credentials query from a database.

npm install express-session
npm install connect-mongo

Start up MongoDb with:

STEP ONE:
mongod

STEP TWO:
mongo

Add user:

db.appUsers.insertOne({"name":"Fred","password":"letmein"})

Assuming Node and Nodemon installed to set up run:

npm install
nodemon app
