from rest_framework import serializers
from .models import student_table, recuiter_table, placement_officer_table
from app_backend.models import student_table, placement_officer_table, recuiter_table

class student_tableSerializer(serializers.ModelSerializer):
    class Meta:
        model = student_table
        fields = ('fname',
                  'lname',
                  'phone_no',
                  'email',
                  'password',
                  'verified')
        
class placement_officer_tableSerializer(serializers.ModelSerializer):
    class Meta:
        model = placement_officer_table
        fields = ('fname',
                  'lname',
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