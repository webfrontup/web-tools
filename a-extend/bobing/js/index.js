var context;
var arr = new Array();
var starCount = 1600;
var rains = new Array();
var rainCount = 25;
//初始化画布及context
function init() {
  //获取canvas
  var stars = document.getElementById("stars");
  windowWidth = window.innerWidth; //当前的窗口的高度
  stars.width = windowWidth;
  stars.height = window.innerHeight;
  //获取context
  context = stars.getContext("2d");
}
//创建一个星星对象
var Star = function () {
  this.x = windowWidth * Math.random(); //横坐标
  this.y = 5000 * Math.random(); //纵坐标
  this.text = "."; //文本
  this.color = "white"; //颜色
  //产生随机颜色
  this.getColor = function () {
    var _r = Math.random();
    if (_r < 0.5) {
      this.color = "#333";
    } else {
      this.color = "white";
    }
  }
  //初始化
  this.init = function () {
    this.getColor();
  }
  //绘制
  this.draw = function () {
    context.fillStyle = this.color;
    context.fillText(this.text, this.x, this.y);
  }
}
//页面加载的时候
window.onload = function () {
  init();
  //画星星
  for (var i = 0; i < starCount; i++) {
    var star = new Star();
    star.init();
    star.draw();
    arr.push(star);
  }
  //画流星
  for (var i = 0; i < rainCount; i++) {
    var rain = new MeteorRain();
    rain.init();
    rain.draw();
    rains.push(rain);
  }
  playStars(); //绘制闪动的星星
  playRains(); //绘制流星

}
//星星闪起来
function playStars() {
  for (var n = 0; n < starCount; n++) {
    arr[n].getColor();
    arr[n].draw();
  }

  setTimeout("playStars()", 100);
}

/*流星雨开始*/
var MeteorRain = function () {
  this.x = -1;
  this.y = -1;
  this.length = -1; //长度
  this.angle = 30; //倾斜角度
  this.width = -1; //宽度
  this.height = -1; //高度
  this.speed = 1; //速度
  this.offset_x = -1; //横轴移动偏移量
  this.offset_y = -1; //纵轴移动偏移量
  this.alpha = 1; //透明度
  this.color1 = ""; //流星的色彩
  this.color2 = ""; //流星的色彩
  /****************初始化函数********************/
  this.init = function () //初始化
  {
    this.getPos();
    this.alpha = 1; //透明度
    this.getRandomColor();
    //最小长度，最大长度
    var x = Math.random() * 80 + 150;
    this.length = Math.ceil(x);
    //         x = Math.random()*10+30;
    this.angle = 30; //流星倾斜角
    x = Math.random() + 0.5;
    this.speed = Math.ceil(x); //流星的速度
    var cos = Math.cos(this.angle * 3.14 / 180);
    var sin = Math.sin(this.angle * 3.14 / 180);
    this.width = this.length * cos; //流星所占宽度
    this.height = this.length * sin; //流星所占高度
    this.offset_x = this.speed * cos;
    this.offset_y = this.speed * sin;
  }
  /**************获取随机颜色函数*****************/
  this.getRandomColor = function () {
    var a = Math.ceil(255 - 240 * Math.random());
    //中段颜色
    this.color1 = "rgba(" + a + "," + a + "," + a + ",1)";
    //结束颜色
    this.color2 = "black";
  }
  /***************重新计算流星坐标的函数******************/
  this.countPos = function () //
  {
    //往左下移动,x减少，y增加
    this.x = this.x - this.offset_x;
    this.y = this.y + this.offset_y;
  }
  /*****************获取随机坐标的函数*****************/
  this.getPos = function () //
  {
    //横坐标200--1200
    this.x = Math.random() * window.innerWidth; //窗口高度
    //纵坐标小于600
    this.y = Math.random() * window.innerHeight; //窗口宽度
  }
  /****绘制流星***************************/
  this.draw = function () //绘制一个流星的函数
  {
    context.save();
    context.beginPath();
    context.lineWidth = 1; //宽度
    context.globalAlpha = this.alpha; //设置透明度
    //创建横向渐变颜色,起点坐标至终点坐标
    var line = context.createLinearGradient(this.x, this.y,
      this.x + this.width,
      this.y - this.height);
    //分段设置颜色
    line.addColorStop(0, "white");
    line.addColorStop(0.3, this.color1);
    line.addColorStop(0.6, this.color2);
    context.strokeStyle = line;
    //起点
    context.moveTo(this.x, this.y);
    //终点
    context.lineTo(this.x + this.width, this.y - this.height);
    context.closePath();
    context.stroke();
    context.restore();
  }
  this.move = function () {
    //清空流星像素
    var x = this.x + this.width - this.offset_x;
    var y = this.y - this.height;
    context.clearRect(x - 3, y - 3, this.offset_x + 5, this.offset_y + 5);
    //         context.strokeStyle="red";
    //         context.strokeRect(x,y-1,this.offset_x+1,this.offset_y+1);
    //重新计算位置，往左下移动
    this.countPos();
    //透明度增加
    this.alpha -= 0.002;
    //重绘
    this.draw();
  }
}
//绘制流星
function playRains() {
  for (var n = 0; n < rainCount; n++) {
    var rain = rains[n];
    rain.move(); //移动
    if (rain.y > window.innerHeight) { //超出界限后重来
      context.clearRect(rain.x, rain.y - rain.height, rain.width, rain.height);
      rains[n] = new MeteorRain();
      rains[n].init();
    }
  }
  setTimeout("playRains()", 2);
}
/*流星雨结束*/
class Game {
  result = [];
  position = [];

  midAutumn = new MidAutumn({
    onChange: result => {
      this.result = result;
    }
  });

  init() {
    $(".award-list").empty();
    let data = this.midAutumn.awardList;
    for (let i = 0; i < data.length; i++) {
      let $divTemp = $("<div></div>");
      $divTemp.append("<div class='list-item'>《" + data[i].name + "》奖品：" + data[i].award + "</div>");
      $divTemp.appendTo(".award-list");
    }
    $(".guize-list").empty();
    let arr = ['4个4+2个1为状元插金花', '4个4+非2个1为状元', '5个或者6个相同数出现为状元', '123456为对堂', '仅有3个4为三红', '4个非4点数出现为四进', '仅有2个4为二举', '仅有1个4为一秀', '其它为无奖励']
    for (let i = 0; i < arr.length; i++) {
      let $divTemp = $("<div></div>");
      $divTemp.append("<div class='list-item'>《" + arr[i] + "》</div>");
      $divTemp.appendTo(".guize-list");
    }
  }

  start() {
    $(".award-item").html("");
    $("#startGame").addClass("disable");
    this.result.length = 0;
    // this.midAutumn.start();
    this.midAutumn.setResult(this.getZSZResult());
    let award = this.midAutumn.getAward();
    console.log(award);
    console.log(award);
    setTimeout(function () {
      $(".award-item").html("恭喜！获得《" + award.name + "》,奖品为: " + award.award);
      $("#startGame").removeClass("disable");
    }, 1500);
    this.setDice();
  }
  getZSZResult() {
    let data = []
    for (let i = 1; i <= 6; i++) {
      data.push((Math.floor(Math.random() * 6) + 1))
    }
    return data;
  }

  getPosition() {
    let position = []
    this.position = [1, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i < 6; i++) {
      position.push(this.position.splice(Math.floor(Math.random() * this.position.length), 1)[0])
    }
    return position;
  }

  setDice() {
    $("#bowl").removeClass('active');
    const position = this.getPosition();
    $.each($("#bowl .dice"), (index, item) => {
      $(item).removeClass();
      $(item).addClass(`sprite dice dice${this.result[index]} dice-position${position[index]}`)
    })
    setTimeout(() => {
      $("#bowl").addClass('active');
    }, 200)
  }
}
class MidAutumn {

  constructor(config = {}) {
    this.config = config;
  }

  result = [];
  awardList = [
    {
      name: '状元插金花',
      rank: 1,
      award: 'iPhone 13 一台+50000购物券'
    },
    {
      name: '状元',
      rank: 2,
      award: 'iPhone 13 一台'
    },
    {
      name: '榜眼/对堂',
      rank: 3,
      award: '现金1000'
    },
    {
      name: '三红',
      rank: 4,
      award: '现金500'
    },
    {
      name: '四进',
      rank: 5,
      award: '现金300'
    },

    {
      name: '二举',
      rank: 6,
      award: '现金200'
    },
    {
      name: '一秀',
      rank: 7,
      award: '现金50'
    },
    {
      name: '啥也没有',
      rank: 8,
      award: '还需努力！再来一次！！'
    },
  ];

  _change() {
    const { onChange } = this.config;
    typeof onChange === 'function' && onChange(this.result);
  }

  // 开始博饼
  start() {
    this.result.length = 0;
    this.getPoint();
    return this;
  }

  // 获取随机的6个点数
  getPoint() {
    for (let i = 0; i < 6; i++) {
      this.result.push(Math.floor(Math.random() * 6) + 1)
    }
    this._change();
  }

  // 设置结果的点数
  setResult(result) {
    if (!(result instanceof Array) || result.length !== 6) {
      throw new Error('设置的结果必须是一个数字数组，并且每个数字在1到6之间');
      return
    }
    this.result = result;
    this._change();
    return this;
  }

  // 统计结果
  _countResult() {
    this.award = [0, 0, 0, 0, 0, 0];
    console.log(this.result)
    this.result.forEach(item => {
      this.award[item - 1]++
    });
    console.log(this.award);
    return this;
  }

  // 判断结果是什么奖项
  getAward() {
    this._countResult();
    const award = this.award;
    // 状元插金花
    if (award[3] === 4 && award[0] === 2) {
      return this.awardList[0]
    }
    // 4个4 状元
    if (award[3] >= 4) {
      return this.awardList[1]
    }
    // 3个4 三红
    if (award[3] === 3) {
      return this.awardList[3]
    }
    // 对堂123456
    if (award[0] === 1 && award[1] === 1 && award[2] === 1 && award[3] === 1 && award[4] === 1 && award[5] === 1) {
      return this.awardList[2]
    }
    // 2举
    if (award[3] === 2) {
      return this.awardList[5]
    }
    // 1秀
    if (award[3] === 1) {
      return this.awardList[6]
    }
    // 五个相同及以上 状元
    if (award.some(item => { return item > 4 })) {
      return this.awardList[1]
    }
    // 4进
    if (award.some(item => { return item === 4 })) {
      return this.awardList[4]
    }
    // 没有奖励
    if (award[3] === 0) {
      return this.awardList[7]
    }
  }

}

function bobing() {
  let arr = [];
  for (var i = 0; i < 6; i++) {
    let num = Math.ceil(Math.random() * 6)
    arr.push(num)
  }
  console.log(arr)
  let dsArr = [0, 0, 0, 0, 0, 0];
  arr.forEach(item => {
    dsArr[item - 1]++
  });
  if (dsArr[3] === 4 && dsArr[0] === 2) {
    console.log('状元插金花')
    return false;
  }
  // 4个4 状元
  if (dsArr[3] >= 4) {
    console.log('状元')
    return false;
  }
  // 3个4 三红
  if (dsArr[3] === 3) {
    console.log('三红')
    return false;
  }
  // 对堂123456
  if (dsArr[0] === 1 && dsArr[1] === 1 && dsArr[2] === 1 && dsArr[3] === 1 && dsArr[4] === 1 && dsArr[5] === 1) {
    console.log('对堂')
    return false;
  }
  // 2举
  if (dsArr[3] === 2) {
    console.log('2举')
    return false;
  }
  // 1秀
  if (dsArr[3] === 1) {
    console.log('1秀')
    return false;
  }
  // 五个相同及以上 状元
  if (dsArr.some(item => { return item > 4 })) {
    console.log('状元')
    return false;
  }
  // 4进
  if (dsArr.some(item => { return item === 4 })) {
    console.log('4进')
    return false;
  }
  // 没有奖励
  if (dsArr[3] === 0) {
    console.log('没有奖励')
    return false;
  }
}
function removeClass(val) {
  if (val) {
    $('.award-list').show()
    $('.guize-list').hide()
  } else {
    $('.award-list').hide()
    $('.guize-list').show()
  }
}
$(() => {
  const game = new Game();
  game.init();
  window.bobing = bobing;
  $("#startGame").on("click", () => {
    game.start();
  })
});
