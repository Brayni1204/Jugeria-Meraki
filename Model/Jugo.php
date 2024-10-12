<?php
class Jugo
{
    private $jugoId;
    private $nombre;
    private $rutaImg;
    private $categoriaId;
    private $fCrea;
    private $fModificacion;

    public function __construct()
    {
        $this->jugoId = 0;                           // ID predeterminado
        $this->nombre = "";                          // Nombre vacío
        $this->rutaImg = "";                         // Ruta de imagen vacía
        $this->categoriaId = 0;                      // ID de categoría predeterminado
        $this->fCrea = date('Y-m-d H:i:s');          // Fecha de creación actual
        $this->fModificacion = $this->fCrea;         // Fecha de modificación igual a la fecha de creación
    }

    // Métodos getter y setter
    public function getJugoId()
    {
        return $this->jugoId;
    }

    public function setJugoId($jugoId)
    {
        $this->jugoId = $jugoId;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function getRutaImg()
    {
        return $this->rutaImg;
    }

    public function setRutaImg($rutaImg)
    {
        $this->rutaImg = $rutaImg;
    }

    public function getCategoriaId()
    {
        return $this->categoriaId;
    }

    public function setCategoriaId($categoriaId)
    {
        $this->categoriaId = $categoriaId;
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
