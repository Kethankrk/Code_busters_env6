from rest_framework import serializers
from .models import CustomUser, UserClientProfile, HospitalProfile, Employee
from django.contrib.auth import get_user_model, hashers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ("email", "phone", "role", "password", "id")
        extra_kwargs = {"password": {"write_only": True}}

    def validate_password(self, value):
        return hashers.make_password(value)


class ClientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserClientProfile
        fields = "__all__"


class HospitalProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = HospitalProfile
        fields = "__all__"


class EmpolyeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = "__all__"
