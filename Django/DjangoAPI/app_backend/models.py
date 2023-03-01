from django.db import models

# Create your models here.

# Model for Student's Table 
class student_table(models.Model):
    student_id = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=30)
    lname = models.CharField(max_length=30)
    phone_no = models.BigIntegerField()
    email = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=30)
    verified = models.BooleanField(default=False)

# Model for Placement Officer's Table 
class placement_officer_table(models.Model):
    po_id = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=30)
    lname = models.CharField(max_length=30)
    phone_no = models.BigIntegerField()
    email = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=30)
    verified = models.BooleanField(default=False)
    
# Model for Recuiter's Table 
class recuiter_table(models.Model):
    recruiter_id = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=30)
    lname = models.CharField(max_length=30)
    company_name = models.CharField(max_length=40)
    phone_no = models.BigIntegerField()
    email = models.CharField(max_length=40, unique=True)
    password = models.CharField(max_length=30)
    verified = models.BooleanField(default=False)

# Model for Job-Post Table
class jobpost_table(models.Model):
    jobpost_id = models.AutoField(primary_key=True)
    company_name = models.CharField(max_length=40)
    recruiter_name = models.CharField(max_length=40)
    job_position = models.CharField(max_length=30)
    job_description = models.TextField()

# Model for Comments Table
class comment_table(models.Model):
    comment_id = models.AutoField(primary_key=True)
    user_email = models.CharField(max_length=40)
    comment = models.TextField()
    jobpost_id = models.ForeignKey(jobpost_table, null=False, on_delete=models.CASCADE)