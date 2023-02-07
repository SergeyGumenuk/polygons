import json
from django.http import JsonResponse


def check_point(request):
    if request.method == 'POST':
        data = json.load(request)   # request.POST
        print(data['polygon'])
        return JsonResponse({'status': 200})
    return JsonResponse({'status': 'error'})
