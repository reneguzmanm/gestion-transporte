# Generated by Django 4.0.3 on 2022-05-06 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Grade',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('level', models.CharField(max_length=5)),
                ('letter', models.CharField(max_length=2)),
                ('day_trip', models.CharField(max_length=10)),
            ],
        ),
    ]