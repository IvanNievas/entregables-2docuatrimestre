import { Mago } from './mago';
import { Luchador } from './luchador';
import { Arquero } from './arquero';
import { Hechicero } from './hechicero';
import { Guerrero } from './guerrero';

const mago = new Mago("Houdini");
const luchador = new Luchador("Dwayne The rock Johnson");
const arquero = new Arquero("Robin Hood");
const hechicero = new Hechicero("Satoru Gojo");
const guerrero = new Guerrero("Ragnar Lodbrok");

console.log(mago.toString());
console.log(luchador.toString());
console.log(arquero.toString());
console.log(hechicero.toString());
console.log(guerrero.toString());

mago.atacar();
luchador.atacar();
arquero.atacar();
hechicero.atacar();
guerrero.atacar();
