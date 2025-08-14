# Vite

## ¿Qué es Vite?

Vite es una herramienta de compilación que tiene como objetivo una experiencia de desarrollo más rápia y ágil para proyectos web modernos.

Sus dos fuertes son:

- Un servidor de desarrollo que provee funciones mejoradas con respecto a los módulos ES nativos como por ejemplo el Hot Module Replacement (HMR).

- Un comando de compilación qué empaqueta el código con Rollup.

Es una herramienta bastante flexible via plugins con soporte completo de tipado.

## Soporte de navegadores

Durante el desarrollo, Vite asume que se está usando un navegador moderno, esto es devido a que los navegadores modernos soportan las últimas características de JS y CSS.

Para las compilaciones de producción, Vite apunta a los navegadores de amplia disponibilidad, es decir, navegadores lanzados máximo hace 2 años y medio. Cabe aclarar que Vite tiene soporte para navegadores antiguos con el plugin `@vitejs/plugin-legacy`.

## Filosofía.

Vite no pretende cubrir cada caso de uso para cada usuario, Vite tiene como objetivo soportar los patrones más comunes para crear aplicacipónes web listas para usar.

Para cubrir estas necesidades en otros casos de uso están los plugins como por ejemplo `vite-plugin-pwa` y muchos otros plugins mantenidos por la comunidad para cubrir otras necesidades.

### Impulsando la web moderna

Vite ofrece características para impulsar la escritura moderna de código, por ejemplo, la escritura de código fuente sólo puede ser en ESM y las dependencias qeu no son ESM son re-empaquetadas en ESM.

Cualquier otra nueva característica se siguen estos patrones para garantizar que sea siempre compatible con otras herramientas.

### Enfoque pragmatico en rendimiento

Vite también se enfoca bastante en la velocidad y rendimiento desde sus origenes. La arquitectura del servidor de desarrollo optimiza HMR para la escalabilidad del proyecto.

Tambén usa herramientas nativas como esbuild (un empaquetador web extremadamente rápido) y SWC (Speddy web compiler, usado para compilar y empaquetar). En algunos casos si los frameworks lo requieren utilizarán Babel para compilar su código. Y durante el tiempo de compilación en casos donde el peso y el acceso amplio al ecosistema de complementos sean más importantes que el tiempo de compilación se utiliza Rollup.

## Características.

En términos básicos usar Vite es simiar a usar un servidor de archivos estáticos,
In basic terms using Vite is not that different from using a static file server, however, Vite provides many other features over native ESM that are typically seen in bundler-based setups like webpack or parcel.

### Resolución de dependencias NPM y pre-compilado

Los imports nativos de ES no soportan los beare module import, como el siguiente:

```js
import { suma } from "my-math";
```

Vite va a detenctar todos estos imports en los archivos servidos y va a realizar lo siguiente:

- Pre-empaquetarlos para mejorar la velocidad de carga y convierte los módulos CommonJS / UMD a módulos ES. El paso de pre-compilado se realiza con esbuild.

- Reescribe los imports con una URL válida como `/node_modules/.vite/deps/my-dep.js?v=f3sf2ebd`, entonces el navegador los podrá importar correctamente

> NOTA: Vite cachea las depencencias en los headers de las peticiones HTTP

### Hot Module Replacement (HMR).

Vite provee un API HMR en ESM nativo. Los frameworks con HMR pueden aprovechar el API para proporcionar actualizaciones ynstantaneas y precisas sin necesidad de recargar la página ni modificar el estado de la aplicación.
