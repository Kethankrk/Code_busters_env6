from django.urls import path
from .views import PrescriptionView, MedicineVew, GetPrescription

urlpatterns = [
    path("prescription/", PrescriptionView.as_view()),
    path("medicine/", MedicineVew.as_view()),
    path("prescription/get/", GetPrescription.as_view()),
]
