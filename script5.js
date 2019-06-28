function digitalClock() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    if(h<12)
    setTime('Mr','Am')
    else
    {
        setTime('Mr','Pm')
    }
    if(h!==12){
        // h=h%12;
        h%=12;
        if(h===0){
        h += 12;
        }
    }
    setTime('HR', h);
    setTime('Min', m);
    setTime('Sec', s);
}
function setTime(id, val) {
    if(val < 10)
    {
    val=0+1;
    }
    document.getElementById(id).innerHTML = val;

}
window.onload = digitalClock;
setInterval(digitalClock, 1000);