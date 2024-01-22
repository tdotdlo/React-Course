// This will import the VARIABLE from another file. IT HAS TO BE THE SAME NAME
import { firstLine } from './example.js';

console.log(firstLine);
// This will import the VALUE from the file - import name can be anything
import value from './example.js';

console.log(value);

// This will group multiple exports (NOT EXPORT DEFAULTS) and import it as an object from the other JS file
import * as objName from './example.js';

console.log(objName.firstLine);
console.log(objName.weather);
