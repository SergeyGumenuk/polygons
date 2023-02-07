let c = document.getElementById('cvs');
let ctx = c.getContext('2d');

var polygon = [[100,200], [200, 100], [400, 350], [100, 300]];
console.log(polygon)


for (var i = 0; i < polygon.length; i++) {
            var point = polygon[i];
            if (i == 0) ctx.moveTo(point[0], point[1])
            else ctx.lineTo(point[0], point[1]);
            ctx.stroke();
        }
ctx.fill();
ctx.closePath();


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + "=")) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}


$(document).ready(function(){

    $('#cvs').click(function(){
        $.ajax({
            url: 'back/ajax/',
            type: 'POST',
            headers: {"X-CSRFToken": getCookie("csrftoken")},
            data: JSON.stringify({'polygon': polygon,}), //{'name': 'Serg'},
            success: function(response){
                console.log(response)
            }
        });
    });
});
