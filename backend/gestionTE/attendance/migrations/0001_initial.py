# Generated by Django 4.0.3 on 2022-05-21 03:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('students', '0006_student_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('idRoute', models.CharField(choices=[('BÁSICA MAÑANA', 'básica mañana'), ('PREBÁSICA MAÑANA', 'prebásica mañana'), ('PREBÁSICA TARDE', 'prebásica TARDE'), ('BÁSICA TARDE', 'básica TARDE')], max_length=50)),
                ('roundTrip', models.CharField(choices=[('IDA', 'ida'), ('REGRESO', 'regreso')], max_length=50)),
                ('student', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='students.student')),
            ],
        ),
    ]
