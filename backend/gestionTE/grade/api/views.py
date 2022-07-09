from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from grade.models import Grade
from grade.api.serializers import GradeSerializer

class GradeApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = GradeSerializer
    queryset = Grade.objects.all()