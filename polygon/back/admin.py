from django.contrib import admin

from back.models import Polygon


@admin.register(Polygon)
class PolygonAdmin(admin.ModelAdmin):
    list_display = ['vertices', 'image', 'created']
    ordering = ['-created']
