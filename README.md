# React JS


##  Desafíos 

### Desafío 2 // MENÚ E-COMMERCE

 En el directorio del proyecto, esta creada la carpeta dentro de src llamada “components”, que contiene a NavBar.js para crear una barra de menú simple.

 ### Desafío 3 // CREA TU LANDING

Creado el componente CartWidget.js con un ícono, esta ubicado en el navbar.
Creado un componente contenedor ItemListContainer.js.

### Desafío 4 // CONTADOR CON BOTÓN

Creado el componente ItemCount.js, compuesto de un botón y controles, para incrementar y decrementar la cantidad requerida de ítems.
Esta invocado dentro del componente ItemListContainer.

### Desafío 5 // CATÁLOGO CON MAPS

Creados los componentes Item.js e ItemList.js para mostrar algunos productos en tu ItemListContainer.js.
Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item { id, title, description, price, pictureUrl } en dos segundos (setTimeout), para emular retrasos de red.

### Desafío 6 // DETALLE DEL PRODUCTO

Creados los componentes ItemDetailContainer y ItemDetail.

### Desafío 7 // PRIMERA ENTREGA DEL PROYECTO FINAL 

Configurado el routing en App.js usando BrowserRouter.
Rutas configuradas '/' Navega a < itemListContainer >, '/category/:id' Navega a < ItemListContainer >, '/item/:id' Navega a < ItemDetailContainer > y si se clickea en una categoría del navbar se navega a '/category/:categoryId'

### Desafío 8 // SINCRONIZAR COUNTER

Importado el ItemCount.js del desafío Nº 4 en el counter ItemDetail.js, se configuro el evento de compra siguiendo los detalles de manual.

### Desafío 9 // CARTCONTEXT

Implementado React Context para mantener el estado de compra del user, siguiendo los detalles del manual.

### Desafío 10 // CART VIEW

Creado componente ItemCart para visualizar los distintos elementos dentro del componente Cart. Desglose de compra en el componente Cart.js. Actualizado el componente CartWidget.js para hacerlo reactivo al contexto. Se modificaron siguiendo los detalles del manual

### Desafío 11 // ITEM COLLECTION

Conectado Firestore a los componentes ItemListContainer y ItemDetailContainer.

### Desafío 12 // ITEM COLLECTION II

Creada la colección de órdenes.

### Desafío 13 // ENTREGA FINAL

Agregados los estilos de la app.