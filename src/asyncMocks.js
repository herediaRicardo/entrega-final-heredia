const products = [
    {
        id: "1",
        name: "E-11 Blaster Rifle",
        price: 1000,
        category: "armas",
        img: "https://m.media-amazon.com/images/I/71zIb9UsUTL._AC_SL1500_.jpg",
        stock: 10,
        description: "Rifle Oficial Stormtroopers"
    },
    {
        id: "2",
        name: "DL-44 Blaster Pistol",
        price: 450,
        category: "armas",
        img: "https://i.ebayimg.com/images/g/TfEAAOSwHvpa60YS/s-l1600.webp",
        stock: 3,
        description: "Blaster BountyHunter"
    },
    {
        id: "3",
        name: "EE-3 Blaster Rifle",
        price: 1244,
        category: "armas",
        img: "https://i.ebayimg.com/images/g/2LIAAOSwnspj94ge/s-l1600.webp",
        stock: 4,
        description: "Agujerea a esos malditos rebeldes"
    },
    {
        id: "4",
        name: "LL-30 Blaster Pistol",
        price: 570,
        category: "armas",
        img: "https://i.ebayimg.com/images/g/B54AAOSwIypjVamQ/s-l1600.webp",
        stock: 5,
        description: "Agujerea a esos malditos rebeldes"
    },
    {
        id: "5",
        name: "C-25",
        price: 570,
        category: "explosivos",
        img: "https://i.etsystatic.com/20445058/r/il/e37db7/3087389553/il_1140xN.3087389553_2zx7.jpg",
        stock: 5,
        description: "Agujerea a esos malditos rebeldes"
    },
    {
        id: "6",
        name: "Granade II-20",
        price: 570,
        category: "explosivos",
        img: "https://i.etsystatic.com/11957793/r/il/69d898/2395988212/il_1140xN.2395988212_muuk.jpg",
        stock: 5,
        description: "Detonador Termico"
    },
    {
        id: "7",
        name: "Lightsaber Inquisitor",
        price: 570,
        category: "cortas",
        img: "https://i.ebayimg.com/images/g/TtAAAOSw-ZlkOBTT/s-l1600.webp",
        stock: 5,
        description: "Granada de Fragmentación"
    },
    {
        id: "8",
        name: "Cane Stormtroopers",
        price: 570,
        category: "cortas",
        img: "https://www.aceroymagia.com/Images/articulo/replica-z6-riot-control-baton-starwars/01-Replica-Z6-Riot-Control-Baton-StarWars.jpg",
        stock: 5,
        description: "Baston eléctrico defensa personal"
    }
]

//OBtengo los productos
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
