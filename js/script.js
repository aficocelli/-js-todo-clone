$(function(){

  // 1 creo array con lista di cose da comprare
  var addList = [

    "Comprare il pane",

    "Comprare frutta",

    "Comprare verdura"

  ];


  // 2 creo un clone del template
  for( var i = 0; i < addList.length; i++){

    var template = $(".template ul li").clone();


    template.prepend(addList[i]);

    $(".to-do-list").append(template);

  }


});
