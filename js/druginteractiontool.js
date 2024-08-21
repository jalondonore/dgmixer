var animationrolling = false;

$( document ).ready(function() {	
	$('#imageslide').collapse('show');
	selecteddrug();

	});

function selecteddrug(){

	if((document.getElementById("selection1").value!="") || (document.getElementById("selection2").value!="")){
		$('#imageslide').collapse('show');	
	}

	$('#information').collapse('hide');
	disableoptions();
	/*Left Option Select Control*/
	switch(document.getElementById("selection1").value) {
	    case 'alcohol':
	    	resetall_l();
	        $('.alcohol').removeClass("dit_hiddenx");
			document.getElementById("alcoholimg").style.left = "0";
	        break;
	    case 'cocaine':
	    	resetall_l();
			$('.powderdrug').removeClass("dit_hiddenx");
			document.getElementById("powderdrugimg").style.left = "0";
	        break;
	   	case 'heroin':
	    	resetall_l();
			$('.heroin').removeClass("dit_hiddenx");
			document.getElementById("heroinimg").style.left = "0";
	        break;
	   	case 'marijuana':
	    	resetall_l();
			$('.marijuana').removeClass("dit_hiddenx");
			document.getElementById("marijuanaimg").style.left = "0";
	        break;
	    case 'meth':
	    	resetall_l();
			$('.meth').removeClass("dit_hiddenx");
			document.getElementById("methimg").style.left = "0";
	        break;
	    case '':
        	resetall_l();         
	}

	/*Right Option Select Control*/
	switch(document.getElementById("selection2").value) {
	    case 'alcohol':
	    	resetall_r();
			$('.alcohol-r').removeClass("dit_hiddenx");
			document.getElementById("alcoholimg-r").style.right = "0";
	        break;
	    case 'cocaine':
	    	resetall_r();
			$('.powderdrug-r').removeClass("dit_hiddenx");
			document.getElementById("powderdrugimg-r").style.right = "0";
	        break;
	   	case 'heroin':
	    	resetall_r();
			$('.heroin-r').removeClass("dit_hiddenx");
			document.getElementById("heroinimg-r").style.right = "0";
	        break;
	    case 'marijuana':
	    	resetall_r();
			$('.marijuana-r').removeClass("dit_hiddenx");
			document.getElementById("marijuanaimg-r").style.right = "0";
	        break;
	    case 'meth':
	    	resetall_r();
			$('.meth-r').removeClass("dit_hiddenx");
			document.getElementById("methimg-r").style.right = "0";
	        break;
    	case '':
        	resetall_r();
	}

	/*call init shake when the conditions are ok*/
	if((document.getElementById("selection1").value!="") && (document.getElementById("selection2").value!="") && animationrolling == false){
		animationrolling = true;
		init_shake();
	}

}

//clean the status of the left slide
function resetall_l(){
	$('.alcohol').addClass("dit_hiddenx");
	document.getElementById("alcoholimg").style.left = "-600px";

	$('.powderdrug').addClass("dit_hiddenx");
	document.getElementById("powderdrugimg").style.left = "-600px";

	$('.meth').addClass("dit_hiddenx");
	document.getElementById("methimg").style.left = "-600px";

	$('.marijuana').addClass("dit_hiddenx");
	document.getElementById("marijuanaimg").style.left = "-600px";

	$('.heroin').addClass("dit_hiddenx");
	document.getElementById("heroinimg").style.left = "-600px";

}

//clean the status of the right slide
function resetall_r(){
	$('.alcohol-r').addClass("dit_hiddenx");
	document.getElementById("alcoholimg-r").style.right = "-600px";

	$('.powderdrug-r').addClass("dit_hiddenx");
	document.getElementById("powderdrugimg-r").style.right = "-600px";

	$('.meth-r').addClass("dit_hiddenx");
	document.getElementById("methimg-r").style.right = "-600px";

	$('.marijuana-r').addClass("dit_hiddenx");
	document.getElementById("marijuanaimg-r").style.right = "-600px"
			
	$('.heroin-r').addClass("dit_hiddenx");
	document.getElementById("heroinimg-r").style.right = "-600px"		

}

function combinationsp(){
	document.getElementById("submitbutton").style.visibility = "hidden";
	document.getElementById("slidebardit").style.visibility = "visible";
}

function combinationspx(){
	document.getElementById("submitbutton").style.visibility = "hidden";
	document.getElementById("shaker").style.visibility = "visible";	
}


//check user selections and display text articles
function combinations() {
	resetall_r();
	resetall_l();
	$('#imageslide').collapse('hide');

	/*alcohol and cocaine combination control*/			
	if(((document.getElementById("selection1").value =="alcohol") || (document.getElementById("selection2").value=="alcohol")) && ((document.getElementById("selection1").value == "cocaine") || (document.getElementById("selection2").value =="cocaine"))) {
		$('#alcoholandcocaine').removeClass("dit_hiddenx");
		document.getElementById("alcoholandcocaine").style.display = "block";
	}else{
		document.getElementById("alcoholandcocaine").style.display = "none";
		$('#alcoholandcocaine').addClass("dit_hiddenx");
	}
	/*alcohol and heroin combination control*/
	if(((document.getElementById("selection1").value =="alcohol") || (document.getElementById("selection2").value=="alcohol")) && ((document.getElementById("selection1").value == "heroin") || (document.getElementById("selection2").value =="heroin"))) {
		document.getElementById("alcoholandheroin").style.display = "block";
		$('#alcoholandheroin').removeClass("dit_hiddenx");
	}else{
		document.getElementById("alcoholandheroin").style.display = "none";
		$('#alcoholandheroin').addClass("dit_hiddenx");
	}
	/*alcohol and marijuana combination control*/
	if(((document.getElementById("selection1").value =="alcohol") || (document.getElementById("selection2").value=="alcohol")) && ((document.getElementById("selection1").value == "marijuana") || (document.getElementById("selection2").value =="marijuana"))) {
		document.getElementById("alcoholandmarijuana").style.display = "block";
		$('#alcoholandmarijuana').removeClass("dit_hiddenx");
	}else{
		document.getElementById("alcoholandmarijuana").style.display = "none";
		$('#alcoholandmarijuana').addClass("dit_hiddenx");
	}
	/*alcohol and meth combination control*/
	if(((document.getElementById("selection1").value =="alcohol") || (document.getElementById("selection2").value=="alcohol")) && ((document.getElementById("selection1").value == "meth") || (document.getElementById("selection2").value =="meth"))) {
		document.getElementById("alcoholandmeth").style.display = "block";
		$('#alcoholandmeth').removeClass("dit_hiddenx");
	}else{
		document.getElementById("alcoholandmeth").style.display = "none";
		$('#alcoholandmeth').addClass("dit_hiddenx");
	}
	/*Marijuana and Cocaine combination control*/
	if(((document.getElementById("selection1").value =="marijuana") || (document.getElementById("selection2").value=="marijuana")) && ((document.getElementById("selection1").value == "cocaine") || (document.getElementById("selection2").value =="cocaine"))) {

		document.getElementById("marijuanaandcocaine").style.display = "block";
		$('#marijuanaandcocaine').removeClass("dit_hiddenx");
	}else{
		document.getElementById("marijuanaandcocaine").style.display = "none";
		$('#marijuanaandcocaine').addClass("dit_hiddenx");
	}
	/*Marijuana and Heroin combination control*/
	if(((document.getElementById("selection1").value =="marijuana") || (document.getElementById("selection2").value=="marijuana")) && ((document.getElementById("selection1").value == "heroin") || (document.getElementById("selection2").value =="heroin"))) {
		document.getElementById("marijuanaandheroin").style.display = "block";
		$('#marijuanaandheroin').removeClass("dit_hiddenx");
	}else{
		document.getElementById("marijuanaandheroin").style.display = "none";
		$('#marijuanaandheroin').addClass("dit_hiddenx");
	}
	/*Marijuana and Meth combination control*/
	if(((document.getElementById("selection1").value =="marijuana") || (document.getElementById("selection2").value=="marijuana")) && ((document.getElementById("selection1").value == "meth") || (document.getElementById("selection2").value =="meth"))) {
		document.getElementById("marijuanaandmeth").style.display = "block";
		$('#marijuanaandmeth').removeClass("dit_hiddenx");
	}else{
		document.getElementById("marijuanaandmeth").style.display = "none";
		$('#marijuanaandmeth').addClass("dit_hiddenx");
	}
	/*Cocaine and Heroin combination control*/
	if(((document.getElementById("selection1").value =="cocaine") || (document.getElementById("selection2").value=="cocaine")) && ((document.getElementById("selection1").value == "heroin") || (document.getElementById("selection2").value =="heroin"))) {
		document.getElementById("cocaineandheroin").style.display = "block";
		$('#cocaineandheroin').removeClass("dit_hiddenx");
	}else{
		document.getElementById("cocaineandheroin").style.display = "none";
		$('#cocaineandheroin').addClass("dit_hiddenx");
	}
	/*Cocaine and Heroin combination control*/
	if(((document.getElementById("selection1").value =="cocaine") || (document.getElementById("selection2").value=="cocaine")) && ((document.getElementById("selection1").value == "meth") || (document.getElementById("selection2").value =="meth"))) {
		document.getElementById("cocaineandmeth").style.display = "block";
		$('#cocaineandmeth').removeClass("dit_hiddenx");
	}else{
		document.getElementById("cocaineandmeth").style.display = "none";
		$('#cocaineandmeth').addClass("dit_hiddenx");
	}
	/*Meth and Heroin combination control*/
	if(((document.getElementById("selection1").value =="meth") || (document.getElementById("selection2").value=="meth")) && ((document.getElementById("selection1").value == "heroin") || (document.getElementById("selection2").value =="heroin"))) {
		document.getElementById("methandheroin").style.display = "block";
		$('#methandheroin').removeClass("dit_hiddenx");
	}else{
		document.getElementById("methandheroin").style.display = "none";
		$('#methandheroin').addClass("dit_hiddenx");
	}

	$('#information').collapse('show');

}

//this function avoid to user choose two times the same item in the select option
function disableoptions(){

	var op = document.getElementById("selection2").getElementsByTagName("option");
	for (var i = 0; i < op.length; i++) {
  		// lowercase comparison for case-insensitivity
  		(op[i].value.toLowerCase() == document.getElementById("selection1").value) 
    	? op[i].disabled = true 
    	: op[i].disabled = false ;
	}

	var op = document.getElementById("selection1").getElementsByTagName("option");
	for (var i = 0; i < op.length; i++) {
  		// lowercase comparison for case-insensitivity
  		(op[i].value.toLowerCase() == document.getElementById("selection2").value) 
    	? op[i].disabled = true 
    	: op[i].disabled = false ;
	}
}

//reset all options
function clearxt() {
	resetall_r();
	resetall_l();
	
	$('#imageslide').collapse('hide');
	$('#information').collapse('hide');

	document.getElementById("submitbutton").style.visibility = "hidden";
	document.getElementById("selection1").value ="";
	document.getElementById("selection2").value ="";
	disableoptions();
}

async function scrollTo() {
	await sleep(500);
	location.hash = "#imageslide";
}

async function returntop() {
	await sleep(100);
	location.hash = "#dit_logo";	    
	clearxt();
}



async function init_shake() {
	await sleep(2000);
	document.getElementById("shakerdito").style.visibility = "visible"; //habilitar para shaker
	shakeranim();

}

async function dit_successp() {
	await sleep(1000);
	document.getElementById("dit_success").style.visibility = "hidden";  
	combinations();
	await sleep(100);
	document.getElementById("selection1").disabled = false;
	document.getElementById("selection2").disabled = false;
}

//JS timer
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


/*Play animation with time directly from the JS timer for browsers compatibility. */
async function shakeranim(){
	document.getElementById("shakerdito").style.visibility = "visible";
	$('#shakerdito').addClass('animated bounceInUp');
	await sleep(500);
	$('#shakerdito').removeClass('animated bounceInUp');
	$('#shakerdit').addClass('animated shake');
			  $(function() {
				$(".meter > span").each(function() {
					$(this)
						.data("origWidth", $(this).width())
						.width(0)
						.animate({
							width: "100%"
						}, 2000).animate({
							width: "0%"
						}, 0)

				});
	
			});

	await sleep(2000);
	$('#shakerdit').removeClass('animated shake');
	$('#shakerdito').addClass('animated bounceOutDown');
	await sleep(100);	
	document.getElementById("selection1").disabled = true;
	document.getElementById("selection2").disabled = true;

	document.getElementById("shakerdito").style.visibility = "hidden";
	$('#shakerdito').removeClass('animated bounceOutDown');
			 document.getElementById("dit_success").style.visibility = "visible";

			$('#dit_success').animateCss('bounceInUp', function() {

	  			dit_successp();
			});
	document.getElementById("selection1").disabled = false;
	document.getElementById("selection2").disabled = false;
	animationrolling = false;
}



//
$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});




