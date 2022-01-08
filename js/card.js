const btnAumentarDisminuir = e => {
    // console.log(e.target.classList.contains('btn-info'))
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        pintarCarrito()
    }
    e.stopPropagation()
}

$("#botonSelec").on("change" , function(e){

    console.log( e.target.value);
});

$(function(){
    var getTxt = $('.content p').text();
    var realTxt = [getTxt]
    var textCol = [getTxt]
    var wordsCount = textCol[0].split(' ').length;
    var words = textCol[0].split(' ');
    var wordsLimit = 40;
    var limitCol;
    
    $('.readmore h3').click(function(){
    if ( $(this).text() === "Ver mas") {
        $('.content p').text(realTxt.join(' '));
        $('.content').addClass('scroll');
        $(this).text('Ver menos');
        $('.item').addClass('showfull');
      } else {
        $('.content p').text(limitCol);
         $(this).text('Ver mas');
        $('.item').removeClass('showfull');
      }
  });
    
    if (wordsLimit <= wordsCount) {
      words.splice(wordsLimit, wordsCount - wordsLimit);
      words = words.join(' ');
      $('.content p').text(words + '...');
      limitCol = $('.content p').text();
    }
    
    $('.like').click(function(){
      $(this).toggleClass('clicked');
    });
});