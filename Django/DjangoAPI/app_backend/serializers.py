from rest_framework import serializers
from app_backend.models import student_table, placement_officer_table, recuiter_table

class student_tableSerializer(serializers.ModelSerializer):
    class Meta:
        model = student_table
        fields = ('fname',
                  'lname',
                  'institute_name',
                  'institute_code',
                  'student_uid',
                  'degree',
                  'specialization',
                  'phone_no',
                  'email',
                  'password',
                  'verified')

class placement_officer_tableSerializer(serializers.ModelSerializer):
    class Meta:
        model = placement_officer_table
        fields = ('fname',
                  'lname',
                  'institute_name',
                  'institute_code',
                  'phone_no',
                  'email',
                  'password',
                  'verified')

class recruiter_tableSerializer(serializers.ModelSerializer):
    class Meta:
        model = recuiter_table
        fields = ('fname',
                  'lname',
                  'company_name',
                  'phone_no',
                  'email',
                  'password',
                  'verified')