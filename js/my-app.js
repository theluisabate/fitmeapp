// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},

		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		}
	]
});

// Export selectors engine
Z

$$('#btnLogin').on('click', function () {
	var Usuario = $$('#username').val();
	var Password = $$('#password').val();
	
  	if(Usuario == "jframos" && Password == "123"){
		app.dialog.alert('¡ Bienvenido a Coffee Shop !');
		app.loginScreen.close(".modal-login");
		
	}else{
		app.dialog.alert('Lo sentimos, sus datos son incorrectos');
	}
	
	
});








 

