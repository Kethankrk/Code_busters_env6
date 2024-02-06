from rest_framework import serializers
from .models import Request

class RequestSerilaizer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = "__all__"