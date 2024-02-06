from rest_framework.views import APIView
from .serialzier import (
    MedicineSerializer,
    PescriptionSerializer,
    PescriptionSerializerFull,
)
from rest_framework.response import Response
from .models import Medicine, Prescription
from rest_framework.generics import ListAPIView, CreateAPIView
from users.models import Employee

class PrescriptionView(CreateAPIView):
    queryset = Prescription.objects.all()
    serializer_class = PescriptionSerializer


class MedicineVew(APIView):

    def post(self, request):
        data = request.data
        final_list = []
        for item in data:
            print(item)
            med_ser = MedicineSerializer(data=item)
            if not med_ser.is_valid():
                return Response({"error": "bad request"})

            lol = med_ser.save()
            final_list.append(med_ser.data)

        return Response(final_list)


class GetPrescription(APIView):
    def get(self, request):
        final_list = []
        data = Prescription.objects.all()

        for item in data:
            obj = {
                "description": item.description,
                "doctor": item.doctor.name,
            }
            med = Medicine.objects.filter(prescription=item)
            med_s = MedicineSerializer(med, many=True)
            obj['medicine'] = med_s.data
            final_list.append(obj)


        return Response(final_list)
