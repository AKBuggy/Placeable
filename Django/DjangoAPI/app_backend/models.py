from django.db import models

# Create your models here.

class general(models.Model):
    Email = models.CharField(primary_key=True, max_length=30)
    Password = models.CharField(max_length=15)
