window.onload=function(){
	var time;
	// 判断网页是否加载完成
	function webLoading(){
		var flag = 0;
		var img = [];
		var imgLoading = [
			'./img/woman.png',
			'./img/2b71af.png',
			'./img/6e3989.png',
			'./img/12bbe8.png',
			'./img/12cc8b.png',
			'./img/444e96.png',
			'./img/a0dc26.png',
			'./img/c3087b.png',
			'./img/e32322.png',
			'./img/e86121.png',
			'./img/ef8d20.png',
			'./img/f5e73c.png',
			'./img/fbc51b.png',
		]
		
		var startInner = document.getElementById('start')
		for(var i=0; i<imgLoading.length; i++){
			img[i] = new Image();
			img[i].src = imgLoading[i];
			img[i].onload = function(){
				flag++;
				if(flag == imgLoading.length){
					console.log('true');
					startInner.innerHTML = '开始游戏';
					start();
				}else{
					console.log('felse');
				}
			}
		}
	}
	webLoading();
	// 点击开始
	function start(){
		var startBut = document.getElementById('start');
		startBut.onclick = function(){
			this.style.display = "none";
			shengchengTime();
			playBGM('play','bgm1');
			answer();
		}
	}
	// start();
	// 生成时间
	function shengchengTime(){
		window.setInterval(Shengchengtext,1500);
	}

	// 生成下落
	function Shengchengtext(){
		var textbox=document.getElementById('Tianchong');
		var node = document.createElement('div')
		;
		node.setAttribute('class','backColor');
		textbox.appendChild(node);
		randomPosition(node);
		randomColor(node);
		deletText(node);
	}
	
	// 随机位置
	function randomPosition(node){
		var scrWidth = window.innerWidth;
		var positionNum=parseInt(scrWidth*Math.random());
		node.style.left=positionNum+'px';
	}
	// 随机颜色
	function randomColor(node){
		var fontColor = ['2b71af','6e3989','12bbe8','12cc8b','444e96','a0dc26','c3087b','e32322','e86121','ef8d20','f5e73c','fbc51b'];
		var colorNum = Math.floor(parseInt(12*Math.random()));
		var colorName = fontColor[colorNum];
		clickInk(node,colorName);
	}
	
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
	}

	// 回答问题事件
	function answer(){
		var answerBox = document.getElementById('answer');
		var answerbut = document.getElementById('answerBut');
		var answerwindow = document.getElementById('answerWindow')
		answerBox.style.display='block';
		answerbut.onclick = function(){
			var state = this.getAttribute('state');
			var name = prompt('她是谁？','');
			if(name == '蔡纳烨'){
				playBGM('pause','bgm1');
				playBGM('play','bgm2');
				document.getElementById('MySay').style.display = 'block';
				setTimeout(fun,15000)
				function fun(){
					time=setInterval(Mysay,8000);
				}
				
			}else{
				alert('回答错了');
			}
		}
	}

	function problem(){

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
		}
	}
	
	
	function IdoClick(obj,box){
		obj.onclick=function(){
			box.setAttribute('id','Opacity');
			var fun = function(){
				box.style.display='none';
			}
			setTimeout(fun,1900);
		}
	}

	// 播放背景音乐
	function playBGM(control,music){
		var BMusic1 = document.getElementById('bgm1');
		var BMusic2 = document.getElementById('bgm2');
		if(control=='play'){
			if(music == 'bgm1'){
				BMusic1.play();
			}else if(music == 'bgm2'){
				BMusic2.play();
			}
		}
		if(control == 'pause'){
			if(music == 'bgm1'){
				BMusic1.pause();
			}else if(music == 'bgm2'){
				BMusic2.pause();
			}
		}
	}
}()