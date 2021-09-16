var html = "<p home='12345'>111</p> <p>222</p> <p>333</p>";


html.match(/[^><]+(?=<\/p>)/gim);


// map无法跳出，所以才会在es6中添加for of语法

// 获取 td 的内容
var html =
	"<tr style='height:21.2px'><td align='left'>${goods.goodsName}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName2}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName3}</td></tr>";
var strAry = html.match(/[^><]+(?=<\/td>)/gim);

strAry.map((v) => {
	let reg = /(\${goods\.(.*?)})/gim;
	var arr = reg.exec(v);
	console.log("arr: ", arr);
	console.log("key: ", arr[2]);
    if (arr[2] === "goodsName") {
		console.log("替换前的内容: ", v);
		var strr = v.replace(reg, "替换的内容");
		console.log("strr: ", strr);
        //html.replace("${goods.goodsName}", 111);
        //console.log("html: ", html);
	}
});

html.replace("${goods.goodsName}", 111);

//strAry.map(v => {
//    let reg = /(\${goods\.(.*?)})/gim;
//	var arr = reg.exec(v);
//	console.log("arr: ", arr);
//	console.log("key: ", arr[2]);
//    if(arr[2]==='goodsName'){
//        console.log("替换前的内容: ", v);
//        var strr = v.replace(reg,'替换的内容')
//        console.log("strr: ", strr);

//        //let newReg = v.toString();
//        //console.log("newReg: ", newReg);

//        //html.replace(reg, "");
//        html.replace("${goods.goodsName}", 111);
//        console.log('html: ', html);
//    }
//})

html.replace("${goods.goodsName}", 111);






// 获取 tr 的 标签及内容
var html = "<tr style='height:21.2px'><1></tr> <tr style='height:21.2px'>222</tr> <tr style='height:21.2px'>333</tr>";
html.match(/[^><tr]+(?=<\/tr>)/gim);

