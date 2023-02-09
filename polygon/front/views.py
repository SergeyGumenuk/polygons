from django.shortcuts import render

from back.models import Polygon


def index(request):
    polygons = Polygon.objects.all()
    return render(request,
                  'front/index.html',
                  {'title': 'Polygon. Main page',
                   'polygons': polygons})


def show_all_polygons(request):
    polygons = Polygon.objects.all()
    return render(request,
                  'front/polygons/polygons.html',
                  {'polygons': polygons,
                   'title': 'Polygon select'})
