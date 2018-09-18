
import {render} from 'react-dom';
import GetRouter from './router/index';
//import 'antd/dist/antd.css';
import './styles/common.styl';

const App = GetRouter();
const root = document.getElementById('app');

render(App, root);

