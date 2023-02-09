from django.shortcuts import render, get_object_or_404

from back.models import Polygon


def index(request, polygon=None):
    if polygon:
        polygon = get_object_or_404(Polygon, pk=polygon)
    return render(request,
                  'front/index.html',
                  {'title': 'Polygon. Main page',
                   'polygon': polygon})


def show_all_polygons(request):
    polygons = Polygon.objects.all()
    return render(request,
                  'front/polygons/polygons.html',
                  {'polygons': polygons,
                   'title': 'Polygon select'})
