# Generated by Django 4.0.3 on 2022-06-11 04:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendance', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance',
            name='idRoute',
            field=models.CharField(choices=[('BÁSICA MAÑANA', 'BÁSICA MAÑANA'), ('PREBÁSICA MAÑANA', 'PREBÁSICA MAÑANA'), ('PREBÁSICA TARDE', 'PREBÁSICA TARDE'), ('BÁSICA TARDE', 'BÁSICA TARDE')], max_length=50),
        ),
        migrations.AlterField(
            model_name='attendance',
            name='roundTrip',
            field=models.CharField(choices=[('IDA', 'IDA'), ('REGRESO', 'REGRESO')], max_length=50),
        ),
    ]
