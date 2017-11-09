window.onload=function(){
	
	// 随机位置
	function randomPosition(node){
		var scrWidth = window.innerWidth;
		var positionNum=parseInt(scrWidth*Math.random());
		node.style.left=positionNum+'px';
		// console.log(positionNum)
	}
	// 随机颜色
	function randomColor(node){
		var fontColor = ['2b71af','6e3989','12bbe8','12cc8b','444e96','a0dc26','c3087b','e32322','e86121','ef8d20','f5e73c','fbc51b'];
		// '#fb0d34','#8f1034','ea809e','#e33316','#e33316','#dc0b10','#8a3c9b','#f4b2e3','#d644f5','#f907a1','#f520cb'
		
		
		var colorNum = Math.floor(parseInt(12*Math.random()));
		var colorName = fontColor[colorNum];
		// node.style.background = fontColor[colorNum];
		clickInk(node,colorName);
		// console.log(node,colorName);
	}
	// randomColor();
	
	// 生成文字
	function Shengchengtext(){
		var textbox=document.getElementById('Tianchong');
		var node = document.createElement('div')
		;
		// var nodeText = document.createTextNode("蔡纳叶");
		node.setAttribute('class','backColor')
		// node.appendChild(nodeText);
		textbox.appendChild(node);
		randomPosition(node);
		randomColor(node);
		deletText(node);
		
		// console.log(typeof this);
	}
	// Shengchengtext();
	// 生成时间
	function shengchengTime(){
		window.setInterval(Shengchengtext,1500);
	}
	// shengchengTime();
	// 删除多余文字
	function deletText(n){
		
		function fun(){
			if(n.offsetTop>=736){
				n.parentNode.removeChild(n);
			};
		}
		window.setInterval(fun,500);
	}
	// 点击生成墨点事件
	function clickInk(n,cm){
		n.onclick=function(event){
			var e = e||window.event;
			shengchengInk(e.clientX,e.clientY,cm);
			n.parentNode.removeChild(n);
			// console.log(e.screenX,e.screenY)
		}
	}
	// 生成墨点
	function shengchengInk(X,Y,imgs){
		var InkBox = document.getElementById('Inkbox');
		var Inks = document.createElement('img');
		var topY = (Y-100);
		var leftX = (X-100);
		var winWidth = window.innerWidth;
		var winHeight = window.innerHeight;
		Inks.setAttribute('class','Ink');
		Inks.setAttribute('src','img/'+imgs+'.png');
		InkBox.appendChild(Inks);
		Inks.style.top=topY+'px';
		Inks.style.left=leftX+'px';
		Inks.style.backgroundSize=winWidth+'px';
		// console.log("123456");
	}

	// 我想说的话
	function Mysay(){
		var sayText=document.getElementById("dis");
		var nextText=sayText.nextElementSibling;
		var sayBox=document.getElementById('MySay');
		if(nextText){
			sayText.setAttribute('id','');
			nextText.setAttribute('id','dis');
		}else{
			clearInterval(time);
			var Ido=document.createElement('p');
			var IdoBut=document.createElement('div');
			Ido.setAttribute('id','IdoText');
			IdoBut.setAttribute('id','IdoBut');
			Ido.innerHTML='你愿意吗？';
			IdoBut.innerHTML='愿意';
			sayBox.appendChild(Ido);
			sayBox.appendChild(IdoBut);
			IdoClick(IdoBut,sayBox);
			console.log("false");
		}
	}
	var time=setInterval(Mysay,5000);
	
	function IdoClick(obj,box){
		obj.onclick=function(){
			box.setAttribute('id','Opacity');
			var fun = function(){
				box.style.display='none';
				setTimeout(shengchengTime,2000);
			}
			setTimeout(fun,1900);
		}
	}
}()