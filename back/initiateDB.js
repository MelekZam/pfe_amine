const Product = require("./models/Product");

const insertInitialProducts = async () => {
    try {
        console.log("deleting old products...");
        await Product.deleteMany({});
        console.log("products deleted... inserting new products");
        await Product.insertMany(products);
        console.log("products inserted...\nserver is listening");
    } catch (error) {}
};

const products = [
    {
        name: "Samsung Galaxy A53",
        details: "details",
        path: "samsung-galaxy-A53.jpg",
        category: "Electronics",
        price: 450,
        rating: 3,
        purchases: 20,
    },
    {
        name: "Amd Ryzen-7-5800x",
        details: "details",
        path: "amd-ryzen-7-5800x.jpg",
        category: "Electronics",
        price: 500,
        rating: 5,
        purchases: 19,
    },
    {
        name: "Fairy Tale",
        details: "details",
        path: "fairy-tale.jpg",
        category: "Books",
        price: 75,
        rating: 4,
        purchases: 18,
    },
    {
        name: "Crest 3D WhiteStrips",
        details: "details",
        path: "crest-3d-whitestrips.jpg",
        category: "Health",
        price: 45,
        rating: 5,
        purchases: 17,
    },
    {
        name: "Fire & Blood",
        details: "details",
        path: "fire-&-blood.jpg",
        category: "Books",
        price: 75,
        rating: 4,
        purchases: 16,
    },
    {
        name: "Apple Airpods",
        details: "details",
        path: "apple-airpods.jpg",
        category: "Electronics",
        price: 300,
        rating: 4,
        purchases: 15,
    },
    {
        name: "Asus Laptop Tuf",
        details: "details",
        path: "asus-laptop-tuf.jpg",
        category: "Electronics",
        price: 700,
        rating: 4,
        purchases: 14,
    },
    {
        name: "Dove Body Wash",
        details: "details",
        path: "dove-body-wash.jpg",
        category: "Health",
        price: 10,
        rating: 4,
        purchases: 13,
    },
    {
        name: "The Return Of The King",
        details: "details",
        path: "the-return-of-the-king.jpg",
        category: "Books",
        price: 75,
        rating: 5,
        purchases: 50,
    },
    {
        name: 'Monitor Spectre 24"',
        details: "details",
        path: 'monitor-spectre-24".jpg',
        category: "Electronics",
        price: 255,
        rating: 4,
        purchases: 11,
    },
    {
        name: "Seagate HDD 1to",
        details: "details",
        path: "seagate-hdd-1to.jpg",
        category: "Electronics",
        price: 125,
        rating: 3,
        purchases: 10,
    },
    {
        name: "Philips Norelco Multigroomer",
        details: "details",
        path: "philips-norelco-multigroomer.jpg",
        category: "Health",
        price: 20,
        rating: 4,
        purchases: 9,
    },
];

module.exports = insertInitialProducts;
