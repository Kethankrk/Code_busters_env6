from django.urls import path
from .views import Signup, ClientProfileView, HospitalProfileView, AddDoctorView

urlpatterns = [
    path("signup/", Signup.as_view()),
    path("client/profile/", ClientProfileView.as_view()),
    path("hospital/profile/", HospitalProfileView.as_view()),
    path("hospital/add-doctor/", AddDoctorView.as_view()),
]
