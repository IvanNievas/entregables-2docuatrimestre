"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registroAutomotor_1 = require("./registroAutomotor");
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var registro = new registroAutomotor_1.RegistroAutomotor();
// Agregar vehículos
var auto1 = new auto_1.Auto('Ford', 'Focus', 2019);
var moto1 = new moto_1.Moto('Yamaha', 'MT-03', 2021);
var camion1 = new camion_1.Camion('Mercedes-Benz', '1114', 1987);
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);
// Mostrar vehículos
console.log('Vehículos iniciales:', registro.obtenerVehiculos());
// Modificar un vehículo
registro.modificarVehiculo(0, new auto_1.Auto('Honda', 'Civic Si', 2009));
// Dar de baja un vehículo
registro.darDeBaja(1);
// Mostrar vehículos después de modificaciones
console.log('Vehículos después de modificaciones:', registro.obtenerVehiculos());
