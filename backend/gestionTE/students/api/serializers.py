from rest_framework.serializers import ModelSerializer
from grade.api.serializers import GradeSerializer

from students.models import Student


class StudentSerializer(ModelSerializer):
    grade_data = GradeSerializer(source='grade', read_only=True)
    class Meta:
        model = Student
        fields = ['id', 'name', 'paternal', 'maternal', 'grade', 'grade_data', 'address_street',
                  'address_number', 'address_depart', 'commune', 'attorney', 'phone', 'email']