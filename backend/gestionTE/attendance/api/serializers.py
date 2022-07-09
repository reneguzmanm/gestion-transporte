from rest_framework.serializers import ModelSerializer

from attendance.models import Attendance
from students.api.serializers import StudentSerializer


class AttendanceSerializer(ModelSerializer):
    student_data = StudentSerializer(source='student', read_only=True)

    class Meta:
        model = Attendance
        fields = ['id', 'date', 'idRoute',
                  'roundTrip', 'student', 'student_data']
