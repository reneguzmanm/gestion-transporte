# Generated by Django 4.0.3 on 2022-06-28 22:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendance', '0002_alter_attendance_idroute_alter_attendance_roundtrip'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance',
            name='date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
