from django.urls import path

from front import views


app_name = 'front'


urlpatterns = [
    path('', views.index, name='index'),
    path('polygons/all/', views.show_all_polygons, name='show_all_polygons'),

]
