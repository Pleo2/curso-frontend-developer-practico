const menuEmail = document.querySelector(".navbar-email"); //! ==> selecionamos primero la etiqueta que deamos escuchar la accion
const desktopMenu = document.querySelector(".desktop-menu"); //! ==> la etiqueta que necesitamos modificar al hacer click ('toggle', aparesca y
//!                                                                  desaparesca)
//* mobile menu

const menuHamburger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

//* product-detail
const shopCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartDetail = document.querySelector(".shopping-cart-Detail");
//* render-products

const cardsContainer = document.querySelector('.cards-container');

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

menuEmail.addEventListener("click", toggleDesktopMenu); //t creamos el metodo para escuchar, definimos la accion + declaramos lo 'function a llamar'=> que realizara la accion
menuHamburger.addEventListener("click", toggleMobileMenu); //t menuHamburger
shopCart.addEventListener("click", toggleShopCartMenu); //t shopCart

//************************************************************************************************************************************************************************* */

//* Desktop menu
function toggleDesktopMenu() {
  shoppingCartDetail.classList.add("inactive");
  desktopMenu.classList.toggle("inactive"); // ! ==> mediante el metodo de 'manipulacion de clase' de la accion 'toggle' -> seleccionamos la
  //!                                                clase a modificar.
}

//* mobile menu

function toggleMobileMenu() {
  shoppingCartDetail.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

//* shopCart menu

function toggleShopCartMenu() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCartDetail.classList.toggle("inactive");
}

//t solucion de el profesor

/*
* ==>const-var

!   const menuEmail = document.querySelector('.navbar-email'); //! ==> selecionamos primero la etiqueta que deamos escuchar la accion
!   const desktopMenu = document.querySelector('.desktop-menu'); //! ==> la etiqueta que necesitamos modificar al hacer click ('toggle', aparesca y 
!                              productDetailent.querySelector('.menu');
!   const mobileMenu = document.querySelector(".mobile-menu");
!   const shopCart = document.querySelector('.navbar-shopping-cart')
!   const shoppingCartDetail = document.querySelector('.product-detail');

* ==>function

!        function toggleDesktopMenu() {
!           shoppingCartDetail.classList.add("inactive");
!           desktopMenu.classList.toggle("inactive"); ==> mediante el metodo de 'manipulacion de clase' de la accion 'toggle' -> seleccionamos la
!                                                         clase a modificar.
!   }

* ==> Menus

//* Desktop menu

function toggleDesktopMenu() {
    const isDesktopMenuClose = desktopMenu.listClass.contain('inactive');
    
    if (!isDesktopMenuClose){
        shoppingCartDetail.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive"); // ! ==> mediante el metodo de 'manipulacion de clase' de la accion 'toggle' -> seleccionamos la
!                                                      clase a modificar.
}

//* mobile menu

function toggleMobileMenu() {
    
    const isMobileMenuClose = mobileMenu.listClass.contain('inactive');
    
    if (!isMobileMenuClose){
        shoppingCartDetail.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

//* shopCart menu

function toggleShopCartMenu() {

    const isProductDetailClose = shoppingCartDetail.listClass.contain('inactive');
    if(!isProductDetailClose){
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
    }
    shoppingCartDetail.classList.toggle("inactive");
}

 */

//! creacion de el HTML desde javaScript 

// <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">

// <div class="product-info">
//   <div>
//     <p>$120,00</p>

//     <p>Bike</p>
//   </div>

//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div>

const productList = [];

productList.push({
  name: 'Bici',
  price: 300,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
});
productList.push({
  name: 'Computadora',
  price: 1200,
  Image: 'https://i.blogs.es/37561e/superpc-1/450_1000.jpeg',  
});
productList.push({
  name: 'Ipad',
  price: 600,
  Image: 'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/149321-tablets-review-review-apple-ipad-102-inch-initial-review-tried-and-trusted-goes-bigger-image1-npbhfzogfj.jpg',  
});
productList.push({
  name: 'Iphone',
  price: 1450,
  Image: 'https://i.blogs.es/1f8068/iphone-12-mini-1-/840_560.jpg',  
});
productList.push({
  name: 'Calculadora',
  price: 60,
  Image: 'https://www.mentesliberadas.com/wp-content/uploads/2013/04/calculadora-cientifica-casio-1024x624.jpg',  
});
productList.push({
  name: 'Teclado',
  price: 240,
  Image: 'https://imagenes.elpais.com/resizer/5ZHoiuLyeC3PEx1cfrmw89gvjLs=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XT4KHFWNPZFHNDETQCDLFINJLU.png',  
});
productList.push({
  name: 'Bici',
  price: 300,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
});
productList.push({
  name: 'Computadora',
  price: 1200,
  Image: 'https://i.blogs.es/37561e/superpc-1/450_1000.jpeg',  
});2

productList.push({
  name: 'Ipad',
  price: 600,
  Image: 'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/149321-tablets-review-review-apple-ipad-102-inch-initial-review-tried-and-trusted-goes-bigger-image1-npbhfzogfj.jpg',  
});
productList.push({
  name: 'Iphone',
  price: 1450,
  Image: 'https://i.blogs.es/1f8068/iphone-12-mini-1-/840_560.jpg',  
});
productList.push({
  name: 'Calculadora',
  price: 60,
  Image: 'https://www.mentesliberadas.com/wp-content/uploads/2013/04/calculadora-cientifica-casio-1024x624.jpg',  
});
productList.push({
  name: 'Teclado',
  price: 240,
  Image: 'https://imagenes.elpais.com/resizer/5ZHoiuLyeC3PEx1cfrmw89gvjLs=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XT4KHFWNPZFHNDETQCDLFINJLU.png',  
});
productList.push({
  name: 'Bici',
  price: 300,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
});
productList.push({
  name: 'Computadora',
  price: 1200,
  Image: 'https://i.blogs.es/37561e/superpc-1/450_1000.jpeg',  
});
productList.push({
  name: 'Ipad',
  price: 600,
  Image: 'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/149321-tablets-review-review-apple-ipad-102-inch-initial-review-tried-and-trusted-goes-bigger-image1-npbhfzogfj.jpg',  
});
productList.push({
  name: 'Iphone',
  price: 1450,
  Image: 'https://i.blogs.es/1f8068/iphone-12-mini-1-/840_560.jpg',  
});
productList.push({
  name: 'Calculadora',
  price: 60,
  Image: 'https://www.mentesliberadas.com/wp-content/uploads/2013/04/calculadora-cientifica-casio-1024x624.jpg',  
});
productList.push({
  name: 'Teclado',
  price: 240,
  Image: 'https://imagenes.elpais.com/resizer/5ZHoiuLyeC3PEx1cfrmw89gvjLs=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XT4KHFWNPZFHNDETQCDLFINJLU.png',  
});productList.push({
  name: 'Bici',
  price: 300,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
});
productList.push({
  name: 'Computadora',
  price: 1200,
  Image: 'https://i.blogs.es/37561e/superpc-1/450_1000.jpeg',  
});
productList.push({
  name: 'Ipad',
  price: 600,
  Image: 'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/149321-tablets-review-review-apple-ipad-102-inch-initial-review-tried-and-trusted-goes-bigger-image1-npbhfzogfj.jpg',  
});
productList.push({
  name: 'Iphone',
  price: 1450,
  Image: 'https://i.blogs.es/1f8068/iphone-12-mini-1-/840_560.jpg',  
});
productList.push({
  name: 'Calculadora',
  price: 60,
  Image: 'https://www.mentesliberadas.com/wp-content/uploads/2013/04/calculadora-cientifica-casio-1024x624.jpg',  
});
productList.push({
  name: 'Teclado',
  price: 240,
  Image: 'https://imagenes.elpais.com/resizer/5ZHoiuLyeC3PEx1cfrmw89gvjLs=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XT4KHFWNPZFHNDETQCDLFINJLU.png',  
});
console.log(productList);

renderProduct(productList);

function renderProduct(arr) {
  
  for (const property of arr) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');


    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', property.Image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');  


    const divContainerPyN = document.createElement('div')

    const priceProduct = document.createElement('p');
    priceProduct.innerText = `$ ${property.price}`;

    const nameProduct = document.createElement('p');
    nameProduct.innerText = `${property.name}`;

    divContainerPyN.appendChild(priceProduct);
    divContainerPyN.appendChild(nameProduct);

    const productInfoFigure = document.createElement('figure');

    const productInfoFigureImg = document.createElement('img');
    productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productInfoFigureImg);

    productCard.appendChild(imgProduct);
    productCard.appendChild(productInfo);

    productInfo.appendChild(divContainerPyN);
    productInfo.appendChild(productInfoFigure)

    cardsContainer.appendChild(productCard);
  }

}
  

