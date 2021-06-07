// 首先，当一个端口连接被创建时
// （例如：在父级线程中，设置onmessage事件处理函数，或者显式调用start()方法时），使用onconnect事件处理函数来执行代码。

// 使用事件的ports属性来获取端口并存储在变量中。

onconnect = function (e) {
	var port = e.ports[0];

	port.onmessage = function (e) {
		var workerResult = "Result: " + e.data[0] * e.data[1];
		port.postMessage(workerResult);
	};
};
