import tupian from './tupian.jpeg';
import style from './index.scss';

function createTupian () { 
  var img = new Image();
  img.src = tupian;
  img.classList.add(style.tupian);
  var root = document.getElementById('root');
  root.appendChild(img);
}

export default createTupian;