	function checkIfLoggedIn(){

		firebase.auth().onAuthStateChanged(function(user){

				if (user){

			var picture=user.photoURL;
			document.getElementById("imageid").src = picture;

			var email =user.email;
  			document.getElementById("google-email").innerHTML = email;
  			document.getElementById("google-email_nav").innerHTML = email;

			var name =user.displayName;
  			document.getElementById("google-displayName").innerHTML = name;
  			document.getElementById("google-displayName_nav").innerHTML = name;

			document.getElementById('sign_in').setAttribute('style','display: none; visibility : hidden')
			document.getElementById('sign_out').setAttribute('style','display: inline-block; visibility : visible')

			document.getElementById('sign_in_nav').setAttribute('style','display: none; visibility : hidden')
			document.getElementById('sign_out_nav').setAttribute('style','display: inline-block; visibility : visible')
					
					
				}else {
					 

			document.getElementById('imageid').setAttribute('src','');
			document.getElementById("google-email").innerHTML = "";
			document.getElementById("google-displayName").innerHTML = "";
			document.getElementById("google-email_nav").innerHTML = "";
			document.getElementById("google-displayName_nav").innerHTML = "";
			
			document.getElementById('sign_out').setAttribute('style','display: none; visibility : hidden');
			document.getElementById('sign_in').setAttribute('style','display: inline-block; visibility : visible');

			document.getElementById('sign_out_nav').setAttribute('style','display: none; visibility : hidden');
			document.getElementById('sign_in_nav').setAttribute('style','display: inline-block; visibility : visible');
			
				}
			})
		
			}
			window.onload=function(){
				checkIfLoggedIn();
					}

			function signout(){

				firebase.auth().signOut();
				checkIfLoggedIn();
			}

			function signInWithGoogle(){
				var googleAuthProvider = new firebase.auth.GoogleAuthProvider 
				firebase.auth().signInWithPopup(googleAuthProvider)
						.then(function(data){
							checkIfLoggedIn();

						})
						.catch(function(error){
							console.log(error)
						})
			}