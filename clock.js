let p=document.querySelector("p")
let h4=document.querySelector("h4")
let body=document.querySelector("body")
let zero=0;

setInterval(()=> {

    let date= new Date()
    //console.log(date)
    
    let seconds=date.getSeconds().toString()
     if (seconds<10) {
       seconds= zero+seconds
     }
    let minutes=date.getMinutes().toString()
   if (minutes<10) {
        minutes= zero+minutes
      }
    
    let hours=date.getHours().toString()
    if (hours<10) {
        hours= zero+hours
      }
    let time=(hours +": "+ minutes + ": "+  seconds)
   
    if (hours < 12) {
       time+= " AM";
     } else {
     time += " PM";
     }
    p.innerHTML = time;
    
    
},1000)

// p.style.fontSize="70px"
//  p.style.fontWeight="bold"




