/*File: www.github.com/StarfleetKlingon/Assignment8/a8.js
91.461 Assignment 8:  Multiplication Table Part III
Therese M. Kuczynski, UMass Lowell Computer Science Student, therese_kuczynski@student.uml.edu
Copyright (c) 2015 by Therese M. Kuczynski.  All rights reserved.  May be freely
 copied or excerpted for educational purposes with credit to the author.
updated by TMK on November 9, 2015 at 8:00PM. */

$( "#slider_x" ).slider({
       //Set slider range between -10 and 10. 
	range: true,
	min: -10,
	max: 10,
     //When the user slides, get the values from the slider and insert them
     //
	slide: function( event, ui ) {
    document.getElementById("sliderx-val1").innerHTML = ui.values[0];
    document.getElementById("sliderx-val2").innerHTML = ui.values[1];
    document.getElementsByName("x_low")[0].value = ui.values[0];
    document.getElementsByName("x_high")[0].value = ui.values[1];
    },
   //Update table if someone drops the slider. 
    change: function( event, ui ){
      get_values();
     //Get rid of any error messages from the validator on the form. 
      if(document.getElementsByName("x_low")[0].value != "")
       {
         $("#grid").validate().element(document.getElementsByName("x_low")[0]);
       }
       if(document.getElementsByName("x_high")[0].value != "")
       {
         $("#grid").validate().element(document.getElementsByName("x_high")[0]);
       }
    },
});

$( "#slider_y" ).slider({
	range: true,
	min: -10,
	max: 10,
	slide: function( event, ui ) {
    document.getElementById("slidery-val1").innerHTML = ui.values[0];
    document.getElementById("slidery-val2").innerHTML = ui.values[1];
    document.getElementsByName("y_low")[0].value = ui.values[0];
    document.getElementsByName("y_high")[0].value = ui.values[1];
    },
    change: function( event, ui ){
       get_values();
       if(document.getElementsByName("y_low")[0].value != "")
       {
         $("#grid").validate().element(document.getElementsByName("y_low")[0]);
       }
       if(document.getElementsByName("y_high")[0].value != "")
       {
         $("#grid").validate().element(document.getElementsByName("y_high")[0]);
       }
    },
});

$(document.getElementsByName("x_low")[0]).blur(function(){
   slideselector = "#slider_x";
   sliderval = "sliderx";
   if($("#grid").validate().element(document.getElementsByName("x_low")[0]))
   {
     fix_element_order(slideselector, sliderval, "x", "low");
   }
});

$(document.getElementsByName("x_high")[0]).blur(function(){
   slideselector = "#slider_x";
   sliderval = "sliderx";
   if($("#grid").validate().element(document.getElementsByName("x_high")[0]))
     {
       fix_element_order(slideselector, sliderval, "x", "high");
     }
});

$(document.getElementsByName("y_low")[0]).blur(function(){
   slideselector = "#slider_y";
   sliderval = "slidery";
   if($("#grid").validate().element(document.getElementsByName("y_low")[0]))
   {
     fix_element_order(slideselector, sliderval, "y", "low");
   }
});

$(document.getElementsByName("y_high")[0]).blur(function(){
    slideselector = "#slider_y";
    sliderval = "slidery";
    if($("#grid").validate().element(document.getElementsByName("y_high")[0]))
    {
      fix_element_order(slideselector, sliderval, "y", "high");
    }
});

function fix_element_order(sliderselector, sliderval, axis, hi_low)
{
   var temp = document.getElementsByName(axis + "_low")[0].value;
   var temp2 = document.getElementsByName(axis + "_high")[0].value;
   if(temp2 != "" && temp != "")
     {
       if(temp2 < temp)
       {
          console.log("TEST2");
          $(slideselector).slider("values", 0, temp2);
          document.getElementById(sliderval + "-val1").innerHTML = temp2;
          $(slideselector).slider("values", 1, temp);
          document.getElementById(sliderval + "-val2").innerHTML = temp;
          document.getElementsByName(axis + "_low")[0].value = temp2;
          document.getElementsByName(axis + "_high")[0].value = temp;
       }
       else
       {
         set_value(slideselector, sliderval, temp, temp2, hi_low);
       }
     }
   else
     {
        set_value(slideselector, sliderval, temp, temp2, hi_low);
     }
}


 function set_value(slideselector, sliderval, temp, temp2, hi_low)
 {
   console.log("HI from set_val");
   if(hi_low == "low")
     {
      console.log("Result is low.");
      $(slideselector).slider("values", 0, temp);
      document.getElementById(sliderval + "-val1").innerHTML = temp;
     }
   else
     {
      console.log("Result is high");
      $(slideselector).slider("values", 1, temp2);
      document.getElementById(sliderval + "-val2").innerHTML = temp2;
     }
}
