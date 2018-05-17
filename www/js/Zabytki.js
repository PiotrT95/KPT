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