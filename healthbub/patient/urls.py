from django.urls import path
from .views import PrescriptionView, MedicineVew, GetPrescription, GetPatients

urlpatterns = [
    path("prescription/", PrescriptionView.as_view()),
    path("medicine/", MedicineVew.as_view()),
    path("prescription/get/", GetPrescription.as_view()),
    path("get/", GetPatients.as_view()),
]
