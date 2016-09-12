<script>

var SlideShowSpeed = 3000;


var CrossFadeDuration = 3;

var Picture = new Array(); // don't change this
var Caption = new Array(); // don't change this



Picture[1]  = 'https://www.rumo.com.br/lojas/00000343/images/onca001.jpg';
Picture[2]  = 'https://www.rumo.com.br/lojas/00000343/images/onca002.jpg';
Picture[3]  = 'https://www.rumo.com.br/lojas/00000343/images/onca003.jpg';
Picture[4]  = 'https://www.rumo.com.br/lojas/00000343/images/onca004.jpg';
Picture[5]  = 'https://www.rumo.com.br/lojas/00000343/images/onca005.jpg';



Caption[1]  = "Tanga Paraíso - COLEÇÃO A ONCA COMEU...";
Caption[2]  = "Tanga Sempre Tua - COLEÇÃO A ONCA COMEU...";
Caption[3]  = "Tanga Sem Destino - COLEÇÃO A ONCA COMEU...";
Caption[4]  = "Tanga Zabum - COLEÇÃO A ONCA COMEU...";
Caption[5]  = "Tanga Se Melhorar, Estraga - COLEÇÃO A ONCA COMEU...";


var tss;
var iss;
var jss = 1;
var pss = Picture.length-1;

var preLoad = new Array();
for (iss = 1; iss < pss+1; iss++){
preLoad[iss] = new Image();
preLoad[iss].src = Picture[iss];}

function runSlideShow(){
if (document.all){
document.images.PictureBox.style.filter="blendTrans(duration=2)";
document.images.PictureBox.style.filter="blendTrans(duration=CrossFadeDuration)";
document.images.PictureBox.filters.blendTrans.Apply();}
document.images.PictureBox.src = preLoad[jss].src;
if (document.getElementById) document.getElementById("CaptionBox").innerHTML= Caption[jss];
if (document.all) document.images.PictureBox.filters.blendTrans.Play();
jss = jss + 1;
if (jss > (pss)) jss=1;
tss = setTimeout('runSlideShow()', SlideShowSpeed);
}

</script>