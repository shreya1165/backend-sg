const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://candy165a:rooot@syllabus.0ooqxg4.mongodb.net/?retryWrites=true&w=majority&appName=syllabus', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));