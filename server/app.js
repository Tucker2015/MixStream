const express = require('express'),
    path = require('path'),
    Session = require('express-session'),
    bodyParse = require('body-parser'),
    passport = require('./auth/passport'),
    mongoose = require('mongoose'),
    middleware = require('connect-ensure-login'),
    FileStore = require('session-file-store')(Session),
    config = require('./config/default'),
    flash = require('connect-flash'),
    port = config.server.port,
    app = express(),
    node_media_server = require('./media_server'),
    thumbnail_generator = require('./cron/thumbnails');

// HTTPS Server Test

const fs = require('fs');
const http = require('http');
const https = require('https');
const privatekey = fs.readFileSync('/etc/letsencrypt/live/live.kevtucker.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/live.kevtucker.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/live.kevtucker.com/chain.pem', 'utf8');
const credentials = {
    key: privatekey,
    cert: certificate,
    ca: ca
};


const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
    console.log('HTTP Server Running on Port 80');
});
httpsServer.listen(443, () => {
    console.log('HTTP Server Running on Port 443');
});




mongoose.connect('mongodb+srv://kevtucker:Baggersb20@mernauth.6wgpp.mongodb.net/nodeStream?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("MongoDB successfully connected"))
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));


app.use(express.static(path.join(__dirname, 'public', 'index.html')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static('public'));
app.use('/thumbnails', express.static('server/thumbnails'));
app.use(flash());

app.use(require('cookie-parser')());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json({ extended: true }));

app.use(Session({
    store: new FileStore({
        path: 'server/sessions'
    }),
    secret: config.server.secret,
    maxAge: Date().now + (60 * 1000 * 30),
    resave: true,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// Register app routes
app.use('/login', require('./routes/login'));
app.use('/register', require('./routes/register'));
app.use('/settings', require('./routes/settings'));
app.use('/streams', require('./routes/streams'));
app.use('/user', require('./routes/user'));

app.get('/logout', (req, res) => {
    req.logout();
    return res.redirect('/login');
});



app.get('*', middleware.ensureLoggedIn(), (req, res) => {
    res.render('index');
});

app.listen(port, () => console.log(`App listening on ${port}!`));
node_media_server.run();
thumbnail_generator.start();
