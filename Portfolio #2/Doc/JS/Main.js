//CREAMOS UNA FUNCION PARA ESCONDER LA BARRA DE NAVEGACION

//DEFINIMOS LAS VARIABLES
let btn = document.getElementById('C'),
	header = document.getElementById('Header'),
	nav = document.getElementById('Nav'),
	ul = document.getElementById('Ul'),
	contador = 0;

//CREAMOS LA FUNCION
function Active() {
	if (contador == 0) {
		header.classList.add('ActiveN');
		nav.removeChild(ul);
		contador = 1;
	} else {
		header.classList.remove('ActiveN');
		nav.appendChild(ul);
		contador = 0;
	}
}

//ACTIVAMOS LA FUNCION CON UN EVENTO DE CLICK
btn.addEventListener('click', Active, true);

//CREAMOS LAS FUNCIONES DE FILTRADO PARA LA GALERIA DEL PORTAFOLIO

$(document).ready(function () {
	$('.filter-button').click(function () {
		let value = $(this).attr('data-filter');

		if (value == 'all') {
			//$('.filter').removeClass('hidden');
			$('.filter').show('1000');
		} else {
			//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
			//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
			$('.filter')
				.not('.' + value)
				.hide('3000');
			$('.filter')
				.filter('.' + value)
				.show('3000');
		}
	});
});

//CREAMOS LA FUNCION PARA ACTIVAR LA PESTAÑA SELECCIONADA

    $('.categorias .filter-button').on('click', function () {
	$('.categorias .filter-button').removeClass('Activo');
	$(this).addClass('Activo');
});


//CREAMOS UNA FUNCION PARA RECARGAR LA PAGINA

function reload (){
	location.reload();
}

//CREAMOS LA FUNCION PARA FILTRAR CONTENIDO DE ABOUT

$(document).ready(function () {
	$('.List-filter').click(function () {
		let val = $(this).attr('data-filter');

		if (val == 'hiden') {
			$('.filter').add('hidden');

		} else {
			//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
			//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
			$('.filter')
				.not('.' + val)
				.hide('3000');
			$('.filter')
				.filter('.' + val)
				.show('3000');
		}
	});
});

//CREAMOS LA FUNCION PARA ACTIVAR UNA PESTANA

$('.List-filter').on('click', function () {
	$('.List-filter').removeClass('active');
	$(this).addClass('active');
});