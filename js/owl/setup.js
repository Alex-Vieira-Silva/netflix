$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function redirecionarPagina(valor){
   
    if(valor == "assitir"){
        window.location.href = "https://www.netflix.com/br/title/70178217";
    }else if(valor == "informacoes"){
        window.location.href = "https://www.tecmundo.com.br/minha-serie/house-of-cards";
    }

    return valor;
 
}

