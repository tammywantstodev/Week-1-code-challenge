let speed=prompt("Input speed of car")

function speedDetector(speed){
    if(speed<=70){
        return "Ok"
    }
    else if(speed>70){
       let demeritPoints= Math.floor((speed-70)/5)
        if(demeritPoints > 12){
            return "Licence suspended"
        }
        else{return `Your demerit points are: ${demeritPoints} `}
    }
}
