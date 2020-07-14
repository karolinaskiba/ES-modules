import { showInConsole, showInDom } from './components/show.js';
import info from './components/products.js';

showInConsole(info);
showInDom(info.name, info.htmlElement);
showInDom(info.age, 'h2');
showInDom(info.price, 'p');