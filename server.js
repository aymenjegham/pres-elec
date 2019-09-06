var express = require('express');
var logger = require('morgan');
var bodyParser =require('body-parser');
var admin = require('firebase-admin');
var serviceAccount=require('./quandaryapp-93934da453a5.json');
var firebaseAdmin=admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL:'https://quandaryapp.firebaseio.com'
})

var database = firebaseAdmin.database();
var app = express();
app.set('view engine','ejs');
app.use(express.static('views'));
app.set('views',__dirname + '/views');
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

function isAuthenticated(request,response,next){

}




app.get('/',function(request,response){
	var restaurantsRef = database.ref('/restaurants')

	restaurantsRef.once('value',function(snapshot){
		var data =snapshot.val()
		if(!data){
			data={}
		}
 		response.render('home.ejs',{restaurants : data});
	})

	
});

app.get('/homecoming-queen',isAuthenticated,function(request,response){
	response.render('homecomingQueen.ejs');
})

app.get('/about',function(request,response){
	response.render('about.ejs');
})

app.post('/',function(request,response){
	var cand = request.body.candidate;
	response.render('results.ejs',{data : cand})
});

app.get('*', function(req, res){
  res.status(404).send("Nothing found,Sorry, we couldn’t find the requested page.");
});

app.listen(process.env.PORT || 3000,function(){
console.log('APP running on port 3000')
});