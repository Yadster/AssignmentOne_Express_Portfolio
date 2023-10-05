// Imports
const express = require('express')
const app = express()
const port = 5000


// Static Files
app.use(express.static('public'))
app.use('/stylesheets', express.static(__dirname + 'public/stylesheets'))
app.use('/javascripts', express.static(__dirname + 'public/javascripts'))
app.use('/images', express.static(__dirname + 'public/images'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', { text: 'Homepage'})
})

app.get('/about', (req, res) => {
    res.render('about', { text: 'About Page'})
})

app.get('/projects', (req, res) => {
  res.render('projects', { text: 'Projects Page'})
})

app.get('/services', (req, res) => {
  res.render('services', { text: 'Services Page'})
})

app.get('/contact', (req, res) => {
  res.render('contact', { text: 'Contact Page'})
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//  Listen on port 5000
app.listen(port, () => console.info(`Listening on port ${port}`))

module.exports = app;
