$(document).ready(function(){
    // genero le square
    for(var i=0; i<36; i++){
        $('.wrapper').append('<div class="square"></div>');
    }

    //implemento cosa accade al click del mouse su una delle square
    $('.square').click(function() {
        var box = $(this);

        $.ajax(
                {
                    //recupero l'api che genera il numero random
                    url: "https://flynn.boolean.careers/exercises/api/random/int",
                    method: "GET",
                    success: function (risposta) {
                        if(box.hasClass('cliccato')){
                            alert ('Già cliccato!');
                        } else {
                            box.addClass('cliccato');
                            box.text(risposta.response);
                            //elaboro il risultato ottenuto assegnando una classe colore in base al valore
                            if (risposta.response < 6) {
                                box.addClass("yellow");
                            } else {
                                box.addClass("green");
                            }
                        }
                    },
                    error: function (richiesta, stato, errori) {
                        alert("E' avvenuto un errore. " + errore);
                    }
                }
            );
    });

});
