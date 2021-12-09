$(document).ready(function(){
$("#submit").click(function(){
	var CFjenis1 = $("#CFjenis1").val();
	var CFjenis2 = $("#CFjenis2").val();
    var CFjenis3 = $("#CFjenis3").val();
    var CFjenis4 = $("#CFjenis4").val();
	var CFjenis5 = $("#CFjenis5").val();
	var CFjenis6 = $("#CFjenis6").val();
	var CFjenis7 = $("#CFjenis7").val();
	var CFjenis8 = $("#CFjenis8").val();
	var CFjenis9 = $("#CFjenis9").val();
	var CFjenis10 = $("#CFjenis10").val();
	var CFjenis11 = $("#CFjenis11").val();
	var CFjenis12 = $("#CFjenis12").val();
	var CFjenis13 = $("#CFjenis13").val();
	var CFjenis14 = $("#CFjenis14").val();
	var CFjenis15 = $("#CFjenis15").val();
	var CFjenis16 = $("#CFjenis16").val();
	var CFjenis17 = $("#CFjenis17").val();
	var CFjenis18 = $("#CFjenis18").val();
	var CFjenis19 = $("#CFjenis19").val();
	var CFjenis20 = $("#CFjenis20").val();

	if( CFjenis1 != 99 && CFjenis2 !=99 && CFjenis3 !=99 && CFjenis4 !=99 && CFjenis5 !=99 && CFjenis6 !=99 && CFjenis7 !=99 && CFjenis8 !=99 && CFjenis9 !=99 && CFjenis10 !=99
		&& CFjenis11 !=99 && CFjenis12 !=99 && CFjenis13 !=99 && CFjenis14 !=99 && CFjenis15 !=99 && CFjenis16 !=99 && CFjenis17 !=99 && CFjenis18 !=99 && CFjenis19 !=99 && CFjenis20 !=99){
		return true;
	}
	else{
		alert("Tolong diisi...!!!!!!");
		CFjenis1.trigger('reset');
		CFjenis2.trigger('reset');
		CFjenis3.trigger('reset');
		CFjenis4.trigger('reset');
		CFjenis5.trigger('reset');
		CFjenis6.trigger('reset');
		CFjenis7.trigger('reset');
		CFjenis8.trigger('reset');
		CFjenis9.trigger('reset');
		CFjenis10.trigger('reset');
		CFjenis11.trigger('reset');
		CFjenis12.trigger('reset');
		CFjenis13.trigger('reset');
		CFjenis14.trigger('reset');
		CFjenis15.trigger('reset');
		CFjenis16.trigger('reset');
		CFjenis17.trigger('reset');
		CFjenis18.trigger('reset');
		CFjenis19.trigger('reset');
		CFjenis20.trigger('reset');
		return false;
	}
});
});
