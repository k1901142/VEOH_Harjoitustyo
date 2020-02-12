const express = require('express');
const PORT = process.env.PORT || 8080;
const body_parser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');

//Controllers
const auth_controller = require('./controllers/auth_controller');
const shoppingList_controller = require('./controllers/shoppingList_controller');
const product_controller = require('./controllers/product_controller');

let app = express();

app.use(body_parser.urlencoded({
    extended: true
}));

app.use(session({
    secret: '1234qwerty',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000000
    }
}));

//
app.use((req, res, next) => {
    console.log('App huutelee:');
    console.log(`${req.method} ${req.path}`);
    next();
});

//onko käyttäjä loggautunut sisään?
const is_logged_handler = (req, res, next) => {
    console.log('Onko käyttäjä sisällä?');
    if (!req.session.user) {
        return res.redirect('/login');
    }
    next();
};

//Serve Static files
app.use('/css', express.static('css'))

//Auth
console.log('Nyt app.use: handle_user');
app.use(auth_controller.handle_user);
console.log('Nyt app.get: get_login');
app.get('/login', auth_controller.get_login);
console.log('Nyt app.post: post_login');
app.post('/login', auth_controller.post_login);
console.log('Nyt app.post: post_register');
app.post('/register', auth_controller.post_register);
console.log('Nyt app.post: post_logout');
app.post('/logout', auth_controller.post_logout);


//Shopping Lists
app.get('/', is_logged_handler, shoppingList_controller.get_shoppingLists);
app.post('/delete-shoppingList', is_logged_handler, shoppingList_controller.post_delete_shoppingList);
app.get('/shoppingList/:id', is_logged_handler, shoppingList_controller.get_shoppingList);
app.post('/add-shoppingList', is_logged_handler, shoppingList_controller.post_shoppingList);

//Products


app.use((req, res, next) => {
    res.status(404);
    res.send(`
        page not found
    `);
});

//Shutdown server CTRL + C in terminal

const mongoose_url = 'mongodb+srv://shoppinglistapp:xD4arcslqm8F08gc@cluster0-lirwo.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoose_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Mongoose connected');
    console.log('Start Express server');
    app.listen(PORT);
});
