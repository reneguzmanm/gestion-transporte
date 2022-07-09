from django.db import models

IdVuelta = (
    ("BÁSICA MAÑANA", "BÁSICA MAÑANA"),
    ("PREBÁSICA MAÑANA", "PREBÁSICA MAÑANA"),
    ("PREBÁSICA TARDE", "PREBÁSICA TARDE"),
    ("BÁSICA TARDE", "BÁSICA TARDE"),
)

IdaRegreso = (
    ("IDA", "IDA"),
    ("REGRESO", "REGRESO"),
)

# Create your models here.
class Attendance(models.Model):
    date = models.DateField(auto_now_add=True)
    idRoute = models.CharField(max_length=50, choices=IdVuelta)
    roundTrip = models.CharField(max_length=50, choices=IdaRegreso)
    student = models.ForeignKey('students.Student', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return str(self.date)