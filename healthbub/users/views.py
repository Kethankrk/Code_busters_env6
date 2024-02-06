from rest_framework.generics import ListCreateAPIView, CreateAPIView
from .models import CustomUser, UserClientProfile, HospitalProfile, Employee
from .serializer import (
    UserSerializer,
    ClientProfileSerializer,
    HospitalProfileSerializer,
    EmpolyeeSerializer,
)
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.mixins import CreateModelMixin


class Signup(CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class ClientProfileView(CreateAPIView):
    queryset = UserClientProfile.objects.all()
    serializer_class = ClientProfileSerializer


class HospitalProfileView(CreateAPIView):
    queryset = HospitalProfile.objects.all()
    serializer_class = HospitalProfileSerializer


class AddDoctorView(CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmpolyeeSerializer

