<?php
class Precio
{
    private $precioId;
    private $precio;
    private $jugoId;

    // Constructor sin parámetros que inicializa las propiedades con valores predeterminados
    public function __construct()
    {
        $this->precioId = 0;                         // ID de precio predeterminado
        $this->precio = 0.0;                         // Precio predeterminado
        $this->jugoId = 0;                           // ID de jugo predeterminado
    }

    // Métodos getter y setter
    public function getPrecioId()
    {
        return $this->precioId;
    }

    public function setPrecioId($precioId)
    {
        $this->precioId = $precioId;
    }

    public function getPrecio()
    {
        return $this->precio;
    }

    public function setPrecio($precio)
    {
        $this->precio = $precio;
    }

    public function getJugoId()
    {
        return $this->jugoId;
    }

    public function setJugoId($jugoId)
    {
        $this->jugoId = $jugoId;
    }
}
