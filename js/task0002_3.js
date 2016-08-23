
window.onload = function() {
	var main = document.getElementById("main"),
	btns = document.getElementById("btns"),
	arrow = document.getElementById("arrow"),
	left = document.getElementById("left"),
	right = document.getElementById("right");
	var animated = false;
	function animate(offset) {
		animated = true;
		var newleft = parseInt(main.style.left) + offset;
		var time = 500;//位移总时间
		var interval = 10;//位移间隔时间
		var speed = offset/(time/interval);

		function go() {
			if ((speed < 0 && parseInt(main.style.left) > newleft)|| (speed > 0 && parseInt(main.style.left) < newleft)) {
				main.style.left = parseInt(main.style.left) + speed + "px";
				setTimeout(go, interval);
			} else {
				animated = false;
				main.style.left = newleft + "px";
				if (newleft > -400) {
					main.style.left = -2400 + "px";
				}
				if (newleft < -2400) {
					main.style.left = -400 + "px";
				}
			}
		}
		go();
	}

	var btn = btns.getElementsByTagName("span"),
		a = 0;
	function showButton() {
		for (var n = 0; n < btn.length; n++) {
			btn[n].className = "";	
		}
		btn[a].className = "on";
	}
	left.onclick = function() {
		if (!animated){
			animate(400);
		
		
		a -= 1;
		if (a < 0) {
			a = 5;
		}
		showButton(a);
		}
	}
	right.onclick = function() {
		if (!animated){
			animate(-400);
		
		a += 1;
		if (a > 5) {
			a = 0;
		}
		showButton(a);
		}
	}
	for (var m = 0; m < btn.length; m++) {
		btn[m].onclick = function() {
			var x = parseInt(this.getAttribute("name")) - 1;//为什么一定要重新定义一个x = m，showButton才没有问题？
			var offset = -400 * (x-a);
			animate(offset);
			a = x;
			showButton();
		}
	}
	var timer;
	function play(direct) {
        
        timer = setInterval(function(){
            direct.onclick();
        }, 2000)
    }
    function stop() {
    	clearInterval(timer);
    }
    var autoleft = document.getElementById("autoleft");
    var autoright = document.getElementById("autoright");
    autoleft.onclick = function() {
    	stop();
    	play(left);
    }
    autoright.onclick = function() {
    	stop();
    	play(right);
    }
    document.getElementById("container").onmouseover = stop;//不要加（），不然没用
}

