from django.db import models

# Create your models here.

# Model for Student's Table 
class student_table(models.Model):
    fname = models.CharField(max_length=30)
    lname = models.CharField(max_length=30)
    phone_no = models.BigIntegerField()
    email = models.CharField(max_length=30, primary_key=True)
    password = models.CharField(max_length=30)
    verified = models.BooleanField(default=False)

# Model for Placement Officer's Table 
class placement_officer_table(models.Model):
    fname = models.CharField(max_length=30)
    lname = models.CharField(max_length=30)
    phone_no = models.BigIntegerField()
    email = models.CharField(max_length=30, primary_key=True)
    password = models.CharField(max_length=30)
    verified = models.BooleanField(default=False)
    
# Model for Recuiter's Table 
class recuiter_table(models.Model):
    fname = models.CharField(max_length=30)
    lname = models.CharField(max_length=30)
    company_name = models.CharField(max_length=40)
    phone_no = models.BigIntegerField()
    email = models.CharField(max_length=40, primary_key=True)
    password = models.CharField(max_length=30)
    verified = models.BooleanField(default=False)

# Model for Job-Post Table
class jobpost_table(models.Model):
    company_name = models.CharField(max_length=40)
    recruiter_name = models.CharField(max_length=40)
    job_position = models.CharField(max_length=30)
    job_description = models.TextField()