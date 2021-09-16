
var col =  [
    { class1: "增量效益", class2: "主营收入份额1", indexName: "未开始" },
    { class1: "增量效益", class2: "主营收入份额1", indexName: "已完成" },
    { class1: "增量效益", class2: "主营收入份额2", indexName: "未开始" },
    { class1: "增量效益", class2: "主营收入份额2", indexName: "已完成" },
    { class1: "网络效能", class2: "单基站流量1", indexName: "未采取" },
    { class1: "网络效能", class2: "单基站流量1", indexName: "已采取" },
    { class1: "网络效能", class2: "单基站流量2", indexName: "未采取" },
    { class1: "网络效能", class2: "单基站流量2", indexName: "已采取" },
]

let arr = []

let obj = {}
col.map(v => {
    if(obj.class1&&(v.class1==obj.class1)){
        if(!arr[v.class1]){
            arr[v.class1]=[]
        }
        arr[v.class1].push(v)
    }
    obj = v;
})

console.log("arr: ",arr)


let newArr = []
let newObj = {}


if(Object.keys(arr).length>0){
    let labelChild="";
    Object.keys(arr).map(key => {
        //newObj.title = key
        let item = arr[key]
        console.log("item", item);
        let objz = {}
        let elseObj = {};
        let label = "";
        let type = "";
        let typeArr = []
        item.map(v => {
            
            objz.title = v.class1;
            if(label==""||label==v.class2){
                if(!elseObj[v.class2]){
                    elseObj[v.class2] = []
                }
                elseObj[v.class2].push(v.indexName);

                typeArr.push(v.indexName);
            }else{
                typeArr.push(v.indexName);
            }
            //if(type==""||type==v.indexName){
            //    if(!elseObj[v.indexName]){
            //        elseObj[v.indexName] = []
            //    }
            //    elseObj[v.indexName].push(v.indexName);
            //}
            
            label= v.class2
            //type = v.indexName;
            console.log('vvv: ',v)
            //newObj.children = 
        })
        console.log("objz: ", objz);
        console.log("elseObj: ", elseObj);
        console.log("typeArr: ", typeArr);

    })
}
console.log(newObj)





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