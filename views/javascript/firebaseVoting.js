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

}

function downvote(key){
	var database =firebase.database()
	var user = firebase.auth().currentUser
	var userId =user.uid 
	var displayName = user.displayName

console.log(userId)

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


}