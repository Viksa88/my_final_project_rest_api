Interactive database of customers(users).

Tech Stack

Node.js
Express.js
MongoDB
nodemon

Prepare The Environment

Create a new Mongo database.
Clone project: git clone https://github.com/viksa88/CustomerBeWise.git
Install dependencies: npm install
Install nodemon globally: npm i -g nodemon and update package.json accordingly.
In project, add configuration file: config/dev.js with database connection details.
Run the app:
    Windows: set DEBUG=bewise:*; & npm start
    MacOS/Linux: $ DEBUG=bewise:* npm start
