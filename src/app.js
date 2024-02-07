require('dotenv').config()
const express = require('express');

const usersRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');

const app = express();
const PORT = process.env.PORT || 5000; 

app.use( middlewareLogRequest );
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(PORT, () => {
    console.log(`Belajar Api Express | listening at http://localhost:${PORT}`);
});
