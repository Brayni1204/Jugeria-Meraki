<?php
class Ingredientes
{
    private $ingredientesId;
    private $nombreIngrediente;
    private $jugoId;
    private $fCrea;
    private $fModificacion;

    // Constructor sin parámetros que inicializa las propiedades con valores predeterminados
    public function __construct()
    {
        $this->ingredientesId = 0;                   // ID de ingrediente predeterminado
        $this->nombreIngrediente = "";               // Nombre de ingrediente vacío
        $this->jugoId = 0;                           // ID de jugo predeterminado
        $this->fCrea = date('Y-m-d H:i:s');          // Fecha de creación actual
        $this->fModificacion = $this->fCrea;         // Fecha de modificación igual a la fecha de creación
    }

    // Métodos getter y setter
    public function getIngredientesId()
    {
        return $this->ingredientesId;
    }

    public function setIngredientesId($ingredientesId)
    {
        $this->ingredientesId = $ingredientesId;
    }

    public function getNombreIngrediente()
    {
        return $this->nombreIngrediente;
    }

    public function setNombreIngrediente($nombreIngrediente)
    {
        $this->nombreIngrediente = $nombreIngrediente;
    }

    public function getJugoId()
    {
        return $this->jugoId;
    }

    public function setJugoId($jugoId)
    {
        $this->jugoId = $jugoId;
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
