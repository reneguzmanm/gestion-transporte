from rest_framework.routers import DefaultRouter
from grade.api.views import GradeApiViewSet

router_grade = DefaultRouter()

router_grade.register(
    prefix='grades', basename='grades', viewset=GradeApiViewSet
)