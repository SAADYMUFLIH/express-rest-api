require('dotenv').config()
const express = require('express');

const usersRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');

const app = express();
const PORT = process.env.PORT || 5000; 

app.use( middlewareLogRequest );
app.use(express.json());
app.use('/assets',express.static('public/images'));

app.use("/users", usersRoutes);
app.post('/upload', upload.single('photo'),(req, res) => {
    res.json({
        message: 'Upload Berhasil'
    });
});

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
});

app.listen(PORT, () => {
    console.log(`Belajar Api Express | listening at http://localhost:${PORT}`);
});

