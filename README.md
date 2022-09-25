This project was bootstrapped with Create React App.
------------------------------------------------
Single Page Application desarrollada en base a React Router, useState, useEffect y useContext.
------------------------------------------------

DESCRIPCIÓN

La función de la APP es mostrar una galeria de fotos con un sistema de "FAVORITOS" a cada imagen, el cual se clickea en un like y luego se muestran en otra lista todas las imagenes favoritas.

Cuenta con dos views <HOME> y <FAVORITOS>. 
Su primera misión es traer mediante el método fetch una API externa desde un banco de imagenes, la cual se imprime en la <HOME> mediante un listado en formato de grilla(Grid).
Cada imagen cuenta con un sistema de "like" que se activa presionando un corazón en su esquina superior derecha, el cual al ser presionado cambia su color a rojo e inmediatamente es almacena el valor en un nuevo array que se despliega en la view de <FAVORITOS>.