var input1 = document.getElementById("input1"),
	btn1 = document.getElementById("btn1"),
	text1 = document.getElementById("text1");
function addEvent(element, event, listener) {
	if (element.addEventListener) {
		element.addEventListener(event, listener, false);
	} else if (element.attachEvent) {
		element.attachEvent("on" + event, listener);
	} else {
		element["on" + event] = listener;
	}
}
function uniqArray(arr) {
	var array = new Array(),
		obj = new Object();
	for (var i = 0; i < arr.length; i++) {
		if (!obj[arr[i]]) {
			array.push(arr[i]);
			obj[arr[i]] = true;
		}
	}
	return array;
}
function showText1() {
	text1.innerHTML = uniqArray(input1.value.split(","));
}	
addEvent(btn1, "click", showText1);

//第二阶段
function showText2() {
	var input2 = document.getElementById("input2"),
		text2 = document.getElementById("text2");
		text2.innerHTML = uniqArray(input2.value.split(/[\n\s\t,;，；、]/))
}
var btn2 = document.getElementById("btn2");
addEvent(btn2, "click", showText2);

//第三阶段
function showText3() {
	var input3 = document.getElementById("input3").value;
	
	var div = document.getElementById("div");
	if (div.innerHTML != null) {
		div.innerHTML = null;
	}
	if (input3 == "") {
		var p3 = document.createElement("p");
		p3.innerHTML = "请输入兴趣爱好";
		p3.style.color = "#f00";
		div.appendChild(p3);
	} else {
		var narr = input3.split(/[\s,;，；、]+/);//不加+会有问题，加*也有问题，暂时不明白
		console.log(narr);
		if (narr.length >0 && narr.length <= 10) {
		var arr = uniqArray(narr);
		for (var i = 0; i < arr.length; i++) {
			var input = document.createElement("input"),
				label = document.createElement("label");
			input.type = "checkbox";
			input.value = arr[i];
			label.innerHTML = arr[i];
			div.appendChild(input);
			div.appendChild(label);
		}
		
	} else if (narr.length > 10) {
		var p4 = document.createElement("p");
		p4.innerHTML = "兴趣爱好不要超过10个";
		p4.style.color = "#f00";
		div.appendChild(p4);
	} else {
		var p3 = document.createElement("p");
		p3.innerHTML = "请输入兴趣爱好";
		p3.style.color = "#f00";
		div.appendChild(p3);
	}
}
}
var btn3 = document.getElementById("btn3");
addEvent(btn3, "click", showText3);

