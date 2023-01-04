var productInfoAnchors = document.querySelectorAll("#productInfoAnchor");
var productModal;

if (document.getElementById("productInfoModal") != null) {
  productModal = new bootstrap.Modal(
    document.getElementById("productInfoModal"),
    {}
  );
}

if (productInfoAnchors.length > 0) {
  productInfoAnchors.forEach((item) => {
    item.addEventListener("click", (event) => {
      var url = "/products/" + item.getAttribute("product-handle") + ".js";
      var url2 = "/products/" + item.getAttribute("product-handle") + ".json";
      // console.log(url2);

      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          console.log(data);
          // console.log(data.title);
          // console.log(data.handle);
          // console.log(data.type);
          // console.log(data.tags);
          // console.log(data.price);
          // console.log(data.price_min);
          // console.log(data.price_max);
          // console.log(data.price_varies);
          // console.log(data.compare_at_price);
          // console.log(data.compare_at_price_min);
          // console.log(data.compare_at_price_max);
          // console.log(data.compare_at_price_varies);
          // console.log(data.featured_image);

          let dataContentType = `
          <div class="col-12 col-md-6">
          <div class="single">
              <img class="img-fluid" src="${data.featured_image}" alt="${data.title}">
          </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="modalDescription">
              <p class="modalDescription-Title">${data.title}</p>
              <p class="modalDescription-Price">${data.price}</p>
              <p class="modalDescription-Price">${data.price_max}</p>
              <p class="modalDescription-Price">${data.price_varies}</p>
              <p class="modalDescription-Price">${data.compare_at_price}</p>
              <p class="modalDescription-Price">${data.compare_at_price_min}</p>
              <p class="modalDescription-Price">${data.compare_at_price_max}</p>
              <p class="modalDescription-Price">${data.compare_at_price_varies}</p>
            </div>
          </div>
          `;

          document.getElementById("productInfoModalContent").innerHTML = dataContentType;

          // document.getElementById("productInfoPrice").innerHTML = item.getAttribute("product-price");
          // // document.getElementById("productInfoDescription").innerHTML =
          // //   data.description;

          // var variants = data.variants;
          // var variantSelect = document.getElementById("modalItemID");

          // variantSelect.innerHTML = "";

          // variants.forEach(function (variant, index) {
          //   console.log(variant);

          //   variantSelect.options[variantSelect.options.length] = new Option(
          //     variant.option1,
          //     variant.id
          //   );
          // });

          productModal.show();
        });
    });
  });
}



var modalAddToCartForm = document.querySelector("#addToCartForm");

var err = "";
if (modalAddToCartForm != null) {
  modalAddToCartForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = {
      items: [
        {
          id: document.getElementById("modalItemID").value,
          quantity: document.getElementById("modalItemQuantity").value,
        },
      ],
    };

    fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        update_cart();
        jQuery.getJSON('/cart.js', function(cart) {
          console.log('There are now ' + cart.item_count + ' items in the cart.');
        } );
        var cartItemCounter = document.querySelector(".cart-count");
        jQuery
          .ajax({
            url: "/cart.js",
            dataType: "json",
          })
          .done(function (data) {
            var newCount = data.item_count;
            if (newCount > 0) {
              $(".cart-count").removeAttr("hidden");
            }
            cartItemCounter.innerText = newCount;
          });
      })
      .catch((err) => {
        console.error("Error: " + err);
        console.log(err);
      });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  update_cart();
});

function update_cart() {
  fetch("/cart.js")
    .then((resp) => resp.json())
    .then(
      (data) =>
        (document.getElementsByClassName("cart-count span").innerHTML =
          data.items.length)
    )
    .catch((err) => console.error(err));
  console.log(err);
}
