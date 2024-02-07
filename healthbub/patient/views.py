from rest_framework.views import APIView
from .serialzier import (
    MedicineSerializer,
    PescriptionSerializer,
    PescriptionSerializerFull,
)
from rest_framework.response import Response
from .models import Medicine, Prescription
from rest_framework.generics import ListAPIView, CreateAPIView
from users.models import Employee, CustomUser, UserClientProfile


class PrescriptionView(CreateAPIView):
    queryset = Prescription.objects.all()
    serializer_class = PescriptionSerializer


class MedicineVew(APIView):

    def post(self, request):
        data = request.data
        pes_id = data["prescription"]
        print(data)
        final_list = []
        for name in data["name"]:
            print(name)
            med_ser = MedicineSerializer(data={"name": name, "prescription": pes_id})
            if not med_ser.is_valid():
                return Response({"error": "bad request"})

            lol = med_ser.save()
            final_list.append(med_ser.data)

        return Response(final_list)


class GetPrescription(APIView):
    def post(self, request):
        data = request.data.get("id")
        if not data:
            return Response({"error": "bad request"})
        final_list = []
        data = Prescription.objects.filter(patient=data)

        for item in data:
            obj = {
                "description": item.description,
                "doctor": item.doctor.name,
                "patient": item.patient.id,
            }
            med = Medicine.objects.filter(prescription=item)
            med_s = MedicineSerializer(med, many=True)
            obj["medicine"] = med_s.data
            final_list.append(obj)

        return Response(final_list)


class GetPatients(APIView):
    def get(self, request):
        users = CustomUser.objects.filter(role="patient")
        final_list = []
        for user in users:
            profile = UserClientProfile.objects.get(user=user.id)
            final_list.append({"id": user.id, "name": profile.name})
        return Response({"user": final_list})
