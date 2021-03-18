$(function(){

  // 1 creo array con lista di cose da comprare
  var addList = [

    "Comprare il pane",

    "Comprare frutta",

    "Comprare verdura"

  ];

  // 2 creo ciclo per inserire ogni indice dell'array nel template

  for( var i = 0; i < addList.length; i++){

    // 3 creo un clone del template
    var template = $(".template ul li").clone();
    
    template.prepend(addList[i]);

    $(".to-do-list").append(template);

  }

  // 4 al click di invio sull'input aggiungo in lista

  $("#add-list").keydown(function(e){

    var textUtente = $(this).val();

    if(e.which == 13 && $(this).val() != ""){

      var template = $(".template ul li").clone();

      template.prepend(textUtente);

      $(".to-do-list").append(template);

      $(this).val("");
    }

  });

  $(".to-do-list").on("click", ".delete", function(){

    $(this).parent().remove();
  });



});
