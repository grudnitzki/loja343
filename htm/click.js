$(document).ready(function(){
  $(".menu").jyaddm();

  //window.onload = externalLinks; 
  externalLinks();
});

function CreateBookmarkLink() {
  title = "Sex Shop Loja do Prazer - Sexshop - Sexyshop - Produtos Eróticos";
  url = "http://www.lojadoprazer.com.br";

  // Mozilla Firefox Bookmark
  if (window.sidebar) {
    window.sidebar.addPanel(title, url,"");
  } // IE Favorite
  else if( window.external ) {
    window.external.AddFavorite(url, title);
  } // Opera Hotlist
  else if(window.opera && window.print) {
    return true;
  }
}

function externalLinks() { 
  if (!document.getElementsByTagName) {
    return
  }; 

  var anchors = document.getElementsByTagName("a"); 
  for (var i=0; i<anchors.length; i++) { 
    var anchor = anchors[i]; 
    if (anchor.getAttribute("href") && anchor.getAttribute("rel") == "external") {
      anchor.target = "_blank";
    }
  } 
}