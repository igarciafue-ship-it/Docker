# Explora Docker

En esta práctica vamos a explorar tanto la aplicación Docker Desktop de windows y los comando más utilizados de Docker.

- [Explora Docker](#explora-docker)
  - [Indicaciones de entrega](#indicaciones-de-entrega)
  - [Antes de empezar](#antes-de-empezar)
  - [1. Contenedores](#1-contenedores)
  - [2. Imagenes](#2-imagenes)
  - [3. Volumenes](#3-volumenes)
  - [4. Administrando contendores](#4-administrando-contendores)


## Indicaciones de entrega

- Responde en este fichero con capturas o texto según se requiera.
- Utiliza el formato correcto para los bloques de comando si los hubiera
- Recuerda ir publicando los cambios de vez en cuando usando los comandos, ejemplo:
```bash
git add --all
git commit -m "ejericicios 2, 3, 4 y 5"
git push
```

## Antes de empezar

- Pon Docker en marcha y ejecuta el comando de docker compose en esta carpeta para levantar la maquina. 
```bash
docker-compose up -d
```

## 1. Contenedores

1.1 ¿ Dónde podemos ver los contendores en marcha en la aplicación Docker Desktop? (Captura)
![alt text]({3117ABD2-758A-41FB-95F1-58E6FDB8AECE}.png)

1.2 Para ver los contendores en marcha desde la terminal se usa el comando `docker ps`, ejecutalo. (Captura)
![alt text]({72A6C482-6921-4815-89B8-1976236B7B71}.png)

1.4 ¿Qué muestra el comando `docker container`?
<b>Comandos qu se pueden llegar a usar para los conteiners </b>

1.5 ¿Qué muestra el comando `docker container ls`? <b> Muestra los conteners, cuando se crearon, los puertos el estado

## 2. Imagenes

2.1 ¿Dónde podemos ver las imágenes que tenemos descargadas en la aplicación Docker Desktop? (Captura)
![alt text]({964DE528-B9CF-4829-B107-B163B4208198}.png)
2.2 ¿Qué muestra el comando `docker images`?
<b>Muestra las imagenes descargadas </b>

2.3 ¿Qué muestra el comando `docker image ls`
<b> Lo mismo que arriba </b>
## 3. Volumenes

3.1 ¿Dónde podemos ver los volumenes que tenemos en la aplicación Docker Desktop? (Captura)
![alt text]({047C482A-1FC4-4F3A-8471-EA30621ADEB1}.png)

3.2 ¿Qué vemos en Docker Desktop si entramos en uno de los volumenes disponibles? (Captura)
![alt text]({C9677432-28AD-47FD-941A-F8597A7FD25E}.png)
3.3 ¿Qué muestra el comando `docker volume`?
<b>Muesrea comandos para crear volumenes </b>
3.4 ¿Qué muestra el comando `docker volume ls`?
<b>Muestra los nombres de lo volumenes </b>
## 4. Administrando contendores

4.1 Si entramos en un contendor, verémos las siguientes pestañas. Las más importantes son **Logs**, **Exec** y **Files**. Explica para qué crees que sirve cada una.

![alt text](image.png)

4.2 Si queremos ejecutar comandos dentro de un contendor podemos usar Docker Desktop o podemos utilizar el comando `docker exec`. 

Para abrir una terminal, podemos ejecutar el programa bash con el parámetro -it (t de terminal e i de Standard Input).


```bash
docker exec -it <NOMBRE CONTENDOR> bash
```

Ejecuta el comando y muestra una captura de la terminal dentro del contendor.
![alt text]({D5679C06-7D6C-4DE5-AB38-DB3A9BE075A0}.png)

4.3 Apaga todos los contendores de este proyecto con el comando `docker compose down` (Captura)
![alt text]({FA16EEB5-56FD-4DFA-A46F-066A309B96C6}.png)