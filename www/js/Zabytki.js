function changeFunc($value) {
  if($value == "1"){
    draw1();
  }else if ($value == "2"){
    draw2();
  }else if ($value == "3"){
    draw3();
  }else if ($value == "4"){
    draw4();
  }else if ($value == "5"){
    draw5();
  }else if ($value == "6"){
    draw6();
  }else if ($value == "7"){
    draw7();
  }else if ($value == "8"){
    draw8();
  }else if ($value == "9"){
    draw9();
  }else if ($value == "10"){
    draw10();
  }else if ($value == "11"){
    draw11();
  }else if ($value == "12"){
    draw12();
  }else if ($value == "13"){
    draw13();
  }else if ($value == "14"){
    draw14();
  }else if ($value == "15"){
    draw15();
  }else if ($value == "16"){
    draw16();
  }else if ($value == "17"){
    draw17();
  }else if ($value == "18"){
    draw18(); 
  }else if ($value == "19"){
    draw19();
  }else if ($value == "20"){
    draw20(); 
  }else if ($value == "21"){
    draw21();
  }  
}

function checkInformation($value){
var button = document.getElementById("building-information-button");

  if($value == "13" || $value == "14" || $value == "15" || $value == "16" ||  $value == "17" ||  $value == "18" ||  $value == "19" ||  $value == "20" ||  $value == "21"){
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

function draw() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/mapa.png";

}

function draw1() {
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
    img = new Image;
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(this, 0, 0);
};
img.src = "img/wawelloc.jpg";
}
function draw2() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 11, 111);
};
img.src = "img/biblioteka.png";

}

function draw3() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 11, 242);
};
img.src = "img/a.png";

}

function draw4() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 11, 176);
};
img.src = "img/b.png";

}

function draw5() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 11, 193);
};
img.src = "img/c.png";

}

function draw6() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 10, 275);
};
img.src = "img/d.png";

}

function draw7() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 11, 147);
};
img.src = "img/e.png";

}

function draw8() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 15, 36);
};
img.src = "img/f.png";

}

function draw9() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 14, 343);
};
img.src = "img/g.png";

}

function draw10() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 131, 126);
};
img.src = "img/ustronie.png";

}

function draw11() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 110, 0);
};
img.src = "img/sportowy.png";

}

function draw12() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 46, 305);
};
img.src = "img/ksiezowka.png";

}

function draw13() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 85, 343);
};
img.src = "img/ogrodnika.png";

}

function draw14() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 208, 344);
};
img.src = "img/strozowka.png";

}

function draw15() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 26, 154);
};
img.src = "img/zauek.png";

}

function draw16() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 53, 333);
};
img.src = "img/grota.png";

}

function draw17() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 64, 46);
};
img.src = "img/bulka.png";

}

function draw18() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 80, 255);
};
img.src = "img/kiosk.png";

}

function draw19() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 79, 53);
};
img.src = "img/bankomat.png";

}

function draw20() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 127, 183);
};
img.src = "img/boisko.png";

}

function draw21() {
var ctx = document.querySelector("canvas").getContext("2d"),
    img = new Image;
    draw();
img.onload = function() {
  
  ctx.drawImage(this, 171, 183);
};
img.src = "img/kort.png";

}