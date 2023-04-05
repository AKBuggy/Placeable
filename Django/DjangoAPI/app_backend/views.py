from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.db import connection

from app_backend.models import student_table,placement_officer_table,recuiter_table, jobpost_table, comment_table
from app_backend.serializers import student_tableSerializer, placement_officer_tableSerializer, recruiter_tableSerializer, jobpost_tableSerializer, comment_tableSerializer
from rest_framework import status


# Create your views here.

#Student registration API
@csrf_exempt
def studentAPI(request, id=0):
    if request.method == 'POST':
        student_data=JSONParser().parse(request)
        student_serializer = student_tableSerializer(data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='GET':
        student = student_table.objects.all()
        students_serializer = student_tableSerializer(student, many=True)
        return JsonResponse(students_serializer.data, safe=False)

@csrf_exempt
def deleteStudentAPI(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        email = data.get('email')
        cursor = connection.cursor()
        cursor.execute('DELETE FROM app_backend_student_table WHERE email = %s', [email])
        cursor.execute('DELETE FROM app_backend_comment_table WHERE user_email = %s', [email])
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def poAPI(request):
    if request.method == 'POST':
        po_data=JSONParser().parse(request)
        po_serializer = placement_officer_tableSerializer(data=po_data) 
        if po_serializer.is_valid():
            po_serializer.save()
            return JsonResponse("Added Placement Officer Successfully!!" , safe=False)
        return JsonResponse("Failed to Add Placement Officer.",safe=False)

#Login API
@csrf_exempt
def loginPage(request):
    if request.method == 'POST':
        login_data = JSONParser().parse(request)
        email = login_data.get('email')
        passw = login_data.get('password')
        optradio = login_data.get('optradio')
        
        dbPass = None
        if optradio == "Student":
            user = student_table.objects.filter(email=email).first()
            if user is None:
                # raise AuthenticationFailed('User not found')
                return JsonResponse("Student User not found", safe=False)
            
            for p in student_table.objects.raw('SELECT student_id, email, password FROM app_backend_student_table WHERE email=%s', [email]):
                dbPass = p.password
            strP = str(dbPass)
            if(passw == strP):
                return JsonResponse("Student", safe=False)
            else:
                return JsonResponse("Please Enter Correct Password(Student)", safe=False)
        elif optradio == "Recruiter":
            user = recuiter_table.objects.filter(email=email).first()
            if user is None:
                # raise AuthenticationFailed('User not found')
                return JsonResponse("Recruiter User not found", safe=False)
            for p in recuiter_table.objects.raw('SELECT recruiter_id, email, password FROM app_backend_recuiter_table WHERE email=%s', [email]):
                dbPass = p.password
            strP = str(dbPass)
            if(passw == strP):
                return JsonResponse("Recruiter", safe=False)
            else:
                return JsonResponse("Please Enter Correct Password(Recruiter)", safe=False)
        elif optradio == "PO":
            user = placement_officer_table.objects.filter(email=email).first()
            if user is None:
                # raise AuthenticationFailed('User not found')
                return JsonResponse("PO User not found", safe=False)
            for p in placement_officer_table.objects.raw('SELECT po_id, email, password FROM app_backend_placement_officer_table WHERE email=%s', [email]):
                dbPass = p.password
            strP = str(dbPass)
            if(passw == strP):
                return JsonResponse("PO", safe=False)
            else:
                return JsonResponse("Please Enter Correct Password(PO)", safe=False)
        else:
            return JsonResponse("Please enter all values", safe=False)

#JobPost API     
@csrf_exempt
def jobPostAPI(request):
    if request.method == 'POST':
        job_post_data=JSONParser().parse(request)
        id = job_post_data.get('recruiter_id')
        print(id)
        job_post_serializer = jobpost_tableSerializer(data=job_post_data)
        if job_post_serializer.is_valid():
            job_post_serializer.save()
            return JsonResponse("Uploaded Successfully!!" , safe=False)
        return JsonResponse("Failed to Upload.",safe=False)

@csrf_exempt
def viewAllJobPostsAPI(request):
    if request.method == 'GET':
        jobPost = jobpost_table.objects.raw('SELECT * FROM app_backend_jobpost_table ORDER BY jobpost_id DESC')
        job_post_serializer = jobpost_tableSerializer(jobPost, many=True)
        return JsonResponse(job_post_serializer.data, safe=False)

@csrf_exempt
def recruiterAPI(request, id=0):
    if request.method=='GET':
        recruiters = recuiter_table.objects.all()
        recruiters_serializer = recruiter_tableSerializer(recruiters, many=True)
        return JsonResponse(recruiters_serializer.data, safe=False)

    elif request.method=='POST':
        recruiter_data=JSONParser().parse(request)
        recruiter_serializer = recruiter_tableSerializer(data=recruiter_data)
        if recruiter_serializer.is_valid():
            recruiter_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        recruiter_data = JSONParser().parse(request)
        recruiter = recuiter_table.objects.get(recruiter_id=recruiter_data['recruiter_id'])
        recruiter_serializer=recruiter_tableSerializer(recruiter, data=recruiter_data)
        if recruiter_serializer.is_valid():
            recruiter_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

@csrf_exempt
def deleteRecruiterAPI(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        email = data.get('email')
        cursor = connection.cursor()
        cursor.execute('DELETE FROM app_backend_recuiter_table WHERE email = %s', [email])
        cursor.execute('DELETE FROM app_backend_jobpost_table WHERE email = %s', [email])
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def addCommentAPI(request):
    if request.method == 'POST':
        comment_data=JSONParser().parse(request)
        comment_serializer = comment_tableSerializer(data=comment_data)
        if comment_serializer.is_valid():
            comment_serializer.save()
            return JsonResponse("Uploaded Successfully!!" , safe=False)
        return JsonResponse("Failed to Upload.",safe=False)

#Get comment
@csrf_exempt
def getCommentsAPI(request):
    if request.method == 'POST':
        jobpost_id = JSONParser().parse(request)
        jobPost = comment_table.objects.raw('SELECT * FROM app_backend_comment_table WHERE jobpost_id_id = %s', [jobpost_id])
        job_post_serializer = comment_tableSerializer(jobPost, many=True)
        return JsonResponse(job_post_serializer.data, safe=False)

@csrf_exempt
def deleteCommentAPI(request):
    if request.method == 'POST':
        c_id = JSONParser().parse(request)
        cursor = connection.cursor()
        cursor.execute('DELETE FROM app_backend_comment_table WHERE comment_id = %s', [c_id])
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def viewMyJobPostsAPI(request):
    if request.method == 'POST':
        json_data = JSONParser().parse(request)
        email = json_data.get('recruiter_email')
        jobPost = jobpost_table.objects.raw('SELECT * FROM app_backend_jobpost_table WHERE email = %s', [email])
        job_post_serializer = jobpost_tableSerializer(jobPost, many=True)
        return JsonResponse(job_post_serializer.data, safe=False)

@csrf_exempt
def deleteJobPostAPI(request):
    if request.method == 'POST':
        jobpost_id = JSONParser().parse(request)
        cursor = connection.cursor()
        cursor.execute('DELETE FROM app_backend_jobpost_table WHERE jobpost_id = %s', [jobpost_id])
        return JsonResponse("Deleted Succeffully!!", safe=False)