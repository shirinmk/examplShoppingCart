if (document.getElementsByClassName("uneven").length){
    console.log("grid");
    fnGrid();
}

if (document.querySelector('.navbarUL')){
    console.log("navbar");
    fnNavbar();
}

if (document.getElementsByTagName("table").length){
    console.log("table");    
    fnTable();
}

if (document.querySelectorAll(".productPI").length) {
    console.log("product");
    fnproductInfo();
}

if (document.querySelectorAll(".cart-overlay").length) {
    console.log("shoppingCart");
    fnShoppingCart();
}

if (document.querySelectorAll(".imgSlide").length){
    console.log("slideShow");
    fnSlideShow();
}

// =============================================== grid.js =============================================================
function fnGrid() {

    var unevenContainer = document.getElementsByClassName("uneven");
    var unevenChildren = unevenContainer[0].children;
    var unevenChildrenCount = unevenChildren.length;
    var widths = [];
    var updatedGridCSS;
    
    for (var i = 0; i <unevenChildrenCount; i++){
        if ( unevenChildren[i].className.includes("col-1of12") ){
            widths[i] = 1;
        } else if ( unevenChildren[i].className.includes("col-2of12") ) {
            widths[i] = 2;
        } else if ( unevenChildren[i].className.includes("col-3of12") ) {
            widths[i] = 3;
        } else if ( unevenChildren[i].className.includes("col-4of12") ) {
            widths[i] = 4;
        } else if ( unevenChildren[i].className.includes("col-5of12") ) {
            widths[i] = 5;
        } else if ( unevenChildren[i].className.includes("col-6of12") ) {
            widths[i] = 6;
        } else if ( unevenChildren[i].className.includes("col-7of12") ) {
            widths[i] = 7;
        } else if ( unevenChildren[i].className.includes("col-8of12") ) {
            widths[i] = 8;
        } else if ( unevenChildren[i].className.includes("col-9of12") ) {
            widths[i] = 9;
        } else if ( unevenChildren[i].className.includes("col-10of12") ) {
            widths[i] = 10;
        } else if ( unevenChildren[i].className.includes("col-11of12") ) {
            widths[i] = 11;
        } else if ( unevenChildren[i].className.includes("col-12of12") ) {
            widths[i] = 12;
        }   // if of last else if()
    }       // end of for()
    
    updatedGridCSS = widths[0] + 'fr';
    
    for (var i=1; i<unevenChildrenCount; i++){
        updatedGridCSS += ' ' + widths[i] + 'fr';
    }
    
    unevenContainer[0].style.gridTemplateColumns = updatedGridCSS;
}   // end of fnGrid()

// =============================================== grid.js =============================================================

// =============================================== navbar.js =============================================================
function fnNavbar() {
    // <nav>
    const nav = document.querySelector('nav');
    // navbar <ul>
    const navbarUL = document.querySelector('.navbarUL');
    // navbar <li>
    const navbarLI = document.querySelectorAll('.navbarUL > li');
    // hamburger menu
    const hamburgerMenu = document.createElement('i');

    // media query variable for mobile portrait mode
    var mobilePortrait = window.matchMedia("(max-width: 360px)");

    // media query variable for mobile landscape mode
    var landscape = window.matchMedia("(orientation: landscape)");

    // media query variable for table mode
    var tablet = window.matchMedia("(min-width: 768px)");

    // desktop query variable for desktop mode
    var desktop = window.matchMedia("(min-width: 1023px)");

    // checks to see if the .navbarUL class is used by the user(programmer)
    if (navbarLI.length) {

        if (mobilePortrait.matches) {
            navbarUL.classList.add("vanish");
        }

        if (landscape) {
            navbarUL.classList.toggle('displayGrid');
        }

        // inserts the hamburger menu into the DOM in <nav> before the <ul>
        nav.insertBefore(hamburgerMenu, navbarUL);

        // applies the FontAwesome classes
        hamburgerMenu.className = "fas fa-bars";

        // hamburger menu click functionality
        hamburgerMenu.addEventListener('click', function() {
            navbarUL.classList.toggle('vanish');
            navbarUL.classList.toggle('displayGrid');
        });
    }

    navbarLI.forEach( function(li) {
        if(li.classList.contains("activeLI")) {
            li.firstChild.classList.add("whiteText");
        }
    });

    mobilePortrait.addListener(fnMobilePortrait);

    // adds listener to the landscape media query. note executes both going to and coming out of landscape mode
    landscape.addListener(fnLandscape);

    // adds listener to the tablet media query. note executes both going to and coming out of landscape mode
    tablet.addListener(fnTablet);

    desktop.addListener(fnDesktop);

    // ============ function definitions: =================== //
    function fnMobilePortrait(event) {
        event.preventDefault();

        // defaul mode for navbar will be hidden
        navbarUL.classList.add("vanish");
    }


    function fnLandscape(event){
        event.preventDefault();
        // viewport is now in landscape mode

        // going to/coming from landscape mode
        if (event.matches) {
            // display the navbar
            if (navbarUL.classList.contains('vanish') ) {
                navbarUL.classList.remove('vanish');
                navbarUL.classList.add('displayGrid');    
            }   // end of if()

        // going to/coming from portait mode  
        } else {

            // ensures the viewport is smaller than a tablet
            if (window.matchMedia("(max-width: 767px)").matches) {

                // do not display the navbar
                if (navbarUL.classList.contains('displayGrid') ) {
                    navbarUL.classList.remove('displayGrid');
                    navbarUL.classList.add('vanish');
                }   // end of if()

            }       // end of if()

        }       // in of else()       

    }           // end of fnLandscape()

    function fnTablet(event) {
        event.preventDefault();

        navbarUL.classList.remove("vanish");
        navbarUL.classList.add("displayGrid");
    }

    function fnDesktop(event) {
        event.preventDefault();
        
    }
}       // end of fnNavbar()

// =============================================== navbar.js =============================================================

// =============================================== table.js =============================================================

function fnTable(){
    var table = document.getElementsByTagName("table");
    var tableChildrenTR = table[0].children[0].children;
    var tableChildrenTD;
    
    // cycles through all <tr>'s
    Array.from(tableChildrenTR).forEach(function(tr){
        let temp = 0;
        let trColorChosen = "";
    
        if (tr.className.includes("color") ){
            let trColor = tr.className;
            for(var i = 0; i<trColor.length; i++){
                
                if(temp){
                    trColorChosen += trColor.charAt(i);
                }
    
                if(trColor.charAt(i) == '-') {
                    temp = 1;
                }
    
            }       // end of for()
            tr.style.color = trColorChosen;
        }           // end of if()
    
        // cycles through all <th>'s and <td>'s
        Array.from(tr.children).forEach(function(td) {
            
            let tempTD = 0;
            let tdColorChosen = "";
    
            if (td.className.includes("color") ) {
                let tdColor = td.className;
                for(var i = 0; i<tdColor.length; i++){
                
                    if(tempTD){
                        tdColorChosen += tdColor.charAt(i);
                    }
        
                    if(tdColor.charAt(i) == '-') {
                        tempTD = 1;
                    }
        
                }       // end of for()
                td.style.color = tdColorChosen;
            }
        });     // end of Array.from(tr.children)
    
    });         // end of Array.from(tableChildrenTR)
}       // end of fnTable()

// =============================================== table.js =============================================================

// =============================================== appComp.js =============================================================
function fnShoppingCart() {
//variables

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart")
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

// cart
let cart = [];
//buttons
let buttonsDOM = [];

//gettting the products
class Products{
    async getProducts(){
        try{
            let result = await fetch('./productsExg.json');
            
            let data = await result.json();
            let products = data.items;
            products = products.map(item => {
                const {title,price} = item.fields;
                const {id} = item.sys;
                const image = item.fields.image.fields.file.url;
                return {title,price, id ,image};
            })
           return products;
    `  `} catch (error){
            console.log(error);
        }
    }
}
//display products
class UI{
    displayProducts(products){
        let result = '';
        products.forEach(product => {
            result +=`
            <!-- single product  -->
             <article class="product">
                <div class="img-container">
                    <img src=${product.image} alt="product" class="product-img">
                    <button class="bag-btn" data-id=${product.id}>
                        <i class="fas fa-shopping-cart"></i>
                        add to bag
                    </button>
                </div>
                <h3>${product.title}</h3>
                <h4>$${product.price}</h4>
            </article> 
            <!-- end of single product  -->

            `;           
            
        });
     
        productsDOM.innerHTML = result;
    }
    getBagButtons(){
        const buttons = [...document.querySelectorAll(".bag-btn")];
        buttonsDOM = buttons;
        buttons.forEach(button =>{
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if(inCart){
                button.innerText ="In cart";
                button.disabled = true;
            }
                button.addEventListener('click',(event) =>{
                    event.target.innerText = "In cart";
                    event.target.disabled = true;
                    //get product from products
                    let cartItem = {...Storage.getProducts(id), amount: 1};

                    // add product to the cart
                    cart = [...cart, cartItem];
                    // save cart in local storage
                    Storage.saveCart(cart)
                    // set cart values
                    this.setCartValue(cart);
                    // add cart values
                    // display cart item
                    this.addCartItem(cartItem);
                    // show the cart
                    this.showCart();
                });
            
        });
    }
    setCartValue(cart){
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;

        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    }
    addCartItem(item){
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML =`<img src=${item.image} alt="product1">
        <div>
            <h4>${item.title}</h4>
            <h5>$${item.price}</h5>
            <span class="remove-item" data-id =${item.id}>remove</span>
        </div>
        <div>
            <i class="fas fa-chevron-up" data-id=${item.id}></i>
            <p class="item-amount">${item.amount}</p>
            <i class="fas fa-chevron-down" data-id=${item.id}></i>
        </div> `;
        cartContent.appendChild(div);
    }
    showCart(){
        cartOverlay.classList.add('transparentBcg');
        cartDOM.classList.add('showCart');
    }
    setupApp(){
        cart =  Storage.getCart();
        this.setCartValue(cart);
        this.populateCart(cart);
        cartBtn.addEventListener('click',this.showCart);
        closeCartBtn.addEventListener('click',this.hideCart);
    }
    populateCart(cart){
        cart.forEach(item => this.addCartItem(item));
    }
    hideCart(){
        cartOverlay.classList.remove('transparentBcg');
        cartDOM.classList.remove('showCart');
    }
    cartLogic(){
        //clear cart
        clearCartBtn.addEventListener('click',() => {
            this.clearCart();
        });
        //cart up and down arrow 
        cartContent.addEventListener('click',event => {
            if(event.target.classList.contains('remove-item')){
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement);
                // cartContent
                this.removeItem(id);
            }
            else if(event.target.classList.contains('fa-chevron-up')){
                let addAmount = event.target;
                let id = addAmount.dataset.id;
               
                let tempItem = cart.find(item => item.id === id);
                
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValue(cart);
                addAmount.nextElementSibling.innerText = tempItem.amount;
                
                                
            }
            else if(event.target.classList.contains('fa-chevron-down')){
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                if (tempItem.amount>0){
                    Storage.saveCart(cart);
                    this.setCartValue(cart);
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                }else{
                    cartContent.removeChild(lowerAmount.parentElement.parentElement);
                    this.removeItem(id);
                }
            }
        })
    }
    clearCart(){
        let cartItems = cart.map(item => item.id);
        cartItems.forEach(id => this.removeItem(id));
        while(cartContent.children.length>0){
            cartContent.removeChild(cartContent.children[0]);
        }
        this.hideCart();
    }
    removeItem(id){
        cart = cart.filter(item => item.id !== id);
        this.setCartValue(cart);
        Storage.saveCart(cart);
        let button = this.getSingleButton(id);
        button.disabled =false;
        button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
    }
    getSingleButton(id){
        return buttonsDOM.find(button => button.dataset.id === id);
    }
}
// local storage
class Storage{
    static saveProducts(products){
        localStorage.setItem("products",JSON.stringify(products));
    }
    static getProducts(id){
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id === id);
    }
    static saveCart(cart){
        localStorage.setItem('cart',JSON.stringify(cart));
    }
    static getCart(){
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    }
}

document.addEventListener("DOMContentLoaded",() =>{
    const ui = new UI();
    const products = new Products();
    //setup app
    ui.setupApp();
    //get all products
    products.getProducts().then(products =>{ 
        ui.displayProducts(products)
        Storage.saveProducts(products);
    }).then(() => {
        ui.getBagButtons();
        ui.cartLogic();
    });
});
}   // end of fnShoppingCart()


// =============================================== appComp.js =============================================================

// =============================================== productInfo.js =============================================================
function fnproductInfo() {
    //colors shifts images

    const colorChoicePI = document.querySelectorAll(".colorPI");
    const productspi = document.querySelectorAll(".productPI");

    function changeColor() {
    let color = this.getAttribute("color");
    let productpi = document.querySelector(`.productPI[color="${color}"]`);

    colorChoicePI.forEach((c) => c.classList.remove("activePI"));
    this.classList.add("activePI"); //color-buttons changes

    document.documentElement.style.setProperty;

    productspi.forEach((s) => s.classList.remove("showPI"));
    productpi.classList.add("showPI");
    }

    colorChoicePI.forEach((c) => c.addEventListener("click", changeColor));

    function teaCost() {
    num1 = document.getElementById("amountPI").value;
    num2 = 10;
    document.getElementById("totalPI").innerHTML = num1 * num2;
    }

    const defaultPI = document.querySelectorAll(".sharePI");

    defaultPI[0].addEventListener("click", function (event) {
    event.preventDefault();
    });

    const defaultPIBUY = document.querySelectorAll(".buyPI");

    defaultPIBUY[0].addEventListener("click", function (event) {
    event.preventDefault();
    });
}

// =============================================== productInfo.js =============================================================

function fnSlideShow() {
    const slides = document.querySelector(".slider-items").children;

const slideItems = document.querySelector(".slider-items");

const prev = document.querySelector(".prevS");
const next = document.querySelector(".nextS");

// console.log(next);

const totalSlides = slides.length;
let index = 0;
const duration = 6000;

prev.onclick = function () {
  slide("prevS");
};

next.onclick = function () {
  slide("nextS");
};

function slide(direction) {
  progress();
  //   console.log(direction);
  if (direction == "nextS") {
    if (index == totalSlides - 1) {
      //if index is equal to totalSlides
      //then index =0
      index = 0;
    } else {
      //if index is not equal to totalSlides length then  index++
      index++;
    }
  }
  //   console.log(index);
  //   console.log(totalSlides - 1 + " total-slides:");
  //totalSlides starting from 0; 0-1-2 slides

  if (direction == "prevS") {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }
  //   console.log(index);

  // stoppes auto slide when user clicks
  clearInterval(timer);

  //starting auto slider again

  timer = setInterval(autoSlide, duration);

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    //removes active class from all slides
  }
  slides[index].classList.add("active");
  slideInfo();
}

let width = 100 / totalSlides;
// console.log(width);

//slide info
function slideInfo() {
  document.querySelector(".numberS").innerHTML = index + 1 + "/" + totalSlides;
  document.querySelector(".innerS").style.width = (index + 1) * width + "%";
}

//next slide progress meter

function progress() {
  document.querySelector(".progressSlide").innerHTML = "";
  const div = document.createElement("div");

  div.style.width = "0px";
  div.style.position = "absolute";
  div.style.left = "0";
  div.style.top = "0";
  div.style.backgroundColor = "#a1a9fe";
  div.style.height = "5px";
  div.id = "progressSlide";
  div.style.animation = "progressSlide " + duration / 1000 + "s linear";
  document.querySelector(".progressSlide").appendChild(div);
}
// auto slide
function autoSlide() {
  slide("nextS");
}
let timer = setInterval(autoSlide, duration);

slideInfo();
progress();

}