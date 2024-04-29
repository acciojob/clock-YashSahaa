//your JS code here. If required.
let para = document.getElementById('timer')

function currentTime(){
	let date = new Date()
	let hr = date.getHours()
	let min = date.getMinutes()
	min = min<=9?"0"+min:min;
	let sec = date.getSeconds()
	sec = sec<=9?"0"+sec:sec;
	let day = date.getDay()
	let month = date.getMonth()+1
	let year = date.getFullYear()
	let amOrpm
	if(hr==0){
		hr=12
		amOrpm="AM"
	}
	else if(hr<12){
		amOrpm="AM"
	}
	else if(hr==12){
		amOrpm="PM"
	}
	else{
		hr=hr-12
		amOrpm="PM"
	}
	para.innerText = `${day}/${month}/${year}, ${hr}:${min}:${sec} ${amOrpm}`
}
setInterval(currentTime,1000)