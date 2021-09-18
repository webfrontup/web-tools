
var html =
	"<p><tr style='height:21.2px'><td align='left'>${goods.goodsName}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName2}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName3}</td></tr></p><p><tr style='height:21.2px'><td align='left'>${goods.goodsName}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName2}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName3}</td></tr></p>";
    "<tr style='height:21.2px'><td align='left'>${goods.goodsName}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName2}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName3}</td></tr></p><p><tr style='height:21.2px'><td align='left'>${goods.goodsName}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName2}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName3}</td></tr>";
    "<tr style='height:21.2px'><td align='left'>${goods.goodsName}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName2}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName3}</td></tr></p><p><tr style='height:21.2px'><td align='left'>${goods.goodsName}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName2}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName3}</td></tr>";
    " style='height:21.2px'><td align='left'>${goods.goodsName}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName2}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName3}</td></tr></p><p><tr style='height:21.2px'><td align='left'>${goods.goodsName}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName2}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName3}</td";
    // 1, 找到tr 获取标签内的内容
//var str = html.match(/(.)+(?=<\/tr>)/gim);

//var str = html.match(/[^\<]+(?=<\/tr>)/gim);
//console.log("str: ", str);

var regTest = /(\<tr)+([\s\S]*)+(>)+([\s\S]*)+(<\/tr>)/gim;
var str2 = html.match(regTest);
console.log("str2: ", str2);

var str = regTest.exec(html);
console.log("str: ", str);

// 2, 找到td 获取标签内的内容
// 获取 td 的内容
var strAry = str2[0].match(/[^><]+(?=<\/td>)/gim);

strAry.map((v) => {
	let reg = /(\${goods\.(.*?)})/gim;
	var arr = reg.exec(v);
	console.log("arr: ", arr);
	console.log("key: ", arr[2]);
    if (arr[2] === "goodsName") {
		console.log("替换前的内容: ", v);
		var strr = v.replace(reg, "替换的内容");
		console.log("strr: ", strr);
        //str2.replace("${goods.goodsName}", 111);
        //console.log("str2: ", str2);
	}
});




// 3, 捕获 替换
str2[0].replace(/\$\{goods.goodsName\}/gim, 111);