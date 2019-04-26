/* -------- Sidebar Functions -------- */

function openNav() {
    document.getElementById("sidenavId").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenavId").style.width = "0px";   
}


/* -------- Update Total Cost -------- */

var metal;

var house;

var quantity;

var expressDelivery;

function initValues() {
    this.metal = document.getElementById('ironMetal');
    this.house = null;
    this.quantity = 1;
    this.expressDelivery = false;

    this.logValues();
}

function logValues() {
    console.log(this.metal);
    
    console.log(this.house);
    
    console.log(this.quantity);
    
    console.log(this.expressDelivery);
}

function setMetal(metal) {
    this.metal = metal;
    this.logValues();
}

function setHouse(house) {
    this.house = house;

    var chechboxes = document.getElementsByName('house');

    for (i = 0; i < chechboxes.length; i++) {
        if (chechboxes[i].checked) {
            chechboxes[i].checked = false;
        }
    }

    document.getElementById(this.house.id).checked = true;
    document.getElementById('totalCost').value = document.getElementById(this.house.id).value;
    this.logValues();
}

function setQuantity() {
    this.quantity = document.getElementById('quantity').value;
    this.logValues();
}

function setExpressDelivery() {
    this.expressDelivery = document.getElementById('expressDelivery').checked;
    this.logValues();
}

function setTotalCost() {
    var totalCostInput = document.getElementById('totalCost');
}

function getTotalCost() {
    return document.getElementsByName('metal')
}