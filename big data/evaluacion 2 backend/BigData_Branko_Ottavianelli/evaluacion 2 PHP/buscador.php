<?php

$json = file_get_contents('data-1.json');

$json_data = json_decode($json,true);

$filtro_ciudad=$_POST['ciudad'];
$filtro_tipo=$_POST['tipo'];
$filtro_precio=$_POST['precio'];
$todos=$_POST['todos'];

$filtrados=[];
$filtrados=$json_data;
if($todos == 1){
 $filtrados=$json_data;
}else{
    if(isset($filtro_ciudad) && $filtro_ciudad != ""){
        $filtrados=filtrar_ciudad($filtro_ciudad,$filtrados);
    }
    if(isset($filtro_tipo) && $filtro_tipo != ""){
        $filtrados=filtrar_tipo($filtro_tipo,$filtrados);
    }
    if(isset($filtro_precio)) {
        $filtrados=filtrar_precio($filtro_precio,$filtrados);
    }
}

foreach ($filtrados as $key1 => $value1) {

?>
<div class="card item">
    <div class="contenedor_imagen">
        <img src="img/home.jpg" class="img-sale" alt="">
    </div>
    <div class="contenedor_datos">
        <div>Dirección: <b><?= $value1['Direccion'];?></b></div>
        <div>Ciudad: <b><?= $value1['Ciudad'];?></b></div>
        <div>Teléfono: <b><?= $value1['Telefono'];?></b></div>
        <div>Código Postal: <b><?= $value1['Codigo_Postal'];?></b></div>
        <div>Tipo: <b><?= $value1['Tipo'];?></b></div>
        <div>Precio: <b><?= $value1['Precio'];?></b></div>
    </div>
</div>
<?php
}


function filtrar_ciudad($ciudad,$elementos_filtrados){
    $results=[];
    foreach ($elementos_filtrados as $key1 => $value1) {
        if($value1["Ciudad"] == $ciudad){
            array_push($results,$value1);
        }
    }
    return $results;
}

function filtrar_tipo($tipo,$elementos_filtrados){
    $results=[];
    foreach ($elementos_filtrados as $key1 => $value1) {
        if($value1["Tipo"] == $tipo){
          array_push($results,$value1);
        }
    }
    return $results;
}

function filtrar_precio($precio,$elementos_filtrados){
    $results=[];
    $pr=explode(";", $precio);
    $menor=$pr[0];
    $mayor=$pr[1];
    foreach ($elementos_filtrados as $key1 => $value1) {
        $largo=strlen($value1["Precio"])-1;
        $entrada=substr($value1["Precio"], 1, $largo);
        $precio_actual=str_replace(',', '', str_replace('.', '', $entrada));
        if($precio_actual > $menor && $precio_actual < $mayor){
            array_push($results,$value1);
        }
    }
    return $results;
}
?>
