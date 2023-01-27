from django.urls import path
from app_backend import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    path('student/',views.studentAPI)
] 