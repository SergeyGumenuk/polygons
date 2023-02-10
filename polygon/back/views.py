import json

from django.db import IntegrityError
from django.http import JsonResponse
from django.views.decorators.http import require_POST

from back.models import Polygon
from back.utils import base64_to_image


@require_POST
def check_point(request):
    data = json.load(request)

    in_polygon = False

    x = data['point'][0]
    y = data['point'][1]
    for i in range(len(data['polygon'])):
        xp = data['polygon'][i][0]
        yp = data['polygon'][i][1]
        xp_prev = data['polygon'][i - 1][0]
        yp_prev = data['polygon'][i - 1][1]
        if (((yp <= y and y < yp_prev) or (yp_prev <= y and y < yp)) and (
                x > (xp_prev - xp) * (y - yp) / (yp_prev - yp) + xp)):
            in_polygon = not in_polygon
    response = {u'check_polygon': in_polygon, u'point': [x, y]}
    return JsonResponse(response)


@require_POST
def polygon_save(request):
    data = json.load(request)
    if not data['polygon']['vertices']:
        return JsonResponse({'status': 'Canvas is empty'})

    try:
        Polygon.objects.create(vertices=data['polygon'],
                               num_of_vertices=len(data['polygon']['vertices']),
                               image=base64_to_image(data['img']),
                               image_base_64=data['img'])
    except IntegrityError:
        return JsonResponse({'status': 'Такой полигон уже есть'})

    return JsonResponse({'status': 'Полигон сохранен'})
