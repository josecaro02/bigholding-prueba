var color_selected='negro';

function muestra_contenido(){
    var txtDescription = document.getElementById('id_descripcion');
    var txtEspecification = document.getElementById('id_especificaciones');
    var txtIncluido = document.getElementById('id_incluido');
    txtIncluido.style.display = 'block';
    txtDescription.style.display = 'block';
    txtEspecification.style.display = 'none';   
}

function muestra_especificaciones(){
    var txtDescription = document.getElementById('id_descripcion');
    var txtEspecification = document.getElementById('id_especificaciones');
    var txtIncluido = document.getElementById('id_incluido');
    txtIncluido.style.display = 'none';
    txtDescription.style.display = 'none';
    txtEspecification.style.display = 'block';
}

function muestraSlickNegro(){
var slickN = document.getElementById('slick-negro');
var slickG = document.getElementById('slick-gris');
slickG.style.display='block';
slickN.style.display='none';
color_selected='negro';
muestraElegido();
}

function muestraSlickGris(){
    var slickN = document.getElementById('slick-negro');
    var slickG = document.getElementById('slick-gris');
    slickG.style.display='none';
    slickN.style.display='block';
    color_selected='gris';
    muestraElegido();
}

function muestraElegido(){
    if(color_selected=='negro'){
        var xsBlack = document.getElementById('xs-black');
        var xlBlack = document.getElementById('xl-black');
        var xsGrey = document.getElementById('xs-grey');
        var xlGrey = document.getElementById('xl-grey');

        xsBlack.style.display='block';
        xlBlack.style.display='block';
        xsGrey.style.display='none';
        xlGrey.style.display='none';
    }
    else{

        var xsBlack = document.getElementById('xs-black');
        var xlBlack = document.getElementById('xl-black');
        var xsGrey = document.getElementById('xs-grey');
        var xlGrey = document.getElementById('xl-grey');

        xsBlack.style.display='none';
        xlBlack.style.display='none';
        xsGrey.style.display='block';
        xlGrey.style.display='block';

    }
}
    window.onload = function(){
        muestra_contenido();
        muestraSlickGris();
        muestraElegido();
    }