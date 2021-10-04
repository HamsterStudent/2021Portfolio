// 시게
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock_display").innerText = time;
    document.getElementById("clock_display").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

window.addEventListener('load', ()=>{
    rollingEyes()
})

// 눈굴리기 효과
function rollingEyes(){
    var eyeball = function(selector){
        const eye = document.querySelector(selector);
        const iris = eye.querySelector('.iris');
        const eyeArea = eye.getBoundingClientRect();
    
        const rolling = function( mouseX, mouseY ){
            const angle = Math.atan2( mouseY - (eyeArea.y + eyeArea.height * 0.5) , mouseX - (eyeArea.x + eyeArea.width * 0.5));
            // console.log(angle)
            iris.style.transform = 'rotate(' +( 180 * angle / Math.PI - 95) + 'deg)';
        };
        return{
            rolling: rolling
        };
    };

    var eye01 = eyeball('.eye01');
    var eye02 = eyeball('.eye02');
    var eye03 = eyeball('.eye03');
    var eye04 = eyeball('.eye04');
    


window.addEventListener('mousemove', function(e){
    eye01.rolling(e.pageX, e.pageY)
    eye02.rolling(e.pageX, e.pageY)
    eye03.rolling(e.pageX, e.pageY)
    eye04.rolling(e.pageX, e.pageY)
})
}

showTime();