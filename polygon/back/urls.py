from django.urls import path

from back import views

app_name = 'back'

urlpatterns = [
    path('ajax/', views.check_point, name='ajax'),

]
