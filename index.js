function buildNode () {
  this.data = document.createElement("div");
  this.index = null;
  this.leftChild = null;
  this.rightChild = null;
}
function buildTree(node1,i) {
  var leftIndex = 2*i+1;
  var rightIndex = 2*i+2;
  if (leftIndex < 15) {
    var newLeftNode = new buildNode();
    newLeftNode.data.className="treeNode";
    node1.data.appendChild(newLeftNode.data);
    newLeftNode.index=leftIndex;
    node1.leftChild = newLeftNode;
    buildTree(newLeftNode,leftIndex);
  }
  if (rightIndex < 15) {
    var newRightNode = new buildNode();
    newRightNode.data.className="treeNode";
    node1.data.appendChild(newRightNode.data);
    newRightNode.index=rightIndex;
    node1.rightChild = newRightNode;
    buildTree(newRightNode,rightIndex);
  }
}
//递归构建二叉树
var rootNode = new buildNode();
rootNode.index=0;
rootNode.data=document.getElementById("root");
buildTree(rootNode,0);
//构建完成
var traversalList=[];

function DLR(node) {
  traversalList.push(node.data);
  if(node.leftChild) {
    DLR(node.leftChild);
  }
  if(node.rightChild) {
    DLR(node.rightChild);
  }
}

function LDR(node) {
  if(node.leftChild) {
    LDR(node.leftChild);
  }
  traversalList.push(node.data);
  if(node.rightChild) {
    LDR(node.rightChild);
  }
}

function LRD(node) {
  if(node.leftChild) {
    LRD(node.leftChild);
  }
  if(node.rightChild) {
    LRD(node.rightChild);
  }
  traversalList.push(node.data);
}

function changeColor(i) {
  if(i) {
    traversalList[i-1].style.backgroundColor="white";
    if(i==traversalList.length) {
      clearInterval(timer);
    }
  }
  traversalList[i].style.backgroundColor="green";
}

var buttons=document.getElementsByClassName("btn");
var timer;
buttons[0].onclick = function() {
  var c=0;
  traversalList=[];
  DLR(rootNode);
  timer=setInterval(function() {
    changeColor(c++);
  },500);
}

buttons[1].onclick = function() {
  var c=0;
  traversalList=[];
  LDR(rootNode);
  timer=setInterval(function() {
    changeColor(c++);
  },500);
}

buttons[2].onclick = function() {
  var c=0;
  traversalList=[];
  LRD(rootNode);
  timer=setInterval(function() {
    changeColor(c++);
  },700);
}