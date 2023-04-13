# Notes App

A simple note-taking app built with React on the frontend and Express on the backend, using MongoDB as the database.

# Getting Started

To get started, clone this repository and install the required dependencies.

```bash 
git clone https://github.com/your-username/notes-app.git
cd notes-app
npm install
```

Next, you'll need to set up your MongoDB database. You can either use a local MongoDB instance or a cloud-based service like MongoDB Atlas. Once you have your database set up, create a .env file in the root directory of the project and add the following environment variables:

```bash 
MONGODB_URI=mongodb://localhost:27017/notes-app 
```

If you're using a cloud-based service like MongoDB Atlas, replace the mongodb://localhost:27017/notes-app URI with your own database URI.

Finally, start the server and the client by running the following command in the project directory:

```javascript
npm run dev
```

This will start both the server and the client at the same time, using concurrently.

# Features
The app has the following features:

Create a new note

View a list of existing notes <br/>
Edit an existing note <br/>
Delete an existing note <br/>


# Built With
[React](https://react.dev/) <br/>
[Express](https://expressjs.com/) <br/>
[MongoDB](https://www.mongodb.com/)

