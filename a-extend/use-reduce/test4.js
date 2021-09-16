var col = [
	{ class1: "增量效益", class2: "主营收入份额1", indexName: "未开始" },
	{ class1: "增量效益", class2: "主营收入份额1", indexName: "已完成" },
	{ class1: "增量效益", class2: "主营收入份额2", indexName: "未开始" },
	{ class1: "增量效益", class2: "主营收入份额2", indexName: "已完成" },
	{ class1: "网络效能", class2: "单基站流量1", indexName: "未采取" },
	{ class1: "网络效能", class2: "单基站流量1", indexName: "已采取" },
	{ class1: "网络效能", class2: "单基站流量2", indexName: "未采取" },
	{ class1: "网络效能", class2: "单基站流量2", indexName: "已采取" },
];
function format(list) {
	var ret = [];
	for (var i = 0; i < list.length; ++i) {
		var item = list[i];
		var keys = [];
		for (var key in item) keys.unshift(key);
		for (var j = keys.length, k = 0, _ret = ret; j--; ++k) {
			var key = k ? "lable" : "title";
			var name = item[keys[j]];
			var obj = null;
			for (var l = 0; l < _ret.length; ++l) {
				if (_ret[l][key] === name) {
					obj = _ret[l];
					break;
				}
			}
			if (!obj) {
				obj = {};
				obj[key] = name;
				if (j) obj.children = [];
				_ret.push(obj);
			}
			if (obj.children) _ret = obj.children;
		}
	}
	return ret;
}
console.dir(format(col));
