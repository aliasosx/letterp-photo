const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/uploads/foods')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
let upload = multer({ storage: storage });


app.get('/', (req, res) => {
    res.json({ message: 'Photo api server' });
});
app.post('/uploadfood', upload.single('image'), (req, res, next) => {
    res.json({
        status: 'success'
    });
});

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log('Photo upload server open on port : 5005');
});



