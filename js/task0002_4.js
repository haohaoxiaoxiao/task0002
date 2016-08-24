
window.onload = function() {
	var suggestData = ["Aaron", "Alex", "Ajax", "Anna", "Annie", "Alfred", "Ben", "Brandon", "Charles", "Crystal", "Danny", "Drexter", "Eason", "Edward", "Frank", "Fred", "Gay", "Greg", "Henry", "Howard" ];
	var input = document.getElementById('input');
	var ul = document.getElementsByTagName('ul')[0];//TagName是一个数组
	var li = null, timer,
		pattern = new RegExp("^" + input.value, "i");
	var els = document.getElementsByTagName("a");
	var index=-1;
	input.onkeyup = function() {
		ul.innerHTML = null;
		for (var i in suggestData) {
			if (input.value.length > 0 && RegExp("^" + input.value, "i").exec(suggestData[i]) != null) {//不知道为什么用pattern不行
				li = document.createElement("li");
				li.innerHTML = '<a href="javascript:;">'+suggestData[i]+'</a>';
				ul.appendChild(li);
			}
		}
		if (els.length) {
			ul.style.display = "block";
		} else {
			ul.style.display = "none";
		}
		//鼠标滑过事件
		var list = document.getElementsByTagName("li");
		for (var i = 0; i < list.length; i++) {
			list[i].onmouseover = function() {
				for (var n = 0; n < list.length; n++) {
					list[n].className = null;
				}
				this.className = "selected";
				
			}
			list[i].onmouseout = function() {
				this.className = null;
			}
		}
		//鼠标点击事件，要放在inputkeyup函数里
		for (var i = 0; i < els.length; i++) {
			els[i].onclick = function() {
				input.value = this.innerHTML;
				ul.style.display = "none";
			}
		}
		//上下回车键盘事件
		//都是用的keyup事件，所以要注意index的值怎么算
		for (var i = 0; i < list.length; i++) {
			list[i].className = null;
		}
		if (event.keyCode == 40) {
			if (index >= list.length-1) {
				index = 0;
			} else {
				index += 1;
			}
			list[index].className = "selected";
		}
		if (event.keyCode == 38) {
			if (index <= 0) {
				index = list.length-1;
			} else {
				index -= 1;
			}
			list[index].className = "selected";
		}
		if (event.keyCode == 13) {
			input.value = list[index].firstChild.innerHTML;
			ul.style.display = "none";
		}
		
	}
}
