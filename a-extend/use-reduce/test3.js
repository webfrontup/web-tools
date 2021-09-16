
// https://segmentfault.com/q/1010000040690638

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

//accumulator 累计器
//currentValue 当前值
//currentIndex 当前索引
//array 数组

//[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
//  return accumulator + currentValue;
//});

let obj = {
	col: [
		{ class1: "增量效益", class2: "主营收入份额1", indexName: "未开始" },
		{ class1: "增量效益", class2: "主营收入份额1", indexName: "已完成" },
		{ class1: "增量效益", class2: "主营收入份额1", indexName: "已完成" },
		{ class1: "增量效益", class2: "主营收入份额2", indexName: "未开始" },
		{ class1: "增量效益", class2: "主营收入份额2", indexName: "已完成" },
		{ class1: "网络效能", class2: "单基站流量1", indexName: "未采取" },
		{ class1: "网络效能", class2: "单基站流量1", indexName: "已采取" },
		{ class1: "网络效能", class2: "单基站流量2", indexName: "未采取" },
		{ class1: "网络效能", class2: "单基站流量2", indexName: "已采取" },
	],
};

let objMap = obj.col.reduce(
	(acc, { class1, class2, indexName }) => (
		(
            ((acc[class1] ||= {})[class2] ||= []).push(indexName),
            acc[class1][class2]=[...new Set(acc[class1][class2])]
            //console.log(123456, [...new Set(acc[class1][class2])])
        ),
		acc
	),
	{}
);
console.log(objMap);
//增量效益:
//主营收入份额1: (2) ['未开始', '已完成']
//主营收入份额2: (2) ['未开始', '已完成']
//[[Prototype]]: Object
//网络效能:
//单基站流量1: (2) ['未采取', '已采取']
//单基站流量2: (2) ['未采取', '已采取']
//[[Prototype]]: Object
//                          [key, value]
Object.entries(objMap).map(([title, titleChildren]) => ({
	title,
	children: Object.entries(titleChildren).map(([lable, lableChildren]) => ({
		lable,
		children: lableChildren.map((lable) => ({ lable })),
	})),
}));



//formattArr: [
//{
//    title: "增量效益",
//    children: [
//    {
//        lable: "主营收入份额1",
//        children: [{ lable: "未开始" }, { lable: "已完成" }],
//    },
//    {
//        lable: "主营收入份额2",
//        children: [{ lable: "未开始" }, { lable: "已完成" }],
//    },
//    ],
//},
//{
//    title: "网络效能",
//    children: [
//    {
//        lable: "单基站流量1",
//        children: [{ lable: "未采取" }, { lable: "已采取" }],
//    },
//    {
//        lable: "单基站流量2",
//        children: [{ lable: "未采取" }, { lable: "已采取" }],
//    },
//    ],
//},
//],