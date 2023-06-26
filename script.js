let c = new Promise((resolve =>{
	setTimeout(()=>{
		resolve("a")
	},1200)
})
let a = new Promise((resolve =>{
	setTimeout(()=>{
		resolve("a")
	},2400)
})					
let b = new Promise((resolve =>{
	setTimeout(()=>{
		resolve("a")
	},3200)
})
let d = new Promise((resolve =>{
	setTimeout(()=>{
		resolve("a")
	},3600)
})
let e = new Promise((resolve =>{
	setTimeout(()=>{
		resolve("a")
	},4800)
})					
window.promises = [a,b,c,d,e];
let x= Promise.promises
document.getElementById("output").innerText=x

// Do not change the code above this
// add your promises to the array `promises`
