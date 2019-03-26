let firstNode = someNode.childNodes[0];
let secondNode = someNode.childNodes.item(1)
let arrayofNodes = Array.prototype.slice.call(someNode.childNodes, 0)//将NodeList对象转换成数组
