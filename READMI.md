# Curso Practico de JavaScript Platzi 💚

He realizado pequennas modificaciones esteticas y de rendimiento.

A su vez, converti todo el codigo `css` => `sass`, el cual se me dificulto con el tema de las media query con el orden y la ubicacion de el mismo del mismo, al ser desktop-first, pero se logro.  

Como tambien me tome el atrevimiento de optimizar todas las imagenes originales comprimiendolas en webp y modificando tanto su calidad como sus dimensiones, para que se ajusten a los requerimientos de nuestra pagina.

[Pagina Desplegada en github](https://pleo2.github.io/curso-frontend-developer-practico/)

## Mi version de el curso de JavaScript

Mantiene la estetica minimalista pero quite algunos elementos del `css` para mantenerla aun mas limpia
y agradable.

Ademas de agregarle un leve efecto de blur para la seccion de el `main` =>( 'Product List')

[![Screenshot-from-2022-08-24-11-07-36.png](https://i.postimg.cc/pVqTGKHq/Screenshot-from-2022-08-24-11-07-36.png)](https://postimg.cc/MXfqXMXQ)

## Todas las imagenes en la nube

Para alojarlas en la nube de manera gratuita y evitar binarios en tu repositorio,
te recomiendo link [--> postimage](https://postimages.org/)

Esta pagina te proporciona diferentes tipo de link para todo tipo de proyectos

[![Screenshot-from-2022-08-24-12-11-38.png](https://i.postimg.cc/Bnkc8XQB/Screenshot-from-2022-08-24-12-11-38.png)](https://postimg.cc/3kjDVrGk)

## Utilizar fuentes por Defecto de el navegador

Por motivos de optimizacion es recomendable si el disenno te lo permite usar funentes por defecto, para evitar llamar repositorios interactivos como lo serian [google-font](https://fonts.google.com/)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@300;500&display=swap" rel="stylesheet">
```

➕

```scss
// fonts
$primary-font:'DM Sans', sans-serif;
$secundary-font: 'Inter', sans-serif;
```

`👇`

Pasar asi mismo a solo declarar el tipo de fuente dentro de el `css` jugando asi misma con el `font-size: ;` & `font-weight: ;` mejorando asi el rendimiento de el sitio y evitanto fallos de los repositorios interactivos

```scss
body{
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%; // convierte los rem ==> 10px
    font-weight: 600; 
}
```

## Compresion de imgenes para tu WEB hace la diferencia

Te presento la mejor pagina y desde hoy tu mejor amiga te permite de manera gratuita comprimir imagenes de manera gratuita.

Link [-> squoosh](https://squoosh.app/)

- Modificar su tamanno  
- Reducir la paleta de colores
- Elegir entre multitud de formatos para comprimir
- Definir la como quieres reducir la calidad
- Ver el resultade en tiempo real en conjunto con el porcentaje de tamanno ahorrado

Todo esto solo arrastrando la imagen que deseas comprimir

[![Screenshot-from-2022-08-24-12-54-48.png](https://i.postimg.cc/kgmjYcpz/Screenshot-from-2022-08-24-12-54-48.png)](https://postimg.cc/0bVdbpx0)

## Version mobile con menus flotantes

[![Screenshot-from-2022-08-24-11-15-14.png](https://i.postimg.cc/3RZRHvDr/Screenshot-from-2022-08-24-11-15-14.png)](https://postimg.cc/KkRFP4NC)

[![Screenshot-from-2022-08-24-11-15-02.png](https://i.postimg.cc/PxHxc4JF/Screenshot-from-2022-08-24-11-15-02.png)](https://postimg.cc/kVjqRWxx)

[![Screenshot-from-2022-08-24-11-15-34.png](https://i.postimg.cc/Gthp3mkF/Screenshot-from-2022-08-24-11-15-34.png)](https://postimg.cc/G8VRqrgt)

## Pequennos detalles hacen la diferencia

Cada pequenno detalle como cuando se presiona un boton, y te devuelve la una sensacion de respuesta agradable, mejora de forma radical la experiencia del usuario mediante etiquetas dentro de `css` como `:hover` & `:active` en conjunto con transitions que no entorpescan la experiencia de el usuario. hacen la diferencia

Recuerda en `mobile` **no se deben utilizar dichas etiquetas** ya que no contamos con un cursor

## Falta por mejorar

Actualmente tengo dificultades con las animaciones para las ventanas con js sobre todo en mobile.(si cualquiera puede ayudarme a resolver dicha duda lo agradeceria un monton)
