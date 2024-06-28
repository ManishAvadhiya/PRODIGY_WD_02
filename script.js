const stopwatchtime = document.getElementById("stopwatchtime");
const start = document.getElementById("start");
const lap = document.getElementById("lap");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");
const laps = document.getElementById("laps");

let hrs = 0,
  min = 0,
  sec = 0,
  ms = 0,
  time;
  
start.onclick = () => {
  time = setInterval(() => {
    ms++;
    if (ms == 100) {
      sec++;
      ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hrs++;
      min = 0;
    }

    stopwatchtime.innerHTML = `${zeropad(hrs)}:${zeropad(min)}:${zeropad(
      sec
    )}:${zeropad(ms)}`;
  }, 10);
  start.setAttribute("style", "display : none");
  stop.setAttribute("style", "display : block");
  lap.setAttribute("style", "display : block");
   reset.setAttribute("style", "display : none");
   lap.removeAttribute("disabled")
};
let count = 0;
lap.onclick = () =>{
    count++;
    let li = document.createElement("li")
    li.innerHTML = `${ "< " +count + " >  " + zeropad(hrs) +":"+ zeropad(min) +":"+ zeropad(sec) +":"+ zeropad(ms)}`;
    laps.appendChild(li)
    laps.scroll( { top : laps.scrollHeight , behavior : "smooth"})
}
stop.onclick = () => {
    clearInterval(time);
  start.innerHTML = "Resume";
  start.setAttribute("style", "display : block");
  stop.setAttribute("style", "display : none");
  lap.setAttribute("style", "display : none");
  reset.setAttribute("style", "display : block");
};
reset.onclick = () => {
    hrs=min=sec=ms=count=0;
    clearInterval(time)
  stopwatchtime.innerHTML = "00:00:00:00"
laps.innerHTML = ""
  start.innerHTML = "Start"
  start.setAttribute("style", "display : block");
  stop.setAttribute("style", "display : none");
  lap.setAttribute("style", "display : block");
  reset.setAttribute("style", "display : none");
  lap.setAttribute("disabled","true")
};
const zeropad = (num) => {
  return String(num).padStart(2, "0");
};
