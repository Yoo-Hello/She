window.onload=function(){
	
	// 随机位置
	function randomPosition(node){
		var rn = parseInt(415*Math.random());
		node.style.left=rn+'px';
	}
	// 随机颜色
	function randomColor(node){
		var fontColor = [
			{
				'hex':'#FFFF66',
				'color':'yellow'
			},
			{
				'hex':'#33ff33',
				'color':'green'
			},
			{
				'hex':'#ff33cc',
				'color':'pink'
			},
			{
				'hex':'#48eeee',
				'color':'blue'
			},
			{
				'hex':'#ff6060',
				'color':'fleshcolor'
			},
			{
				'hex':'#fc9202',
				'color':'orange'
			},
			{
				'hex':'#fd1a1a',
				'color':'red'
			},
			{
				'hex':'#b71ffe',
				'color':'violet'
			}
		];
		var colorNum = Math.floor(parseInt(8*Math.random()));
		var colorName = fontColor[colorNum].color;
		node.style.color = fontColor[colorNum].hex;
		clickInk(node,colorName);
		// console.log(node);
	}
	// randomColor();
	
	// 生成文字
	function Shengchengtext(){
		var textbox=document.getElementById('Tianchong');
		var node = document.createElement('b')
		;
		var nodeText = document.createTextNode("蔡纳叶");
		node.setAttribute('class','shename')
		node.appendChild(nodeText);
		textbox.appendChild(node);
		randomPosition(node);
		randomColor(node);
		deletText(node);
		
		// console.log(typeof this);
	}
	Shengchengtext();
	// 生成时间
	function shengchengTime(){
		window.setInterval(Shengchengtext,1000)
	}
	shengchengTime();
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
	// 设置星空图片位置
	function setPosition(imgX,imgY,obj){
		if(imgX<=0){
			imgX=0;
		}
		if(imgY<=0){
			imgY=0;	
		}
		obj.style.backgroundPosition='-'+imgX+'px -'+imgY+'px';
		console.log(imgX,imgY)
	}
	// 生成墨点
	function shengchengInk(X,Y,imgs){
		var InkBox = document.getElementById('Inkbox');
		var Inks = document.createElement('p');
		var topY = (Y-70);
		var leftX = (X-70);
		var winWidth = window.innerWidth;
		var winHeight = window.innerHeight;
		Inks.setAttribute('class','Ink');
		// Inks.setAttribute('src','./img/'+imgs+'.png');
		InkBox.appendChild(Inks);
		Inks.style.top=topY+'px';
		Inks.style.left=leftX+'px';
		var aa='123'
		
		Inks.style.backgroundSize=winWidth+'px';
		setPosition(leftX,topY,Inks)
		console.log("123456");
	}

	
}()