import _ from 'lodash';
import app from './app';
import './style.css';

app();

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'App', ''], ' ');
  element.classList.add('hello');

  return element;
}

const view = document.getElementById('view');
view.appendChild(component());
