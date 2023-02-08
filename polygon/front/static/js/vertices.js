var polygon = [];
const btn_draw_polygon = document.querySelector('.draw_polygon');
const btn_set_vertices = document.querySelector('.set_vertices');
let canvas = document.getElementById('cvs');
let canvas_context = canvas.getContext('2d');


btn_set_vertices.addEventListener('click', setVertices);
btn_draw_polygon.addEventListener('click', drawPolygon);


function setVertices() {
    canvas.addEventListener('click', clickToDrawVertex);
}


function clickToDrawVertex(e){
    clickToDrawPoint(e);
    //    console.log(e.offsetX, e.offsetY);
    polygon.push([e.offsetX, e.offsetY]);
//        canvas_context.beginPath();
//        canvas_context.arc(e.offsetX, e.offsetY, 5, 0, 2 * Math.PI, false);
//        canvas_context.fill();
//        console.log(polygon);
}


function clickToDrawPoint(e){
//        console.log(e.offsetX, e.offsetY);
        canvas_context.beginPath();
        canvas_context.arc(e.offsetX, e.offsetY, 5, 0, 2 * Math.PI, false);
        canvas_context.fill();
        console.log(polygon);
}


function drawPolygon() {
    canvas.removeEventListener('click', clickToDrawVertex);
    for (var i = 0; i < polygon.length; i++) {
                var point = polygon[i];
                if (i == 0) canvas_context.moveTo(point[0], point[1])
                else canvas_context.lineTo(point[0], point[1]);
                canvas_context.stroke();
            }
    canvas_context.fill();
    canvas_context.closePath();
}


//[100,200], [200, 100], [400, 350], [100, 300]
//let c = document.getElementById('cvs');
//let ctx = c.getContext('2d');
//
//
//for (var i = 0; i < polygon.length; i++) {
//            var point = polygon[i];
//            if (i == 0) ctx.moveTo(point[0], point[1])
//            else ctx.lineTo(point[0], point[1]);
//            ctx.stroke();
//        }
//ctx.fill();
//ctx.closePath();
//
//
//function getCookie(name) {
//  let cookieValue = null;
//  if (document.cookie && document.cookie !== "") {
//    const cookies = document.cookie.split(";");
//    for (let i = 0; i < cookies.length; i++) {
//      const cookie = cookies[i].trim();
//      if (cookie.substring(0, name.length + 1) === (name + "=")) {
//        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//        break;
//      }
//    }
//  }
//  return cookieValue;
//}
//
//
//$(document).ready(function(){
//
//    $('#cvs').click(function(){
//        $.ajax({
//            url: 'back/ajax/',
//            type: 'POST',
//            headers: {"X-CSRFToken": getCookie("csrftoken")},
//            data: JSON.stringify({'polygon': polygon,
//                                  'point': [100, 200]}),
//            success: function(response){
//                console.log(response)
//            }
//        });
//    });
//});
