function test001(){
  var p = document.getElementById('tstPara01');
  console.log("FVhívás OK;");
  p.innerHTML = "";
  p.innerHTML = "Gomb megnyomva!";

  var str = "The blue blanket lies on the desk."
  console.log(str);
  console.log("Az str változó hossza: (str.length) = " + str.length);
  console.info("A blanket szó helye az str változó-ban: (str.indexOf(\"blanket\")) = " + str.indexOf("blanket"));
}
