from rest_framework.serializers import ModelSerializer
from .models import Prescription, Medicine


class MedicineSerializer(ModelSerializer):
    class Meta:
        model = Medicine
        fields = "__all__"


class PescriptionSerializer(ModelSerializer):
    class Meta:
        model = Prescription
        fields = "__all__"


class PescriptionSerializerFull(ModelSerializer):
    class Meta:
        model = Prescription
        fields = "__all__"

