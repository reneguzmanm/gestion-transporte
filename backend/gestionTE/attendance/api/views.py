from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

from attendance.api.serializers import AttendanceSerializer
from attendance.models import Attendance


class AttendanceApiViewSet(ModelViewSet):
    serializer_class = AttendanceSerializer
    queryset = Attendance.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['date', 'idRoute', 'roundTrip']
    ordering_fields = '__all__'