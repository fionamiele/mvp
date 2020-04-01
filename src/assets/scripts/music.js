// audio de la grille du lambda
//adore you
var harry = document.getElementById("play");
var adore = document.getElementById("player");
harry.addEventListener("click", function(){
 if(adore.paused){
   adore.play();
   harry.addEventListener('click', function(){
   });
 } else {
   adore.pause();
   harry.addEventListener('click', function(){
   });
 }
});

//baiana
var singer = document.getElementById("play1");
var baiana = document.getElementById("player1");
singer.addEventListener("click", function(){
 if(baiana.paused){
   baiana.play();
   singer.addEventListener('click', function(){
   });
 } else {
   baiana.pause();
   singer.addEventListener('click', function(){
   });
 }
});

//before you go
var lewis = document.getElementById("play2");
var before = document.getElementById("player2");
lewis.addEventListener("click", function(){
 if(before.paused){
   before.play();
   lewis.addEventListener('click', function(){
   });
 } else {
   before.pause();
   lewis.addEventListener('click', function(){
   });
 }
});

//fireflies
var owl = document.getElementById("play3");
var fireflies = document.getElementById("player3");
owl.addEventListener("click", function(){
 if(fireflies.paused){
   fireflies.play();
   owl.addEventListener('click', function(){
   });
 } else {
   fireflies.pause();
   owl.addEventListener('click', function(){
   });
 }
});

//intentions
var jb = document.getElementById("play4");
var intentions = document.getElementById("player4");
jb.addEventListener("click", function(){
 if(intentions.paused){
   intentions.play();
   jb.addEventListener('click', function(){
   });
 } else {
   intentions.pause();
   jb.addEventListener('click', function(){
   });
 }
});

//kuzco
var kuz = document.getElementById("play5");
var co = document.getElementById("player5");
kuz.addEventListener("click", function(){
 if(co.paused){
   co.play();
   kuz.addEventListener('click', function(){
   });
 } else {
   co.pause();
   kuz.addEventListener('click', function(){
   });
 }
});

//dance monkey
var tones = document.getElementById("play6");
var monkey = document.getElementById("player6");
tones.addEventListener("click", function(){
 if(monkey.paused){
   monkey.play();
   tones.addEventListener('click', function(){
   });
 } else {
   monkey.pause();
   tones.addEventListener('click', function(){
   });
 }
});

//my oh my
var cam = document.getElementById("play7");
var oh = document.getElementById("player7");
cam.addEventListener("click", function(){
 if(oh.paused){
   oh.play();
   cam.addEventListener('click', function(){
   });
 } else {
   oh.pause();
   cam.addEventListener('click', function(){
   });
 }
});

//nice to meet ya
var niall = document.getElementById("play8");
var nice = document.getElementById("player8");
niall.addEventListener("click", function(){
 if(nice.paused){
   nice.play();
   niall.addEventListener('click', function(){
   });
 } else {
   nice.pause();
   niall.addEventListener('click', function(){
   });
 }
});

//ring
var selena = document.getElementById("play9");
var ring = document.getElementById("player9");


selena.addEventListener("click", function(){
 if(ring.paused){
   ring.play();
   selena.addEventListener('click', function(){
   });
 } else {
   ring.pause();
   selena.addEventListener('click', function(){
   });
 }
});

//put a little love on me
var slow = document.getElementById("play10");
var love = document.getElementById("player10");
slow.addEventListener("click", function(){
 if(love.paused){
   love.play();
   slow.addEventListener('click', function(){
   });
 } else {
   love.pause();
   slow.addEventListener('click', function(){
   });
 }
});

// sucker
const jonas = document.querySelector("#play11");
const sucker = document.querySelector("#player11");
const stops = document.querySelectorAll('.grid__items');

jonas.addEventListener("click", () => {
  sucker.paused ? sucker.play() : sucker.pause()
 })

 for (const stop of stops) {
   stop.addEventListener("click", e => {
     e.target.removeAttribute("id")
   })
 }



 // audio de la grille du synesthète
 //adore you
 var harry1 = document.getElementById("son");
 var adore1 = document.getElementById("audio");
 harry1.addEventListener("click", function(){
  if(adore1.paused){
    adore1.play();
    harry1.addEventListener('click', function(){
    });
  } else {
    adore1.pause();
    harry1.addEventListener('click', function(){
    });
  }
 });

 //baiana
 var singer1 = document.getElementById("son1");
 var baiana1 = document.getElementById("audio1");
 singer1.addEventListener("click", function(){
  if(baiana1.paused){
    baiana1.play();
    singer1.addEventListener('click', function(){
    });
  } else {
    baiana1.pause();
    singer1.addEventListener('click', function(){
    });
  }
 });

 //before you go
 var lewis1 = document.getElementById("son2");
 var before1 = document.getElementById("audio2");
 lewis1.addEventListener("click", function(){
  if(before1.paused){
    before1.play();
    lewis1.addEventListener('click', function(){
    });
  } else {
    before1.pause();
    lewis1.addEventListener('click', function(){
    });
  }
 });

 //fireflies
 var owl1 = document.getElementById("son3");
 var fireflies1 = document.getElementById("audio3");
 owl1.addEventListener("click", function(){
  if(fireflies1.paused){
    fireflies1.play();
    owl1.addEventListener('click', function(){
    });
  } else {
    fireflies1.pause();
    owl1.addEventListener('click', function(){
    });
  }
 });

 //intentions
 var jb1 = document.getElementById("son4");
 var intentions1 = document.getElementById("audio4");
 jb1.addEventListener("click", function(){
  if(intentions1.paused){
    intentions1.play();
    jb1.addEventListener('click', function(){
    });
  } else {
    intentions1.pause();
    jb1.addEventListener('click', function(){
    });
  }
 });

 //kuzco
 var kuz1 = document.getElementById("son5");
 var co1 = document.getElementById("audio5");
 kuz1.addEventListener("click", function(){
  if(co1.paused){
    co1.play();
    kuz1.addEventListener('click', function(){
    });
  } else {
    co1.pause();
    kuz1.addEventListener('click', function(){
    });
  }
 });

 //dance monkey
 var tones1 = document.getElementById("son6");
 var monkey1 = document.getElementById("audio6");
 tones1.addEventListener("click", function(){
  if(monkey1.paused){
    monkey1.play();
    tones1.addEventListener('click', function(){
    });
  } else {
    monkey1.pause();
    tones1.addEventListener('click', function(){
    });
  }
 });

 //my oh my
 var cam1 = document.getElementById("son7");
 var oh1 = document.getElementById("audio7");
 cam1.addEventListener("click", function(){
  if(oh1.paused){
    oh1.play();
    cam1.addEventListener('click', function(){
    });
  } else {
    oh1.pause();
    cam1.addEventListener('click', function(){
    });
  }
 });

 //nice to meet ya
 var niall1 = document.getElementById("son8");
 var nice1 = document.getElementById("audio8");
 niall1.addEventListener("click", function(){
  if(nice1.paused){
    nice1.play();
    niall1.addEventListener('click', function(){
    });
  } else {
    nice1.pause();
    niall1.addEventListener('click', function(){
    });
  }
 });

 //ring
 var selena1 = document.getElementById("son9");
 var ring1 = document.getElementById("audio9");


 selena1.addEventListener("click", function(){
  if(ring1.paused){
    ring1.play();
    selena1.addEventListener('click', function(){
    });
  } else {
    ring1.pause();
    selena1.addEventListener('click', function(){
    });
  }
 });

 //put a little love on me
 var slow1 = document.getElementById("son10");
 var love1 = document.getElementById("audio10");
 slow1.addEventListener("click", function(){
  if(love1.paused){
    love1.play();
    slow1.addEventListener('click', function(){
    });
  } else {
    love1.pause();
    slow1.addEventListener('click', function(){
    });
  }
 });

 //sucker

 const jonas1 = document.querySelector("#son11");
 const sucker1 = document.querySelector("#audio11");
 const stops1 = document.querySelectorAll('.grid__items');

 jonas1.addEventListener("click", () => {
   sucker1.paused ? sucker1.play() : sucker1.pause()
  })

  for (const stop1 of stops1) {
    stop1.addEventListener("click", e => {
      e.target.removeAttribute("id")
    })
  }




   // musique de la grille pour mobile
   //adore you
   // var bocl = document.getElementById("song");
   // var micro = document.getElementById("stereo");
   // bocl.addEventListener("click", function(){
   //  if(micro.paused){
   //    micro.play();
   //    bocl.addEventListener('click', function(){
   //    });
   //  } else {
   //    micro.pause();
   //    bocl.addEventListener('click', function(){
   //    });
   //  }
   // });
   //
   // //baiana
   // var baker = document.getElementById("song1");
   // var banana = document.getElementById("stereo1");
   // baker.addEventListener("click", function(){
   //  if(banana.paused){
   //    banana.play();
   //    baker.addEventListener('click', function(){
   //    });
   //  } else {
   //    banana.pause();
   //    baker.addEventListener('click', function(){
   //    });
   //  }
   // });
   //
   // //before you go
   // var big = document.getElementById("song2");
   // var avt = document.getElementById("stereo2");
   // big.addEventListener("click", function(){
   //  if(avt.paused){
   //    avt.play();
   //    big.addEventListener('click', function(){
   //    });
   //  } else {
   //    avt.pause();
   //    big.addEventListener('click', function(){
   //    });
   //  }
   // });
   //
   // //fireflies
   // var city = document.getElementById("song3");
   // var luciole = document.getElementById("stereo3");
   // city.addEventListener("click", function(){
   //  if(luciole.paused){
   //    luciole.play();
   //    city.addEventListener('click', function(){
   //    });
   //  } else {
   //    luciole.pause();
   //    city.addEventListener('click', function(){
   //    });
   //  }
   // });
   //
   // //intentions
   // var hb = document.getElementById("song4");
   // var int = document.getElementById("stereo4");
   // hb.addEventListener("click", function(){
   //  if(int.paused){
   //    int.play();
   //    hb.addEventListener('click', function(){
   //    });
   //  } else {
   //    int.pause();
   //    hb.addEventListener('click', function(){
   //    });
   //  }
   // });
   //
   // //kuzco
   // var lama = document.getElementById("song5");
   // var film = document.getElementById("stereo5");
   // lama.addEventListener("click", function(){
   //  if(film.paused){
   //    film.play();
   //    lama.addEventListener('click', function(){
   //    });
   //  } else {
   //    film.pause();
   //    lama.addEventListener('click', function(){
   //    });
   //  }
   // });
   //
   // //dance monkey
   // var girlb = document.getElementById("song6");
   // var goril = document.getElementById("stereo6");
   // girlb.addEventListener("click", function(){
   //  if(goril.paused){
   //    goril.play();
   //    girlb.addEventListener('click', function(){
   //    });
   //  } else {
   //    goril.pause();
   //    girlb.addEventListener('click', function(){
   //    });
   //  }
   // });
   //
   // //my oh my
   // var brown = document.getElementById("song7");
   // var ouf = document.getElementById("stereo7");
   // brown.addEventListener("click", function(){
   //  if(ouf.paused){
   //    ouf.play();
   //    brown.addEventListener('click', function(){
   //    });
   //  } else {
   //    ouf.pause();
   //    brown.addEventListener('click', function(){
   //    });
   //  }
   // });
   //
   // //nice to meet ya
   // var blond = document.getElementById("song8");
   // var cool = document.getElementById("stereo8");
   // blond.addEventListener("click", function(){
   //  if(cool.paused){
   //    cool.play();
   //    blond.addEventListener('click', function(){
   //    });
   //  } else {
   //    cool.pause();
   //    blond.addEventListener('click', function(){
   //    });
   //  }
   // });
   //
   // //ring
   // var sol = document.getElementById("song9");
   // var rong = document.getElementById("stereo9");
   // sol.addEventListener("click", function(){
   //  if(rong.paused){
   //    rong.play();
   //    sol.addEventListener('click', function(){
   //    });
   //  } else {
   //    rong.pause();
   //    sol.addEventListener('click', function(){
   //    });
   //  }
   // });
   //
   // //put a little love on me
   // var put = document.getElementById("song10");
   // var litle = document.getElementById("stereo10");
   // put.addEventListener("click", function(){
   //  if(litle.paused){
   //    litle.play();
   //    put.addEventListener('click', function(){
   //    });
   //  } else {
   //    litle.pause();
   //    put.addEventListener('click', function(){
   //    });
   //  }
   // });
   //
   // //sucker
   //
   // var nas = document.getElementById("song11");
   // var ker = document.getElementById("stereo11");
   // nas.addEventListener("click", function(){
   //  if(ker.paused){
   //    ker.play();
   //    nas.addEventListener('click', function(){
   //    });
   //  } else {
   //    ker.pause();
   //    nas.addEventListener('click', function(){
   //    });
   //  }
   // });


  // mettre pause au son

  // var sound = document.getElementById("player");
  // press.addEventListener("click", function(){
  //  if(sound.paused){
  //    sound.play();
  //    press.addEventListener('click', function(){
  //       press.classList.toggle('ladiv__kid--passon');
  //    });
  //  } else {
  //    sound.pause();
  //    press.addEventListener('click', function(){
  //
  //    });
  //  }
  // });
