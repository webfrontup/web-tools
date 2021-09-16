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
		((acc[class1] ||= {})[class2] ||= new Set()).add(indexName), acc
	),
	{}
);
console.log(objMap);
Object.entries(objMap).map(([title, titleChildren]) => ({
	title,
	children: Object.entries(titleChildren).map(([lable, lableChildren]) => ({
		lable,
		children: [...lableChildren].map((lable) => ({ lable })),
	})),
}));
