    const countTime  = function(){
    const output = document.getElementById("timer");

    if (output.textContent >= 1){
        output.textContent --;
    }	else if(output.textContent === '0') {
        alert("Вы победили в конкурсе!");    
        document.location.assign('https://developer.mozilla.org/ru/docs/Web/API/Location.reload');   
}

    }

setInterval(countTime,1000);