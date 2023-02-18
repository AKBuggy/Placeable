from django.urls import path
from app_backend import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    path('student/',views.studentAPI),
    path('placement/', views.poAPI),
    path('login/', views.loginPage),
    path('JobPost/',views.jobPostAPI),
    path('GetJobPosts/',views.viewAllJobPostsAPI)
] 