<script>
      // function to store cart items in slocal storage of browser
      function setCart(idOfCartBtn, cartItemKey, cartItemName, itemPrice) {
        // on lick of button
        document.getElementById(idOfCartBtn).addEventListener("click", function () {
          // if item already in cart, increase its quantity on again click
          if (localStorage.getItem(cartItemKey)) {
            let quantity = localStorage.getItem(cartItemKey).split(", ")[2];
            localStorage.setItem(cartItemKey, `${cartItemName}, ${itemPrice}, ${+quantity + +1}`);
          } else {
            // otherwise set as quantity of 1
            localStorage.setItem(cartItemKey, `${cartItemName}, ${itemPrice}, 1`);
          }

          // redirect to this html page on button click
          window.location.href = "cart.html";
        });
      }

      //  Set first product in cart in localStorage by calling function and passing Id of button, key (can be any name), price
      setCart("itemBtn1", "cartItem1", "20 Playstation Store(PSN)", 20);
      // Set 2nd product in cart in localStorage
      setCart("itemBtn2", "cartItem2", "25 Playstation Store(PSN)", 25);
   </script>
