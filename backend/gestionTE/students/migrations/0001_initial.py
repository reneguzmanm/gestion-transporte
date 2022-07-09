# Generated by Django 4.0.3 on 2022-05-12 17:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('grade', '0002_alter_grade_letter_alter_grade_level'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('paternal', models.CharField(max_length=30)),
                ('maternal', models.CharField(max_length=30)),
                ('address_street', models.CharField(max_length=50)),
                ('address_number', models.CharField(max_length=10)),
                ('address_depart', models.CharField(max_length=20)),
                ('commune', models.CharField(max_length=20)),
                ('attorney', models.CharField(max_length=40)),
                ('phone', models.CharField(max_length=15)),
                ('active', models.BooleanField(default=False)),
                ('grade', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='grade.grade')),
            ],
        ),
    ]
