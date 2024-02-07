from rest_framework import serializers
from .models import Request, Facility
from users.serializer import EmpolyeeSerializer, UserSerializer


class RequestSerilaizer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = "__all__"


class RequestSerilaizerGet(serializers.ModelSerializer):
    doctor = EmpolyeeSerializer()
    patient = UserSerializer()

    class Meta:
        model = Request
        fields = "__all__"


class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = "__all__"
