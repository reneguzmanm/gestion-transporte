from django.contrib import admin
from attendance.models import Attendance

@admin.register(Attendance)
class Attendance(admin.ModelAdmin):
    list_display = ['date', 'idRoute', 'roundTrip']