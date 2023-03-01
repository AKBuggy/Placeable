from rest_framework import serializers
from app_backend.models import student_table, placement_officer_table, recuiter_table, jobpost_table

class student_tableSerializer(serializers.ModelSerializer):
    class Meta:
        model = student_table
        fields = ('student_id',
                  'fname',
                  'lname',
                  'phone_no',
                  'email',
                  'password',
                  'verified')
        
class placement_officer_tableSerializer(serializers.ModelSerializer):
    class Meta:
        model = placement_officer_table
        fields = ('po_id',
                  'fname',
                  'lname',
                  'phone_no',
                  'email',
                  'password',
                  'verified')

class recruiter_tableSerializer(serializers.ModelSerializer):
    class Meta:
        model = recuiter_table
        fields = ('recruiter_id',
                  'fname',
                  'lname',
                  'company_name',
                  'phone_no',
                  'email',
                  'password',
                  'verified')
                  
class jobpost_tableSerializer(serializers.ModelSerializer):
    class Meta:
        model = jobpost_table
        fields = ('jobpost_id',
                  'company_name',
                  'recruiter_name',
                  'job_position',
                  'job_description')