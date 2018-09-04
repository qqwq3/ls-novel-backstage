
import {render} from 'react-dom';
import GetRouter from './router/index';

const App = GetRouter();
const root = document.getElementById('app');

render(App, root);

