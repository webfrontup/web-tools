var a = '<a class="wenzi">aaaa</a>';
var b = "<a>bbbb</a>";
var c = "<p>cccc</p>";
//通过正则表达式获取
var reg = />(.+)</;
var items = reg.exec(a);
console.log(reg.exec(b)); //弹出结果>bbbb<,bbbb；是一数组
console.log(items); //弹出结果>aaaa<,aaaa;是一数组
console.log(reg.exec(c)[1]); //此获取的是数组的第二个元素，获取结果为cccc





var html =
	"<tr style='height:21.2px'><td align='left'>${goods.goodsName}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName2}</td></tr> <tr style='height:21.2px'><td align='left'>${goods.goodsName3}</td></tr>";
//html.match(/[^><]+(?=<\/td>)/gim);
//通过正则表达式获取
var reg = />(.+)</;
var items = reg.exec(html);