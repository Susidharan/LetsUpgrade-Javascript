let products=[
    {
     id:1,
     name:"White T-shirt",
     size:"XL",
     color:"White",
     price:1000,
     image:"product1.jpeg",
     description:"A good looking white T-shirt",
    },

    {
     id:2,
     name:"Formal Shirt",
     size:"42",
     color:"Red",
     price:1300,
     image:"product2.jpeg",
     description:"A good looking Red formal shirt",
    },

    {
     id:3,
     name:"White shirt",
     size:"XL",
     color:"White",
     price:1200,
     image:"product3.jpeg",
     description:"A good looking white shirt",
    },

    {
     id:4,
     name:"Pink Black Top ",
     size:"M",
     color:"pink black",
     price:1600,
     image:"product4.jpeg",
     description:"A good looking Pink Black Top",
    },

    {
     id:5,
     name:"Yellow black dotted Top",
     size:"M",
     color:"Yellow Black",
     price:9000,
     image:"product5.jpeg",
     description:"A good looking Yellow top",
    },
];

cart=[];


function displayproducts(productsData, who="productwrapper"){
let productsString="";

productsData.forEach(function(product,index){
    let {id,name,size,color,price,image,description}=product;

    // let productString=JSON.stringify(product);

if(who=="productwrapper"){
    productsString +=`<div class="product">
    <div class="prodimg" ><img src="productimages/${image}" width="120%" /></div>
    <h3>${name}</h3>
    <p>price : ${price}</p>
    <p>Size : ${size}</p>
    <p>Color : ${color}</p>
    <p>${description}</p>
    <p>
        <button onclick="addTocart(${id})">Add to cart</button>
    </p>
</div>`;
}
else if(who=="cart"){
    productsString +=`<div class="product">
    <div class="prodimg" ><img src="productimages/${image}" width="120%" /></div>
    <h3>${name}</h3>
    <p>price : ${price}</p>
    <p>Size : ${size}</p>
    <p>Color : ${color}</p>
    <p>${description}</p>
    <p>
        <button onclick="removeFromcart(${id})">Remove from cart</button>
    </p>
</div>`;
}

});
  document.getElementById(who).innerHTML= productsString;
}
displayproducts(products);

function searchProduct(searchValue){
    
    let searchedProducts=products.filter(function(product,index){

      let searchString=product.name + " " + product.color + " " + product.description;

       return searchString.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
    });
    displayproducts(searchedProducts);
}
function getProductByID(productarray, id){
    return productarray.find(function(product){
        return product.id==id;
    });
}


function addTocart(id){
    let pro= getProductByID(products,id);
    cart.push(pro);
    displayproducts(cart,"cart");
}


function removeFromcart(id){
    let index = cart.findIndex(function(products){
        return products.id==id;
    });
        cart.splice(index,1);
    displayproducts(cart,"cart");
}