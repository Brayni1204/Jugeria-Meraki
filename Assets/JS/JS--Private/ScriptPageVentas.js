// Mostrar el modal de Jugos
document.getElementById('ver-jugos-btn').addEventListener('click', function() {
    document.getElementById('modal-jugos').style.display = 'flex';
});

// Cerrar el modal
document.getElementById('cerrar-modal').addEventListener('click', function() {
    document.getElementById('modal-jugos').style.display = 'none';
});

// Actualizar subtotal y total
document.querySelectorAll('.cantidad').forEach(function(input) {
    input.addEventListener('input', actualizarSubtotal);
});

function actualizarSubtotal() {
    const fila = this.closest('tr');
    const precio = parseFloat(fila.querySelector('td:nth-child(4)').innerText);
    const cantidad = parseInt(this.value);
    const subtotal = precio * cantidad;
    fila.querySelector('.subtotal').innerText = subtotal.toFixed(2);
    actualizarTotal();
}

function actualizarTotal() {
    let total = 0;
    document.querySelectorAll('.subtotal').forEach(function(subtotal) {
        total += parseFloat(subtotal.innerText);
    });
    document.getElementById('total-pagar').value = total.toFixed(2);
}

// Mostrar campos de monto y vuelto si el pago es en efectivo
document.getElementById('tipo-pago').addEventListener('change', function() {
    const montoVuelto = document.getElementById('monto-vuelto');
    if (this.value === 'efectivo') {
        montoVuelto.style.display = 'block';
    } else {
        montoVuelto.style.display = 'none';
    }
});

// Calcular vuelto
document.getElementById('monto').addEventListener('input', function() {
    const monto = parseFloat(this.value);
    const total = parseFloat(document.getElementById('total-pagar').value);
    const vuelto = monto - total;
    document.getElementById('vuelto').value = vuelto.toFixed(2);
});
