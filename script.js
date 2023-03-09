setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
 
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

setInterval(() => {
    var date=new Date();
    var session = "AM";
    var htime = date.getHours();
    var mtime = date.getMinutes();
    var stime = date.getSeconds();
    if(htime==0){
        htime=12;
    }
    if(htime>12){
        htime=htime-12;
        session = "PM";
    }
    if(htime<10){
        dghr.innerHTML = "0" + htime;
        
    }else{
        dghr.innerHTML=htime;
    }
    if(mtime<10){
        dgmt.innerHTML = "0" +mtime;
    }
    else{
        dgmt.innerHTML = mtime;
    }
    if(stime<10){
        dgsc.innerHTML = "0" +stime ;
    }
    else{
        dgsc.innerHTML = stime;
    }
    document.getElementById("daytime").innerHTML=session;
}, 1000);

setInterval(() => {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate();


        var months = ["January", "February", " March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        document.getElementById("dayname").innerHTML=week[dname]+",";
        document.getElementById("month").innerHTML= ` ${months[mo]}`;
        document.getElementById("daynum").innerHTML= `&nbsp${dnum}`;

    }, 1000);