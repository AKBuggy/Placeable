
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.hashers import check_password



from app_backend.models import student_table,placement_officer_table,recuiter_table, jobpost_table
from app_backend.serializers import student_tableSerializer, placement_officer_tableSerializer, recruiter_tableSerializer, jobpost_tableSerializer

from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def studentAPI(request):
    if request.method == 'POST':
        student_data=JSONParser().parse(request)
        student_serializer = student_tableSerializer(data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)

@csrf_exempt
def poAPI(request):
    if request.method == 'POST':
        po_data=JSONParser().parse(request)
        po_serializer = placement_officer_tableSerializer(data=po_data) 
        if po_serializer.is_valid():
            po_serializer.save()
            return JsonResponse("Added Placement Officer Successfully!!" , safe=False)
        return JsonResponse("Failed to Add Placement Officer.",safe=False)

@csrf_exempt
def loginPage(request):
    if request.method == 'POST':
        login_data = JSONParser().parse(request)
        email = login_data.get('email')
        passw = login_data.get('password')
        optradio = login_data.get('optradio')
        print("this is optradio",optradio)
        
        dbPass = None
        if optradio == "Student":
            user = student_table.objects.filter(email=email).first()
            if user is None:
                # raise AuthenticationFailed('User not found')
                return JsonResponse("Student User not found", safe=False)
            
            for p in student_table.objects.raw('SELECT email, password FROM app_backend_student_table WHERE email=%s', [email]):
                dbPass = p.password
                print("i am not dbPass", type(p.password))
                print("i am dbPass", dbPass)
            strP = str(dbPass)
            print(strP)
            print(passw)
            if(passw == strP):
                return JsonResponse("Less go", safe=False)
                # return redirect('homepage')
                # return
            else:
                return JsonResponse("What re bro Student", safe=False)
        elif optradio == "Recruiter":
            user = recuiter_table.objects.filter(email=email).first()
            if user is None:
                # raise AuthenticationFailed('User not found')
                return JsonResponse("Recruiter User not found", safe=False)
            for p in recuiter_table.objects.raw('SELECT email, password FROM app_backend_recuiter_table WHERE email=%s', [email]):
                dbPass = p.password
                print("i am not dbPass", type(p.password))
                print("i am dbPass", dbPass)
            strP = str(dbPass)
            print(strP)
            print(passw)
            if(passw == strP):
                return JsonResponse("Less go", safe=False)
                # return redirect('homepage')
                # return
            else:
                return JsonResponse("What re bro Recruiter", safe=False)
        elif optradio == "PO":
            user = placement_officer_table.objects.filter(email=email).first()
            if user is None:
                # raise AuthenticationFailed('User not found')
                return JsonResponse("PO User not found", safe=False)
            for p in placement_officer_table.objects.raw('SELECT email, password FROM app_backend_placement_officer_table WHERE email=%s', [email]):
                dbPass = p.password
                print("i am not dbPass", type(p.password))
                print("i am dbPass", dbPass)
            strP = str(dbPass)
            print(strP)
            print(passw)
            if(passw == strP):
                return JsonResponse("Less go", safe=False)
                # return redirect('homepage')
                # return
            else:
                return JsonResponse("What re bro PO", safe=False)
        else:
            return JsonResponse("Please enter all values", safe=False)
        
@csrf_exempt
def jobPostAPI(request):
    if request.method == 'POST':
        job_post_data=JSONParser().parse(request)
        job_post_serializer = jobpost_tableSerializer(data=job_post_data)
        if job_post_serializer.is_valid():
            job_post_serializer.save()
            return JsonResponse("Uploaded Successfully!!" , safe=False)
        return JsonResponse("Failed to Upload.",safe=False)

@csrf_exempt
def viewAllJobPostsAPI(request):
    if request.method == 'GET':
        JobPosts = jobpost_table.objects.all()
        job_post_serializer = jobpost_tableSerializer(JobPosts, many=True)
        return JsonResponse(job_post_serializer.data, safe=False)
