function funcionGaleria (imgs) {
    // Toma la imagen expandida
    var expandirImagen = document.getElementById("imagenExpandida");
    // Toma el texto de la imagen
    var textoImagen = document.getElementById("textoImagen");
    // Usar el src en la imagen expandida igual a la imagen siendo clickeada en la grilla
    expandirImagen.src = imgs.src;
    // Usar el valor del atributo alt de la imagen cliqueada dentro de la imagen expandida
    textoImagen.innerHTML = imgs.alt;
    //Mostrar el elemento contenido (oculto con CSS)
    expandirImagen.parentElement.style.display = "block";
}