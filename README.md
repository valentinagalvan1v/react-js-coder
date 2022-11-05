
# Tienda de Jugos 

Este proyecto es mi entrega final para el curso de ReactJs de CoderHouse 2022.


## Funcionalidades

- El usuario puede recorrer la tienda filtrando por categorías de interés.
- En el home puede ver los productos filtrados como destacados. 
- Mediante un click puede visualizar el detalle de cada producto, seleccionar la cantidad deseada del mismo y agregarlo al carrito.
- En el carrito de compras el usuario podrá ver el detalle de compra que incluye imágen, precio, cantidad y subtotal del producto agregado. 
- Podrá eliminar producto por producto y vaciar completamente el carrito.
- Será capaz de hacer un checkout en el que se solicitarán datos y al clickear enviar se le asignará un número de seguimiento para su compra. 
- Luego de haber realizado la compra se vacía automáticamente el carrito. 


## Librerías

- Firebase/firestore 
    - Los productos de la tienda son obtenidos de una base de datos creada en firestore, y las órdenes de compra se envían a firestore. Este servicio les asigna un número de seguimiento único que se muestra en pantalla luego de haber efectuado la compra. 
- React-spinners
    - Animación de carga para los productos.
- React-router-dom
    - Rutas que permiten navegar el sitio.

    
## Demo


## Pasos para correr el proyecto en local

Clonar el repositorio
git clone https://github.com/valentinagalvan1v/react-js-coder.git

Abrirlo en algún editor de código e instalar las dependencias
npm install

Correr el proyecto en local
npm start