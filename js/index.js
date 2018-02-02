var defaultOptions={
    chars:"*ABCDEFGHIJKLMNOPQRSTUVWXYZ#",
    isAdjust: true,
    offsetTop: 70,
    offsetBottom: 10,
    lineScale: 0.7,
    charOffsetX: 80,
    charOffsetY: 20
}
function IndexSidebar(options){
    var options=options || {};
    for(var key in defaultOptions){
        if(defaultOptions.hasOwnProperty(key)){
            options[key]=options[key] || defaultOptions[key];  
        }
    }
    this.options=options;
    this.initialize(options)

}
IndexSidebar.prototype.initialize=function(options){
    var chars=options.chars;
    var el=document.createElement("div");
    el.className='index-sidebar-container';
    el.innerHTML=this.render(chars);
    document.body.appendChild(el) 
}
IndexSidebar.prototype.render=function(chars){
    return  ("<span class='current-char'></span><ul>"+[].map.call(chars,function(ch){
        return '<li>'+ch+'</li>'
    }).join('')+"</ul>")
}
// function IndexSideBar(options) {
//     this.initialize(options)
// }
// IndexSideBar.prototype.initialize = function (options) {
//     // TODO初始化
// }

// // 特定事件触发时，调用传入的回调函数并传入事件数据
// IndexSideBar.prototype.on = function (event, callback) {
//     // TODO 实现事件监听
//     this._listeners = this._listeners || {}
//     var listeners = this._listeners[event] || (this._listeners[event] = [])
//     listeners.push(callback)
// }
// // 触发特定事件，并给出事件数据供监听的回调函数使用
// IndexSideBar.prototype.trigger = function (event, data) {
//     var listeners = this._listeners && this._listeners[event]
//     if (listeners) {
//         listeners
//             .forEach(function (listener) {
//                 listener(data)
//             })
//     }

// }
// // 解除事件监听
// IndexSideBar.prototype.off = function (event, callback) {
//     var listeners = this._listeners && this._listeners[event]
//     if (listeners) {
//         var i = listeners.indexOf(callback)
//         if (i > -1) {
//             listeners.splice(i, 1)
//             if (listeners.length === 0) {
//                 this._listeners[event] = null
//             }
//         }
//     }
// }
// var a = new IndexSideBar('dd');

// // 内容列表组件
// function ItemList(data) {
//     return {gotoChar: function (ch) {
//             // 实现按索引字符跳转功能

//         }}
// }

// // 2 实现手指拖动更新索引字母
// IndexSideBar.prototype.initEvent = function (options) {
//     var el = this.el; // 对应导航栏容器元素，初始化过渡略
//     var touching = false;
//     el.addEventListener('touchstart', function (e) {
//         if (!touching) {
//             e.preventDefault();
//             var t = e.touches[0];
//             start(t.clientX, t.clientY)
//         }
//     }, false)
//     document.addEventListener("touchmove", function (e) {
//         if (touching) {
//             e.preventDefault();
//             var t = e.touches[0];
//             move(t.clientX, t.clientY)
//         }
//     }, false)
//     document.addEventListener('touchend', function (e) {
//         if (touching) {
//             e.preventDefault()
//             end()
//         }
//     }, false)
//     // TODO 实现索引字符的更新
//     function start(clientX, clientY) {}
//     function move(clientX, clientY) {}
//     function end() {}
// }

// // 实现内容列表跳转索引字符 内容列表组件
// function ItemList(data) {
//     var list = []
//     var map = {}
//     var html

//     html = data.map(function (item) {
//         // 数组中每项为 "Angola 安哥拉" 的形式，且已排序
//         var i = item.lastIndexOf(' ')
//         var en = item.slice(0, i)
//         var cn = item.slice(i + 1)
//         var ch = en[0]
//         if (map[ch]) {
//             return '<li>' + en + '<br>' + cn + '</li>'
//         } else {
//             // 同一索引字符首次出现时，在 HTML 上标记
//             map[ch] = true
//             return '<li data-ch="' + ch + '">' + en + '<br>' + cn + '</li>'
//         }
//     }).join('')

//     var elItemList = document.querySelector('#item-container ul')
//     elItemList.innerHTML = html

//     return {
//         gotoChar: function (ch) {
//             // TODO 实现按索引字符跳转功能
//             gotoChar : function (ch) {
//                 if (ch === '*') {
//                     // 滚动至顶部
//                     elItemList.scrollTop = 0
//                 } else if (ch === '#') {
//                     // 滚动至底部
//                     elItemList.scrollTop = elItemList.scrollHeight
//                 } else {
//                     // 滚动至特定索引字符处
//                     var target = elItemList.querySelector('[data-ch="' + ch + '"]')
//                     if (target) {
//                         target.scrollIntoView()
//                     }
//                 }
//             }

//         }
//     }
// }