const accordion=document.querySelectorAll(".item")


accordion.forEach(elemt=>{
	elemt.addEventListener("click",(e)=>{
       e.target.classList.toggle("open");

	})
})