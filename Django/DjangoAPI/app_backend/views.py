from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from app_backend.models import student_table,placement_officer_table,recuiter_table
from app_backend.serializers import student_tableSerializer, placement_officer_tableSerializer, recruiter_tableSerializer
from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def recruiterAPI(request):
    if request.method == 'POST':
        recruiter_data=JSONParser().parse(request)
        recruiter_serializer = recruiter_tableSerializer(data=recruiter_data)
        if recruiter_serializer.is_valid():
            recruiter_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)

