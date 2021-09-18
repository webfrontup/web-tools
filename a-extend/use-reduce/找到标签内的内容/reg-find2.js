var str2 = (
	'<tr style="height:21.2px">'
		+'<td align="left">${goods.goodsName}</td>'
		+'<td align="left asfsf" aa="234543">${goods.goodsId}</td>'
	+'</tr>'
);



// 1, 找到tr 获取标签内的内容
str2.match(/[^><]+(?=<\/tr>)/gim);



// 2, 找到td 获取标签内的内容


// 3, 捕获 替换



