function addRestaurant(){
	var database =firebase.database()
	var restaurantRef =database.ref('/restaurants')


	var restaurantInput = document.getElementById('addRestaurant')
	var restaurantName = restaurantInput.value
	restaurantInput.value =''

	restaurantRef.push(restaurantName)
		.then(function(){
			window.location.reload()
		})
		.catch(function(error){
			console.log(error)
		})
}