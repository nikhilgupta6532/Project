
var socket = io();


socket.on('image1',(message)=>{
$('#app2').load('./click1');
});

socket.on('nik1',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">'+message.pizzaName+'</span></li><li><span style="padding:10px;font-size:17px">How large?</span></li>';
    $('#messages').append(li);

  }

  function animate_image(){
    $("#app3 #large").animate({height:"250px"},1500);
    $("#app2").animate({bottom:"0px"},0);
  }

  $("#app3 image").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app2').load('/disable');
  $('#app3').load('/large');
  setTimeout(animate_image,1200);


});

socket.on('image2',(message)=>{
$('#app2').load('./click2');
});

socket.on('nik2',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">'+message.pizzaName+'</span></li><li><span style="padding:10px;font-size:17px">How large?</span></li>';
    $('#messages').append(li);
  }

  function animate_image(){
    $("#app3 #large").animate({height:"250px"},1500);
    $("#app2").animate({bottom:"0px"},0);
  }

  $("#app3 image").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app2').load('/disable');
  $('#app3').load('/large');
  setTimeout(animate_image,1200);


});

socket.on('image3',(message)=>{
$('#app2').load('./click3');
});

socket.on('nik3',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">'+message.pizzaName+'</span></li><li><span style="padding:10px;font-size:17px">How large?</span></li>';
    $('#messages').append(li);
  }

  function animate_image(){
    $("#app3 #large").animate({height:"250px"},1500);
    $("#app2").animate({bottom:"0px"},0);
  }

  $("#app3 image").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app2').load('/disable');
  $('#app3').load('/large');
  setTimeout(animate_image,1200);

});


socket.on('image4',(message)=>{
$('#app2').load('./click4');
});

socket.on('nik4',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">'+message.pizzaName+'</span></li><li><span style="padding:10px;font-size:17px">How large?</span></li>';
    $('#messages').append(li);
  }

  function animate_image(){
    $("#app3 #large").animate({height:"250px"},1500);
    $("#app2").animate({bottom:"0px"},0);
  }

  $("#app3 image").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app2').load('/disable');
  $('#app3').load('/large');
  setTimeout(animate_image,1200);

});

socket.on('image5',(message)=>{
$('#app2').load('./click5');
});

socket.on('nik5',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">'+message.pizzaName+'</span></li><li><span style="padding:10px;font-size:17px">How large?</span></li>';
    $('#messages').append(li);
  }

  function animate_image(){
    $("#app3 #large").animate({height:"250px"},1500);
    $("#app2").animate({bottom:"0px"},0);
  }

  $("#app3 image").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app2').load('/disable');
  $('#app3').load('/large');
  setTimeout(animate_image,1200);

});

socket.on('image6',(message)=>{
$('#app2').load('./click6');
});

socket.on('nik6',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">'+message.pizzaName+'</span></li><li><span style="padding:10px;font-size:17px">How large?</span></li>';
    $('#messages').append(li);
  }

  function animate_image(){
    $("#app3 #large").animate({height:"250px"},1500);
    $("#app2").animate({bottom:"0px"},0);
  }

  $("#app3 image").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app2').load('/disable');
  $('#app3').load('/large');
  setTimeout(animate_image,1200);

});

socket.on('image7',(message)=>{
$('#app2').load('./click7');
});

socket.on('nik7',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">'+message.pizzaName+'</span></li><li><span style="padding:10px;font-size:17px">How large?</span></li>';
    $('#messages').append(li);
  }

  function animate_image(){
    $("#app3 #large").animate({height:"250px"},1500);
    $("#app2").animate({bottom:"0px"},0);
  }

  $("#app3 image").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app2').load('/disable');
  $('#app3').load('/large');
  setTimeout(animate_image,1200);

});

socket.on('size',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">Regular</span></li><li><span style="padding:10px;font-size:17px">Do you want to customise your pizza?</span></li><li><span>Crust type, Toppings, Cheese etc.</span></li>';
    $('#messages').append(li);

  }

  function animate_image(){
    $("#app3 #choice").animate({height:"250px"},1500); //80
    $("#app2").animate({bottom:"0px"},0);
  }

  $("#app3 button").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app3').load('./choose');
  setTimeout(animate_image,1200);


});
socket.on('size1',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">Medium</span></li><li><span style="padding:10px;font-size:17px">Do you want to customise your pizza?</span></li><li><span>Crust type, Toppings, Cheese etc.</span></li>';
    $('#messages').append(li);

  }

  function animate_image(){
    $("#app3 #choice").animate({height:"250px"},1500); //80
    $("#app2").animate({bottom:"0px"},0);
  }

  $("#app3 button").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app3').load('./choose');
  setTimeout(animate_image,1200);
});
socket.on('size2',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">Large</span></li><li><span style="padding:10px;font-size:17px">Do you want to customise your pizza?</span></li><li><span>Crust type, Toppings, Cheese etc.</span></li>';
    $('#messages').append(li);

  }

  function animate_image(){
    $("#app3 #choice").animate({height:"250px"},1500); //80
    $("#app2").animate({bottom:"0px"},0);
  }

  $("#app3 button").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app3').load('./choose');
  setTimeout(animate_image,1200);

});

socket.on('yes',(message)=>{

  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">Yes</span></li><li><span style="padding:10px;font-size:17px">Cool,Select the option you want to change</span></li>';
    $('#messages').append(li);

  }

  function animate_image(){
    $("#app3 #crustP").animate({height:"250px"},1500); //80
    $("#app2").animate({bottom:"0px"},0);
  }
  $("#app3 button").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app3').load('./choose1');
  setTimeout(animate_image,1200);

});

socket.on('no',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">No</span></li><li><span style="padding:10px;font-size:17px">How many?</span></li>';
    $('#messages').append(li);

  }

  function animate_image(){
    $("#app3 #manyP").animate({height:"250px"},1500);
    $("#app2").animate({bottom:"0px"},0);
  }

  $("#app3 button").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app3').load('./many');
  setTimeout(animate_image,1200);

});

socket.on('one',(message)=>{
  $('#app2').load('./oneP');
});

socket.on('onePP',(message)=>{
  $('#messages').append('<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px ">1 Pizza</span></li>');
  $('#messages').append('<li>Do you want to <strong>add more</strong> pizza to your order</li>');
  $('#app2').load('./disable');
  $('#app3').load('./add');
  // function append_li(){
  //   var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">1 Pizza</span></li><li><span style="padding:10px;font-size:17px">Do you want to <strong>add more</strong> pizza to your order</span></li>';
  //   $('#messages').append(li);
  //
  // }
  //
  // function animate_image(){
  //   $("#app3 #add").animate({height:"250px"},1500);
  //   $("#app2").animate({bottom:"0px"},0);
  // }
  //
  // $("#app3 button").hide();
  // $("#app2").animate({bottom: "-15px"},600);
  // setTimeout(append_li,911);
  // $('#app2').load('./disable');
  // $('#app3').load('./add');
  // setTimeout(animate_image,1200);

});

socket.on('go',(message)=>{
  $('#messages').append('<li>Got it. Let me just take your info.');
  $('#messages').append('<li>Your name?</li>');
  $('#app2').remove();
  $('#app3').load('./info');
});

socket.on('crust',(message)=>{
function li_append(){
  var li='<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">Crust Type</span></li><li><span style="padding:10px;font-size:17px">Pick a crust type</span></li>';
  $('#messages').append(li);
}
function animate(){
  $('#app3 #crustType').animate({height:"250px"},1500);
  $('#app2').animate({bottom:"0px"},0);
}

$("#app3 button").hide();
$("#app2").animate({bottom:"-15px"},600);
setTimeout(li_append,911);
$('#app3').load('./crust1');
setTimeout(animate,1200);

});

socket.on('toppings',(message)=>{
  function li_append(){
    var li='<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">Toppings</span></li><li><span style="padding:10px;font-size:17px">Select one or more toppings</span></li><li><span  style="padding:10px;font-size:17px">Press Done when you are Done</span></li>';
    $('#messages').append(li);
  }
  function animate(){
    $('#app3 #toppingType').animate({height:"250px"},1500);
    $('#app2').animate({bottom:"0px"},0);
  }

  $("#app3 button").hide();
  $("#app2").animate({bottom:"-15px"},600);
  setTimeout(li_append,911);
  $('#app3').load('./toppings1');
  setTimeout(animate,1200);
});

socket.on('cheese',(message)=>{
  function li_append(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">Add Extra Cheese</span></li><li><span  style="padding:10px;font-size:17px">anything else?</span></li>';
    $('#messages').append(li);
  }
  function animate(){
    $('#app3 #cheese1').animate({height:"250px"},1500);
    $('#app2').animate({bottom:"0px"},0);
  }
  $("#app3 button").hide();
  $("#app2").animate({bottom:"-15px"},600);
  setTimeout(li_append,911);
  $('#app3').load('./cheese1');
  setTimeout(animate,1200);
});

socket.on('done',(message)=>{
  function li_append(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">I am done</span></li><li><span  style="padding:10px;font-size:17px">how many?</span></li>';
    $('#messages').append(li);
  }
  function animate(){
    $('#app3 #manyP').animate({height:"250px"},1500);
    $('#app2').animate({bottom:"0px"},0);
  }
  $("#app3 button").hide();
  $("#app2").animate({bottom:"-15px"},600);
  setTimeout(li_append,911);
  $('#app3').load('./many');
  setTimeout(animate,1200);

});

socket.on('1',(message)=>{
  function li_append(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">Classic Hand Tossed</span></li><li><span  style="padding:10px;font-size:17px">anything else?</span></li>';
    $('#messages').append(li);
  }
  function animate(){
    $('#app3 #cheese1').animate({height:"250px"},1500);
    $('#app2').animate({bottom:"0px"},0);
  }
  $("#app3 button").hide();
  $("#app2").animate({bottom:"-15px"},600);
  setTimeout(li_append,911);
  //$("#app3").remove();
  $("#app3").load('./cheese1');
  setTimeout(animate,1200);
});

socket.on('t1',(message)=>{
  $('#messages').append('<li class="text-right">Black olives</li>');
  $('#app2').load('./enable');
});

socket.on('name',(message)=>{
  $('#messages').append('<li class="text-right">'+message.name+'</li>');
  $('#messages').append('<li>Your email?</li>');
  $('#app3').load('./info1');
});
socket.on('email',(message)=>{
  $('#messages').append('<li class="text-right">'+message.email+'</li>');
  $('#messages').append('<li>Your address</li>');
  $('#app3').load('./info2');
});
