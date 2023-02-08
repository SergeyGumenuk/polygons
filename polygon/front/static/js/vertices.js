var polygon = [];

const btn_draw_polygon = document.querySelector('.draw_polygon');
const btn_set_vertices = document.querySelector('.set_vertices');
const btn_draw_points_to_check = document.querySelector('.draw_points');
const btn_save_polygon = document.querySelector('.save_polygon');

let canvas = document.getElementById('cvs');
let canvas_context = canvas.getContext('2d');


btn_set_vertices.addEventListener('click', setVertices);
btn_draw_polygon.addEventListener('click', drawPolygon);
btn_draw_points_to_check.addEventListener('click', checkPoint);
btn_save_polygon.addEventListener('click', ajaxToSavePolygon);


function setVertices() {
    canvas.removeEventListener('click', sendAjax);
    canvas.addEventListener('click', clickToDrawVertex);
}


function drawPolygon() {
    canvas.removeEventListener('click', clickToDrawVertex);
    for (let i = 0; i < polygon.length; i++) {
                let point = polygon[i];
                if (i == 0) canvas_context.moveTo(point[0], point[1])
                else canvas_context.lineTo(point[0], point[1]);
                canvas_context.stroke();
            }
    canvas_context.fill();
    canvas_context.closePath();
}


function checkPoint() {
    canvas.addEventListener('click', sendAjax);
//    canvas.addEventListener('click', clickToDrawPoint);
}

function sendAjax(){

    var x = event.offsetX
    var y = event.offsetY

    $.ajax({
        url: 'back/ajax/',
        type: 'POST',
        headers: {"X-CSRFToken": getCookie("csrftoken")},
        data: JSON.stringify({'polygon': polygon,
                              'point': [x, y]}),
        success: function(response){
            point = response['point'];

            canvas_context.beginPath();
            canvas_context.arc(point[0], point[1], 5, 0, 2 * Math.PI, false)

            if (response['check_polygon'])
                    canvas_context.fillStyle = "#73AD21";
                else
                    canvas_context.fillStyle = "#FF0000";
            canvas_context.fill();
        }
    });
}


function ajaxToSavePolygon() {
        let image = canvas.toDataURL("image/png");

        $.ajax({
        url: 'back/polygon/save/',
        type: 'POST',
        headers: {"X-CSRFToken": getCookie("csrftoken")},
        data: JSON.stringify({'polygon_vertices': polygon,
                              'img': image}),
        success: function(response){
            alert(response['status'])
        }
        });

}


function clickToDrawVertex(e){
    canvas_context.fillStyle = "black"
    clickToDrawPoint(e);
    polygon.push([e.offsetX, e.offsetY]);
}


function clickToDrawPoint(e){
//  console.log(e.offsetX, e.offsetY);
    canvas_context.beginPath();
    canvas_context.arc(e.offsetX, e.offsetY, 5, 0, 2 * Math.PI, false);
    canvas_context.fill();
}


function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}