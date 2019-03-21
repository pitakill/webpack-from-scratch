# Inicializar un repositorio vacío

```sh
$ mkdir mi-proyecto # Crear una nueva carpeta en el directorio dónde se está.
$ cd mi-proyecto # Cambiar a la nueva carpeta
$ npm init # Seguir los pasos que se muestran
$ git init # Inicializar un repositorio de Git
```

# Agregar webpack

```sh
$ npm install --save-dev webpack webpack-cli # Agregar webpack y webpack-cli
```

# Agregar archivos

```sh
$ mkdir src dist # Crear directorios de archivos fuente y destino
$ touch src/{example,index}.js # Crear archivos fuente
$ touch dist/index.html # Crear archivo HTML para desplegar en navegador
```

# Agregar archivo de configuración

```sh
$ touch webpack.config.js # Agregar archivo de configuración de webpack
```

# Agregar un archivo de estilos css

```sh
$ touch dist/styles.css # Agrega un archivo de estilos de css
```

# Agregar configuración para manejar estilos de css con webpack
```sh
$ mv dist/styles.css src/styles.css # Cambia el archivo de estilos al directorio fuente
```

# Mover el archivo css para ser usado como SCSS
```sh
$ mv src/style.{css,scss} # Cambiamos la extensión del archivo para ser interpetado como SCSS
```

# Agregar una imagen para ser referenciada en JS

# Agregar html webpack plugin y clean webpack plugin

# Agregar webpack-dev-server para un mejor manejo del entorno desarrollo
