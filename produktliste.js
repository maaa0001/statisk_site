const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //lopper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  //fang template
  const template = document.querySelector(".smallProductTemplate").content;
  //lav kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price span").textContent = product.price;
  if (!product.soldout) {
    //produkt er udsolgt
    copy.querySelector(".soldOut").remove();
  }

  copy.querySelector(".link").setAttribute("href", `produkt.html?id=${product.id}`);

  if (product.discount) {
    copy.querySelector(".discounted p:last-child").textContent = "-" + product.discount + "%";
    const discount = product.price * (product.discount / 100);
    const final = product.price - discount;
    copy.querySelector(".discounted h4:first-child span").textContent = final;
  } else {
    copy.querySelector(".discounted").remove();
  }

  //appende
  document.querySelector(".produkt_container").appendChild(copy);
}

/*
<div class="produkt">
            <div class="pl_pic">
              <a href="produkt.html">
                <img
                  src="https://kea-alt-del.dk/t7/images/webp/1000/1531.webp"
                  alt="Grey Solid Round Neck T-Shirt"
                />
              </a>
            </div>
            <h1>Grey Solid Round Neck T-Shirt</h1>
            <div class="price">799,-</div>
          </div>

{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}

*/
