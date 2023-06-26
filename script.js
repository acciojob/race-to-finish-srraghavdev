let c = new Promise((resolve =>{
	setTimeout(()=>{
		resolve("c")
	},1200)
}))
let a = new Promise(resolve =>{
	setTimeout(()=>{
		resolve("a")
	},2400)
})					
let b = new Promise((resolve =>{
	setTimeout(()=>{
		resolve("b")
	},3200)
}))
let d = new Promise((resolve =>{
	setTimeout(()=>{
		resolve("d")
	},3600)
}))
let e = new Promise((resolve =>{
	setTimeout(()=>{
		resolve("e")
	},4800)
}))					
window.promises = [a,b,c,d,e];
let x= Promise.any(promises)
x.then((data)=>{
	document.getElementById("output").innerText=data
})


// Do not change the code above this
// add your promises to the array `promises`
