from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from app_backend.models import student_table,placement_officer_table,recuiter_table
from app_backend.serializers import student_tableSerializer, placement_officer_tableSerializer, recruiter_tableSerializer
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

