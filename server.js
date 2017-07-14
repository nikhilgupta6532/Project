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

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/public/index.html');
});

app.get('/image1',(req,res)=>{
req.app.io.emit('image1',{});
 });

 app.get('/click1',(req,res)=>{
   File.find().then((files)=>{
     var pizzaName = files[0].fileName;
     res.render('click1',{
       pizzaName
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
 });
});

 app.get('/image2',(req,res)=>{
   req.app.io.emit('image2',{});
  });

  app.get('/click2',(req,res)=>{
    File.find().then((files)=>{
      var pizzaName = files[1].fileName;
      res.render('click2',{
        pizzaName
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
  });
});

app.get('/image3',(req,res)=>{
  req.app.io.emit('image3',{});
 });

 app.get('/click3',(req,res)=>{
   File.find().then((files)=>{
     var pizzaName = files[2].fileName;
     res.render('click3',{
       pizzaName
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
 });
});


app.get('/image4',(req,res)=>{
  req.app.io.emit('image4',{});
 });

 app.get('/click4',(req,res)=>{
   File.find().then((files)=>{
     var pizzaName = files[3].fileName;
     res.render('click4',{
       pizzaName
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
 });
});


app.get('/vegImages',(req,res)=>{
  File.find().then((files)=>{
     var image1 = files[0].fileName;
     var image2 = files[1].fileName;
     var image3 = files[2].fileName;
     var image4 = files[3].fileName;
     res.render('display',{
       image1,
       image2,
       image3,
       image4,
     })
   },(e)=>{
     res.status(400).send();
   })

});


app.get('/image5',(req,res)=>{
  req.app.io.emit('image5',{});
 });

 app.get('/click5',(req,res)=>{
   File.find().then((files)=>{
     var pizzaName = files[4].fileName;
     res.render('click5',{
       pizzaName
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
  });
 });


 app.get('/image6',(req,res)=>{
   req.app.io.emit('image6',{});
  });

  app.get('/click6',(req,res)=>{
    File.find().then((files)=>{
      var pizzaName = files[5].fileName;
      res.render('click6.hbs',{
        pizzaName
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
   });
  });

  app.get('/image7',(req,res)=>{
    req.app.io.emit('image7',{});
   });

   app.get('/click7',(req,res)=>{
     File.find().then((files)=>{
       var pizzaName = files[6].fileName;
       res.render('click7',{
         pizzaName
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
    });
   });


app.get('/NonVegImages',(req,res)=>{
  File.find().then((files)=>{
     var image1 = files[4].fileName;
     var image2 = files[5].fileName;
     var image3 = files[6].fileName;
     res.render('display1',{
       image1,
       image2,
       image3,
     })
   },(e)=>{
     res.status(400).send();
   })
});

app.get('/disable',(req,res)=>{
  res.render('disable');
});

app.get('/large',(req,res)=>{
  res.render('large');
});

app.get('/size',(req,res)=>{
var ss = req.session;
ss.pizza_Type = 'Regular';
ss.save();
  req.app.io.emit('size',{});
});

app.get('/size1',(req,res)=>{
  var ss = req.session;
  ss.pizza_Type = 'Medium';
  ss.save();
  req.app.io.emit('size1',{});
});

app.get('/size2',(req,res)=>{
  var ss = req.session;
  ss.pizza_Type = 'Large'
  ss.save();
  req.app.io.emit('size2',{});
});

app.get('/choose',(req,res)=>{
  res.render('size');
});

app.get('/yes',(req,res)=>{
  req.app.io.emit('yes',{});
});

app.get('/choose1',(req,res)=>{
  res.render('size1');
});

app.get('/no',(req,res)=>{
  req.app.io.emit('no',{});
});

app.get('/many',(req,res)=>{
  res.render('many');
});

app.get('/one',(req,res)=>{
  req.app.io.emit('one',{});
});

app.get('/oneP',(req,res)=>{
  res.render('oneP');
});

app.get('/onePP',(req,res)=>{
  req.app.io.emit('onePP',{});
});

app.get('/add',(req,res)=>{
  console.log('hi');
  res.render('add');
});

app.get('/go',(req,res)=>{
  req.app.io.emit('go',{});
});

app.get('/crust',(req,res)=>{
  req.app.io.emit('crust',{});
});

app.get('/crust1',(req,res)=>{
  res.render('crust');
})

app.get('/toppingsType',(req,res)=>{
  req.app.io.emit('toppings',{});
});

app.get('/toppings1',(req,res)=>{
  res.render('toppings');
})

app.get('/cheeseType',(req,res)=>{
  req.app.io.emit('cheese',{});
});

app.get('/cheese1',(req,res)=>{
res.render('cheese');
});

app.get('/done',(req,res)=>{
  req.app.io.emit('done',{});
})

app.get('/1',(req,res)=>{
  req.app.io.emit('1',{});
});

app.get('/t1',(req,res)=>{
  req.app.io.emit('t1',{});
});

app.get('/enable',(req,res)=>{
  console.log('hello');
  res.render('enable');
});

app.get('/info',(req,res)=>{
  res.render('name');
});

app.post('/name',(req,res)=>{
var ss = req.session;
ss.customer_Name = req.body.customer;
ss.save();
  req.app.io.emit('name',{
    name:req.body.customer
  })
});

app.get('/info1',(req,res)=>{
  res.render('email');
});

app.post('/email',(req,res)=>{
  var ss = req.session;
  ss.email = req.body.email;
  ss.save();

  req.app.io.emit('email',{
    email:req.body.email
  })
});

app.get('/info2',(req,res)=>{
  res.render('address');
});

app.post('/store',(req,res)=>{
  var ss = req.session;
  var pizza = new Pizza({
    pizzaName:ss.pizza_Name,
    customerName:ss.customer_Name,
    customerEmail:ss.email,
    pizzaType:ss.pizza_Type,
  });
  pizza.save().then((pizza)=>{
    //res.send(result);
    return pizza.genAuthTokens();
  }).then((token)=>{
    res.header('x-auth',token).send(pizza);
  }).catch ((e)=>{
    res.status(401).send(e);
  })
});

server.listen(3000,()=>{
  console.log('server is up on port 3000');
})
