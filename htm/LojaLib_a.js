function MostraFreteGratis(iPeso){
if(iPeso==0)document.write("<img src='"+sCaminhoImages+"BtFreteGratis.gif'>");
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
            sCel1+="<td width='33%' align='left'><a href='home.asp?IDLoja="+ IDLojaNum +"'><img src='"+ sCaminhoImages +"BotContComprando.png' title='Continuar comprando' border='0'></a></td>";
            sCel1+="<td width='34%' align='center'><a href='#R' onclick='document.Lista.submit()'><img src='"+ sCaminhoImages +"BotRecalcular.png' title='Recalcular' border='0'></a></td>";
            sCel1+="<td width='33%' align='right'><a href='#C' onclick='ComprarImg()'><img src='"+ sCaminhoImages +"BotComprar.png' title='Comprar' border='0'></a></td>";
          sCel1+="</tr></table>";
      cell.innerHTML=sCel1;
    }

    var row=table.insertRow(-1);
    var cell=row.insertCell(-1);
    cell.colSpan=4;
    var sCel2="<table width='100%'><tr>";
          sCel2+="<td width='33%' align='left'><a href='home.asp?IDLoja="+ IDLojaNum +"'><img src='"+ sCaminhoImages +"BotContComprando.png' title='Continuar comprando' border='0'></a></td>";
          sCel2+="<td width='34%' align='center'><a href='#R' onclick='document.Lista.submit()'><img src='"+ sCaminhoImages +"BotRecalcular.png' title='Recalcular' border='0'></a></td>";
          sCel2+="<td width='33%' align='right'><a href='#C' onclick='ComprarImg()'><img src='"+ sCaminhoImages +"BotComprar.png' title='Comprar' border='0'></a></td>";
        sCel2+="</tr></table>";
    cell.innerHTML=sCel2;

  }catch(e){}
  try{document.getElementById("TabBotoes").style.display='none';}catch(e){}
}

function ComprarImg(){
  document.getElementsByName("Comprar")[0].click();
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
            sCel1+="<td width='33%' align='left'><a href='home.asp?IDLoja="+ IDLojaNum +"'><img src='"+ sCaminhoImages +"BotContComprando.png' title='Continuar comprando' border='0'></a></td>";
            sCel1+="<td width='34%' align='center'><a href='#R' onclick='document.Lista.submit()'><img src='"+ sCaminhoImages +"BotRecalcular.png' title='Recalcular' border='0'></a></td>";
            sCel1+="<td width='33%' align='right'><a href='#C' onclick='ComprarImg()'><img src='"+ sCaminhoImages +"BotComprar.png' title='Comprar' border='0'></a></td>";
          sCel1+="</tr></table>";
      cell.innerHTML=sCel1;
    }

    var row=table.insertRow(-1);
    var cell=row.insertCell(-1);
    cell.colSpan=4;
    var sCel2="<table width='100%'><tr>";
          sCel2+="<td width='33%' align='left'><a href='home.asp?IDLoja="+ IDLojaNum +"'><img src='"+ sCaminhoImages +"BotContComprando.png' title='Continuar comprando' border='0'></a></td>";
          sCel2+="<td width='34%' align='center'><a href='#R' onclick='document.Lista.submit()'><img src='"+ sCaminhoImages +"BotRecalcular.png' title='Recalcular' border='0'></a></td>";
          sCel2+="<td width='33%' align='right'><a href='#C' onclick='ComprarImg()'><img src='"+ sCaminhoImages +"BotComprar.png' title='Comprar' border='0'></a></td>";
        sCel2+="</tr></table>";
    cell.innerHTML=sCel2;

  }catch(e){}
  try{document.getElementById("TabBotoes").style.display='none';}catch(e){}
}

function ComprarImg(){
  document.getElementsByName("Comprar")[0].click();
}
