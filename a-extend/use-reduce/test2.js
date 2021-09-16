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

let arr = [];
let obj = '';
col.map((v) => {
    if (v.class1 !== obj.class1) {
        obj = '';
	}
	if (obj==='' || v.class1 == obj.class1) {
		if (!arr[v.class1]) {
			arr[v.class1] = [];
		}
		arr[v.class1].push(v);
	}
    
	obj = v;
});

console.log("arr: ", arr);


let arr2 = [];
let obj2 = "";

if(Object.keys(arr).length>0){
    Object.keys(arr).map(key => {
        let item = arr[key]
        item.map((v) => {

			if (v.class2 !== obj2.class2) {
				obj2 = "";
			}
			if (obj2 === "" || v.class2 == obj2.class2) {
				if (!arr2[v.class2]) {
					arr2[v.class2] = [];
				}
				arr2[v.class2].push(v);
			}

			obj2 = v;
		});
    })
}


console.log("arr2: ", arr2);




