MONGO DB
1. descargar mongo db:
Ve a la página oficial de MongoDB y descarga la versión adecuada para tu sistema operativo (Windows, macOS o Linux).

2. Instalar MongoDB:
Windows: Ejecuta el instalador .msi, sigue las instrucciones y selecciona la opción de instalar MongoDB como servicio.

macOS: Usa Homebrew con el comando:

3. configurar mongoDB
Crea una carpeta para almacenar los datos de MongoDB:

-sh
-mkdir -p /data/db

Asegúrate de que MongoDB tenga permisos adecuados:

-sh
-sudo chown -R $(whoami) /data/db

para iniciar el servicio en caso que haga falta 
abrir terminal y ingresar: "mongosh" para iniciar la interfaz de línea de comandos de MongoDB, luego de esto en otro terminal ingrese "mongod" para iniciar el servidor de MongoDB. Es el proceso principal que gestiona la base de datos y permite que los clientes se conecten a ella.

PROYECTO DE MODULO 2
1. descargar proyecto de modulo 2 de GitHub

Abre la terminal o línea de comandos y navega hasta la carpeta donde quieres descargar el proyecto:

sh
cd /ruta/donde/quieres/guardar/el/proyecto
Luego, usa el comando git clone seguido de la URL del repositorio:

sh
git clone https://github.com/usuario/repositorio.git

2. ingresar npm i
en la terminal "npm i" para instalar las dependencias del proyecto en Node.js

3. descargar datos para la base de datos:
en el terminal de visual studio o el ide de preferencia, ubicado en la carpeta del proyecto, ingresar "npm run seed" para poblar la base de datos mongo

