//вставка дочернего элемента
 	var list = document.getElementById("list");
 	var newItem = document.createElement("li");
 	newItem.innerText = "Создай элемент";
 	list.insertBefore(newItem,list.children[0]);

 	//выведем все дочерние элементы тэга body
 	 for (var i=0;i<document.body.childNodes.length;i++){
 	 	console.log(document.body.childNodes[i]);

 	 }

 	 //Изменяем свойства тега
 	 var h1 = document.getElementById("header");
 	 h1.innerText="Новый заголовок!";
 	 h1.style.fontSize='60px';
 	 h1.className='red';

 	 //Работа с группой клссов
 	 var article = document.getElementsByClassName("article");

 	 for(var i=0, size=16; i<article.length;i++,size+=10){
 	 	article[i].classList.add('red');
 	 	article[i].style.fontWeight='bold';
 	 	article[i].style.fontSize=size+'px';
 	 }

 	 var elText = document.createTextNode("Нывый элемент");
 	 document.body.appendChild(elText);
