$(document).ready(function () {
    computer(computers)
})

$(".checkboxes").click(function(){
    // alert("sjhbn")
    this.classList.toggle("checkboxesColor")
})


let all;
$("#all").click(function(){
    all = this.innerHTML.toLowerCase();
    findAll(all)
})
function findAll(myAll){
    let all = computers.filter((elem)=>{
        if(elem.all === myAll){
            return true
        }else{
            return false
        }
    })
    computer(all)
}

let sale;
$("#sale").click(function(){
    sale = this.innerHTML.toLowerCase()
    findSale(sale)
})
function findSale(mySale){
    let sale = computers.filter((elem)=>{
        if(elem.sale.toLowerCase() === mySale){
            return true
        }else{
            return false
        }
    })
    computer(sale)
}

let best;
$("#best").click(function(){
    best = this.innerHTML.toLowerCase()
    findBest(best)
})
function findBest(myBest){
    let best = computers.filter((elem)=>{
        if(elem.bestSeller.toLowerCase() === myBest){
            return true
        }else{
            return false
        }
    })
    computer(best)
}



function computer(element) {
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