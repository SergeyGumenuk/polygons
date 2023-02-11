from django.contrib import admin

from back.models import Polygon


@admin.register(Polygon)
class PolygonAdmin(admin.ModelAdmin):
    list_display = ['vertices', 'num_of_vertices', 'image', 'created']
    list_filter = ['num_of_vertices', 'created']
    ordering = ['num_of_vertices']
