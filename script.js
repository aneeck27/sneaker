// ==============Nav===============

let nav =document.getElementById("nav-list");
let toggle = document.querySelector(".toggle");

toggle.addEventListener('click', function(e){
    if(nav.classList.contains('nav-list')){
        nav.classList.toggle('nav-visible');
    }
})


// ===============timer================

let endDate = new Date("01/01/2025 00:00:00").getTime();
let check = setInterval(function(){
    let now = new Date().getTime();
    let distance = endDate - now;
    let hour = Math.floor((distance % (24*60*60*1000)) / (60*60*1000));
    let min= Math.floor((distance % (60*60*1000)) / (60*1000));
    let sec = Math.floor((distance % (60*1000)) / 1000);
    
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    if(distance <= 0){
        clearInterval(check);
    }
},1000)

// ============== Accordin ================

let accordin = document.querySelectorAll(".accordin-item");

accordin.forEach(accordin =>{
    accordin.addEventListener('click', function(e){
        if(accordin.classList.contains('active')){
            accordin.classList.remove('active');
        }else{
            accordin.classList.add('active');
        }
    })
})
