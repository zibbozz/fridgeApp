var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var list3 = document.getElementById("list3");
var delete1 = document.getElementById("delete1");
var delete2 = document.getElementById("delete2");

var l1 = true;
var l2 = true;

delete1.onclick = function(){
	list1.style.opacity = "0.0";
	l1 = false;
	update();
};

delete2.onclick = function(){
	list2.style.opacity = "0.0";
	l2 = false;
	update();
};

function update(){
	if(!l1 || !l2){
		list2.style.top = "140px";
		list3.style.top = "290px";
		if(!l1 && !l2){
			list3.style.top = "140px";
		}
	}
}