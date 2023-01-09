from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from app_backend.models import student_table,placement_officer_table,recuiter_table
from app_backend.serializers import student_tableSerializer, placement_officer_tableSerializer, recruiter_tableSerializer
from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def departmentApi(request,id=0):
    if request.method=='POST':
        recuiter_data=JSONParser().parse(request)
        recuiter_serializer = recruiter_tableSerializer(data=recuiter_data)
        if recuiter_serializer.is_valid():
            recuiter_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
