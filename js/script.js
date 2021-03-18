$(function(){

  // 1 creo array con lista di cose da comprare
  var addList = [

    "Comprare il pane",

    "Comprare frutta",

    "Comprare verdura"

  ]


  // 2 creo un clone del template

  var template = $(".template ul li").clone();


  template.prepend(addList[0]);

  $(".to-do-list").append(template);




  });
