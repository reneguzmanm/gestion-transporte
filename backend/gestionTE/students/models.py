from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Student(models.Model):
    name = models.CharField(max_length=30)
    paternal = models.CharField(max_length=30)
    maternal = models.CharField(max_length=30)
    address_street = models.CharField(max_length=50)
    address_number = models.CharField(max_length=10)
    address_depart = models.CharField(max_length=20, null=True, blank=True)
    commune = models.CharField(max_length=20)
    attorney = models.CharField(max_length=40)
    phone = PhoneNumberField(blank=True)
    active = models.BooleanField(default=True)
    email = models.CharField(max_length=30, null=True)
    grade = models.ForeignKey(
        'grade.Grade', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        fullname = self.name + " " + self.paternal + " " + self.maternal
        return fullname 
