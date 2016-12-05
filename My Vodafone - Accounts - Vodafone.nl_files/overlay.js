// type = 0 mobile, 1 tablet, 2 PC
var MetrixLab_OverlayTypeName = 2;

var MODETECT = MODETECT || {};

MODETECT.device = (function() {
  'use strict';

  var device = {};

  device.phone = false;
  device.tablet = false;
  //iPhone
  device.iphone = (testNavigator(/iPhone/i, 'platform')) ? true : false;
  if(device.iphone) { device.phone = true; }
  //iPad
  device.ipad = (testNavigator(/iPad/i, 'platform')) ? true : false;
  if(device.ipad) { device.tablet = true; }
  //iPod
  device.ipod = (testNavigator(/iPod/i, 'platform')) ? true : false;
  if(device.ipod) { device.phone = true; }
  //Android device
  device.android = testNavigator(/Android/i, 'userAgent');
  if(device.android) {
    //Android v3 built as tablet-only version of the OS
    //Can definitively say it's a tablet at this point
    if(testVersion(/Android\s(\d+\.\d+)/i, 3, 'match') ) {
		if((testNavigator(/tablet/i, 'userAgent')) || (testNavigator(/Tablet/i, 'userAgent')))
		{
			device.tablet = true;
		}
		else
		{
			device.phone = true;
		}
    }
    //Checking for "mobile" in userAgent string for Mobile Safari.
    //Also checking resolution here (max portrait of 800), simply because so
    //many Android tablets that are popular use Android v2.x or now v4.x
    else if(testResolution(800) && testNavigator(/Mobile/i, 'userAgent')) {
		if((testNavigator(/tablet/i, 'userAgent')) || (testNavigator(/Tablet/i, 'userAgent')))
		{
			device.tablet = true;
		}
		else
		{
			device.phone = true;
		}
    }
    //Default phone vs. tablet value? Defaulting to phone for now until I can think
    //of a better alternative approach to narrow down better.
    else {
      device.phone = true;
    }
  }
  //Blackberry Phone with WebKit
  device.blackberry = (testNavigator(/Blackberry/i, 'userAgent') && testNavigator(/Mobile/i, 'userAgent')) ? true : false;
  if(device.blackberry) { device.phone = true; }
  //Blackberry Playbook
  device.blackberryplaybook = testNavigator(/RIM\sTablet/i, 'userAgent');
  if(device.blackberryplaybook) { device.tablet = true; }
  //Windows Phone
  device.windowsphone = testNavigator(/Windows\sPhone/i, 'userAgent');
  if(device.windowsphone) { device.phone = true; }
  //Kindle Fire
  device.kindlefire = testNavigator(/Silk/i, 'userAgent');
  if(device.kindlefire) { device.tablet = true; }
  //other mobile
  device.othermobile = (device.phone || device.tablet || device.ipod) ? false : testResolution(320);
  if(device.othermobile) { device.phone = true; }
  //desktop user?
  device.desktop = (device.phone || device.tablet || device.ipod) ? false : true;

  //Test window.navigator object for a match
  //return - Boolean
  function testNavigator(pattern, property) {
    return pattern.test(window.navigator[property]);
  }
  
  
  //Test window.navigator object for a match
  //return - Boolean
  function testNavigator(pattern, property) {
    return pattern.test(window.navigator[property]);
  }

  //Test if maximum portrait width set in platform is less than the current screen width
  //return - Boolean
  function testResolution(maxPortraitWidth) {
    var portraitWidth = Math.min(screen.width, screen.height) / ("devicePixelRatio" in window ? window.devicePixelRatio : 1);
    if(portraitWidth <= maxPortraitWidth) {
      return true;
    }
    else {
      return false;
    }
  }

  //Test OS Version
  //param - pattern - Regex pattern
  //param - version - Integer - Major version to compare against
  //param - versionComparison - String - How version matching is done "match", "greaterThan", "lessThan"
  //return - Boolean
  function testVersion(pattern, version, versionComparison) {
    var fullVersion = pattern.exec(window.navigator.userAgent),
        majorVersion = parseInt(fullVersion[1], 10);
        
    if(versionComparison === "match" && majorVersion === version ) {
      return true;
    }
    else if(versionComparison === "greaterThan" && majorVersion > version) {
      return true;
    }
    else if(versionComparison === "lessThan" && majorVersion < version) {
      return true;
    }
    else {
      return false;
    }
  }
  
  return device;

}());

if (MODETECT.device.desktop)
{
	MetrixLab_OverlayTypeName = 0;
}
else if (MODETECT.device.tablet)
{
	MetrixLab_OverlayTypeName = 1;	
}
else if (MODETECT.device.phone)
{
	MetrixLab_OverlayTypeName = 2;
}

//global intercept
var MetrixLab_Intercept = 25;
var MetrixLab_OverlayType = '';
var MetrixLab_PopupFolderName = '';
var MetrixLab_ProjectNumber = '';
var MetrixLab_CookieFolderName = 'P08725';
var MetrixLab_OverlayImg = "";
var MetrixLab_OverlayWidth = 350;
var MetrixLab_OverlayHeight = 300;
var MetrixLab_Coordinate_YesButton = '0,0,0,0';
var MetrixLab_Coordinate_NoButton = '0,0,0,0';
var MetrixLab_Coordinate_CloseButton = '0,0,0,0';
var MetrixLab_Coordinate_PrivacyButton = '0,0,0,0';
var MetrixLab_Coordinate_MetrixButton = '0,0,0,0';
var MetrixLab_MaxMobileSeconds = 0;
var MetrixLab_ForceData='0';
var MetrixLab_counter;
var MetrixLab_DivStartLeft = '100';
var MetrixLab_DivStartTop = '100';
var MetrixLab_ElapsedSoFar = 0;
var MetrixLab_CookieName = "MetrixLab"+MetrixLab_CookieFolderName;
var MetrixLab_Ch = 'pc';
var MetrixLab_MaxPageCount=6; //Change here to invite only with in fixed page number
var MetrixLab_InviteOn = 6;  //Change here to invite only with in fixed page number

//if true the MetrixLab_CookieFolderName name should be the same in all projects
var MetrixLab_GLOB_CookieSetup = false;
var MetrixLab_PrivacyLanguage = 'nl';
var MetrixLab_AutoCloseInterval=0;
var MetrixLab_UserID='';

var MetrixLabGLOB_cookie;
var MetrixLabGLOB_Try_count = 20;

var MetrixLab_Protocol = document.location.protocol;
var MetrixLab_Referrer = encodeURIComponent(document.referrer);
var Metrixlab_InviteURL = encodeURIComponent(window.location.href);
var MetrixLab_width = 0;
var MetrixLab_height = 0;

var MetrixLab_SECookieName = "__utmz";
var MetrixLab_utmcsr = "";
var MetrixLab_utmccn = "";
var MetrixLab_utmcmd = "";
var MetrixLab_utmcct_or_utmctr = "";


var MetrixLab_ChannelURL = new Array();
//nieuw-WPM
MetrixLab_ChannelURL[0] = encodeURIComponent("https://vodafone.nl");
MetrixLab_ChannelURL[1] = encodeURIComponent("https://www.vodafone.nl/shop/");
MetrixLab_ChannelURL[2] = encodeURIComponent("https://www.vodafone.nl/shop/aanbiedingen/");
MetrixLab_ChannelURL[3] = encodeURIComponent("https://www.vodafone.nl/shop/mobiel/prepaid/");
MetrixLab_ChannelURL[4] = encodeURIComponent("https://www.vodafone.nl/shop/mobiel-internet/");
MetrixLab_ChannelURL[5] = encodeURIComponent("https://www.vodafone.nl/shop/mobiel-internet/tablet/abonnement/");
MetrixLab_ChannelURL[6] = encodeURIComponent("https://www.vodafone.nl/shop/mobiel/");
MetrixLab_ChannelURL[7] = encodeURIComponent("https://www.vodafone.nl/shop/vodafone-thuis/index.shtml");
MetrixLab_ChannelURL[8] = encodeURIComponent("https://www.vodafone.nl/shop/mobiel/telefoon/abonnement/");
MetrixLab_ChannelURL[9] = encodeURIComponent("https://www.vodafone.nl/shop/mobiel/abonnement/extra-opties/apps/");
MetrixLab_ChannelURL[19] = encodeURIComponent("https://www.vodafone.nl/zakelijk/shop/");
MetrixLab_ChannelURL[20] = encodeURIComponent("https://www.vodafone.nl/zakelijk/shop/aanbiedingen/abonnementen.shtml");
MetrixLab_ChannelURL[21] = encodeURIComponent("https://www.vodafone.nl/zakelijk/shop/mobiel/telefoon/abonnement/");
MetrixLab_ChannelURL[22] = encodeURIComponent("https://www.vodafone.nl/zakelijk/shop/mobiel/abonnement/");
MetrixLab_ChannelURL[23] = encodeURIComponent("https://www.vodafone.nl/zakelijk/shop/vast-en-mobiel/");
MetrixLab_ChannelURL[24] = encodeURIComponent("https://www.vodafone.nl/zakelijk/shop/mobiel-internet/");
MetrixLab_ChannelURL[25] = encodeURIComponent("https://www.vodafone.nl/zakelijk/");

//Roaming
MetrixLab_ChannelURL[29] = encodeURIComponent("https://www.vodafone.nl/shop/mobiel/abonnement/extra-opties/blox/alles-in-1-op-reis.shtml");
MetrixLab_ChannelURL[30] = encodeURIComponent("https://www.vodafone.nl/shop/mobiel/op-reis/tarieven-in-het-buitenland.shtml");
MetrixLab_ChannelURL[31] = encodeURIComponent("https://www.vodafone.nl/shop/mobiel/op-reis/ ");
MetrixLab_ChannelURL[32] = encodeURIComponent("https://www.vodafone.nl/shop/mobiel/prepaid/extra-opties/blox/alles-in-1-op-reis.shtml");
MetrixLab_ChannelURL[33] = encodeURIComponent("https://www.vodafone.nl/shop/mobiel/extra-opties/abonnement/blox/internet-op-reis-dagbundel-wereld.shtml");
MetrixLab_ChannelURL[34] = encodeURIComponent("https://www.vodafone.nl/shop/mobiel-internet/op-reis/");
MetrixLab_ChannelURL[35] = encodeURIComponent("https://www.vodafone.nl/shop/mobiel/op-reis/advies.shtml");
MetrixLab_ChannelURL[36] = encodeURIComponent("https://www.vodafone.nl/support/buitenland/");
MetrixLab_ChannelURL[37] = encodeURIComponent("https://www.vodafone.nl/support/buitenland/kosten-op-reis.shtml");
MetrixLab_ChannelURL[39] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/buitenland/");
MetrixLab_ChannelURL[40] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/buitenland/kosten-op-reis.shtml");
MetrixLab_ChannelURL[41] = encodeURIComponent("https://www.vodafone.nl/zakelijk/shop/internationaal/tarieven/op-reis.shtml");
MetrixLab_ChannelURL[42] = encodeURIComponent("https://www.vodafone.nl/zakelijk/shop/mobiel/op-reis.shtml#reis");
MetrixLab_ChannelURL[43] = encodeURIComponent("https://www.vodafone.nl/zakelijk/shop/mobiel/op-reis.shtml");
MetrixLab_ChannelURL[44] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/buitenland/voorkeursnetwerken.shtml");

//Support 
MetrixLab_ChannelURL[49] = encodeURIComponent("https://www.vodafone.nl/support/toestel/je-toestel-is-kwijt.shtml");
MetrixLab_ChannelURL[50] = encodeURIComponent("https://www.vodafone.nl/support/toestel/handleidingen.shtml");
MetrixLab_ChannelURL[51] = encodeURIComponent("https://www.vodafone.nl/support/");
MetrixLab_ChannelURL[52] = encodeURIComponent("https://www.vodafone.nl/support/netwerk-en-dekking/dekkingskaart.shtml");
MetrixLab_ChannelURL[53] = encodeURIComponent("https://www.vodafone.nl/support/abonnementen/hulp-bij-je-rekening.shtml");
MetrixLab_ChannelURL[54] = encodeURIComponent("https://www.vodafone.nl/support/prepaid/opwaarderen/");
MetrixLab_ChannelURL[55] = encodeURIComponent("https://www.vodafone.nl/support/algemeen/nummerbehoud/");
MetrixLab_ChannelURL[56] = encodeURIComponent("https://www.vodafone.nl/support/contact/vind-een-winkel.shtml");
MetrixLab_ChannelURL[57] = encodeURIComponent("https://www.vodafone.nl/support/algemeen/betaalde-diensten-en-telefonische-overlast/");
MetrixLab_ChannelURL[58] = encodeURIComponent("https://www.vodafone.nl/support/toestel/pukcode-en-simlock.shtml");
MetrixLab_ChannelURL[59] = encodeURIComponent("https://www.vodafone.nl/support/abonnementen/verlengen-of-opzeggen.shtml");
MetrixLab_ChannelURL[60] = encodeURIComponent("https://www.vodafone.nl/support/abonnementen/alle-tarieven-en-voorwaarden.shtml");
MetrixLab_ChannelURL[61] = encodeURIComponent("https://www.vodafone.nl/support/bestelling/je-bestelling.shtml");
MetrixLab_ChannelURL[62] = encodeURIComponent("https://www.vodafone.nl/support/netwerk-en-dekking/je-kunt-niet-bellen-of-internetten.shtml");
MetrixLab_ChannelURL[63] = encodeURIComponent("https://www.vodafone.nl/support/toestel/thuiskopieheffing.shtml");
MetrixLab_ChannelURL[64] = encodeURIComponent("https://www.vodafone.nl/support/toestel/voicemail.shtml");
MetrixLab_ChannelURL[65] = encodeURIComponent("https://www.vodafone.nl/support/vodafone-thuis/");
MetrixLab_ChannelURL[66] = encodeURIComponent("https://www.vodafone.nl/support/toestel/");
MetrixLab_ChannelURL[67] = encodeURIComponent("https://www.vodafone.nl/support/internet/");
MetrixLab_ChannelURL[68] = encodeURIComponent("https://www.vodafone.nl/support/abonnementen/");
MetrixLab_ChannelURL[69] = encodeURIComponent("https://www.vodafone.nl/support/hybride/");
MetrixLab_ChannelURL[70] = encodeURIComponent("https://www.vodafone.nl/support/prepaid/");
MetrixLab_ChannelURL[71] = encodeURIComponent("https://www.vodafone.nl/support/netwerk-en-dekking/");
MetrixLab_ChannelURL[72] = encodeURIComponent("http://handleidingen.vodafone.nl/web/");
MetrixLab_ChannelURL[73] = encodeURIComponent("https://my.vodafone.nl/my_vodafone/tegoed_en_verbruik/costcontrol");
MetrixLab_ChannelURL[74] = encodeURIComponent("https://my.vodafone.nl/my_vodafone/mijn_abonnement/BloX_voordeelbundels/");
MetrixLab_ChannelURL[75] = encodeURIComponent("https://my.vodafone.nl/my_vodafone/mijn_abonnement/Abonnement_wijzigen/");
MetrixLab_ChannelURL[76] = encodeURIComponent("https://www.vodafone.nl/support/contact/");
MetrixLab_ChannelURL[77] = encodeURIComponent("https://www.vodafone.nl/support/contact/telefoon.shtml");
MetrixLab_ChannelURL[78] = encodeURIComponent("http://forum.vodafone.nl/");
MetrixLab_ChannelURL[89] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/abonnement/abonnement-wijzigen.shtml");
MetrixLab_ChannelURL[90] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/netwerk-en-dekking/");
MetrixLab_ChannelURL[91] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/abonnement/de-rekening.shtml");
MetrixLab_ChannelURL[92] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/toestel/");
MetrixLab_ChannelURL[93] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/internet/");
MetrixLab_ChannelURL[94] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/telecombeheer/");
MetrixLab_ChannelURL[95] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/abonnement/");
MetrixLab_ChannelURL[96] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/");
MetrixLab_ChannelURL[97] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/contact/");
MetrixLab_ChannelURL[98] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/netwerk-en-dekking/dekkingskaart.shtml");
MetrixLab_ChannelURL[99] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/contact/verkooppunten.shtml");
MetrixLab_ChannelURL[100] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/bestelling/uw-bestelling.shtml");
MetrixLab_ChannelURL[101] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/toestel/voicemail.shtml");
MetrixLab_ChannelURL[102] = encodeURIComponent("https://www.vodafone.nl/zakelijk/support/toestel/simkaart.shtml");
MetrixLab_ChannelURL[103] = encodeURIComponent("https://zakelijk.vodafone.nl/zakelijk/My_Vodafone_Zakelijk/nummerbeheer/");
MetrixLab_ChannelURL[104] = encodeURIComponent("https://zakelijk.vodafone.nl/zakelijk/My_Vodafone_Zakelijk/contractbeheer/");
// Test links
MetrixLab_ChannelURL[105] = encodeURIComponent("http://invitation.opinionbar.com/popups/p14834/test.htm");

MetrixLab_ChannelURL[106] = encodeURIComponent("https://vodafone.nl/datagebruik");
MetrixLab_ChannelURL[107] = encodeURIComponent("https://vodafone.nl/datagebruik/klachtenformulier.shtml");

MetrixLab_ForceData = "998,1," + Metrixlab_InviteURL;

var MetrixLab_URL = encodeURIComponent(window.location.href);
var MetrixLab_ChannelIndex;
		
for(MetrixLab_ChannelIndex = 0; MetrixLab_ChannelIndex < MetrixLab_ChannelURL.length; MetrixLab_ChannelIndex++) 
{
	if (MetrixLab_URL == MetrixLab_ChannelURL[MetrixLab_ChannelIndex])
	{		
		//MetrixLab_OverlayImg = 'overlay' + (MetrixLab_ChannelIndex+1) + '.gif';
		//MetrixLab_ExitOverlayImg = 'wait' + (MetrixLab_ChannelIndex+1) + '.gif';
		//MetrixLab_ForceData = ";111," + (MetrixLab_ChannelIndex+1) ;
		MetrixLab_ForceData = "111," + (MetrixLab_ChannelIndex+1) ;
		//MetrixLab_Intercept = 1;
	}
}

var MetrixLab_SessionCookieName = "MetrixLab_session_" + MetrixLab_CookieFolderName;
var MetrixLab_FrequencyCookieName = "MetrixLabFrequencyControl"+MetrixLab_CookieFolderName;

switch(MetrixLab_OverlayTypeName)
{
	case 0:
		MetrixLab_Intercept = 0; //25;
		MetrixLab_OverlayType = 'entry';
		MetrixLab_PopupFolderName = 'p14834';
		MetrixLab_ProjectNumber = 'p22535_wpm';
		MetrixLab_CookieFolderName = 'P08725';
		MetrixLab_OverlayImg = "overlay.png";
		MetrixLab_OverlayWidth = 319; /*350*/
		MetrixLab_OverlayHeight = 274; /*300*/
		MetrixLab_Coordinate_YesButton = '152,181,251,216';
		MetrixLab_Coordinate_NoButton = '32,183,131,214';
		MetrixLab_Coordinate_CloseButton = '0,0,0,0';
		MetrixLab_Coordinate_PrivacyButton = '247,231,296,248';
		MetrixLab_Coordinate_MetrixButton = '172,232,244,248';
		MetrixLab_ForceData = MetrixLab_ForceData + ";998,1," + Metrixlab_InviteURL + ";" + "999,1," + MetrixLab_Referrer;
		MetrixLab_DivStartLeft = '100';
		MetrixLab_DivStartTop = '100';
		MetrixLab_Ch = 'pc';
		//console.log(MetrixLab_OverlayImg);
		//console.log(MetrixLab_CookieFolderName);
		//console.log("IN:" + MetrixLab_ForceData);
	break;
	
	case 1:
		MetrixLab_Intercept = 0;//25;
		MetrixLab_OverlayType = 'entry';
		MetrixLab_PopupFolderName = 'p14834';
		MetrixLab_ProjectNumber = 'p22535_wpm';
		MetrixLab_CookieFolderName = 'P08725';
		MetrixLab_OverlayImg = "overlay.png";
		MetrixLab_OverlayWidth = 319;
		MetrixLab_OverlayHeight = 274;
		MetrixLab_Coordinate_YesButton = '152,181,251,216';
		MetrixLab_Coordinate_NoButton = '32,183,131,214';
		MetrixLab_Coordinate_CloseButton = '0,0,0,0';
		MetrixLab_Coordinate_PrivacyButton = '247,231,296,248';
		MetrixLab_Coordinate_MetrixButton = '172,232,244,248';
		MetrixLab_ForceData = MetrixLab_ForceData + ";998,1," + Metrixlab_InviteURL + ";" + "999,1," + MetrixLab_Referrer;
		MetrixLab_DivStartLeft = '100';
		MetrixLab_DivStartTop = '100';
		MetrixLab_Ch = 'tablet';
		MetrixLab_MaxMobileSeconds = 10;
	break;
	
	case 2:
		MetrixLab_Intercept = 0;//25;
		MetrixLab_OverlayType = 'entry';
		MetrixLab_PopupFolderName = 'p14834';
		MetrixLab_ProjectNumber = 'p22535_wpm';
		MetrixLab_CookieFolderName = 'P08725';
		MetrixLab_OverlayImg = "overlay_mobile.png";
		MetrixLab_OverlayWidth = 200;
		MetrixLab_OverlayHeight = 200;
		MetrixLab_Coordinate_YesButton = '42,153,158,180';
		MetrixLab_Coordinate_NoButton = '42,120,158,146';
		MetrixLab_Coordinate_CloseButton = '0,0,0,0';
		MetrixLab_Coordinate_PrivacyButton = '0,0,0,0';
		MetrixLab_Coordinate_MetrixButton = '0,0,0,0';
		MetrixLab_ForceData = MetrixLab_ForceData + ";998,1," + Metrixlab_InviteURL + ";" + "999,1," + MetrixLab_Referrer;
		MetrixLab_DivStartLeft = '40';
		MetrixLab_DivStartTop = '40';
		MetrixLab_Ch = 'mobile';
		MetrixLab_MaxMobileSeconds = 10;
	break;
	
}

try
{
	if (typeof window.innerWidth != 'undefined')
	{
	  MetrixLab_width = window.innerWidth;
	  MetrixLab_height = window.innerHeight;
	}
	else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth !='undefined' && document.documentElement.clientWidth != 0)
	{
	   MetrixLab_width = document.documentElement.clientWidth;
	   MetrixLab_height = document.documentElement.clientHeight;
	}
	else
	{
	   MetrixLab_width = document.getElementsByTagName('body')[0].clientWidth;
	   MetrixLab_height = document.getElementsByTagName('body')[0].clientHeight;
	}
}
catch(error){}

if((MetrixLab_width > 0) &&(MetrixLab_height > 0))
{
	if((MetrixLab_OverlayTypeName === 0) || (MetrixLab_OverlayTypeName === 1))
	{
		try
		{
			//MetrixLab_DivStartLeft = (MetrixLab_width-MetrixLab_OverlayWidth)/2;
			//MetrixLab_DivStartTop = (MetrixLab_height-MetrixLab_OverlayHeight)/2;
		}
		catch(error){}
	}
}

function MetrixLab_GetCookieValue(CookieName)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==CookieName)
		{
			return unescape(y);
		}
	}
	return 0;
}

function MetrixLab_GetFreqCookieValue(name) 
{
	var MetrixLab_name = name + "=";
	var MetrixLab_cd = document.cookie.split( ';');
	for( var i=0;i < MetrixLab_cd.length;i++) 
	{
			var MetrixLab_c = MetrixLab_cd[i];
			while (MetrixLab_c.charAt(0)==' ') MetrixLab_c = MetrixLab_c.substring(1,MetrixLab_c.length);
			if (MetrixLab_c.indexOf(MetrixLab_name) == 0) return MetrixLab_c.substring(MetrixLab_name.length,MetrixLab_c.length);
	}
	return "0";
}

function MetrixLab_SetUserID()
{
	var Today = new Date();
	MetrixLab_UserID=''+Today.getFullYear()+'_'+(Today.getMonth()+1)+'_'+Today.getDate()+'_'+Today.getHours()+'_'+Today.getMinutes()+'_'+Today.getSeconds()+'_'+Today.getMilliseconds();	
}

function MetrixLab_isCookieEnabled()
{
    //Blocking the overlay for below URLs
	if(MetrixLab_URL == MetrixLab_ChannelURL[105] || MetrixLab_URL == MetrixLab_ChannelURL[106] ||  MetrixLab_URL == MetrixLab_ChannelURL[107])
	{
	   return false;
	}
	var cookieEnabled=(navigator.cookieEnabled)? true : false;
    
    if (typeof navigator.cookieEnabled=="undefined" && !cookieEnabled)
    { 
	    document.cookie="MetrixLabTestCookie";
	    cookieEnabled=(document.cookie.indexOf("MetrixLabTestCookie")!=-1)? true : false;
    }    
    return cookieEnabled;      	
}

function MetrixLab_GetRandomNumber(MetrixLab_minValue,MetrixLab_maxValue)
{
    var MetrixLab_result = 0;

    if (MetrixLab_minValue<=MetrixLab_maxValue)
    {
	    MetrixLab_result=Math.round((Math.random()*(MetrixLab_maxValue-MetrixLab_minValue+1))+MetrixLab_minValue-0.5);
	}	
	return MetrixLab_result;
}


function MetrixLab_SetSessionCookie()
{
	document.cookie = MetrixLab_SessionCookieName+"=1; path=/;";
}

function MetrixLab_SetCookie()
{
    var MetrixLab_expires = new Date();
	MetrixLab_expires.setTime(MetrixLab_expires.getTime() + (180*24*60*60*1000));
	document.cookie = MetrixLab_CookieName+"=1; expires=" + MetrixLab_expires.toGMTString() + "; path=/;";

	if (MetrixLab_GLOB_CookieSetup)
	{	
		MetrixLab_GLOB_setCookie();
	}
}

function MetrixLab_SetCookieElapsed(seconds)
{
	document.cookie = "Elapsedp14834" + "=" + seconds+"; path=/;";
}


function MetrixLab_ShowOverlay()
{
	try
	{
		MetrixLab_counter = window.clearInterval(MetrixLab_counter);
	}
	catch(error){};
	MetrixLab_SetUserID();
    MetrixLab_LoadOverlay();
    if (MetrixLab_AutoCloseInterval>0)
    {
            setTimeout("MetrixLab_CloseBanner();",MetrixLab_AutoCloseInterval*1000);
    }
}


function MetrixLab_GLOB_setCookie()
{
	var MetrixLabGLOB_Time = new Date();
	var MetrixLabGLOB_Script = document.createElement('script');
	MetrixLabGLOB_Script.src=MetrixLab_Protocol+'//invitation.opinionbar.com/popups/'+MetrixLab_PopupFolderName+'/cookie.asp?s='+MetrixLab_CookieName+'_GLOB&m=set&t='+MetrixLabGLOB_Time.getTime();
	MetrixLabGLOB_Script.type='text/javascript';
	var MetrixLabGLOB_Body = document.getElementsByTagName('body').item(0);
	MetrixLabGLOB_Body.appendChild(MetrixLabGLOB_Script); 
}



function MetrixLab_GLOB_getCookie()
{
	var MetrixLabGLOB_Time = new Date();
	var MetrixLabGLOB_Script = document.createElement('script');
	MetrixLabGLOB_Script.src=MetrixLab_Protocol+'//invitation.opinionbar.com/popups/'+MetrixLab_PopupFolderName+'/cookie.asp?s='+MetrixLab_CookieName+'_GLOB&m=get&t='+MetrixLabGLOB_Time.getTime();
	MetrixLabGLOB_Script.type='text/javascript';
	var MetrixLabGLOB_Body = document.getElementsByTagName('body').item(0);
	MetrixLabGLOB_Body.appendChild(MetrixLabGLOB_Script); 
}


function MetrixLabGLOB_checkCookie()
{                
    if (typeof MetrixLabGLOB_cookie != "undefined")
    {     
		if (MetrixLabGLOB_cookie==false)     
		{                         
			//cookie not set
			MetrixLab_ShowOverlay();
		}
		else
		{
			//cookie set
		}
		
    }
	else
	{ 
		MetrixLabGLOB_Try_count--;
		if (MetrixLabGLOB_Try_count>0)
		{
			setTimeout('MetrixLabGLOB_checkCookie();',500);
		}
	}
}

function MetrixLab_CheckCookie()
{
	
	if (document.cookie.indexOf(MetrixLab_CookieName)==-1)
	{
		if (MetrixLab_GLOB_CookieSetup)
		{
			MetrixLab_GLOB_getCookie();
			MetrixLabGLOB_checkCookie();
		}
		else
		{
			//check the SEO cookies
			try
			{
				var MetrixLab_SECookieString = MetrixLab_GetCookieValue(MetrixLab_SECookieName);
				//MetrixLab_SECookieString = "96056067.1337352174.2.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=nett fr";
				
				//utmctr
				if(MetrixLab_SECookieString.length > 0)
				{
					if(MetrixLab_SECookieString.indexOf("utmctr=") != -1)
					{
						
						var helpstring = MetrixLab_SECookieString.substring(MetrixLab_SECookieString.indexOf("utmctr="), MetrixLab_SECookieString.length);
						if(helpstring.indexOf("|") != -1)
						{
							MetrixLab_utmcct_or_utmctr = helpstring.substring(helpstring.indexOf("utmctr=")+7, helpstring.indexOf("|"));
						}
						else
						{
							MetrixLab_utmcct_or_utmctr = helpstring.substring(helpstring.indexOf("utmctr=")+7, helpstring.length);
						}
						
						var helpstring = MetrixLab_SECookieString.substring(MetrixLab_SECookieString.indexOf("utmcct="), MetrixLab_SECookieString.length);
						if(helpstring.indexOf("|") != -1)
						{
							if(MetrixLab_utmcct_or_utmctr.length > 0)
							{
								MetrixLab_utmcct_or_utmctr = MetrixLab_utmcct_or_utmctr + '|' + helpstring.substring(helpstring.indexOf("utmcct=")+7, helpstring.indexOf("|"));
							}
							else
							{
								MetrixLab_utmcct_or_utmctr = helpstring.substring(helpstring.indexOf("utmcct=")+7, helpstring.indexOf("|"));
							}
						}
						else
						{
							if(MetrixLab_utmcct_or_utmctr.length > 0)
							{
								MetrixLab_utmcct_or_utmctr = MetrixLab_utmcct_or_utmctr + '|' + helpstring.substring(helpstring.indexOf("utmcct=")+7, helpstring.length);
							}
							else
							{
								MetrixLab_utmcct_or_utmctr = helpstring.substring(helpstring.indexOf("utmcct=")+7, helpstring.length);
							}
						}
					}

					//utmcsr
					if(MetrixLab_SECookieString.indexOf("utmcsr=") != -1)
					{
						var helpstring = MetrixLab_SECookieString.substring(MetrixLab_SECookieString.indexOf("utmcsr="), MetrixLab_SECookieString.length);
						if(helpstring.indexOf("|") != -1)
						{
							MetrixLab_utmcsr = helpstring.substring(helpstring.indexOf("utmcsr=")+7, helpstring.indexOf("|"));
						}
						else
						{
							MetrixLab_utmcsr = helpstring.substring(helpstring.indexOf("utmcsr=")+7, helpstring.length);
						}
					}
					
					//utmccn
					if(MetrixLab_SECookieString.indexOf("utmccn=") != -1)
					{
						var helpstring = MetrixLab_SECookieString.substring(MetrixLab_SECookieString.indexOf("utmccn="), MetrixLab_SECookieString.length);
						if(helpstring.indexOf("|") != -1)
						{
							MetrixLab_utmccn = helpstring.substring(helpstring.indexOf("utmccn=")+7, helpstring.indexOf("|"));
						}
						else
						{
							MetrixLab_utmccn = helpstring.substring(helpstring.indexOf("utmccn=")+7, helpstring.length);
						}
					}
					
					//utmcmd
					if(MetrixLab_SECookieString.indexOf("utmcmd=") != -1)
					{
						var helpstring = MetrixLab_SECookieString.substring(MetrixLab_SECookieString.indexOf("utmcmd="), MetrixLab_SECookieString.length);
						if(helpstring.indexOf("|") != -1)
						{
							MetrixLab_utmcmd = helpstring.substring(helpstring.indexOf("utmcmd=")+7, helpstring.indexOf("|"));
						}
						else
						{
							MetrixLab_utmcmd = helpstring.substring(helpstring.indexOf("utmcmd=")+7, helpstring.length);
						}
					}
				}
			}
			catch(error){};
			MetrixLab_ForceData = MetrixLab_ForceData + ";999,1,"+MetrixLab_utmcsr+",;999,2,"+MetrixLab_utmccn+",;999,3,"+MetrixLab_utmcmd+",;999,4,"+MetrixLab_utmcct_or_utmctr;
			MetrixLab_ShowOverlay();
			
		}
	}
	 
}

function MetrixLab_SetFrequencyCookie(MetrixLab_value)
{
    var MetrixLab_expires = new Date();
	MetrixLab_expires.setTime(MetrixLab_expires.getTime() + (7*24*60*60*1000));
	
	//Added by Anusha 28 March 2014
	
	if(MetrixLab_value < MetrixLab_MaxPageCount) //Change the maximum number of pages here
	{
	    document.cookie = MetrixLab_FrequencyCookieName+"="+MetrixLab_value+"; expires=" + MetrixLab_expires.toGMTString() + "; path=/;";
	}
	
}

function MetrixLab_CheckIntercept()
{
	var MetrixLab_pageCount = parseInt(MetrixLab_GetCookieValue(MetrixLab_FrequencyCookieName))+1;
	if(parseInt(MetrixLab_InviteOn) > MetrixLab_pageCount) 
	{
		MetrixLab_RandomNumber = MetrixLab_GetRandomNumber(1,MetrixLab_Intercept);
		if (MetrixLab_RandomNumber==1)
		{
			MetrixLab_CheckCookie();
		}
		else
		{
			try
			{
				MetrixLab_counter = window.clearInterval(MetrixLab_counter);
			}
			catch(error){};
		}
		MetrixLab_SetFrequencyCookie(MetrixLab_pageCount);
	}
	else
	{
		MetrixLab_SetFrequencyCookie(MetrixLab_pageCount); 
	}
}

function MetrixLab_CheckInterceptNoCookie()
{
	
    MetrixLab_RandomNumber = MetrixLab_GetRandomNumber(1,MetrixLab_Intercept);
    if (MetrixLab_RandomNumber==1)
    {
        MetrixLab_ShowOverlay();
    }
}

function MetrixLab_GoToPrivacy()
{
	PopupPrivacy = window.open('http://www.opinionbar.com/'+MetrixLab_PrivacyLanguage+'/privacy.asp','PopupPrivacy','resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,width=750,height=450');
}

function MetrixLab_GoToMetrixLab()
{
	PopupPrivacy = window.open('http://www.MetrixLab.com/','PopupPrivacy','resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,width=750,height=450');
}

function MetrixLab_GoToWebSurvey()
{
    switch(MetrixLab_OverlayType)
    {
        case 'entry':
            MetrixLab_GoToWebSurveyEntry();
        break;
        case 'exit':
            MetrixLab_GoToWebSurveyExit();
        break;
        case 'entryexit':
            MetrixLab_GoToWebSurveyEntryExit();
        break;
    }
}

function MetrixLab_GoToWebSurveyEntry()
{
	MetrixLab_SetCookie();
    if (MetrixLab_ForceData=='0')
    {					
        PopupWebSurvey = window.open('http://websurvey2.opinionbar.com/go_ref.asp?s='+MetrixLab_ProjectNumber+'&c='+MetrixLab_Ch+'&t=4','PopupWebSurvey','resizable=yes,scrollbars=yes,toolbar=no,menubar=no,width=850,height=450');					
    }
    else
    {
        PopupWebSurvey = window.open('http://websurvey2.opinionbar.com/go_ref.asp?s='+MetrixLab_ProjectNumber+'&c='+MetrixLab_Ch+'&t=4&f=;'+MetrixLab_ForceData+'','PopupWebSurvey','resizable=yes,scrollbars=yes,toolbar=no,menubar=no,width=850,height=450');
    }				

    MetrixLab_CloseBanner();
}

function MetrixLab_GoToWebSurveyExit()
{
   MetrixLab_ShowPopupEntryExit();
   MetrixLab_CloseBanner();
}

function GoTowebSurveyEntryExit()
{
   MetrixLab_ShowPopupEntryExit();
   MetrixLab_CloseBanner();
}

function MetrixLab_CloseBanner()
{
	MetrixLab_SetCookie();
    var MetrixLab_Div=document.getElementById('MetrixLab_Div');
    if (MetrixLab_Div)
    {
        MetrixLab_Div.parentNode.removeChild(MetrixLab_Div);
    }
}

function MetrixLab_ShowPopupEntryExit()
{
	MetrixLab_SetCookie();
	MetrixLab_PopupAttributes="resizable=yes,scrollbars=yes,toolbar=no,menubar=no,width=450,height=370,left="+MetrixLab_DivStartLeft+",top="+MetrixLab_DivStartTop;
	
	MetrixLab_PopupWin=open('inv.htm', 'new_window', MetrixLab_PopupAttributes);
	MetrixLab_PopupWin.document.write('<html><head><title>Opinionbar Websurvey</title></head>');
	MetrixLab_PopupWin.document.write('<body>');
	
	
	MetrixLab_PopupWin.document.write('<scr'+'ipt>');
	MetrixLab_PopupWin.document.write("var metrixlab_userid='"+MetrixLab_UserID+"';");
	MetrixLab_PopupWin.document.write("var metrixlab_ForceData='"+MetrixLab_ForceData+"';");
	MetrixLab_PopupWin.document.write("var MetrixLab_Ch='"+MetrixLab_Ch+"';");
	MetrixLab_PopupWin.document.write("var MetrixLab_Ref='"+MetrixLab_Referrer+"';");
	MetrixLab_PopupWin.document.write('</scr'+'ipt>');	
	MetrixLab_PopupWin.document.write("<script language='javascript' src='"+MetrixLab_Protocol+"//invitation.opinionbar.com/popups/"+MetrixLab_PopupFolderName+"/exit.js'>");
	MetrixLab_PopupWin.document.write('</scr'+'ipt>');
	
	
	MetrixLab_PopupWin.document.write('</body></html>');
	if (navigator.userAgent.indexOf('Firefox') !=-1)
	{
		MetrixLab_PopupWin.window.open('about:blank').close();
	}
	MetrixLab_PopupWin.blur();

	try {
	window.blur();
	window.focus();
	} catch(error){}
	
}

function Metrixlab_SetDivVisible()
{
	document.getElementById('MetrixLab_overlay').style.display='block';
}

function metrixlab_onready(el, func){
	this.args = new Array(el, func)
	this.doTry = function(){
			try{
					var el = eval(this.args[0])
					el.onloading = this.args[1]
					el.onloading()
					clearInterval(this.args[2])
			}
			catch(e){}
	}
	this.doTry.bind = function(object){
			var method = this;
			return function(){
					method.apply(object);
			}
	}
	this.args[2] = setInterval(this.doTry.bind(this), 250);
	return this
}

function MetrixLab_LoadOverlay()
{    
    var MetrixLab_HTMLString="";
    MetrixLab_HTMLString += "<MAP name='MetrixLab_Popup_Map'>\n";
    MetrixLab_HTMLString += " <AREA shape='rect' coords='"+MetrixLab_Coordinate_YesButton+"' href='javascript:MetrixLab_GoToWebSurvey();' target='_self'>\n";
    MetrixLab_HTMLString += " <AREA shape='rect' coords='"+MetrixLab_Coordinate_NoButton+"' href='javascript:MetrixLab_CloseBanner();' target='_self'>\n";
    MetrixLab_HTMLString += " <AREA shape='rect' coords='"+MetrixLab_Coordinate_CloseButton+"' href='javascript:MetrixLab_CloseBanner();' target='_self'>\n";
    MetrixLab_HTMLString += " <AREA shape='rect' coords='"+MetrixLab_Coordinate_PrivacyButton+"' href='javascript:MetrixLab_GoToPrivacy();' target='_self'>\n";
    MetrixLab_HTMLString += " <AREA shape='rect' coords='"+MetrixLab_Coordinate_MetrixButton+"' href='javascript:MetrixLab_GoToMetrixLab();' target='_self'>\n";    
	MetrixLab_HTMLString += "</MAP>\n";
    MetrixLab_HTMLString += "<div id='MetrixLab_overlay' style='display:none;position:absolute; z-index:9999999; left: "+MetrixLab_DivStartLeft+"px; top: "+MetrixLab_DivStartTop+"px;'>";    
    MetrixLab_HTMLString += "<img onload='Metrixlab_SetDivVisible();' style='margin:0 auto;' src='"+MetrixLab_Protocol+"//invitation.opinionbar.com/popups/"+MetrixLab_PopupFolderName+"/"+MetrixLab_OverlayImg+"' USEMAP='#MetrixLab_Popup_Map' alt='' border='0' width='"+MetrixLab_OverlayWidth+"' height='"+MetrixLab_OverlayHeight+"' name='MetrixLab_overlay_gif' id='MetrixLab_gif'>";    
    MetrixLab_HTMLString += "</div>";
    
    var MetrixLab_Body=document.getElementsByTagName('body').item(0);
    var MetrixLab_Div = document.createElement('div');
    MetrixLab_Div.style.display='block';
    MetrixLab_Div.id='MetrixLab_Div';
    MetrixLab_Div.innerHTML = MetrixLab_HTMLString;
    MetrixLab_Body.appendChild(MetrixLab_Div);
}

function MetrixLab_SetElapsedSeconds()
{
	try
	{
		MetrixLab_ElapsedSoFar = parseInt(MetrixLab_ElapsedSoFar) + 1;
	}
	catch(error){MetrixLab_ElapsedSoFar = 0;};
	if(MetrixLab_ElapsedSoFar < MetrixLab_MaxMobileSeconds)
	{
		MetrixLab_SetCookieElapsed(MetrixLab_ElapsedSoFar);
	}
}

//PC
if(MetrixLab_OverlayTypeName == 0)
{
	if (MetrixLab_isCookieEnabled())
	{
		new metrixlab_onready("document", function(){MetrixLab_CheckIntercept()});
	}
}
else
{
	//Mobile and Tablet
	if (MetrixLab_isCookieEnabled())
	{
		new metrixlab_onready("document", function(){
			MetrixLab_ElapsedSoFar = MetrixLab_GetCookieValue("Elapsedp14834");
			try
			{
				MetrixLab_ElapsedSoFar = parseInt(MetrixLab_ElapsedSoFar);
			}
			catch(error){MetrixLab_ElapsedSoFar = 0;}
			if(parseInt(MetrixLab_ElapsedSoFar) < MetrixLab_MaxMobileSeconds)
			{
				var MetrixLab_MaxMobileSecondshelper = parseInt(MetrixLab_MaxMobileSeconds) - parseInt(MetrixLab_ElapsedSoFar);
				if (document.cookie.indexOf(MetrixLab_CookieName)==-1)
				{
					if(MetrixLab_MaxMobileSecondshelper > 0)
					{
						setTimeout("MetrixLab_CheckIntercept();",MetrixLab_MaxMobileSecondshelper*1000);
						MetrixLab_counter = self.setInterval(function(){MetrixLab_SetElapsedSeconds()},1000);
					}
				}
			}
			else
			{
			
			}
		});
	}
	else
	{
		/*new metrixlab_onready("document", function(){
			setTimeout("MetrixLab_CheckInterceptNoCookie();",MetrixLab_MaxMobileSeconds*1000);
		});*/
	}
}
