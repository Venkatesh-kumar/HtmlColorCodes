$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
  });

  function togglemodal(){
    var instance = M.Modal.getInstance($('#modal3'))
    instance.open();
}
