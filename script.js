
function secondSetup() {
    let d = new Date();
   return d.getSeconds();

}

function minSetup() {
    let d = new Date();
   return d.getMinutes();
}

function hourSetup() {
    let d = new Date();
    return d.getHours();
}



setInterval(() => {
document.querySelector('.second').style.transform = `rotate(${(secondSetup()  * 6 )+ 90}deg)`
}, 1000)

setInterval(() => {
    document.querySelector('.min').style.transform = `rotate(${(minSetup()  * 6 )+ 90}deg)`
}, 1000)

setInterval(() => {
    document.querySelector('.hour').style.transform = `rotate(${(hourSetup()  * 30 )+ 90}deg)`
}, 1000)
    

