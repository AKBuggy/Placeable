# Generated by Django 4.1.2 on 2023-02-21 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='jobpost_table',
            fields=[
                ('jobpost_id', models.AutoField(primary_key=True, serialize=False)),
                ('company_name', models.CharField(max_length=40)),
                ('recruiter_name', models.CharField(max_length=40)),
                ('job_position', models.CharField(max_length=30)),
                ('job_description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='placement_officer_table',
            fields=[
                ('po_id', models.AutoField(primary_key=True, serialize=False)),
                ('fname', models.CharField(max_length=30)),
                ('lname', models.CharField(max_length=30)),
                ('phone_no', models.BigIntegerField()),
                ('email', models.CharField(max_length=30, unique=True)),
                ('password', models.CharField(max_length=30)),
                ('verified', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='recuiter_table',
            fields=[
                ('recruiter_id', models.AutoField(primary_key=True, serialize=False)),
                ('fname', models.CharField(max_length=30)),
                ('lname', models.CharField(max_length=30)),
                ('company_name', models.CharField(max_length=40)),
                ('phone_no', models.BigIntegerField()),
                ('email', models.CharField(max_length=40, unique=True)),
                ('password', models.CharField(max_length=30)),
                ('verified', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='student_table',
            fields=[
                ('student_id', models.AutoField(primary_key=True, serialize=False)),
                ('fname', models.CharField(max_length=30)),
                ('lname', models.CharField(max_length=30)),
                ('phone_no', models.BigIntegerField()),
                ('email', models.CharField(max_length=30, unique=True)),
                ('password', models.CharField(max_length=30)),
                ('verified', models.BooleanField(default=False)),
            ],
        ),
    ]
