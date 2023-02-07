import json
from django.http import JsonResponse


def check_point(request):
    if request.method == 'POST':
        data = json.load(request)
        print(data['polygon'])
        print(data['point'])
        return JsonResponse({'status': 200})
    return JsonResponse({'status': 'error'})
