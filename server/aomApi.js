import express from "express";


const app = express();
const port = 8000;
//object array
const myShops = [
    {
        shopId: 100,
        shopName: "Adidas",
        shopType: "Fashion",
        shopLoc: { lat: 100, lon: 150 },
        shopStatus: true
    },
    {
        shopId: 200,
        shopName: "Uma Carats",
        shopType: "Jewelry",
        shopLoc: { lat: 180, lon: 110 },
        shopStatus: true
    },
    {
        shopId: 300,
        shopName: "Nigg",
        shopType: "Electronics",
        shopLoc: { lat: 107, lon: 190 },
        shopStatus: false
    }
];

// http://localhost:8000/
app.get('/', (req, res) => {
    res.send('<h1>Web Programming in 2/2569</h1>');
});

app.get('/shops{/:shopId}', (req, res) => {
    const { shopId } = req.params;
     res.set('Content-type', 'application/json');
    if(isNaN(shopId)){
        res.send(myShops)
    }else{
        const shopItem = myShops.filter(
            shop => {return shop.shopId === Number(shopId)}
        );
        res.send(shopItem[0]);
    }
   
   

   let myText = '';
   myText += '<h1>Shop Information</h1><hr/>';
   myText += `<b>Shop ID:</b> ${myShops.shopId}`;
   myText += `<br/><b>Shop Name:</b> ${myShops.shopName}`;
   myText += `<br/><b>Shop Type:</b> ${myShops.shopType}`;
   myText += `<br/><b>Shop Location:</b> latitude = ${myShops.shopLoc.lat} , longitude = ${myShops.shopLoc.lon}`;
   myText += `<br/><b>Shop Status:</b> ${myShops.shopStatus}`;
  

    res.set('Content-type', 'text/html');
    res.send(myText); 
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});