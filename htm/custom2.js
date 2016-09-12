(function($){
	$.fn.jyaddm = function(options) { 
		
		// definimos los valores por defecto
		var defaults = {  
			enableEnter : true
		};  

		// pero aplicamos los valores que son definidos por la instancia
		var options = $.extend(defaults, options);  
		
		return this.each(function() { 
			// obtenemos los objetos menu (obj), padre, hijo, lista y el selector (el input)
			var obj = $(this);
			var parent = obj.find("div");  						
			var selector = obj.find("input");  						
			var interno = obj.find("ul");
			var listArr = obj.find("li");
			var limit = listArr.length;									
			var selected = 0;
			var selectionArr = new Array;
			var buffer="";
			
			// ocultamos el hijo (ul) y el input al iniciar
			interno.hide();
			selector.hide();
		
			// ejecucici�n de la down/right key
			obj.goDown = function(){
				if(selected<selArr.length-1)
				{					
					selected++;
					obj.select();
				}
			};

			// ejecucici�n de la up/left key			
			obj.goUp = function(){
				if(selected>0)
				{
					selected--;
					obj.select();
				}
			};
			
			// seleccionamos un elemento de la lista
			obj.select = function(){
				obj.clearSelected();
				listArr.eq(selArr[selected]).addClass("selected");
			};
			
			// limpiamos la selecci�n de objetos
			obj.clearSelected = function(){
				for(var i=1; i<limit; i++)
				{
					listArr.eq(i).removeClass("selected");
				}
			};
			
			// cuando oprimimos un elemento de la lista
			obj.enter= function(){
				selector.blur();
				listArr.eq(selArr[selected]).click();
				interno.hide();
			};

			// cuando oprimimos una tecla en el input
			selector.keyup(function(e) {										
				// el texto a buscar
				buffer=selector.val().toLowerCase();
				selArr = new Array;
				
				// buscamos el texto en cada elemento li
				for(var i=1; i<limit; i++)
				{					
					// si el texto se encuentra en el elemento
					if(listArr.eq(i).text().toLowerCase().search(buffer)!=-1)					
					{						
						// muestra el elemento y agrega el �ndice a la lista de selecci�n
						listArr.eq(i).show();
						selArr.push(i);
					}
					else
					{
						// sino, oculta el elemento
						listArr.eq(i).hide();						
					}
				}			
				
				// opciones para teclas especials
				switch(e.which)
				{					
					
					case 37: // key up
						obj.goUp();
					break;
					case 38: //  key left 
						obj.goUp();
					break;
					case 39: // key down
						obj.goDown();
					break;					
					case 40: // key right
						obj.goDown();
					break;	
 					case 13: // enter
						if(options.enableEnter)
						{
							obj.enter();
						}
					break;						
					default: 
						// en cualquier otro caso, selecciona el primer elemento
						obj.select();
				}
			});

			// cuando el mouse pasa sobre el men�
			obj.mouseover(function() {				
				interno.show();
				selector.show();
				selector.focus();
			});
			
			// cuando el mouse sale del men�
			obj.mouseout(function(){
				interno.hide();							
				selector.hide();
			});
			
			// cuando el mouse pasa sobre los elementos "li"
			interno.children().each(function(){
				$(this).mouseover(function(){
					obj.clearSelected();					
				});				
			});
			
			
		});  
	};
})(jQuery);	