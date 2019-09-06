function addRestaurant(){
	var database =firebase.database()
	var restaurantRef =database.ref('/restaurants')


	var restaurantInput = document.getElementById('addRestaurant')
	var restaurantName = restaurantInput.value
	restaurantInput.value =''

	restaurantRef.push({
		name :restaurantName,
		votes :0
	})
		.then(function(){
			window.location.reload()
		})
		.catch(function(error){
			console.log(error)
		})
}


function upvote(key){
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   var database =firebase.database()
	var user = firebase.auth().currentUser
	var userId =user.uid 
	var displayName = user.displayName


	//var restaurantRef =database.ref('/restaurants/' + key+'/votes'+ userId)
	var restaurantRef =database.ref('/restaurants/')
							   .child(key)
							   .child('/votes')
							   .child(userId)


	

	restaurantRef.set(displayName)
				 .then(function(){
				 	window.location.reload()

				 })
				 .catch(function(error){
				 	console.log(error)
				 })
  } else {
   	M.toast({html: 'veuillez vous inscrire d abord!', classes: 'rounded'});
  }
});
	

	

}

function downvote(key){
		firebase.auth().onAuthStateChanged(function(user) {

	if (user){
		var database =firebase.database()
	var user = firebase.auth().currentUser
	var userId =user.uid 
	var displayName = user.displayName


	var restaurantRef =database.ref('/restaurants/')
							   .child(key)
							   .child('/votes')
							   .child(userId)
							   
							   

	restaurantRef.remove()
				 .then(function(){
				 window.location.reload()

				 })
				 .catch(function(error){
				 console.log(error)
				 })

	}else{
		M.toast({html: 'veuillez vous inscrire d abord!', classes: 'rounded'});
	}
	});

	

}