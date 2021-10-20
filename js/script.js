/* Owl Carousel */
$('.owl-carousel').owlCarousel({
  loop: false,
  mouseDrag: true,
  touchDrag: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 2,
    },
    900: {
      items: 3,
    },
  },
});

/* Swiper JS */
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    // when window width is >= 320px
    991: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    // when window width is >= 1400px
    1400: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  autoplay: {
    delay: 4000,
  },
});

/* Open/Close Cart Drawer */
function cartDrawer() {
  let cart_btn = document.querySelector('.cart');
  let cart_drawer = document.querySelector('.cart-drawer');

  /* Open Cart */
  let drawer_open = document.querySelectorAll('.cart').forEach((link) =>
    link.addEventListener('click', () => {
      cart_drawer.classList.add('show');
    })
  );

  /* Close Cart */
  let close_drawer = document.querySelector('.close-drawer');
  if ((drawer_open = true)) {
    close_drawer.addEventListener('click', () => {
      cart_drawer.classList.remove('show');
    });
  }
}

cartDrawer();

/* Hamburger Menu */
let nav_toggler = document.querySelector('.hamburger-toggle-nav');
let drawer = document.querySelector('aside');
let closeNav = document.querySelector('.close-nav-menu');
nav_toggler.addEventListener('click', () => {
  drawer.classList.add('reveal');
});
closeNav.addEventListener('click', () => {
  drawer.classList.remove('reveal');
});

//Dropper Animation
let dropper = document.querySelector('.dropper');
let dropper2 = document.querySelector('.tincture');
let dropper3 = () => {
  let scroll = window.pageYOffset;

  if (Math.floor(scroll) > 1600) {
    dropper.style.position = 'relative';
    dropper.style.top = '135px';
  } else {
    dropper.style.position = 'sticky';
    dropper.style.top = '0px';
  }
};

window.addEventListener('scroll', dropper3);

/* Modal Popup */
let modalBtn = document.querySelector('.modal-btn');
let modalBg = document.querySelector('.modal-bg');
let modalExit = document.querySelector('.modal-exit');

modalBtn.addEventListener('click', () => {
  modalBg.classList.toggle('bg-active');
});

modalExit.addEventListener('click', () => {
  modalBg.classList.remove('bg-active');
});

/* Add to Cart */
const navCartQuantity = document.querySelector('.nav-cart-quantity');
const desktopNavQuantity = document.querySelector('.mobile-nav-cart-quantity');
const itemQuantity = document.querySelector('.item-quantity');
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const emptyCartDisplay = document.querySelector('.empty-cart');
const itemInCart = document.querySelector('.cart-item');
const cartItem = document.querySelector('.empty-cart');
const cartFooter = document.querySelector('.item-checkout-footer');

let emptyCartQuantity = 0;
let fullCartQuantity = 5;
let price = 59.97;

let cartSubtotal = document.querySelector('#subtotal_price');

function addToCart(cartInteger, itemInteger) {
  if (emptyCartQuantity < fullCartQuantity) {
    emptyCartQuantity++;
  } else {
    alert('Your cart is full. Remove an item to continue.');
  }
  cartInteger.innerHTML = ' ' + '(' + emptyCartQuantity + ')';
  desktopNavQuantity.innerHTML = ' ' + '(' + emptyCartQuantity + ')';
  itemInteger.innerHTML = emptyCartQuantity;
  cartSubtotal.innerHTML = '$' + emptyCartQuantity * price;
}

function drawerState() {
  if (emptyCartQuantity >= 1) {
    itemInCart.style.display = 'flex';
    emptyCartDisplay.style.display = 'none';
    cartFooter.style.display = 'block';
  } else {
    itemInCart.style.display = 'none';
    emptyCartDisplay.style.display = 'block';
    cartFooter.style.display = 'none';
  }
}

drawerState();

addToCartBtn.addEventListener('click', () => {
  addToCart(navCartQuantity, itemQuantity);
  drawerState();
});

function increment(add) {
  add = price;
  let cartSubtotal = document.querySelector('#subtotal_price');
  cartSubtotal.innerHTML = '$' + emptyCartQuantity * price;
  navCartQuantity.innerHTML = ' ' + '(' + emptyCartQuantity + ')';
  desktopNavQuantity.innerHTML = ' ' + '(' + emptyCartQuantity + ')';
}

function decrement(sub) {
  sub = price;
  let cartSubtotal = document.querySelector('#subtotal_price');
  cartSubtotal.innerHTML = '$' + emptyCartQuantity * price;
  navCartQuantity.innerHTML = ' ' + '(' + emptyCartQuantity + ')';
  desktopNavQuantity.innerHTML = ' ' + '(' + emptyCartQuantity + ')';
}

function cartItemInteger() {
  let removeItemQuantity = document.querySelector('#cart_quantity_remove');
  let addItemQuantity = document.querySelector('#cart_quantity_add');
  removeItemQuantity.addEventListener('click', () => {
    if (emptyCartQuantity > 1) {
      itemQuantity.innerHTML = --emptyCartQuantity;
      decrement();
    }
  });
  addItemQuantity.addEventListener('click', () => {
    if (emptyCartQuantity < fullCartQuantity) {
      itemQuantity.innerHTML = ++emptyCartQuantity;
      increment();
    }
  });
}
cartItemInteger();

const removeCartItem = () => {
  emptyCartQuantity = 0;
  navCartQuantity.innerHTML = ' ' + '(' + emptyCartQuantity + ')';
  desktopNavQuantity.innerHTML = ' ' + '(' + emptyCartQuantity + ')';
  itemQuantity.innerHTML = emptyCartQuantity;
  cartSubtotal.innerHTML = '$' + emptyCartQuantity * price;
  drawerState();
};

// // REVIEW API

// let url =
//   'https://app.reviewapi.io/api/v1/reviews?apikey=38996dc0-f7e5-11eb-bee3-b56fb6c500a7&url=https://www.amazon.com/Carlyle-Melatonin-Dissolve-Nighttime-Vegetarian/dp/B07GR9WBFY/ref=sr_1_5?dchild=1&keywords=melatonin&qid=1629118638&sr=8-5&amount=15';

// async function apiCall() {
//   const response = await fetch(url);

//   const jsonData = await response.json();

//   console.log(jsonData);
// }

// apiCall().catch((error) => {
//   console.log('Error Occurred!');
//   console.error(error);
// });
