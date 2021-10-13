
const div_del_menu = document.querySelector('#menuDiv');

const secciones = [
{
  seccion: 'Tablas de medidas | ',
  ruta: 'tablaMedidas.html'
}, 
{
  seccion: 'Herraminetas | ',
  ruta: 'herramientasCocina.html'
}
];
var link;
const contenedor_menu = document.createElement('div');
contenedor_menu.id = 'mi_menu';

for (let i = 0; i< secciones.length; i++){
  link = document.createElement('a');
  link.textContent = secciones[i].seccion;
  link.setAttribute('href',secciones[i].ruta);
  link.className = 'menuitem';
  contenedor_menu.appendChild(link);  
}

div_del_menu.appendChild(contenedor_menu);