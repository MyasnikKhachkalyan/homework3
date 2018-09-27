const firstFunc = function(a,b,c){
	return a*b/c;
}

console.log("log for firstFunc: " + firstFunc(5,10,25));


const secFunc = function(){
	return "learn js!!! it is useful and funny";
}

console.log("log for secFunc: " + secFunc());


const thirdFunc = function(a){
	const b = "this is function with argument " + "'" +a+ "'";
	//return b;
}

console.log("log for thirdFunc: " + thirdFunc("barev"));


const fourthFunc = function(d,e,f){
	if(d.length>e.length && d.length>f.length){
		return d;
	}
	else if(e.length>d.length && e.length>f.length){
		return e;
	}
	else if(f.length>e.length && d.length<f.length){
		return f;
	}
	else if(d.length===e.length && d.length>f.length) {
		return d + " " + e;
	} 
	else if(d.length===f.length && d.length>e.length) {
		return d +  " " + f;
	}
	else if(e.length===f.length && e.length>d.length) {
		return e + " " + f;
	}
	else if(e.length===d.length && e.length===f.length){
		return d + " " + e + " " + f;
	}
}

console.log("log for fourthFunc: " + fourthFunc(prompt("write a smth"),prompt("write another smth"),prompt("write another one")));



const fifhtFunc = function(g,h){
	if (g>h) {
		return "1" /*+ " (" + "g is " + g + " and " + "h is " + h + ")"*/;
	} 
	else if (g<h) {
		return "-1" /*+ " (" + "g is " + g + " and " + "h is " + h + ")"*/;
	} 
	else if(g===h) {
		return "0" /*+ " (" + "g is " + g + " and " + "h is " + h + ")"*/;
	}
}	

console.log("log for fifthFunc: " + fifhtFunc(Math.floor(Math.random()*100),Math.floor(Math.random()*100)));


const multFunc = function(i,j){
	const mult = i*j;
	return mult /*+ " (" + "i is " + i + " and " + "j is " + j + ")"*/;
}

console.log("log for multFunc: " + multFunc(Math.floor(Math.random()*100),Math.floor(Math.random()*100)));


const divFunc = function(k,l){
	const quo = k/l;
	return quo /*+ " (" + "k is " + k + " and " + "l is " + l + ")"*/;
}

console.log("log for divFunc: " + divFunc(Math.floor(Math.random()*1000),Math.floor(Math.random()*1000)));


const triangleArea = function(base, height){
	const area = multFunc(base, divFunc(height, 2));
	return area;
}

console.log("log for triangleArea: " + triangleArea(15,20));


const rectangleArea = function(baseR, heightR){
	const area = multFunc(baseR, heightR);
	return area;
}


const ninethFunc = function(m){
	const changer = "" + m;
	return changer.length  /*+ " (m is " + m + ")"*/;
}

console.log("log for ninethFunc: " + ninethFunc(Math.floor(Math.random()*10000)));


const tenthFunc = function(n,o,r){
	const smth = n.length + o.length;	
	if (Number(smth)>r) {
		return 1;
	} 
	else {
		return "-1";
	}	
}

console.log("log for tenthFunc: " + tenthFunc("chut","but",Math.floor(Math.random()*10)));


const thelastFunc = function(s,p,q){
	if (s==='rectangle') {
		return rectangleArea(p,q) /*+ " (" + "p is " + p + " and " + "q is " + q + ")"*/;
	} 
	else if(s==='triangle'){
		return triangleArea(p,q) /*+ " (" + "p is " + p + " and " + "q is " + q + ")"*/;
	}

}

console.log("log for thelastFunc: " + thelastFunc(prompt("Write either 'rectangle' or 'triangle'. Please be careful, if you write it incorrectly the code won`t work :):):) "), Math.floor(Math.random()*10), Math.floor(Math.random()*10)));


