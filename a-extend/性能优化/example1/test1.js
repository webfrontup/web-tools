// JS如何对深层嵌套的数组进行增删改查？

const data = [
	{
		name: "111",
		id: 1,
		child: [
			{
				name: "222",
				id: 2,
				child: [],
			},
			{
				name: "333",
				id: 3,
				child: [
					{
						name: "444",
						id: 4,
						child: [],
					},
					{
						name: "555",
						id: 5,
						child: [],
					},
				],
			},
		],
	},
    {
		name: "666",
		id: 6,
        child: []
    },
    {
		name: "777",
		id: 7,
    }
];

//1， 扁平结构 数据接口 key值可以 遍历
var arr = []

function fixData (data, status, parent, level=0) {
    //console.log("data: ", data);
    data.length>0&&data.map((item) => {
        var obj = { ...item };
        if (status == 1) {
			obj.parentId = parent.id;
			console.log("itemm: ", obj);
		}

		if ((item.child && item.child == 0) || !item.child) {
			arr.push(obj);
		} else {
			obj.child = [];
			obj.isParent = true;
			obj.level = level+1;
			arr.push(obj);
			fixData(item.child, 1, item, obj.level);
            console.log(item,'item');
            
		}
	});

}
fixData(data)

console.log('arr: ', arr);

//2， 更新数据
var forObj = {}
arr.map(v => {
    forObj[v.id]=v
})
console.log("forObj: ", forObj);
console.log("forObj_findKey: ", forObj["1"]);

// 3，还原数据

async function originData(forObj){
    var arr = []
    Object.keys(forObj).forEach((key)=>{
        console.log(key, forObj[key]);
        arr.push(forObj[key]);
    })
    console.log("arr: ", arr);

    var originObj = {}
    var originArr = []
    var originChildArr = []
    await arr.map(item => {
        if (item.isParent || !item.parentId) {
			originArr.push(item);
		} else {
			originChildArr.push(item);
		}
    })

    console.log(originArr)
    console.log(originChildArr)

    await originChildArr.map(item => {
        originArr.map(v => {
            if(item.parentId == v.id){
                v.child.push(item)
            }
        })
    })
    
    console.log(originArr);

    var eleOriginArr = [...originArr];
    await eleOriginArr.map((v,index)=> {
        v.index = index
        originObj[v.id] = v;
    })
    console.log("originObj: ", originObj);
    await originArr.map((item,i) => {
        var targetObj = originObj[item.id+""]
        if(targetObj.parentId){
            var objj = originObj[targetObj.parentId + ""];
            if (objj) {
                originArr.splice(i, 1);
                objj.child.push(targetObj);
			}
        }

    })
    console.log("originArr: ", originArr);



    //await originArr.map((item,i) => {
    //     eleOriginArr.map((v)=> {
    //        if(item.id==v.id)return

	//	    if (item.parentId == v.id) {
	//			v.child.push(item);
    //            console.log("iiii: ", i)
    //            eleOriginArr.splice(i,1)
	//		}

    //    })
	//});

    console.log("eleOriginArr: ", eleOriginArr);
    
}
originData(forObj);
