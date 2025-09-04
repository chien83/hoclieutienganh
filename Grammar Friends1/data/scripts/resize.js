// JavaScript Document
//resize the window if less than 800 x 600 visible

window.onload= function(){
window.moveTo(30,30)
if (screen.availWidth<800 || screen.availHeight<600){
		window.resizeTo(screen.availWidth,screen.availHeight)
		
		}
}
