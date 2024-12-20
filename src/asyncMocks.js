//Obtengo los productos
export const getProducts = () => {
    return new Promise( (resolve) => {
        setTimeout(()=>{
            resolve(products);
        }, 1000);
    });
}

//obtengo los productos por categoria
export const getProductsByCategory = (categoryId) => {
    return new Promise( (resolve) => {
        setTimeout(()=>{
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
}

//obtener un solo producto por id
export const getProductByID = (productId) => {
    return new Promise( (resolve) => {
        setTimeout(()=>{
            resolve(products.find((prod) => prod.id === productId));
        }, 1000);
    });
}

//