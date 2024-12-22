const products = [
    {
        id: 1,
        productName: "Kazak",
        productPrice: 900,
        productStock: 50
    },
    {
        id: 2,
        productName: "Pantolon",
        productPrice: 700,
        productStock: 39
    },
    {
        id: 3,
        productName: "Mont",
        productPrice: 1500,
        productStock: 27
    },
    {
        id: 4,
        productName: "Ayakkabı",
        productPrice: 2000,
        productStock: 15
    },
    {
        id: 5,
        productName: "Çorap",
        productPrice: 100,
        productStock: 17
    }
];
let accountRemainder = 1000;
let cart = [];

function isAccepted(msg, ...keys){
    const value = prompt(msg);
    if(keys.includes(value)){
        return value;
    }else{
        alert("Hatalı tuşlama yaptınız");
        return isAccepted(msg, ...keys);
    }
}

function listProducts(){
    const productList = products.map((product, index) => `${index + 1}- ${product.productName}`);
    alert(productList.join("\n"));
    return nextOptions();
}

function buyProduct(){
    const productList = products.map((product, index) => `${index + 1}- ${product.productName}`);
    const options = isAccepted(`Satın almak istediğiniz ürünü seçiniz.\n${productList.join("\n")}`, "1","2","3","4","5");
    const selectedProduct = products[options - 1];

        let quantityProduct = Number(prompt("Kaç adet almak istiyorsunuz"));
        if (quantityProduct > selectedProduct.productStock) {
            alert("Stok yetersizdir!");
            return;
        }
        if (selectedProduct.productPrice * quantityProduct > accountRemainder) {
            alert("Bakiyeniz yetersizdir!");
            return;
        }
        
    }

function remainder(){
    alert(`${accountRemainder}₺ bakiyeniz bulunmaktadır.`);
    return nextOptions();
}

function addRemainder(){
    const option = prompt("Bakiye yüklemek istediğiniz tutarı giriniz");
    const value = Number(option);
    let newRemainder = accountRemainder += value;
    alert(`Yeni bakiyeniz ${newRemainder}₺`);
    return nextOptions();
}

function mainMenu(){
    const options = isAccepted("Yapmak istediğiniz işlemi seçiniz. \n1-Ürünleri listele\n2-Sepeti göster\n3-Ürün satın al\n4-Bakiye ekle\n5-Bakiyeyi göster\n6-Çıkış yap", "1","2","3","4","5","6");
    
    if(options == "1"){
        return listProducts();
    }
    else if(options == "2"){
        return showCart();
    }
    else if(options == "3"){
        return buyProduct();
    }
    else if(options == "4"){
        return addRemainder();
    }
    else if(options == "5"){
        return remainder();
    }
    else if(options == "6"){
        return alert("Çıkış Yapıldı.")
    }
}

function nextOptions(){
    const options = isAccepted("Başka bir işlem yapmak istiyor musunuz ? \nEvet/Hayır", "evet", "hayır", "EVET", "HAYIR","Evet", "Hayır").toLocaleLowerCase("tr");
    if(options == "evet"){
        return mainMenu();
    }
    else{
        return;
    }
}


mainMenu();