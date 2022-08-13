const countTime  = function(){
    const output = document.getElementById("timer");

    if (output.textContent >= 1){
        output.textContent --;
    }	else if(output.textContent = '0'){
        alert("Вы победили в конкурсе!");
        
    }
}

setInterval(countTime,1000);
setTimeout(function () {
    location = "http://www.mozilla.org";
 }, 61000); 

 