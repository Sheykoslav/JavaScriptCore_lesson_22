$(function(){
  $('#sendData').click(function(){
    var name = $('#name').val();
    var age = $('#age').val();
    var date = $('#date').val();
    function chekDate(string){
      var values = string.split('-');
      if(!parseInt(values[0])&& !parseInt(values[1]) && !parseInt(values[2])){
        return false;
      }
      if (values[0].length<=2 && values[1].length<=2 && values[2].length<=4){
        return true;
      }
      else{return false}
    }
    if(name && parseInt(age) && chekDate(date))
    {
      $('#effects').effect('blind',500);
    }
    else{
    $('#effects').effect('shake',700);
  }
  });
});
