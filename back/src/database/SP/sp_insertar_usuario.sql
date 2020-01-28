delimiter $$
drop procedure if exists sp_insertar_usuario$$
create procedure sp_insertar_usuario(datos JSON)

BEGIN

DECLARE EXIT HANDLER FOR SQLEXCEPTION,SQLWARNING
  BEGIN
    -- ERROR
  ROLLBACK;
END;

DECLARE manejador de salida para sqlwarning
 BEGIN
    -- WARNING
 ROLLBACK;
END;

START TRANSACTION;

BEGIN

DECLARE v_nombre varchar(255) default null;
DECLARE v_clave varchar(255) default null;
DECLARE v_rol varchar(255) default null;

set v_nombre = JSON_EXTRACT(datos,'$.nombre');
set v_clave = JSON_EXTRACT(datos,'$.clave');
set v_rol = JSON_EXTRACT(datos,'$.rol');

 if (v_nombre is not null) && (v_clave is not null) && (v_rol is not null) then
    insert into users (nombre, clave, rol)
    values(
        v_nombre,
        v_clave,
        v_rol
    );
    select 0000;
 else
   
 end if; 


END $$
delimiter ;