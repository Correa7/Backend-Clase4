const fs = require('fs'); 



let producto1={
    title: 'tv',
    description:'Electrodomestico',
    price:100,
    thumbnail:'thumbnail',
    code:'aaa1',
    stock:20
}
let producto2={
    title: 'Mouse',
    description:'Electrodomestico',
    price:100,
    thumbnail:'thumbnail',
    code:'aaa1',
    stock:20
}
let producto3={
          title: "Pollo",
          description: "Ave",
          price: 100,
          thumbnail: "Sin imagen",
          code: "C1",
          stock: 20,
        }

class ProductManager {

    constructor (path){
        this.path = path
        this.products = []
    }
    addProduct(prodNew){
        let c = fs.existsSync(this.path)
        if(!c){
              let id= this.products.length + 1
                prodNew['id']= id
                this.products.push(prodNew)
                fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2), 'utf-8')
        }
        else{
            let read= fs.readFileSync(this.path, 'utf-8')
                let parse= JSON.parse(read)
                let id2= parse.length + 1
                prodNew['id']= id2
                parse.push(prodNew)
                fs.writeFileSync(this.path, JSON.stringify(parse, null, 2), 'utf-8')
        }
    }
    async upDateProduct(arr,id){
        try{
            let read = await fs.promises.readFile(this.path, 'utf-8')
            let parse = JSON.parse(read)
           
            let IndexProduct = parse.findIndex(prod => prod.id == id)
           
            let update= Object.assign({},parse[IndexProduct],arr);
            console.log(update)
            parse[IndexProduct] = update;
            await fs.promises.writeFile(this.path, JSON.stringify(parse, null, 2), 'utf-8')
            console.log('Update')
            
        }
        catch{
            console.log('ERROR UPDATE')
        }
    }
    async deleteProduct(id){
        try{
            let read= await fs.promises.readFile(this.path, 'utf-8')
            let parse= JSON.parse(read)
            let productoFiltrado = parse.filter(i => i.id !== id)
            await fs.promises.writeFile(this.path, JSON.stringify(productoFiltrado, null , 2 ), 'utf-8')
           
        }
        catch{
            console.log('Error DELETE')  
        }
    }
    async getProducts(){
        try {
            let read= await fs.promises.readFile(this.path, 'utf-8')
            let parse= JSON.parse(read)
            console.log(parse)
        }
        catch{
            console.log(this.products)
        }
    }
    async getProductById(id){
        try{
            let read= await fs.promises.readFile(this.path, 'utf-8')
            let parse= JSON.parse(read)
            let productoFiltrado = parse.find(prod => prod.id == id)
            if(productoFiltrado == undefined){
                console.log('El articulo con el id, no existe')
            }
            else{
                console.log(productoFiltrado)
            }   
        }
        catch{
            console.log('Error GET BY ID')  
        }
    }

} 

let articulo = new ProductManager('./productos.json')

// articulo.getProducts()
articulo.upDateProduct({title:'Cell',price:800, stock:10},5)
// articulo.addProduct(producto1)

// articulo.getProductById(2)

// articulo.deleteProduct(1)

// async addProduct(prodNew){
//     try{   
        // let id= this.products.length + 1
        // prodNew['id']= id
        // await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2), 'utf-8')
//         let read= await fs.promises.readFile(this.path, 'utf-8')
//         let parse= JSON.parse(read)
//         let id2= parse.length + 1
//         prodNew['id']= id2
//         parse.push(prodNew)
//         await fs.promises.writeFile(this.path, JSON.stringify(parse, null, 2), 'utf-8')
//     }
//     catch{
//         console.log('Add error')
//         }  
// }