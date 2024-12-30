
const product = [
    { productName: "earphone", price: 60000, quantity: 1 },
    { productName: "Phone", price: 50000, quantity: 2 },
    { productName: "Laptop", price: 2000, quantity: 2 }
]


const addProduct = (product, new_product) => {
    product.push(new_product)
}

addProduct(product, { productName: "E-ring", price: 10000, quantity: 3 })

console.log(product)

const calculateTotal = (product) => {
    return product.reduce((total, product) => total + product.price * product.quantity, 0)
}

console.log(calculateTotal(product))

const removeProduct = (product_name) => {
    const index = product.findIndex((product) => product.productName === product_name)
    if (index !== -1) {
        product.splice(index, 1)
    }
}

removeProduct("Laptop")
console.log(product)

const productDetail = () => {
    product.forEach(({ productName, price, quantity }) => {
        console.log(`Product: ${productName}, Price: ${price}, Quantity: ${quantity}`);
    });
};

productDetail()

product.forEach(product => {
    console.log(`Product : ${product.productName} , Price : ${product.price} , Quantity : ${product.quantity}`)
})