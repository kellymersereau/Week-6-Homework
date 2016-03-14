var tvShows = ['Game of Thrones', 'The X Files', 'Dexter', 'Pretty Little Liars', 'Shameless', 'The Wire', 'Oz', 'The Newsroom', 'Weeds'];

//creates the buttons for the TV shows 
function renderButtons(){
	$('#tvShowButtons').empty();

	for(var i=0; i<tvShows.length; i++){
		var a = $('<button>')
		a.addClass('tvShow');
		a.attr('data-name', tvShows[i]);
		a.text(tvShows[i]);
		$('#tvShowButtons').append(a);
	}
}
//runs the render buttons function
renderButtons();

//creates the onclick function for the tv show buttons to create new tv show buttons based on user input
$('#addTVShow').on('click', function(){
	var tvShow = $('#tvShow-input').val().trim();
	tvShows.push(tvShow);
	renderButtons();
	return false;
});

//creates on click functions for tv show buttons
$('.tvShow').on('click', function(){
	var show = $(this).data('name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
		method: 'GET'
	})
	.done(function(response) {
		console.log(response)

		var results = response.data;

		for(var i=0; i < results.length; i++) {
			var tvShowDiv = $('<div>');
			var p = $('<h1>');
			p.text(results[i].rating);
			var tvShowImage = $('<img>');
			tvShowImage.attr('src', results[i].images.original_still.url);
			tvShowImage.addClass('imageClick');
			$(tvShowDiv).append(p);
			$(tvShowDiv).append(tvShowImage);
			$('#tvShows').prepend(tvShowDiv);
		}
	});
});
$('.imageClick').on('click', function(){
	for(var i=0; i < results.length; i++) {
		tvShowDiv.attr('src', results[i].images.original.url)
		$(tvShowDiv).html(tvShowImage);
	}
});
