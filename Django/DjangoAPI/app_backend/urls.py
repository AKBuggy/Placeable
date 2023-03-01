from django.urls import re_path
from django.urls import path
from app_backend import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    # path('student/',views.studentAPI),
    # path('placement/', views.poAPI),
    # path('login/', views.loginPage),
    # path('JobPost/',views.jobPostAPI),
    # path('GetJobPosts/',views.viewAllJobPostsAPI),
    # path('placementOfficerHome/', views.recruiterAPI),
    # path('placementOfficerHome/([0-9]+)', views.recruiterAPI)
    re_path('student/',views.studentAPI),
    re_path('placement/', views.poAPI),
    re_path('login/', views.loginPage),
    re_path('JobPost/',views.jobPostAPI),
    re_path('GetJobPosts/',views.viewAllJobPostsAPI),
    re_path('placementOfficerHome/', views.recruiterAPI),
    re_path(r'^placementOfficerHome/([0-9]+)$', views.recruiterAPI),
    re_path('studentHome/details', views.studentAPI)

] 