function redirectPage() {
 window.location = linkLocation;
} 

$(document).ready(function() {
	$('a.fadeout').click( function( event ){
		if( this.href == "" || this.href == null ) { event.preventDefault(); return; }
		if( (this.href.indexOf("#") == -1) && (this.href.indexOf("mailto:") == -1) && (this.href.indexOf("javascript:") == -1) && (this.target != "_blank")) {
			event.preventDefault();
			linkLocation = this.href;
			$('html, body').animate({scrollTop:0}, 'slow');
			$('.dim').fadeIn(500, redirectPage);
		}
	}); 
});


if ((/windows|android|mac|iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
window.onpageshow = function(evt) {
if (evt.persisted) {
document.body.style.display = "none";
location.reload();
}
};
}