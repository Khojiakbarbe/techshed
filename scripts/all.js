$(document).ready(function () {
    allS(all)
})



let theAll;
$("#all").click(function(){
    theAll = this.innerHTML.toLowerCase();
    findAll(theAll)
})
function findAll(myAll){
    let theAll = all.filter((elem)=>{
        if(elem.all === myAll){
            return true
        }else{
            return false
        }
    })
    allS(theAll)
}

let sale;
$("#sale").click(function(){
    sale = this.innerHTML.toLowerCase()
    findSale(sale)
})
function findSale(mySale){
    let sale = all.filter((elem)=>{
        if(elem.sale.toLowerCase() === mySale){
            return true
        }else{
            return false
        }
    })
    allS(sale)
}

function sortby19(){
    let lowToHight = all.sort((a,b)=>{
        return a.price - b.price
    })
    allS(lowToHight)
}

function sortby91(){
    let hightToLow = all.sort((a,b)=>{
        return b.price - a.price
    })
    allS(hightToLow)
}


function sortbyAZ(){
    let aDanZ = all.sort((a,b)=>{
        return a.text.localeCompare(b.text)
    })
    allS(aDanZ)

}

function sortbyZA(){
    let zDanA = all.sort((a,b)=>{
        return b.text.localeCompare(a.text)
    })
    allS(zDanA)

}

//////////////////////////////////////////////////         FILTER BY        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let computers;
$("#computers").click(function(){
    computers = this.innerHTML.toLowerCase();
    findComputers(computers)
})

function findComputers(comp){
    let computers = all.filter((elem)=>{
        if(elem.category === comp){
            return true
        }else{
            return false
        }
    })
    allS(computers)
}


let tablets;
$("#tablets").click(function(){
    tablets = this.innerHTML.toLowerCase();
    findTablets(tablets)
})

function findTablets(tablet){
    let tablets = all.filter((elem)=>{
        if(elem.category === tablet){
            return true
        }else{
            return false
        }
    })
    allS(tablets)
}



let drones;
$("#drones").click(function(){
    drones = this.innerHTML.toLowerCase();
    findDrones(drones)
})

function findDrones(drone){
    let drones = all.filter((elem)=>{
        if(elem.category.toLowerCase() === drone){
            return true
        }else{
            return false
        }
    })
    allS(drones)
}



let headphoners;
$("#headphoners").click(function(){
    headphoners = this.innerHTML.toLowerCase();
    findHeadphones(headphoners)
})

function findHeadphones(phone){
    let headphoners = all.filter((elem)=>{
        if(elem.category === phone){
            return true
        }else{
            return false
        }
    })
    allS(headphoners)
}



let speakers;
$("#speakers").click(function(){
    speakers = this.innerHTML.toLowerCase();
    findSpeakers(speakers)
})

function findSpeakers(speaker){
    let speakers = all.filter((elem)=>{
        if(elem.category === speaker){
            return true
        }else{
            return false
        }
    })
    allS(speakers)
}



let mobiles;
$("#mobiles").click(function(){
    mobiles = this.innerHTML.toLowerCase();
    findMobiles(mobiles)
})

function findMobiles(mobile){
    let mobiles = all.filter((elem)=>{
        if(elem.category === mobile){
            return true
        }else{
            return false
        }
    })
    allS(mobiles)
}



let tvs;
$("#tvs").click(function(){
    tvs = this.innerHTML.toLowerCase();
    findTV(tvs)
})

function findTV(tv){
    let tvs = all.filter((elem)=>{
        if(elem.category === tv){
            return true
        }else{
            return false
        }
    })
    allS(tvs)
}



let werables;
$("#werable").click(function(){
    werables = this.innerHTML.toLowerCase();
    findWerables(werables)
})

function findWerables(werable){
    let werables = all.filter((elem)=>{
        if(elem.category === werable){
            return true
        }else{
            return false
        }
    })
    allS(werables)
}








function allS(element) {
    $("#myRow").empty();

    element.forEach(elem => {
        let all = `<div class="col-lg-3 col-md-4 col-sm-6 myColBorder">
        <div class="card h-100 myCols">
            <div class="pics6Text"><span>${elem.sale}</span></div>
            <div class="img">
                <img src="${elem.img}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
                <p class="card-text">${elem.text}</p>
            </div>
            <div >
                <small class="discount"> ${elem.discount}</small>
                <small class="price">$${elem.price}.00</small>
            </div>
        </div>
    </div>`
        $("#myRow").append(all)
    })
}