import { RegistroAutomotor } from './RegistroAutomotor';
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';

const registro = new RegistroAutomotor();

// Agregar vehículos
const auto1 = new Auto('Ford', 'Focus', 2019);
const moto1 = new Moto('Yamaha', 'MT-03', 2021);
const camion1 = new Camion('Mercedes-Benz', '1114', 1987);

registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

// Mostrar vehículos
console.log(registro.obtenerVehiculos());

// Modificar un vehículo
registro.modificarVehiculo(0, new Auto('Honda', 'Civic Si', 2009));

// Dar de baja un vehículo
registro.darDeBaja(1);

// Mostrar vehículos después de modificaciones
console.log(registro.obtenerVehiculos());
