var container1 =document.getElementById("container1"),
	container2 =document.getElementById("container2"),
	leftChild = container1.getElementsByTagName("div"),//之前自己定义了一个getbyclass的函数来定义leftchild和rightchild, 后面mouseup事件里会出问题，达不到效果，不知道为什么
	rightChild = container2.getElementsByTagName("div"),
	unitHeight = 51;
for (var i = 0; i < leftChild.length; i++) {
	leftChild[i].style.top = i * unitHeight + "px";
	drag(leftChild[i]);
};
for (var i = 0; i < rightChild.length; i++) {
	rightChild[i].style.top = i * unitHeight + "px";
	drag(rightChild[i]);
};
function drag(element) {
	element.onmousedown = function() {
		var disX = event.clientX -this.offsetLeft-this.parentNode.offsetLeft;
		var disY = event.clientY -this.offsetTop-this.parentNode.offsetTop;
		this.style.cursor = "move";
		this.style.backgroundColor = "#ee6e6e";
		this.style.borderColor = "#ee6e6e";
		this.style.zIndex =1;
		element.onmousemove = function() {//disX 定义在mousemove外面才没有问题
			this.style.left = event.clientX - this.parentNode.offsetLeft -disX + "px"; 
			this.style.top = event.clientY - this.parentNode.offsetTop -disY + "px"; 
		}
		element.onmouseup = function() {
			element.onmousemove = null;
			this.style.cursor = "auto";
			this.style.backgroundColor = "#f00";
			this.style.borderColor = "#000";
			this.style.zIndex = 0;			
			//如果element在左边容器内
			if (element.parentNode.id == "container1") {
				if (parseInt(element.style.left) > element.offsetWidth/2) {
					element.parentNode.removeChild(element);
					container2.appendChild(element);
					element.style.left = 0;							
				} else {
					element.style.left = 0;							
				}
				console.log(leftChild);
				setHeight();
			}
			//如果element在右边容器内
			else if (element.parentNode.id == "container2") {
				if (parseInt(element.style.left) < -element.offsetWidth/2) {
					element.parentNode.removeChild(element);							
					container1.appendChild(element);
					element.style.left = 0;							
				} else {
					element.style.left = 0;							
				}	
				setHeight();				
			}					
			function setHeight() {
				for (var i = 0; i < leftChild.length; i++) {
					leftChild[i].style.top = i * unitHeight + "px";
				}
				for (var i = 0; i < rightChild.length; i++) {
					rightChild[i].style.top = i * unitHeight + "px";
				}
			}	
		}
	}
}

/*点击边框拖动时会有问题待解决*/
