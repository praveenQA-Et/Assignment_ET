let randomN50=()=>{
    // random functoion for 0.5 
    //return Math.random() < 0.5 ? 0:1;
    return Math.floor(Math.random()* 2);
}

let randomN75=()=>{

    return randomN50() & randomN50(); //P(0)= .75 and P(1)=.25

}

module.exports = randomN75