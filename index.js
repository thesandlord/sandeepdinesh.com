const express = require('express');
const exphbs  = require('express-handlebars');
const redirect = require('express-simple-redirect');

const port = process.env.PORT || 3000;
const app = express();


app.engine('handlebars', exphbs({extname: '.html'}));
app.set('view engine', 'handlebars');

const content = require('./content.json');

app.get('/', (req, res) => {
  res.render('index', content);
});

app.use(redirect({
  '/istio-101': 'https://youtu.be/8OjOGJKM98o',
  '/istio-open-census': 'https://www.youtube.com/watch?v=jOtFyB5jjho&t=7448',
  '/k8s-istio': 'https://www.youtube.com/watch?v=gauOI0O9fRM'
}));

app.use(express.static('www',{extensions:['html']}));

app.listen(port, () => console.log(`Server started on port ${port}`));