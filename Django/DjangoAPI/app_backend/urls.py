from django.urls import re_path
from django.urls import path
from app_backend import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    re_path('student/',views.studentAPI),
    re_path('placement/', views.poAPI),
    re_path('login/', views.loginPage),
    re_path('JobPost/',views.jobPostAPI),
    re_path('GetJobPosts/',views.viewAllJobPostsAPI),
    re_path('placementOfficerHome/', views.recruiterAPI),
    re_path(r'^placementOfficerHome/([0-9]+)$', views.recruiterAPI),
    re_path('studentHome/details', views.studentAPI),
    re_path('addComment/', views.addCommentAPI),
    re_path('GetComments/', views.getCommentsAPI)
] 