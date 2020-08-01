
var data = { burger: 0, pizza: 0,drink: 0, churros: 0, friedchicken: 0  };
function showList(type)
 {
  document.querySelector('#' + type).style.display = 'block';

  var foodInputElements = document.querySelectorAll('#' + type + ' input');
     foodInputElements.forEach(function (element){
      element.addEventListener('change', (event) => {
       if (event.target.checked) {
        data[type] = data[type] + parseInt(event.target.value);
      }else {
        data[type] = data[type] - parseInt(event.target.value);
      }
document.querySelector('#totalCost').value=data.burger+ data.pizza+data.drink+data.churros+data.friedchicken;
    });
  });
}