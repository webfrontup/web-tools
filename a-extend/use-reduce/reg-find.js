var str = "${goods.goodsName}";

// 匹配goods.xxx 取xxx

// /(\${goods\.(.*?)})/.test("${goods.goodsName}");

//let reg = /(\${goods\.)()/g;

let reg = /(\${goods\.(.*?)})/gim;
var arr = reg.exec(str)
console.log('arr: ', arr)
console.log("key: ", arr[2]);




// 正则替换
// var reg = new RegExp("(http://www.qidian.com/BookReader/)(\\d+),(\\d+).aspx", "gmi");
// var url = "http://www.qidian.com/BookReader/1017141,20361055.aspx";

// var rep = url.replace(reg, "$1ShowBook.aspx?bookId=$2&chapterId=$3");
// http://www.qidian.com/BookReader/ShowBook.aspx?bookId=1017141&chapterId=20361055

// $1: http://www.qidian.com/BookReader/
// $2: 1017141
// $3: 20361055