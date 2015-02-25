$('document').ready(function(){
	
$.get('/languages', function(list){

  list.languageFrom.map(function(item){
		$('#translateFrom').append('<option value="' + item.from.code + '">' + item.from.name + '</option>');
  })
  list.languageTo.map(function(item){
    $('#translateTo').append('<option value="' + item.to.code + '">' + item.to.name + '</option>');
  })

$('#translate-form').submit(function(e){
  e.preventDefault();
  $.post('/translatePost', { wordInput : $('#wordInput').val(), translateFrom : $('#translateFrom').val(), translateTo : $('#translateTo').val() }, function(item){
    $('body').append('<p>' + item);
  })
});

	
});
});
