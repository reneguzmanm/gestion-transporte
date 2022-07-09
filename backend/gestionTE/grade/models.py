from django.db import models

Sub = (
    ("PREBÁSICA", "PREBÁSICA"),
    ("BÁSICA", "BÁSICA"),
)
# Create your models here.


class Grade(models.Model):
    level = models.CharField(max_length=10)
    sublevel = models.CharField(max_length=10, choices=Sub)
    letter = models.CharField(max_length=10)
    day_trip = models.CharField(max_length=10)

    def __str__(self):
        curso = self.level + " " + self.letter
        return curso