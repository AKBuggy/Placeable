from django.urls import path
from app_backend import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    # path('student/', StudentAPI.as_view(), name="student"),
    path('student/',views.studentAPI),
    # path('placement/', PoAPI.as_view()),
    path('placement/', views.poAPI),
    path('login/', views.loginPage),
    # path('login/', LoginPage.as_view())
] 