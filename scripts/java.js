var link = document.getElementsByClassName("links2");
function linkTransition(){
	
	for(x=0;x<link.length;x++){
		link[x].style.transition="all .5s";
	}	
}

function openTab(tab){
	var str1= "popular";
	var str2= "recent";
	var str3= "updated";
	if(tab === str1){
		document.getElementById(tab).style.display = "block";
		document.getElementById(str2).style.display = "none";
		document.getElementById(str3).style.display = "none";
	}
	if(tab === str2){
		document.getElementById(str1).style.display = "none";
		document.getElementById(tab).style.display = "block";
		document.getElementById(str3).style.display = "none";
	}
	if(tab === str3){
		document.getElementById(str1).style.display = "none";
		document.getElementById(str2).style.display = "none";
		document.getElementById(tab).style.display = "block";
	}	
}





