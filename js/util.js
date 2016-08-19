function isArray(arr) {
	return (arr instanceof Array);
}
function isFunction(fn) {
	return (fn instanceof function);
}
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    // your implement
    if (typeof src == "number" || src == "string" || src == "boolean") {
    	return src;
    }
    else if (src instanceof Array) {
    	var newsrc = new Array();
    	for (var i = 0; i < src.length; i++) {
    		nwesrc[i] = src[i];
    	};
    	return newsrc;
    }
    else if (src instanceof Date) {
    	var newsrc = new Date();
    	newsrc.setTime(src.getTime());
    	return newsrc;
    };
    else if (src instanceof Object) {
    	var newsrc = new Object();
    	for (var i in src) {
    		if (src.hasOwnProperty(i)) {
    			newsrc[i] = cloneObject(src[i]);
    		};
    	}
    	return newsrc;
    };
    }

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    // your implement
    var array = new Array();
    var obj = new Object();
    for (var i = 0; i < arr.length; i++) {
    	//对象属性值为null，null的逻辑非为true
        if (!obj[arr[i]]) {
            //如果数组array中没有相同元素，则添加
            array.push(arr[i]);
            obj[arr[i]] = true; //赋值
        }
    }
    return array;
}

// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    // your implement
    var newstr= "";
    for (var i = 0; i < str.length; i++) {
    	if (str.charAt(i) != "") {
    		newstr = newstr + str.charAt(i);
    	};
    };
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
}

// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
    for (var i = 0; i < arr.length; i++) {
    	fn(arr[i], arr[i].index);
    };
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var num = 0;
	for (var i in obj) {
		if (obj.hasOwnProperty(i))//获取第一层元素
			num++;
		
	}
	return num;
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3

// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
    var reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    return reg.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
    var reg = /0?(13|14|15|17|18)[0-9]{9}$/;
    return reg.test(phone);
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    var element = document.getElementById(element);
    element.className = newClassName;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    var element = document.getElementById(element);
    element.className = null;
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    if (element.parentNode === siblingNode.parentNode) {
    	return true;
    }
    else {
    	return false;
    }
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    var obj = {x, y};
    var element = document.getElementById(element);
    x = element.offsetLeft;
    y = element.offsetTop;
    return obj;

}
// your implement
// 
// 实现一个简单的Query
function $(selector) {

}

// 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象

//4.事件
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
    if (element.addEventListener) {
    element.addEventListener(event, listener, false);
	} else if (element.attachEvent) {
		element.attachEvent("on" + event, listener);
	} else {
		element["on" + event] = listener;
	}
}

// 例如：
function clicklistener(event) {
    ...
}
addEvent($("#doma"), "click", a);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
    if (element.removeEventListener) {
    	element.removeEventListener(event, listener, false);
    } else if (element.detachEvent) {
    	element.detachEvent("on" + event, listener);
    } else {
    	element["on" + event] = null;
    }
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
    addEvent(element, click, listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
    if (event.keyCode == 13) {
    	addEvent(element, keyup, listener);
    }
}

// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
    // your implement
    addEvent(element, eventName, function(eve) {
    	eve = event || window.event;
    	var target = eve.srcElement? eve.srcElement || eve.target;
    	if (target.nodeName.toLowerCase() == tag) {
    		listener(eve);
    	}
    });
}

$.delegate = delegateEvent;

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
$.delegate($("#list"), "li", "click", clickHandle);

//事件函数进行封装
$.on(selector, event, listener) {
    var element = $(selector);
    addEvent(element, event, listener);
}

$.click(selector, listener) {
    var element = $(selector);
    addClickEvent(element, listener);
}

$.un(selector, event, listener) {
    var element = $(selector);
    removeEvent(element, event, listener);
}

$.delegate(selector, tag, event, listener) {
    var element = $(selector);
    delegateEvent(element, tag, eventName, listener);
}

//5.BOM
// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    // your implement
     var appname = window.navigator.appName;
    var version = window.navigator.userAgent;
    if (appname == "Microsoft Internet Explorer") {
        var ver = /(msie)\s(\d+.\d)/.exec(version) || /(rv):(\d+.\d)/.exec(version);
        var num = /(\d+.\d)/.exec(ver);
        return num;
    }
    else {
        return -1;
    }
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    // your implement
    var exdate = new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie = cookieName+"="+escape(cookieValue)+
    ((expiredays==null) ?"":";expires="+exdate.toGMTString());
}

// 获取cookie值
function getCookie(cookieName) {
    // your implement
     if (document.cookie.length>0) {
        c_start=document.cookie.indexOf(cookieName + "=");
        if (c_start!=-1) { 
            c_start=c_start + cookieName.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) 
                c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        } 
    }
    return "";
}

//6. Ajax
// 
function ajax(url, options) {
    // your implement
}

// 使用示例：
ajax(
    'http://localhost:8080/server/ajaxtest', 
    {
        data: {
            name: 'simon',
            password: '123456'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        }
    }
);
