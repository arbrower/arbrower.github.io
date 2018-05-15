
$(document).ready(function(){

  function hot () {
    console.log('show the milk questions');
    event.preventDefault();
    $('#hotMilkSection').slideDown();
    $('#temperatureSection').hide();
    $('#aboutShops').slideUp();
  }

  // Milk Section

  function hotNoMilkFunction () {
    console.log('Find the no milk options');
    event.preventDefault();
    $('#hotNoMilkSection').slideDown();
    $('#hotMilkSection').hide();
  }

  function hotYesMilkFunction () {
    console.log('Find the yes milk options');
    event.preventDefault();
    $('#hotYesMilkSection').slideDown();
    $('#hotMilkSection').hide();
  }

  // Drink Section

  function dripShowFunction () {
    console.log('Show the drip cafe options');
    $('#hotNoMilkSection').hide();
    $('#hotNoMilkDrip').slideDown ();
  }

  function espressoShowFunction () {
    console.log('Show the espresso cafe options');
    $('#hotNoMilkSection').hide();
    $('#hotNoMilkEspresso').slideDown ();
  }

  function pourOverShowFunction () {
    console.log('Show the pour over cafe options');
    $('#hotNoMilkSection').hide();
    $('#hotNoMilkPourOver').slideDown ();
  }

  function americanoShowFunction () {
    console.log('Show the americano cafe options');
    $('#hotNoMilkSection').hide();
    $('#hotNoMilkAmericano').slideDown ();
  }


  // HM Drinks

  function cortadoShowFunction () {
    console.log('Show the cortado cafe options');
    $('#hotYesMilkSection').hide();
    $('#hotMilkCortado').slideDown ();
  }

  function macchiatoShowFunction () {
    console.log('Show the macchiato cafe options');
    $('#hotYesMilkSection').hide();
    $('#hotMilkMacchiato').slideDown ();
  }

  function flatWhiteShowFunction () {
    console.log('Show the flat white cafe options');
    $('#hotYesMilkSection').hide();
    $('#hotMilkFlatWhite').slideDown ();
  }

  function cappuccinoShowFunction () {
    console.log('Show the cappuccino cafe options');
    $('#hotYesMilkSection').hide();
    $('#hotMilkCappuccino').slideDown ();
  }

  function latteShowFunction () {
    console.log('Show the latte cafe options');
    $('#hotYesMilkSection').hide();
    $('#hotMilkLatte').slideDown ();
  }

  // Cold 

    function cold () {
    console.log('show the milk questions');
    event.preventDefault();
    $('#coldMilkSection').slideDown();
    $('#temperatureSection').hide();
    $('#aboutShops').slideUp();
  }

  // Cold Milk

  function coldNoMilkFunction () {
    console.log('Find cold the no milk options');
    event.preventDefault();
    $('#coldNoMilkSection').slideDown();
    $('#coldMilkSection').hide();
  }

  function coldYesMilkFunction () {
    console.log('Find cold the yes milk options');
    event.preventDefault();
    $('#coldYesMilkSection').slideDown();
    $('#coldMilkSection').hide();
  }

  // C Drinks

  function coldBrewShowFunction () {
    console.log('Show the cold brew options');
    $('#coldNoMilkSection').hide();
    $('#coldMilkColdBrew').slideDown ();
  }

  function icedLatteShowFunction () {
    console.log('Show the iced latte options');
    $('#coldYesMilkSection').hide();
    $('#coldYesMilkIcedLatte').slideDown ();
  }

  function draftLatteShowFunction () {
    console.log('Show the draft latte options');
    $('#coldYesMilkSection').hide();
    $('#coldYesMilkDraftLatte').slideDown ();
  }

  

  $('#hot').click(hot);
  $('#cold').click(cold);


  $('#hotNoMilk').click(hotNoMilkFunction);
  $('#hotYesMilk').click(hotYesMilkFunction);
  $('#coldNoMilk').click(coldNoMilkFunction);
  $('#coldYesMilk').click(coldYesMilkFunction);


  $('#drip').click(dripShowFunction);
  $('#espresso').click(espressoShowFunction);
  $('#pourOver').click(pourOverShowFunction);
  $('#americano').click(americanoShowFunction);
  $('#cortado').click(cortadoShowFunction);
  $('#macchiato').click(macchiatoShowFunction);
  $('#flatWhite').click(flatWhiteShowFunction);
  $('#cappuccino').click(cappuccinoShowFunction);
  $('#latte').click(latteShowFunction);

  $('#coldBrew').click(coldBrewShowFunction);
  $('#icedLatte').click(icedLatteShowFunction);
  $('#draftLatte').click(draftLatteShowFunction);


});

$(document).ready(function() {

  var array=["Swings Coffee", "Gregory's Coffee", "La Colombe", "Filter", "Qualia Coffee"];
  $('#randomButton').bind('click', function() {

      var random = array[Math.floor(Math.random() * array.length)];

      $("h1").html(random);
  });
});