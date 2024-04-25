var date = new Date();
var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
var date_time = current_date+" "+current_time;	

var items = document.getElementsByClassName("datewrapper"), i, len;

for (i = 0, len = items.length; i < len; i++) {
	items[i].innerHTML = date_time;
}
