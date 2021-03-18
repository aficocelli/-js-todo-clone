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

  $(".delete").click(function(){

    $(this).parent().remove();
  })

  $("#add-list").keydown(function(e){

    if(e.which == 13){

      var textUtente = $(this).val();

      console.log(textUtente);
    }

  });



});
