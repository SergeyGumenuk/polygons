from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('back/', include('back.urls', namespace='back')),
    path('', include('front.urls', namespace='front'))
]
