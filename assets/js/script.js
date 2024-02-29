var htmlNota1 = document.getElementById("htmlNota1");
var htmlNota2 = document.getElementById("htmlNota2");
var htmlNota3 = document.getElementById("htmlNota3");
var htmlPromedioFinal = document.getElementById("htmlPromedioFinal");

var CssNota1 = document.getElementById("CssNota1");
var CssNota2 = document.getElementById("CssNota2");
var CssNota3 = document.getElementById("CssNota3");
var CssPromedioFinal = document.getElementById("CssPromedioFinal");

var JsNota1 = document.getElementById("JsNota1");
var JsNota2 = document.getElementById("JsNota2");
var JsNota3 = document.getElementById("JsNota3");
var JsPromedioFinal = document.getElementById("JsPromedioFinal");



// NOTAS HTML
htmlNota1.innerHTML = parseInt(prompt("Ingrese su 1era nota de Html"));
htmlNota2.innerHTML = parseInt(prompt("Ingrese su 2era nota de Html"));
htmlNota3.innerHTML = parseInt(prompt("Ingrese su 3era nota de Html"));

var nota1html = parseInt(htmlNota1.innerHTML);
var nota2html = parseInt(htmlNota2.innerHTML);
var nota3html = parseInt(htmlNota3.innerHTML);

var sumaNotashtml = nota1html + nota2html + nota3html;
var promedioHtml = sumaNotashtml / 3;
htmlPromedioFinal.innerHTML =  promedioHtml;



// NOTAS CSS
CssNota1.innerHTML = parseInt(prompt("Ingrese su 1era nota de Css"));
CssNota2.innerHTML = parseInt(prompt("Ingrese su 2era nota de Css"));
CssNota3.innerHTML = parseInt(prompt("Ingrese su 3era nota deCss"));

var nota1css = parseInt(CssNota1.innerHTML);
var nota2css = parseInt(CssNota2.innerHTML);
var nota3css = parseInt(CssNota3.innerHTML);

var sumaNotascss = nota1css + nota2css + nota3css;
var promediocss = sumaNotascss / 3;
CssPromedioFinal.innerHTML =  promediocss;



// / NOTAS jAVASCRIPT
JsNota1.innerHTML = parseInt(prompt("Ingrese su 1era nota de Js"));
JsNota2.innerHTML = parseInt(prompt("Ingrese su 2era nota de Js"));
JsNota3.innerHTML = parseInt(prompt("Ingrese su 3era nota de Js"));

var nota1js = parseInt(JsNota1.innerHTML);
var nota2js = parseInt(JsNota2.innerHTML);
var nota3js = parseInt(JsNota3.innerHTML);

var sumaNotasjs = nota1js + nota2js + nota3js;
var promediojs = sumaNotasjs / 3;
JsPromedioFinal.innerHTML =  promediojs;