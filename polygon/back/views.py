import json
from django.http import JsonResponse, HttpResponse


def check_point(request):
    if request.method == 'POST':
        data = json.load(request)

        in_polygon = False

        # Main algorithms from internet: check count across lines
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
    else:
        return HttpResponse(u'Запрос должен использовать метод POST')





    #     print(data['polygon'])
    #     print(data['point'])
    #     return JsonResponse({'status': 200})
    # return JsonResponse({'status': 'error'})
