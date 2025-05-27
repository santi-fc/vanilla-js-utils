Element.prototype.slideUp = function ( duration = 500 ) {
    this.style.transitionProperty = 'height, margin, padding';
    this.style.transitionDuration = duration + 'ms';
    this.style.boxSizing          = 'border-box';
    this.style.height             = this.offsetHeight + 'px';
	this.offsetHeight;
    this.style.overflow           = 'hidden';
    this.style.height             = 0;
    this.style.paddingTop         = 0;
    this.style.paddingBottom      = 0;
    this.style.marginTop          = 0;
    this.style.marginBottom       = 0;
	window.setTimeout( 
        () => {
		  this.style.display = 'none';
		  this.style.removeProperty( 'height' );
		  this.style.removeProperty( 'padding-top' );
		  this.style.removeProperty( 'padding-bottom' );
		  this.style.removeProperty( 'margin-top' );
		  this.style.removeProperty( 'margin-bottom' );
		  this.style.removeProperty( 'overflow' );
		  this.style.removeProperty( 'transition-duration' );
		  this.style.removeProperty( 'transition-property' );
	}, duration);
};

Element.prototype.slideDown = function ( duration = 500 ) {
	this.style.removeProperty( 'display' );
	let display = window.getComputedStyle( this ).display;
	if (display === 'none') display = 'block';
    this.style.display            = display;
    let height                    = this.offsetHeight;
    this.style.overflow           = 'hidden';
    this.style.height             = 0;
    this.style.paddingTop         = 0;
    this.style.paddingBottom      = 0;
    this.style.marginTop          = 0;
    this.style.marginBottom       = 0;
	this.offsetHeight;
    this.style.boxSizing          = 'border-box';
    this.style.transitionProperty = "height, margin, padding";
    this.style.transitionDuration = duration + 'ms';
    this.style.height             = height + 'px';
	this.style.removeProperty( 'padding-top' );
	this.style.removeProperty( 'padding-bottom' );
	this.style.removeProperty( 'margin-top' );
	this.style.removeProperty( 'margin-bottom' );
	window.setTimeout( 
    () => {
		this.style.removeProperty( 'height' );
		this.style.removeProperty( 'overflow' );
		this.style.removeProperty( 'transition-duration' );
		this.style.removeProperty( 'transition-property' );
	}, duration);
}

Element.prototype.slideToggle = function ( duration = 500 ) {
	if (window.getComputedStyle( this ).display === 'none') {
		this.slideDown( duration );
	} else {
		this.slideUp( duration );
	}
}