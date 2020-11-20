This project was done as part of an assignment for Software Systems Architecture &amp; Design CZ3003, NANYANG TECHNOLOGICAL UNIVERSITY.
This project is a web-application created using the MERN Stack with an embedded 8-Bit Game designed in GDevelop.

## Starting the website

#### Pre-requisites
This project requires [Node.js](https://nodejs.org/) v12+ to run.

#### Start the Backend Server
Open up Command Prompt (for Windows) or Terminal (for Mac) and run the following commands.
1) cd (change directory) into the folder /backend.
2) execute 
```sh
$ npm install
```
This will download all the dependencies required for the backend to run. There will be a new folder "node_modules" created within the backend folder.

3) execute
```sh
$ node index.js
```
This will run the server on Port 3001. For the database, the server will be connected to [MongoDB](https://www.mongodb.com/) cloud server, called MongoDBAtlas.

### Start the Frontend application
Open up a new Command Prompt (for Windows) or Terminal (for Mac) and run the following commands. NOTE: Do not close your terminal that is running the server.
1) cd (change directory) into the folder /frontend
2) execute
```sh
$ npm install
```
This will download all the dependencies required for the React webapp to run. There will be a new folder "node_modules" created within the frontend folder.

3) execute
```sh
$ npm start
```
This will run the web application on port 3000. The website should automatically load in your browser. If not, go to http://localhost:3000/

## Things to Note

### 1) User Types
To log in, you can simply create an account through the website. However, there are three types of users available: admins, teachers and students. 
Instead of creating an account, you may use the following admin account available:
username: admin
password: 12345678

You may also use the following teacher account:
username: MrTeacher
password: 12345678

### 2) Data points
The database is already populated with fake data such as students. You may run the injectV2.js script using
```
$ node injectV2.js
```
However, it is highly not recommended, as username may already exist in the database. It is only recommended when you have your own MongoDB database server running locally on your machine.

### 3) Data Visualisation Functionality
If you login using a teacher account, you may notice that you have access to http://localhost:3000/myclass .
In that page, you can see various data visualisation for students in the teacher's class.
To test its functionality, you may login separately as an admin, and move students around different classes. You will see that the diagrams will change accordingly.
