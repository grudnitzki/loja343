function MostraMaxParcela(PrecoProd,MaxParcelas){
  var ComSem;
  maxParcela = MaxParcelas;
 if(PrecoProd>=30)MaxParcelas=10;
  if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return;
  if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;
  if(Juros[MaxParcelas-1]>0)ComSem=""; else ComSem="&nbsp;sem&nbsp;juros";
  document.write("ou&nbsp;<b>"+MaxParcelas+"x</b>"+ComSem+" de&nbsp;<b>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,MaxParcelas))+"</b>");
}

// Filtros
function AjustaFiltros(){ 
  var bTemPathQts=false;
  var oUlPathCatQt=document.getElementById("idUlPathCatQtFC");
  if(oUlPathCatQt){bTemPathQts=true;}else{document.getElementById('idListaProdCategoriasFC').style.display='none';}
  var oUlAdic1Qt=document.getElementById("idUlAdic1QtFC");
  if(oUlAdic1Qt){bTemPathQts=true;}else{document.getElementById('idListaProdAdicional1FC').style.display='none';}
  var oUlAdic2Qt=document.getElementById("idUlAdic2QtFC");
  if(oUlAdic2Qt){bTemPathQts=true;}else{document.getElementById('idListaProdAdicional2FC').style.display='none';}
  var oUlAdic3Qt=document.getElementById("idUlAdic3QtFC");
  if(oUlAdic3Qt){bTemPathQts=true;}else{document.getElementById('idListaProdAdicional3FC').style.display='none';}
  //Caso não tenha produtos em categorias/adicionais encontrados, remove div
}

//### Guarda em variável a página atual
var sPagAtual=document.location.href.toUpperCase();

//### função para link no topo
function LinkTop(sTitle,sPage,sParam,sStyle){ 
  sPageM=sPage.toUpperCase();
  if(sPageM=='CADASTRO' || sPageM=='TRACK'){sURL='https://www.rumo.com.br/';sTarget='top';}else {sURL='';sTarget='window'}
  if(sPagAtual.indexOf(sPageM+'.ASP')>=0 && sPagAtual.indexOf(sParam.toUpperCase())>=0){
    document.write('<table width=100% class='+sStyle+'_On align=center OnClick='+sTarget+'.location.href="'+sURL+sPage+'.asp?IDLoja='+IDLoja+sParam+'" cellspacing=0 cellpadding=0><tr><td align=center>'+sTitle+'</td></tr></table>');}
   else{
    document.write('<table width=100% class='+sStyle+'_Off align=center OnMouseOut=this.className="'+sStyle+'_Off" OnMouseOver=this.className="'+sStyle+'_Hover" OnClick='+sTarget+'.location.href="'+sURL+sPage+'.asp?IDLoja='+IDLoja+sParam+'" cellspacing=0 cellpadding=0><tr><td align=center>'+sTitle+'</td></tr></table>');}
}

//### função para link no rodapé
function LinkPag(sTitle,sPage,sParam,sStyle){ 
  sPageM=sPage.toUpperCase();
  if(sPageM=='CADASTRO' || sPageM=='TRACK'){sURL='https://www.rumo.com.br/';sTarget=' target=_top';}else {sURL='';sTarget=''}
  var str='<a href=';
  str+=sURL+sPage+'.asp?IDLoja='+IDLoja+sParam+' class='+sStyle;
  if(sPagAtual.indexOf(sPageM+'.ASP')>=0 && sPagAtual.indexOf(sParam.toUpperCase())>=0)str +='_On';
  else str +='_Off';
  str+=sTarget+'>'+sTitle+'</a>';
  document.write(str);
}


//### Função que abre janela de chat
function MostraChatP(){
 popup=window.open('ChatLogin.asp?IDLoja='+IDLoja,'Chat','top=20,left=20,height=280,width=390,scrollbars=no,resizable=yes');
 popup.focus();return void(0);}

//### Função que valida a busca  
function VerTexto(oNome){
 if (oNome.Texto.value=='' || oNome.Texto.value.length<2){
   alert('Busca inválida.');
   oNome.Texto.focus();
   return false;}
 else{return true;}
}

function MostraFreteGratis(iPeso){
  //iPeso=parseFloat(iPeso.replace(",","."));
  //alert(iPeso);
  //if(iPeso==0)document.write("<div id='fc-frete'><img src='"+sCaminhoImages+"BtFreteGratis.gif'></div>");
  if(iPeso==0)document.write("<div id='fc-frete'>FRETE GR�TIS</div>");
}
//comprar sem sair da pagina
var oDivShowCartOnPage=null;
var iLastCartOnPage=0;

function ShowCartOnPage(IDLoja,iErr,sMsg,sCartText,sCheckoutText,este){
  var oPos=getPos(este);
  if(oDivShowCartOnPage==null){
    var oNewElement=document.createElement("div");
    oNewElement.setAttribute("id","DivShowCartOnPage"); 
    oDivShowCartOnPage=este.parentNode.insertBefore(oNewElement,este);
  }
  oDivShowCartOnPage.style.backgroundColor="#dedede";
  oDivShowCartOnPage.style.borderColor="#ffffff";
  oDivShowCartOnPage.style.color="#555555";
  oDivShowCartOnPage.style.border="1px solid #666666";
  oDivShowCartOnPage.style.marginTop="-100px";
  oDivShowCartOnPage.style.marginLeft="-70px";
  oDivShowCartOnPage.style.position="absolute";
  oDivShowCartOnPage.style.zIndex="1";
  oDivShowCartOnPage.style.visibility="visible";
  if(iErr==0)sBackColor="67a54b"; else sBackColor="949494"
  var sHTML="<table width=200 height=100 cellpadding=3 cellspacing=3>";
     sHTML+="<tr><td colspan=5 align=center style='background-color:#"+ sBackColor +";color:#ffffff;border-width:1;border-color:#3b6e22;font-weight:bold;font-size:13;font-family:verdana;cursor:pointer'>"+ sMsg +"</td></tr>";
     if(iErr==0){
       sHTML+="<tr height=50>";
       sHTML+="<td width=3>&nbsp;</td>";
       sHTML+="<td align=center><a onclick=oDivShowCartOnPage.style.visibility='hidden' style=color:#444444;text-decoration:none;font-size:14;cursor:pointer;>Continuar Comprando</a></td>";
       sHTML+="<td width=3>&nbsp;</td>";
       sHTML+="<td align=center><a href='addproduto.asp?idloja="+ IDLoja +"' style=color:#444444;text-decoration:none;font-size:14;>Finalizar Pedido</a></td>";
       sHTML+="<td align=right><img src='images/cancel_off.png' hspace=5 style='cursor:pointer' onclick=oDivShowCartOnPage.style.visibility='hidden'></td>";
       sHTML+="</tr>";
       este.style.backgroundImage="url('"+sCaminhoImagens+"BotGridComprar.png')"; //Volta botão comprar
       MostraDadosCesta();
       readCart();
       updateCart();       													
     }
     else{
       sHTML+="<tr height=20>";
       sHTML+="<td colspan=5 align=center><img src='images/cancel_off.png' hspace=5 style='cursor:pointer' onclick=oDivShowCartOnPage.style.visibility='hidden'></td>";
       sHTML+="</tr>";
     }
     sHTML+="</table>";
  oDivShowCartOnPage.style.top=oPos.y;
  oDivShowCartOnPage.style.left=oPos.x;
  oDivShowCartOnPage.innerHTML=sHTML;
  iLastCartOnPage++;
  setTimeout("if(iLastCartOnPage=="+ iLastCartOnPage +")oDivShowCartOnPage.style.visibility='hidden';",8000);
}

//mostra dados cesta
var IDLoja="<IDLojaNum>";
function MostraDadosCesta(){
  if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
  else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
  xmlhttp.open("GET","XMLCart.asp?IDLoja="+IDLojaNum+"",false);
  xmlhttp.send();
  xmlDoc=xmlhttp.responseXML; 
  var x=xmlDoc.getElementsByTagName("item");
  var z=xmlDoc.getElementsByTagName("cart");
  try{currencyProdCart=(z[0].getElementsByTagName("currency")[0].childNodes[0].nodeValue);}
  catch(e){currencyProdCart=""}
  try{TotalQtyProdCart=(z[0].getElementsByTagName("TotalQty")[0].childNodes[0].nodeValue);}
  catch(e){TotalQtyProdCart="0"}
  try{subtotalProdCart=""+(z[0].getElementsByTagName("subtotal")[0].childNodes[0].nodeValue);}
  catch(e){subtotalProdCart=""}
  var iItensCesta=TotalQtyProdCart;
  if(iItensCesta==0){sItem="0 ITENS"; document.getElementById("ValorItensCesta").innerHTML="";} 
  else if(iItensCesta==1){sItem="1 ITEM"}
  else {sItem=iItensCesta+" ITENS"}
  try{document.getElementById("QtdItensCesta").innerHTML=sItem;}
  catch(e){}
  try{document.getElementById("ValorItensCesta").innerHTML=currencyProdCart + " " + subtotalProdCart;}
  catch(e){}
}

//function FuncCartOnPage(IDLoja,iErr,sMsg,sCartText,sCheckoutText,este){
//  if(iErr==0)MostraDadosCesta();
//}

function MontaMaxParcelaCart(Valor){
  return("Em at� 3x de "+FormatPrecoReais(CalculaParcelaJurosCompostos(Valor,3)));
}

function ExibeBotoesCesta(bExibeDuasLinhasBotoes){
  try{
    document.write("<style>.EstContinuarComprando{display:none;}</style>");
    var table=document.getElementById('TabItens');

    if(bExibeDuasLinhasBotoes){
      var row=table.insertRow(0);
      var cell=row.insertCell(-1);
      cell.colSpan=4;
      var sCel1="<table width='100%'><tr>";
            sCel1+="<td width='1%' align='left'><a href='home.asp?IDLoja="+ IDLojaNum +"'><img src='"+ sCaminhoImages +"BotContComprando.png' title='Continuar comprando' border='0'></a></td>";
            sCel1+="<td width='1%' align='center'><a href='#R' onclick='document.Lista.submit()'><img src='"+ sCaminhoImages +"BotRecalcular.png' title='Recalcular' border='0'></a></td>";
            sCel1+="<td width='33%' align='right'><a href='#C' onclick='ComprarImg()'><img src='"+ sCaminhoImages +"BotComprar.png' title='Comprar' border='0'></a></td>";
          sCel1+="</tr></table>";
      cell.innerHTML=sCel1;
    }

    var row=table.insertRow(-1);
    var cell=row.insertCell(-1);
    cell.colSpan=4;
    var sCel2="";
    cell.innerHTML=sCel2;

  }catch(e){}
  try{document.getElementById("TabBotoes").style.display='none';}catch(e){}
}

function ComprarImg(){
  document.getElementsByName("Comprar")[0].click();
}
