#ENDPOINTS

[GET] /robots -> devuelve un array con todos los robots de la BD

[GET] /robots/:idRobot -> devuelve un robot de la BD por id

[POST*] /robots/create -> recibe un robot (sin id), lo crea en la BD y devuelve el robot recién creado

[PUT*] /robots/update -> recibe un robot, modifica en la BD el robot con la misma id que el recibido, y devuelve el robot modificado

[DELETE*] /robots/delete/:idRobot -> elimina de la BD un robot por id y devuelve un objeto con la id
