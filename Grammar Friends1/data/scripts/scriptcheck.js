// JavaScript Technology checks

//updated 29/01/07 to include message variables

//** replace data/images/tick.gif with the url for a new image <img src='data/images/tick.gif' alt='tick' width='12' height='13' />
var tickimage=" <strong>OK</strong>";

//** Script check messages for JavaScript and browser
var browserOk="Browser / JavaScript:";
var browserNotOk="Browser / JavaScript: Your browser may have some problems displaying some content. To get the best from this CD-ROM, it is recommended that you download the latest version of your browser";

//** Script check messages for Flash
var flashOk="Flash Player:";
var flashNotOk="Flash Player: You may need to <a href='http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=shockwaveFlash' title='get Flash player'>download Flash Player</a> from the Adobe website.";

//1. check for JavaScript if separate from browser
//document.write("<p>JavaScript: <img src='" + tickimage + "' alt='tick' width='12' height='13' /></p>");
//2. browser ok?
if (document.getElementById){
document.write("<p>"+ browserOk + tickimage + "</p>");
} else
{document.write("<p>"+ browserNotOk +"</p>")
}
//browser ok end

//3. flash check - version cannot be detected in IE
//check for all but ie
var flashinstalled = 0;
var flashversion = 0;

if (navigator.plugins && navigator.plugins.length)
{
	
	x = navigator.plugins["Shockwave Flash"];
	if (x)
	{
		flashinstalled = 2;
		if (x.description)
		{
			y = x.description;
			flashversion = y.charAt(y.indexOf('.')-1);
		}
	}
	else
		flashinstalled = 1;
	if (navigator.plugins["Shockwave Flash 2.0"])
	{
		flashinstalled = 2;
		flashversion = 2;
	}
}
else if (navigator.mimeTypes && navigator.mimeTypes.length)
{
	x = navigator.mimeTypes['application/x-shockwave-flash'];
	if (x && x.enabledPlugin)
		flashinstalled = 2;
	else
		flashinstalled = 1;
}

else if (window.ActiveXObject)
{
for (i=6; i<10; i++)
{
try
{
oFlash=new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
if (oFlash)
{
flashinstalled=2;
flashversion=i;
}
}
catch(e) {}
}
}

//** Change >5 if you need higher than 6 (so, >6 = 7 and above
//If flash exists and the version is 8 or above
if  (flashinstalled=2 && flashversion>8){
	document.write("<p>"+ flashOk + tickimage + "</p>")
	
	} else {
		
		document.write("<p>"+flashNotOk +"</p>")
					}
		
// Flash Check end