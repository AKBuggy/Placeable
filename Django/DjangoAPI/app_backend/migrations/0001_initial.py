# Generated by Django 4.1.3 on 2023-04-05 06:26

from django.db import migrations, models
import django.db.models.deletion


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
                ('email', models.CharField(max_length=40, null=True)),
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
        migrations.CreateModel(
            name='comment_table',
            fields=[
                ('comment_id', models.AutoField(primary_key=True, serialize=False)),
                ('user_email', models.CharField(max_length=40)),
                ('comment', models.TextField()),
                ('jobpost_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app_backend.jobpost_table')),
            ],
        ),
    ]
