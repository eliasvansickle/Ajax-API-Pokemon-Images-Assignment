$(document).ready(function() {
	var imgUrl = function() {
	for (var i = 1; i < 152; i++) {
		$("#wrapper").append('<img src="http://pokeapi.co/media/img/'+i+'.png">');
	}
};
imgUrl();
});