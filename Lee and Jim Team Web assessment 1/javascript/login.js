// JavaScript Document
/*exported login*/
function login() {
	'use strict';
	var username = document.getElementById("Username");
	var pass = document.getElementById("Password");
	
	if (username.value === "") {
		alert("Your Username");
	} else if (pass.value === "") {
		alert("Your Password");
	} else if(username.value === "admin" && pass.value === "123456"){
		window.location.href="Hostelhomepage.html";
	}else{
		alert("please enter the correct user name and password!");
	}	
}