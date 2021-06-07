// test.js子线程代码
// 通过监听message来接受主线程中的消息
addEventListener('message', function(res) {
    // 子线程向主线程中发生消息
    // 计算斐波那契数列,这个数列从第3项开始，每一项都等于前两项之和。
	if(res.data === 'start') {
		// 开始运算
		console.log('收到主线程消息，开始运算')
		function recurFib(n) {
			if(n < 2){
				// 主动关闭子线程
				// this.close()
				return n ;
			}else {
				return recurFib(n-1)+recurFib(n-2)
			}
		}
		console.time("运算时间：")
		// 计算n为40的结果
		var count = recurFib(40)
		console.timeEnd("运算时间：")
		// 向主线程发送消息
		console.log('运算完毕,发送消息给主线程！')
		this.postMessage(count);
	}

	// 收到主线程消息，开始运算
	// test.js:21 运算时间：: 1575.906005859375 ms
	// test.js:23 运算完毕,发送消息给主线程！
	// (index):38 result: 102334155
})
