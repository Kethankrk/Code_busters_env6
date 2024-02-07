from rest_framework.generics import ListCreateAPIView, ListAPIView, CreateAPIView
from .models import Request, Facility
from .serializer import RequestSerilaizer, FacilitySerializer, RequestSerilaizerGet
from users.models import Employee, HospitalProfile
from users.serializer import EmpolyeeSerializer, HospitalProfileSerializer
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response


class RequestView(ListAPIView):
    queryset = Request.objects.all()
    serializer_class = RequestSerilaizerGet


class RequestViewCreate(CreateAPIView):
    queryset = Request.objects.all()
    serializer_class = RequestSerilaizer

class GetIdView(APIView):
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        id = request.user.id
        hos = HospitalProfile.objects.get(user=id)
        return Response({"id": hos.id})


class FacilityView(ListCreateAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer


class GetHospital(APIView):
    def get(self, request):
        final_list = []
        hospitals = HospitalProfile.objects.all()

        for hospital in hospitals:
            details = {
                "name": hospital.name,
                "id": hospital.id,
                "doctors": [],
            }
            doctors = Employee.objects.filter(hospital=hospital.id)
            for doctor in doctors:
                details["doctors"].append(
                    {
                        "name": doctor.name,
                        "id": doctor.id,
                    }
                )
            final_list.append(details)
        return Response(final_list)
