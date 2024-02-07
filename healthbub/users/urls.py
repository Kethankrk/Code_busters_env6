from django.urls import path
from .views import (
    Signup,
    ClientProfileView,
    HospitalProfileView,
    AddDoctorView,
    GetUserId,
)

urlpatterns = [
    path("signup/", Signup.as_view()),
    path("patient/profile/", ClientProfileView.as_view()),
    path("hospital/profile/", HospitalProfileView.as_view()),
    path("hospital/add-doctor/", AddDoctorView.as_view()),
    path("get-user-id/", GetUserId.as_view()),
]
