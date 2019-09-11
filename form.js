$( document ).ready(function() {
$('form').submit(function() {
event.preventDefault();
$.ajax(
{
type: "POST",
url: "form.php",
data: {
submit:1,
value:$('#res').val()
},
success: function(result)
{
alert(result);
}
});
return false;
});
});





















 