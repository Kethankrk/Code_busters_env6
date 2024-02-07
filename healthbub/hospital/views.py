from rest_framework.generics import ListCreateAPIView, ListAPIView
from .models import Request
from .serializer import RequestSerilaizer
from users.models import Employee, HospitalProfile
from users.serializer import EmpolyeeSerializer
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response


class RequestView(ListCreateAPIView):
    queryset = Request.objects.all()
    serializer_class = RequestSerilaizer


class GetIdView(APIView):
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        id = request.user.id
        hos = HospitalProfile.objects.get(user=id)
        return Response({"id": hos.id})
