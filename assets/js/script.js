let articulos = [];
let total = []


const stock = document.querySelector('.stock')

//---------------------------------------------------------------------------------------//
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup',function() {
  let filter = this.value.toUpperCase();
  let li = document.getElementsByTagName('article');
  for (let i = 0; i < li.length; i++) {
    let txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }
}
})
//----------------------------------------------------------------------------------------//
let compras = document.getElementById('compras');
const spanCarro = document.querySelector('.carro');


spanCarro.addEventListener('click',function aparecerCompras() {
  let totalTexto = document.createElement('h2');
  const pagar = document.createElement('button');
  const cerrar = document.createElement('button');

  pagar.classList.add('pagar');

  totalTexto.innerText = `Total $${total.reduce((acumulador, valorActual)=> acumulador + valorActual,0)}`;
  pagar.innerHTML = 'Pagar'
  cerrar.innerHTML = 'Cerrar'

  compras.innerHTML= articulos;
  compras.appendChild(totalTexto);
  compras.appendChild(pagar);
  compras.appendChild(cerrar);
  
  if (compras.style.display == 'block') {
    compras.style.display = 'none';
  }
  else{
    compras.style.display = 'block';
  }
  cerrar.addEventListener('click',()=>{
    compras.style.display = 'none';

  })
});



//--------------------------------------------------------------------------------------------------------//

const numeroDeArticulos = document.querySelector('.numeroDeCarro');

const botonAgregarAscension = document.querySelector('.ascension');

botonAgregarAscension.addEventListener('click',(e)=>{
  articulos.push(e.innerHTML= `La Ascension del Ronin CLP 55.990 <button class="eliminar" onclick="eliminarAscension()">Eliminar</button> <br>`);
  numeroDeArticulos.innerHTML = articulos.length;
  total.push(55.990);
  
});

const botonAgregarSpider = document.querySelector('.spider');

botonAgregarSpider.addEventListener('click',(e)=>{
  articulos.push(e.innerHTML= 'Marvel spiderman 2 CLP 43.990 <button class="eliminar" onclick="eliminarSpider()">Eliminar</button> <br>');
  numeroDeArticulos.innerHTML = articulos.length;
  total.push(43.990);

});

const botonAgregarRagnarok = document.querySelector('.ragnarok');

botonAgregarRagnarok.addEventListener('click',(e)=>{
  articulos.push(e.innerHTML= 'God of war Ragnarok CLP 39.990 <button class="eliminar" onclick="eliminarGod()">Eliminar</button> <br>');
  numeroDeArticulos.innerHTML = articulos.length;
  total.push(39.990);

});

const botonAgregarGhost = document.querySelector('.ghost');

botonAgregarGhost.addEventListener('click',(e)=>{
  articulos.push(e.innerHTML= 'Ghost of tsushima CLP 29.990 <button class="eliminar" onclick="eliminarGhost()">Eliminar</button> <br>');
  numeroDeArticulos.innerHTML = articulos.length;
  total.push(29.990);

});

const botonAgregarReturnal = document.querySelector('.returnal');

botonAgregarReturnal.addEventListener('click',(e)=>{
  articulos.push(e.innerHTML= 'Returnal CLP 49.990 <button class="eliminar" onclick="eliminarReturnal()">Eliminar</button> <br>');
  numeroDeArticulos.innerHTML = articulos.length;
  total.push(49.990);

});

const botonAgregarGran = document.querySelector('.gran');

botonAgregarGran.addEventListener('click',(e)=>{
  articulos.push(e.innerHTML= 'Gran turismo 7 CLP 42.990 <button class="eliminar" onclick="eliminarGran()">Eliminar</button> <br>');
  numeroDeArticulos.innerHTML = articulos.length;
  total.push(42.990);

});

const botonAgregarHorizon = document.querySelector('.horizon');

botonAgregarHorizon.addEventListener('click',(e)=>{
  articulos.push(e.innerHTML= 'Horizon Forbidden West CLP 39.990 <button class="eliminar" onclick="eliminarHorizon()">Eliminar</button> <br>');
  numeroDeArticulos.innerHTML = articulos.length;
  total.push(39.990);

});

const botonAgregarLast = document.querySelector('.last');

botonAgregarLast.addEventListener('click',(e)=>{
  articulos.push(e.innerHTML= 'The last of us parte 1 CLP 31.990 <button class="eliminar" onclick="eliminarLast()">Eliminar</button> <br>');
  numeroDeArticulos.innerHTML = articulos.length;
  total.push(31.990);

});

const botonAgregarStellar = document.querySelector('.stellar');

botonAgregarStellar.addEventListener('click',(e)=>{
  articulos.push(e.innerHTML= 'Stellar blade CLP 44.990 <button class="eliminar" onclick="eliminarStellar()">Eliminar</button> <br>');
  numeroDeArticulos.innerHTML = articulos.length;
  total.push(44.990);

});

const botonAgregarGrand = document.querySelector('.grand');

botonAgregarGrand.addEventListener('click',(e)=>{
  articulos.push(e.innerHTML= 'Grand theft auto V CLP 21.990 <button class="eliminar" onclick="eliminarGrand()">Eliminar</button> <br>');
  numeroDeArticulos.innerHTML = articulos.length;
  total.push(21.990);

}); 

const botonAgregarMinecraft = document.querySelector('.minecraft');

botonAgregarMinecraft.addEventListener('click',(e)=>{
  articulos.push(e.innerHTML= 'Minecraft deluxe edition CLP 62.835 <button class="eliminar" onclick="eliminarMinecraft()">Eliminar</button> <br>');
  numeroDeArticulos.innerHTML = articulos.length;
  total.push(62.835);

});

const botonAgregarBaldur = document.querySelector('.baldur');

botonAgregarBaldur.addEventListener('click',(e)=>{
  articulos.push(e.innerHTML= 'Baldurs Gate 3 CLP 43.990 <button class="eliminar" onclick="eliminarBaldur()">Eliminar</button> <br>');
  numeroDeArticulos.innerHTML = articulos.length;
  total.push(43.990);

});

//------------------------------------------------------------------------------------------------------------------------------//
function eliminarAscension() {
  let index = articulos.indexOf('La Ascension del Ronin CLP 55.990 <button class="eliminar" onclick="eliminarAscension()">Eliminar</button> <br>');
  articulos.splice(index, 1);
  
  numeroDeArticulos.innerHTML = articulos.length;
  let indexT = articulos.indexOf(43.990);
  if (index ==! -1) {
    total.splice(indexT, 1)

  }
  compras.style.display = 'none'
}
function eliminarSpider() {
  let index = articulos.indexOf('Marvel spiderman 2 CLP 43.990 <button class="eliminar" onclick="eliminarSpider()">Eliminar</button> <br>');
  articulos.splice(index, 1);
  
  numeroDeArticulos.innerHTML = articulos.length;
  let indexT = articulos.indexOf(55.990);
  if (index ==! -1) {
    total.splice(indexT, 1)

  }
  compras.style.display = 'none'
}
function eliminarGod() {
  let index = articulos.indexOf('God of war Ragnarok CLP 39.990 <button class="eliminar" onclick="eliminarGod()">Eliminar</button> <br>');
  articulos.splice(index, 1);
  
  numeroDeArticulos.innerHTML = articulos.length;
  let indexT = articulos.indexOf(39.990);
  if (index ==! -1) {
    total.splice(indexT, 1)

  }
  compras.style.display = 'none'
}
function eliminarGhost() {
  let index = articulos.indexOf('Ghost of tsushima CLP 29.990 <button class="eliminar" onclick="eliminarGhost()">Eliminar</button> <br>');
  articulos.splice(index, 1);
  
  numeroDeArticulos.innerHTML = articulos.length;
  let indexT = articulos.indexOf(29.990);
  if (index ==! -1) {
    total.splice(indexT, 1)

  }
  compras.style.display = 'none'
}
function eliminarReturnal() {
  let index = articulos.indexOf('Returnal CLP 49.990 <button class="eliminar" onclick="eliminarReturnal()">Eliminar</button> <br>');
  articulos.splice(index, 1);
  
  numeroDeArticulos.innerHTML = articulos.length;
  let indexT = articulos.indexOf(49.990);
  if (index ==! -1) {
    total.splice(indexT, 1)

  }
  compras.style.display = 'none'
}
function eliminarGran() {
  let index = articulos.indexOf('Gran turismo 7 CLP 42.990 <button class="eliminar" onclick="eliminarGran()">Eliminar</button> <br>');
  articulos.splice(index, 1);
  
  numeroDeArticulos.innerHTML = articulos.length;
  let indexT = articulos.indexOf(42.990);
  if (index ==! -1) {
    total.splice(indexT, 1)

  }
  compras.style.display = 'none'
}
function eliminarHorizon() {
  let index = articulos.indexOf('Horizon Forbidden West CLP 39.990 <button class="eliminar" onclick="eliminarHorizon()">Eliminar</button> <br>');
  articulos.splice(index, 1);
  
  numeroDeArticulos.innerHTML = articulos.length;
  let indexT = articulos.indexOf(39.990);
  if (index ==! -1) {
    total.splice(indexT, 1)

  }
  compras.style.display = 'none'
}
function eliminarLast() {
  let index = articulos.indexOf('The last of us parte 1 CLP 31.990 <button class="eliminar" onclick="eliminarLast()">Eliminar</button> <br>');
  articulos.splice(index, 1);
  
  numeroDeArticulos.innerHTML = articulos.length;
  let indexT = articulos.indexOf(31.990);
  if (index ==! -1) {
    total.splice(indexT, 1)

  }
  compras.style.display = 'none'
}
function eliminarStellar() {
  let index = articulos.indexOf('Stellar blade CLP 44.990 <button class="eliminar" onclick="eliminarStellar()">Eliminar</button> <br>');
  articulos.splice(index, 1);
  
  numeroDeArticulos.innerHTML = articulos.length;
  let indexT = articulos.indexOf(44.990);
  if (index ==! -1) {
    total.splice(indexT, 1)

  }
  compras.style.display = 'none'
}
function eliminarGrand() {
  let index = articulos.indexOf('Grand theft auto V CLP 21.990 <button class="eliminar" onclick="eliminarGrand()">Eliminar</button> <br>');
  articulos.splice(index, 1);
  
  numeroDeArticulos.innerHTML = articulos.length;
  let indexT = articulos.indexOf(21.990);
  if (index ==! -1) {
    total.splice(indexT, 1)

  }
  compras.style.display = 'none'
}
function eliminarMinecraft() {
  let index = articulos.indexOf('Minecraft deluxe edition CLP 62.835 <button class="eliminar" onclick="eliminarMinecraft()">Eliminar</button> <br>');
  articulos.splice(index, 1);
  
  numeroDeArticulos.innerHTML = articulos.length;
  let indexT = articulos.indexOf(62.835);
  if (index ==! -1) {
    total.splice(indexT, 1)

  }
  compras.style.display = 'none'
}
function eliminarBaldur() {
  let index = articulos.indexOf('Baldurs Gate 3 CLP 43.990 <button class="eliminar" onclick="eliminarBaldur()">Eliminar</button> <br>');
  articulos.splice(index, 1);
  
  numeroDeArticulos.innerHTML = articulos.length;
  let indexT = articulos.indexOf(43.990);
  if (index ==! -1) {
    total.splice(indexT, 1)

  }
  compras.style.display = 'none'
}