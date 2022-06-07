let autos = require("./autos");

const concesionaria = {
    autos: autos,      // no va entre “” porque no es un string lo que estoy llamando, es el nombre de la variable que declare arriba.

    buscarAuto: function (patente){
        let autos = this.autos
        let autoPorPatente = null
        autos.forEach(function (auto) {
            if (patente === auto.patente) { autoPorPatente = auto /*"El auto con patente " + patente + " es un " + auto.marca + " " + auto.modelo*/ }    
        })
        return autoPorPatente
    },

    venderAuto: function(patente) {
        let autoVacante = this.buscarAuto(patente)
        autoVacante.vendido = true
        return autoVacante
    },

    autosParaLaVenta: function() {
        let autos = this.autos
        let autosDisponibles = autos.filter(function(auto) {
        return auto.vendido === false})
        return autosDisponibles
    },
        
    autosNuevos: function() {
        let autos0km = this.autosParaLaVenta()
        return autos0km.filter(function(auto){
            return auto.km < 100 })
    },

    listaDeVentas: function() {
        let listaPrecioAutosVendidos = []  // declaro una variable con un array vacío que se irá completando a medida que itere en autos y la condición sea true.
        let autos = this.autos
        autos.forEach(function (auto) {
            if (auto.vendido === true) { listaPrecioAutosVendidos.push(auto.precio) }
        })
        return listaPrecioAutosVendidos
    },

    totalDeVentas: function() {
        let totalVentas = this.listaDeVentas()
        if (totalVentas > 0) { return totalVentas.reduce(function(acum, precio){
            return acum + precio }) } else { return 0 }
    },

    puedeComprar: function(auto, persona/*hace referencia al objeto literal que brinda playground*/) {
        if (auto.precio <= persona.capacidadDePagoTotal && (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas) {
            return true } else { return false }
    },

    autosQuePuedeComprar: function(persona) {
        let listaAutosVenta = this.autosParaLaVenta()
        return listaAutosVenta.filter(function(auto){
                return auto.precio <= persona.capacidadDePagoTotal && (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas // condición de la funcion puedeComprar
        })

    }

}



