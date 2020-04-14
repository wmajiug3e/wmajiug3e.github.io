$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(function () {
  $('[data-toggle="popover"]').popover();
});

$(function () {
  $.fn.select2.defaults.set( "theme", "bootstrap" );

  var placeholder = "Бесплатная доставка";
  
  $( ".select2-single" ).select2( {
  placeholder: placeholder,
  width: null,
  containerCssClass: ':all:'
  } );

  $( ".select2-multiple" ).select2( {
    placeholder: "Все категории",
    width: null,
    containerCssClass: ':all:'
    } );
  
  $( ".select2-allow-clear" ).select2( {
  allowClear: true,
  placeholder: placeholder,
  width: null,
  containerCssClass: ':all:'
  } );
  
  $( ".select2-single, .select2-multiple, .select2-allow-clear, .js-data-example-ajax" ).on( "select2:open", function() {
  if ( $( this ).parents( "[class*='has-']" ).length ) {
  var classNames = $( this ).parents( "[class*='has-']" )[ 0 ].className.split( /\s+/ );
  
  for ( var i = 0; i < classNames.length; ++i ) {
  if ( classNames[ i ].match( "has-" ) ) {
  $( "body > .select2-container" ).addClass( classNames[ i ] );
  }
  }
  }
  });
});