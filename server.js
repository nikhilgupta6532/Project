const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');
const {File} = require('./models/file');
const fileUpload = require('express-fileupload');
const path=require('path');
const hbs = require('hbs');
const http = require('http');
const socketIO = require('socket.io');
var app = express();
var server = http.createServer(app);
const {Pizza} = require('./models/pizza')
const session = require('express-session');
const port = process.env.PORT || 3000;

var io=socketIO(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
  secret:'nikhil'
}));
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/views'));
app.use(fileUpload());

app.set('view engine','hbs');
app.io=io;

io.on('connection',(socket)=>{

console.log('new user connected');

socket.on('disconnect',()=>{
  console.log('user was disconnected');
})

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/public/index.html');
});

app.get('/image1',(req,res)=>{
req.app.io.emit('image1',{});
res.send();
 });

 app.get('/click1',(req,res)=>{
   File.find().then((files)=>{
     var pizzaName = files[0].fileName;
     res.render('pizza',{
       pizzaName,
       key:'click1'
     });
   });
 });

 app.get('/nik1',(req,res)=>{
   File.find().then((files)=>{
  var pizzaName = files[0].fileName;
  var ss = req.session;
  ss.pizza_Name = pizzaName;
  ss.save();
   req.app.io.emit('nik1',{
     pizzaName
   });
   res.send();
 });
});

 app.get('/image2',(req,res)=>{
   req.app.io.emit('image2',{});
   res.send();
  });

  app.get('/click2',(req,res)=>{
    File.find().then((files)=>{
      var pizzaName = files[1].fileName;
      res.render('pizza',{
        pizzaName,
        key:'click2'
      });
    });
  });

app.get('/nik2',(req,res)=>{
  File.find().then((files)=>{
  var pizzaName = files[1].fileName;
  var ss = req.session;
  ss.pizza_Name = pizzaName;
  ss.save();
   req.app.io.emit('nik2',{
     pizzaName
    });
    res.send();
  });
});

app.get('/image3',(req,res)=>{
  req.app.io.emit('image3',{});
  res.send();
 });

 app.get('/click3',(req,res)=>{
   File.find().then((files)=>{
     var pizzaName = files[2].fileName;
     res.render('pizza',{
       pizzaName,
       key:'click3'
     });

   });
 });

app.get('/nik3',(req,res)=>{
 File.find().then((files)=>{
 var pizzaName = files[2].fileName;
 var ss = req.session;
 ss.pizza_Name = pizzaName;
 ss.save();
  req.app.io.emit('nik3',{
    pizzaName
   });
   res.send();
 });
});


app.get('/image4',(req,res)=>{
  req.app.io.emit('image4',{});
  res.send();
 });

 app.get('/click4',(req,res)=>{
   File.find().then((files)=>{
     var pizzaName = files[3].fileName;
     res.render('pizza',{
       pizzaName,
       key:'click4'
     });

   });
 });

app.get('/nik4',(req,res)=>{
 File.find().then((files)=>{
 var pizzaName = files[3].fileName;
 var ss = req.session;
 ss.pizza_Name = pizzaName;
 ss.save();
  req.app.io.emit('nik4',{
    pizzaName
   });
   res.send();
 });
});


app.get('/vegImages',(req,res)=>{
  File.find().then((files)=>{
     var image1 = files[0].fileName;
     var image2 = files[1].fileName;
     var image3 = files[2].fileName;
     var image4 = files[3].fileName;
     res.render('pizza',{
       image1,
       image2,
       image3,
       image4,
       key:'nikhil'
     })
   },(e)=>{
     res.status(400).send();
   })

});

app.get('/veg',(req,res)=>{
  res.redirect('/vegImages');
});

app.get('/image5',(req,res)=>{
  req.app.io.emit('image5',{});
  res.send();
 });

 app.get('/click5',(req,res)=>{
   File.find().then((files)=>{
     var pizzaName = files[4].fileName;
     res.render('pizza',{
       pizzaName,
       key:'click5'
     });

   });
 });

 app.get('/nik5',(req,res)=>{
  File.find().then((files)=>{
  var pizzaName = files[4].fileName;
  var ss = req.session;
  ss.pizza_Name = pizzaName;
  ss.save();
   req.app.io.emit('nik5',{
     pizzaName
    });
    res.send();
  });
 });


 app.get('/image6',(req,res)=>{
   req.app.io.emit('image6',{});
   res.send();
  });

  app.get('/click6',(req,res)=>{
    File.find().then((files)=>{
      var pizzaName = files[5].fileName;
      res.render('pizza',{
        pizzaName,
        key:'click6'
      });

    });
  });

  app.get('/nik6',(req,res)=>{
   File.find().then((files)=>{
   var pizzaName = files[5].fileName;
  var ss = req.session;
  ss.pizza_Name = pizzaName;
  ss.save();
    req.app.io.emit('nik6',{
      pizzaName
     });
     res.send();
   });
  });

  app.get('/image7',(req,res)=>{
    req.app.io.emit('image7',{});
    res.send();
   });

   app.get('/click7',(req,res)=>{
     File.find().then((files)=>{
       var pizzaName = files[6].fileName;
       res.render('pizza',{
         pizzaName,
         key:'click7'
       });

     });
   });

   app.get('/nik7',(req,res)=>{
    File.find().then((files)=>{
    var pizzaName = files[6].fileName;
    var ss = req.session;
    ss.pizza_Name = pizzaName;
    ss.save();
     req.app.io.emit('nik7',{
       pizzaName
      });
      res.send();
    });
   });




app.get('/NonVegImages',(req,res)=>{
  File.find().then((files)=>{
     var image1 = files[4].fileName;
     var image2 = files[5].fileName;
     var image3 = files[6].fileName;
     res.render('pizza',{
       image1,
       image2,
       image3,
       key:'aman'
     })
   },(e)=>{
     res.status(400).send();
   })
});

app.get('/NonVeg',(req,res)=>{
  res.redirect('/NonVegImages');
});

app.get('/disable',(req,res)=>{
  res.render('pizza',{
    key:'disable'
  });
});

app.get('/large',(req,res)=>{
  res.render('pizza',{
    key:'large'
  });
});

app.get('/size',(req,res)=>{
var ss = req.session;
ss.pizza_Type = 'Regular';
ss.save();
  req.app.io.emit('size',{});
  res.send();
});

app.get('/size1',(req,res)=>{
  var ss = req.session;
  ss.pizza_Type = 'Medium';
  ss.save();
  req.app.io.emit('size1',{});
  res.send();
});

app.get('/size2',(req,res)=>{
  var ss = req.session;
  ss.pizza_Type = 'Large'
  ss.save();
  req.app.io.emit('size2',{});
  res.send();
});

app.get('/choose',(req,res)=>{
  res.render('pizza',{
    key:'size'
  });
});

app.get('/yes',(req,res)=>{
  req.app.io.emit('yes',{});
  res.send();
});

app.get('/choose1',(req,res)=>{
  res.render('pizza',{
    key:'size1'
  });
});


app.get('/crust',(req,res)=>{
  req.app.io.emit('crust',{});
  res.send();
});

app.get('/crust1',(req,res)=>{
  res.render('pizza',{
    key:'crust'
  });
})


app.get('/toppingsType',(req,res)=>{
  req.app.io.emit('toppings',{});
  res.send();
});

app.get('/toppings1',(req,res)=>{
  res.render('pizza',{
    key:'toppings'
  });
})

app.get('/cheeseType',(req,res)=>{
  req.app.io.emit('cheese',{});
  res.send();
});

app.get('/cheese1',(req,res)=>{
res.render('pizza',{
  key:'cheese'
});
});

app.get('/done',(req,res)=>{
  req.app.io.emit('done',{});
  res.send();
})


app.post('/1',(req,res)=>{
  var crust= req.body.name;
  req.app.io.emit('1',{
    crust
  });
  res.send();
});

app.post('/t1',(req,res)=>{
  req.app.io.emit('t1',{
    topping:req.body.name
  });
  res.send();
});

app.get('/enable',(req,res)=>{
  res.render('pizza',{
    key:'enable'
  });
});

app.get('/last',(req,res)=>{
  req.app.io.emit('last',{});
  res.send();
})

app.get('/no',(req,res)=>{
  req.app.io.emit('no',{});
  res.send();
});

app.get('/many',(req,res)=>{
  res.render('pizza',{
    key:'many'
  });
});

app.get('/oneP',(req,res)=>{
  res.render('pizza',{
    key:'oneP'
  });
});

app.get('/onePP',(req,res)=>{
  req.app.io.emit('onePP',{});
  res.send();
});


app.get('/twoP',(req,res)=>{
  res.render('pizza',{
    key:'twoP'
  });
});

app.get('/twoPP',(req,res)=>{
  req.app.io.emit('twoPP',{});
  res.send();
});

app.get('/threeP',(req,res)=>{
  res.render('pizza',{
    key:'threeP'
  })
});

app.get('/threePP',(req,res)=>{
req.app.io.emit('threePP',{});
res.send();
});

app.get('/add',(req,res)=>{
  res.render('pizza',{
    key:'add1'
  });
});

app.get('/yes1',(req,res)=>{
  req.app.io.emit('yes1',{});
  res.send();
});

app.get('/back',(req,res)=>{
  res.render('pizza',{
    key:'back'
  })
})

app.get('/no1',(req,res)=>{
  req.app.io.emit('go',{});
  res.send();
});

app.get('/info',(req,res)=>{
  res.render('pizza',{
    key:'info'
  });
});

app.post('/name',(req,res)=>{
var ss = req.session;
ss.customer_Name = req.body.data;
ss.save();
  req.app.io.emit('name',{
    name:req.body.data
  })
  res.send();
});

app.get('/info1',(req,res)=>{
  res.render('pizza',{
    key:'email'
  });
});


app.post('/email',(req,res)=>{
  var ss = req.session;
  ss.email = req.body.data;
  ss.save();

  req.app.io.emit('email',{
    email:req.body.data
  })
  res.send();
});

app.get('/info2',(req,res)=>{
  res.render('pizza',{
    key:'address'
  });
});


app.post('/store',(req,res)=>{
  var ss = req.session;
  var pizza = new Pizza({
    pizzaName:ss.pizza_Name,
    customerName:ss.customer_Name,
    customerEmail:ss.email,
    pizzaType:ss.pizza_Type,
    customerAddress:req.body.data
  });
  pizza.save().then((pizza)=>{
    return pizza.genAuthTokens();
  }).then((token)=>{
    res.header('x-auth',token).send(pizza);
  }).catch ((e)=>{
    res.status(401).send(e);
  });
  req.app.io.emit('final',{
    address:req.body.data
  });
  res.send();
});
});
server.listen(port,()=>{
  console.log('server is up on port'+port);
})
