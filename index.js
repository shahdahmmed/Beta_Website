const express = require('express');//zy #include
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();//b7ot express gwa el app(declaire app as express function)


mongoose.connect('mongodb://127.0.0.1:27017/BetaWebsite')
    .then(function () {
        console.log('connection open')
    })
    .catch(function (err) {
        console.log('Failed to connect')
        console.log(err);
    })
app.listen(3500, function () {
    console.log('listening on port 3500')
})

app.use(express.json())//to be able to send to body

app.use(cors({ origin: '*' })); //to prevent ERROR: axios has been blocked by CORS policy in front end

app.get('/Beta', function (req, res) {

    res.send('Beta');

})

//create collection for courses
const courseSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
})
const Course = mongoose.model('Course', courseSchema) //Course Must be Capital
// const web = new Course({//adding anew course
//     name: 'Web Develpoment',
//     description: "Hi",
//     image: "pngwing.com.png",
// })
// web.save();

//API FOR COURSES
//Get    =/courses
//GET    =/couses/:id
//POST   =/course
//PUT    =/courses/:id
//DELETE =/courses/:id

app.post('/course', function (req, res) {
    const { name, image, description } = req.body;
    if (!name || !image || !description) {
        res.send('failed')
    }
    else {
        const newCourse = new Course({//adding anew course
            name: name,
            description: description,
            image: image,
        })
        newCourse.save();
        res.send(newCourse)
    }
})

app.get('/courses', async function (req, res) {
    const courses = await Course.find({})//{}<- m3naha gebly kol 7aga
    res.send(courses)
})
const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
})
const Admin = mongoose.model('Admin', adminSchema) //Course Must be Capital


// const newAdmin = new Admin({//adding anew Admin
//     username: 'Admin',
//     password: '1234'
// })
// newAdmin.save();

const FeedbackSchema = new mongoose.Schema({
    message: String,
    email: String

})
const Feedback = mongoose.model('Feedback', FeedbackSchema) //Course Must be Capital
app.post('/Feedback', function (req, res) {
    const { message, email } = req.body;
    if (!message || !email) {
        res.send("Failed");
    }
    else {
        const new_message = new Feedback({
            message: message,
            email: email

        })
        new_message.save();
        res.send(new_message);
    }
})



app.get('/Feedbacks', async function (req, res) {
    const Feedbacks = await Feedback.find({})
    res.send(Feedbacks)
})