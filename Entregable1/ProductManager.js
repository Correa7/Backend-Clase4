class ProductManager {

    constructor (){
        this.prod = []    
    }
    getProduct = () => {
        return this.prod
    }
    addProduct= (title,description,price,thumbnail,code,stock) => {
        let codeFind = this.prod.find(producto => producto.code == code) 

        if (codeFind) {
            let  x = Math.floor(Math.random()*100);
            let id = code + x
            
        return this.prod.push(
            {
               title:title,
               description:description,
               price:price,
               thumbnail:thumbnail,
               code:id,
               stock:stock
           }
           )
        }
       else {
        return this.prod.push(
            {
               title:title,
               description:description,
               price:price,
               thumbnail:thumbnail,
               code:code,
               stock:stock
           }
           )
      
       }
       
    }
    getProducById = (code) => {
        let codeFind = this.prod.find(prod => prod.code == code)

        if (this.prod.length == 0){
            return console.log('El carrito esta vacio, crea un producto utilizando el metodo addProduct')
        }
        else if (codeFind){
           return codeFind
        }
        else{
            return console.log(`${code} : es un codigo inexistente`)
        }
    }

}
let producto = new ProductManager()
// producto.addProduct('atun','pez',100,'Sin imagen','a1',20)
producto.addProduct('Pollo','Ave',100,'Sin imagen','a1',20)
producto.addProduct('Pollo','Ave',100,'Sin imagen','a1',20)
console.log(producto.getProduct())
// console.log(producto.getProducById('a'))

