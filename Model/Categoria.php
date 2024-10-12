<?php
class Categoria
{
    private $categoriaId;
    private $nombre;
    private $fCrea;
    private $fModificacion;

    // Constructor sin parámetros que inicializa las propiedades con valores predeterminados
    public function __construct()
    {
        $this->categoriaId = 0;                       // ID predeterminado
        $this->nombre = "";                           // Nombre vacío
        $this->fCrea = date('Y-m-d H:i:s');           // Fecha de creación actual
        $this->fModificacion = $this->fCrea;          // Fecha de modificación igual a la fecha de creación
    }

    // Métodos getter y setter
    public function getCategoriaId()
    {
        return $this->categoriaId;
    }

    public function setCategoriaId($categoriaId)
    {
        $this->categoriaId = $categoriaId;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function getFCrea()
    {
        return $this->fCrea;
    }

    public function getFModificacion()
    {
        return $this->fModificacion;
    }

    public function setFModificacion($fModificacion)
    {
        $this->fModificacion = $fModificacion;
    }
}
