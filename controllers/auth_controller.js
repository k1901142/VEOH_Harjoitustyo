const user_model = require('../models/user-model');
const auth_views = require('../views/auth-view');


//onko annettu käyttäjä olemassa?
const handle_user = (req, res, next) => {
    if (!req.session.user) {
        console.log('handle_user: ', req.session.user);
        return next();
    }
    //haetaan tiedot tietokannasta
    user_model.findById(req.session.user._id).then((user) => {
        req.user = user;
        console.log('Käyttäjä löytyi ', user);
        next();
    }).catch((err) => {
        console.log(err);
        res.redirect('/login');
    });
};

//tutkitaan sivulle tultaessa
const get_login = (req, res, next) => {
    console.log('Get_login, user: ', req.session.user)
    res.send(auth_views.login_view());
};

const post_logout = (req, res, next) => {
    req.session.destroy();
    res.redirect('/login');
};

//kirjaudutaan sisään vanhalla tunnuksella
const post_login = (req, res, next) => {
    const user_name = req.body.user_name;
    console.log('Post_login: ', user_name);
    user_model.findOne({
        name: user_name
    }).then((user) => {
        if (user) {
            req.session.user = user;
            return res.redirect('/');
        }
        res.redirect('/login');
    });
};

//rekisteröidään uusi käyttäjä, kenttä, johon teksti kirjoitetaan on nimeltään user_name
const post_register = (req, res, next) => {
    const user_name = req.body.user_name;

    //tutkitaan, löytyykö ennestään
    user_model.findOne({
        name: user_name
    }).then((user) => {
        if (user) {
            console.log('User name already registered');
            return res.redirect('/login');
        }

        //jos ei ole ennestään, luodaan uusi käyttäjä (käyttäjätunnus + varataan lista ostoslistoille)
        let new_user = new user_model({
            name: user_name,
            shoppingLists: []
        });

        //tallennetaan käyttäjä ja näytetään login-näkymä
        new_user.save().then(() => {
            return res.redirect('/login');
        });

    });
};

module.exports.handle_user = handle_user;
module.exports.get_login = get_login;
module.exports.post_logout = post_logout;
module.exports.post_login = post_login;
module.exports.post_register = post_register;