var socket = io();
//var socket = io.connect('http://localhost');

socket.on('connect',()=>{
  console.log('connected to server');
});

socket.on('disconnect',()=>{
  console.log('disconnected from server');
});

socket.on('image1',(message)=>{
$('#app2').load('./click1',function(responseTxt, statusTxt, xhr){
  if(statusTxt == "success")
         console.log("External content loaded successfully!");
     if(statusTxt == "error")
         console.log("Error: " + xhr.status + ": " + xhr.statusText);
 });

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

  $('#app3').load('/large',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
    $('#app2').load('/disable',function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
             console.log("External content loaded successfully!");
         if(statusTxt == "error")
             console.log("Error: " + xhr.status + ": " + xhr.statusText);
     });
  setTimeout(animate_image,1200);
});

socket.on('image2',(message)=>{
$('#app2').load('./click2',function(responseTxt, statusTxt, xhr){
  if(statusTxt == "success")
         console.log("External content loaded successfully!");
     if(statusTxt == "error")
         console.log("Error: " + xhr.status + ": " + xhr.statusText);
 });
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

  $('#app3').load('/large',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
  $('#app2').load('/disable',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
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

  $('#app3').load('/large');
  $('#app2').load('/disable');
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

  $('#app3').load('/large');
  $('#app2').load('/disable');
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

  $('#app3').load('/large');
  $('#app2').load('/disable');
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

  $('#app3').load('/large');
  $('#app2').load('/disable');
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

  $('#app3').load('/large');
    $('#app2').load('/disable');
  setTimeout(animate_image,1200);
});

socket.on('size',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">Regular</span></li><li><span style="padding:10px;font-size:17px">Do you want to customise your pizza?</span></li><li><span>Crust type, Toppings, Cheese etc.</span></li>';
    $('#messages').append(li);

  }

  function animate_image(){
    $("#app3 #choice").animate({height:"250px"},1500);
    $("#app2").animate({bottom:"0px"},0);
  }

  $("#app3 #large").hide();
  //$('#app3').children('#large').hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app3').load('./choose',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
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

  $("#app3 #large").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app3').load('./choose',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
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

  $("#app3 #large").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app3').load('./choose',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
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
  $("#app3 #choice").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app3').load('./choose1',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
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

  $("#app3 #choice").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app3').load('./many',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
  setTimeout(animate_image,1200);

});


socket.on('onePP',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">1 Pizza</span></li><li><span style="padding:10px;font-size:17px">Do you want to <strong>add more</strong> pizza to your order</span></li>';
    $('#messages').append(li);

  }

  function animate_image(){
    $("#app3 #add").animate({height:"250px"},1500);
    $("#app2").animate({bottom:"0px"},0);
  }
  $("#app3 #manyP").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);

  $('#app3').load('./add',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
  setTimeout(animate_image,1200);
});

socket.on('twoPP',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">2 Pizza</span></li><li><span style="padding:10px;font-size:17px">Do you want to <strong>add more</strong> pizza to your order</span></li>';
    $('#messages').append(li);

  }

  function animate_image(){
    $("#app3 #add").animate({height:"250px"},1500); //80
    $("#app2").animate({bottom:"0px"},0);
  }
  $("#app3 #manyP").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);

  $('#app3').load('./add',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
  setTimeout(animate_image,1200);
});

socket.on('threePP',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">3 Pizza</span></li><li><span style="padding:10px;font-size:17px">Do you want to <strong>add more</strong> pizza to your order</span></li>';
    $('#messages').append(li);

  }

  function animate_image(){
    $("#app3 #add").animate({height:"250px"},1500);
    $("#app2").animate({bottom:"0px"},0);
  }
  $("#app3 #manyP").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);

  $('#app3').load('./add',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
  setTimeout(animate_image,1200);
});

socket.on('yes1',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">yes</span></li><li><span style="padding:10px;font-size:17px">Select type</span></li>';
    $('#messages').append(li);
  }

  function animate_image(){
    $("#app3 #back").animate({height:"250px"},1500); //80
    $("#app2").animate({bottom:"0px"},0);
  }
  $("#app3 #add").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app3').load('./back',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });

  setTimeout(animate_image,1200);
});

socket.on('go',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">Got it. Let me just take your info.</span></li><li><span style="padding:10px;font-size:17px">Your name?</span></li>';
    $('#messages').append(li);

  }

  function animate_image(){
    $("#app3 #custName").animate({height:"250px"},1500); //80
    $("#app2").animate({bottom:"0px"},0);
  }
  $("#app3 #add").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);
  $('#app3').load('./info',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });

  setTimeout(animate_image,1200);
});

socket.on('name',(message)=>{
  function append_li(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">'+message.name+'</span></li><li><span style="padding:10px;font-size:17px">Your email?</span></li>';
    $('#messages').append(li);

  }

  function animate_image(){
    $("#app3 #custEmail").animate({height:"250px"},1500); //80
    $("#app2").animate({bottom:"0px"},0);
  }
  $("#app3 #custName").hide();
  $("#app2").animate({bottom: "-15px"},600);
  setTimeout(append_li,911);

  $('#app2').remove();
  $('#app3').load('./info1',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });

  setTimeout(animate_image,1200);
});
socket.on('email',(message)=>{
  function append_li(){
  var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">'+message.email+'</span></li><li><span style="padding:10px;font-size:17px">Finally your delivery address?</span></li>';
  $('#messages').append(li);
}
function animate_image(){
  $("#app3 #custAddress").animate({height:"250px"},1500); //80
  $("#app2").animate({bottom:"0px"},0);
}
$("#app3 #custEmail").hide();
$("#app2").animate({bottom: "-15px"},600);
setTimeout(append_li,911);

$('#app2').remove();
$('#app3').load('./info2',function(responseTxt, statusTxt, xhr){
  if(statusTxt == "success")
         console.log("External content loaded successfully!");
     if(statusTxt == "error")
         console.log("Error: " + xhr.status + ": " + xhr.statusText);
 });
setTimeout(animate_image,1200);
});

socket.on('final',(message)=>{
  function append_li(){
  var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">'+message.address+'</span></li><li><span style="padding:10px;font-size:17px">Awesome. Your order is placed</span></li><li><span style="padding:10px;font-size:17px">You will soon get a call for confirmation</span></li>';
  $('#messages').append(li);
}
function animate_image(){
  $("#app3 #custAddress").animate({height:"250px"},1500); //80
  $("#app2").animate({bottom:"0px"},0);
}
$("#app2").animate({bottom: "-15px"},600);
setTimeout(append_li,911);
$('#app3').remove();
setTimeout(animate_image,1200);
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
$("#app2").animate({bottom:"-15px"},600);
setTimeout(li_append,911);
$('#app3').load('./crust1',function(responseTxt, statusTxt, xhr){
  if(statusTxt == "success")
         console.log("External content loaded successfully!");
     if(statusTxt == "error")
         console.log("Error: " + xhr.status + ": " + xhr.statusText);
 });
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
  $("#app2").animate({bottom:"-15px"},600);
  setTimeout(li_append,911);
  $('#app3').load('./toppings1',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
  setTimeout(animate,1200);
});

socket.on('cheese',(message)=>{
  function li_append(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">Add Extra Cheese</span></li><li><span  style="padding:10px;font-size:17px">anything else?</span></li>';
    $('#messages').append(li);
  }
  function animate(){
    $('#app3 #cheeseT').animate({height:"250px"},1500);
    $('#app2').animate({bottom:"0px"},0);
  }
  $("#app2").animate({bottom:"-15px"},600);
  setTimeout(li_append,911);
  $('#app3').load('./cheese1',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
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
  $("#app2").animate({bottom:"-15px"},600);
  setTimeout(li_append,911);
  $('#app3').load('./many',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
  setTimeout(animate,1200);

});

socket.on('1',(message)=>{
  function li_append(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">'+message.crust+'</span></li><li><span  style="padding:10px;font-size:17px">anything else?</span></li>';
    $('#messages').append(li);
  }
  function animate(){
    $('#app3 #cheeseT').animate({height:"250px"},1500);
    $('#app2').animate({bottom:"0px"},0);
  }
  $("#app2").animate({bottom:"-15px"},600);
  setTimeout(li_append,911);
  $("#app3").load('./cheese1',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
  setTimeout(animate,1200);
});

socket.on('t1',(message)=>{
  $('#app3').load('./toppings1');

  function li_append(){
    var li = '<li class="text-right"><span style="color:#eee;border-radius:25px;background-color:#337ab7;padding:10px;font-size:17px">'+message.topping+'</span></li>';
    $('#messages').append(li);
  }
  function animate(){
    $('#app3 #toppingType').animate({height:"250px"},1500);
    $('#app2').animate({bottom:"0px"},0);
  }
  setTimeout(li_append,911);
  $("#app3").load('./toppings1');
  setTimeout(animate,1200);
});

socket.on('last',(message)=>{
  function li_append(){
    var li = '<li><span  style="padding:10px;font-size:17px">anything else?</span></li>';
    $('#messages').append(li);
  }
  function animate(){
    $('#app3 #cheeseT').animate({height:"250px"},1500);
    $('#app2').animate({bottom:"0px"},0);
  }
  $("#app2").animate({bottom:"-15px"},600);
  setTimeout(li_append,911);
  $('#app3').load('./cheese1',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
           console.log("External content loaded successfully!");
       if(statusTxt == "error")
           console.log("Error: " + xhr.status + ": " + xhr.statusText);
   });
  setTimeout(animate,1200);
})
