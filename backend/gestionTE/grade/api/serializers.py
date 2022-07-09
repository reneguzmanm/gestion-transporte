from rest_framework.serializers import ModelSerializer
from grade.models import Grade

class GradeSerializer(ModelSerializer):
    class Meta:
        model = Grade
        fields = ['id', 'level', 'sublevel', 'letter', 'day_trip']