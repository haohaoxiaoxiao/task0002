var input = document.getElementById("input"),
	btn =document.getElementById("btn"),
	result = document.getElementById("div");


function addEvent(element, event, listener) {
	if (element.addEventListener) {
		element.addEventListener(event, listener, false);
	} else if (element.attachEvent) {
		element.attachEvent("on" + event, listener);
	} else {
		element["on" + event] = listener;
	}
}
function countTime() {
	if (result.innerHTML != null) {
		result.innerHTML = null;
	} 
	var check = /\d{4}-\d{2}-\d{2}/.exec(input.value);//正则很强大！！！
	if (check == null || input.value.length != 10) {
		var p = document.createElement("p");
		p.innerHTML = "请按照特定的格式YYYY-MM-DD输入年月日！"
		p.style.color = "#f00";
		result.appendChild(p);
	} else {
		var currentDate = new Date(),
			inputDate = input.value.split("-"),
			year = inputDate[0] - currentDate.getFullYear(),
			month = inputDate[1] - 1 - currentDate.getMonth(),
			day = inputDate[2] - currentDate.getDate(),
			days = year*365 + month*30 + day - 1,
			hour = 23 - currentDate.getHours(),
			minute = 59 - currentDate.getMinutes(),
			second = 59 - currentDate.getSeconds(),
			seconds = days*24*60*60+hour*60+minute*60+second;
			console.log(year);
			console.log(month);
			console.log(day);
			console.log(days);
			console.log(seconds);
		if (seconds == 0) {
			var p2 =document.createElement(p);
			p2.innerHTML = "时间到";
			result.appendChild(p2);
		} else if (seconds < 0) {
			var p3 =document.createElement(p);
			p3.innerHTML = "请输入未来时间";
			result.appendChild(p3);
		} else {
		var p1 = document.createElement(p);
		p1.innerHTML = '距离' + inputDate[0] + '年' + inputDate[1] + '月' + inputDate[2] + '日还有' + days + '天' + hour + '小时' + minute +'分钟' + second + '秒';
		result.appendChild(p1);
		}	

	}
}
function autoCount() {
	
	setInterval(countTime, 1000);
}
addEvent(btn, "click", autoCount);
