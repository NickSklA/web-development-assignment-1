/* -------- Sidebar Functions -------- */

function openNav() {
    document.getElementById("sidenavId").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenavId").style.width = "0px";   
}


/* -------- Functionality & Logic Code -------- */

var metal;

var house;

var quantity;

var expressDelivery;

var shipping;

var subtotal;

var totalCost;

function initValues() {
    this.metal = document.getElementById('iron');
    this.house = document.getElementById('targaryen');
    this.quantity = 1;
    this.expressDelivery = false;
    update();
}

function setMetal(metal) {
    this.metal = metal;
    update();
}

function setHouse(house) {
    this.house = house;

    // keep only one checkbox selected
    var chechboxes = document.getElementsByName('house');
    for (let i = 0; i < chechboxes.length; i++) {
        if (chechboxes[i].checked) {
            chechboxes[i].checked = false;
        }
    }
    document.getElementById(this.house.id).checked = true;

    update();
}

function setQuantity() {
    this.quantity = document.getElementById('quantity').value;
    update();
}

function setExpressDelivery() {
    this.expressDelivery = document.getElementById('expressDelivery').checked;
    update();
}

function setSubtotal() {
    this.subtotal = ( parseInt(this.metal.value) + parseInt(this.house.value) ) * parseInt(quantity);
}

function setShipping() {
    if (this.subtotal <= 225) {
        this.shipping = 3;
    }
    else {
        this.shipping = 2;
    }

    if (this.expressDelivery) {
        this.shipping += 5;
    }
}

function setTotalCost() {
    this.totalCost = this.subtotal + this.shipping;
}

function setSwordImage() {
    if (this.metal.id == 'iron') {
        document.getElementById('swordImage').src = 'resources/images/iron-sword.png';
    }
    else if (this.metal.id == 'gold') {
        document.getElementById('swordImage').src = 'resources/images/gold-sword.png';
    }
}

function setHouseImage() {
    if (this.house.id == 'targaryen') {
        document.getElementById('house-image').style.backgroundImage = "url('resources/images/house-targaryen.png')";
    }
    else if (this.house.id == 'stark') {
        document.getElementById('house-image').style.backgroundImage = "url('resources/images/house-stark.png')";
    }
    else if (this.house.id == 'lannister') {
        document.getElementById('house-image').style.backgroundImage = "url('resources/images/house-lannister.png')";
    }
    else if (this.house.id == 'greyjoy') {
        document.getElementById('house-image').style.backgroundImage = "url('resources/images/house-greyjoy.jpg')";
    }
}

function writeDescription() {
    if (this.house.id == 'targaryen') {
        document.getElementById('description-paragraph').innerHTML = "House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries.";
    }
    else if (this.house.id == 'stark') {
        document.getElementById('description-paragraph').innerHTML = "House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell.";
    }
    else if (this.house.id == 'lannister') {
        document.getElementById('description-paragraph').innerHTML = "House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties.";
    }
    else if (this.house.id == 'greyjoy') {
        document.getElementById('description-paragraph').innerHTML = "House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros.";
    }
}

function writeTitleDescription() {
    document.getElementById('sword-title').innerHTML = this.metal.id + ' sword - house ' + this.house.id; 
}

function writeBadgeValue() {
    document.getElementById('badge').innerHTML = this.quantity;
}

function writeCostValues() {
    document.getElementById('subtotal').value = this.subtotal;
    document.getElementById('shipping').value = this.shipping;
    document.getElementById('totalCost').value = this.totalCost;
}

function update() {
    setSubtotal();
    setShipping();
    setTotalCost();
    setSwordImage();
    setHouseImage();
    writeDescription();
    writeTitleDescription();
    writeBadgeValue();
    writeCostValues();
}

function generateRandomSword() {
    let randomMetal = Math.floor(Math.random() * 2);
    let randomHouse = Math.floor(Math.random() * 4);

    let metals = document.getElementsByName('metal');
    metals[randomMetal].checked = true;
    setMetal(metals[randomMetal]);

    let houses = document.getElementsByName('house');
    setHouse(houses[randomHouse]);
}

function isInputNumber(event) {
    let char = String.fromCharCode(event.which);

    if (!(/[0-9]/.test(char))) {
        event.preventDefault();
    }
}

function back() {
    document.getElementById('second-step').style.display = 'none';
    document.getElementById('first-step').style.display = 'block';
}

function next() {
    document.getElementById('first-step').style.display = 'none';
    document.getElementById('second-step').style.display = 'block';
}

function confirm() {
    alert('Your order has been completed successfully');
    window.location.href = '/index.html';
}