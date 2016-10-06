var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
'article1':{
    title:'article1|kuldeep sharma',
    heading:'article1',
    date:'5 sep 2016',
    content:`<p>
                    this is my first article.vthis is my first article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                </p>
                <p>
                    this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.
                </p>`
},
'article2':{
    title:'article2|kuldeep sharma',
    heading:'article2',
    date:'10 sep 2016',
    content:`<p>
                    this is my second article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.vthis is my first article.this is my first article.this is my first article.this is my first article.this is my first article.vthis is my first article.this is my first article.this is my first article.
                </p>`
},
'article3':{
   title:'article3|kuldeep sharma',
    heading:'article3',
    date:'15 sep 2016',
    content:`<p>
                    this is my third article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.this is my first article.vthis is my first article.this is my first article.this is my first article.this is my first article.this is my first article.vthis is my first article.this is my first article.this is my first article.
                </p>`
} 
};
function createtemplate(data)
{
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmltemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
            </div>
            <hr/>
            <h3>
                ${heading} 
            </h3>
            <div>
                ${date}
            </div>
            <div>
               ${content}
            </div>
            </div>
    </body>
</html>`
;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get(':articlename',function(req,res){
    var articlename=req.params.articelname;
    res.send(createtemplate(articles[articlename]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
 
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
