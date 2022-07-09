from posixpath import basename
from sys import prefix
from django import views
from django.db import router
from rest_framework.routers import DefaultRouter

from attendance.api.views import AttendanceApiViewSet

router_attendances = DefaultRouter()

router_attendances.register(
    prefix='attendances', basename='attendances', viewset=AttendanceApiViewSet
)