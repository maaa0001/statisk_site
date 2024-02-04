fetch("https://kea-alt-del.dk/t7/api/products")
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
  copy.querySelector("h1").textContent = product.productdisplayname;
  if (product.soldout) {
    //produkt er udsolgt
    copy.querySelector("article").classlist.add("soldOut");
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
