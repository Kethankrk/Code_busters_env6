from django.urls import path
from .views import RequestView, GetIdView, FacilityView, GetHospital, RequestViewCreate

urlpatterns = [
    path("request/", RequestView.as_view()),
    path("request/create/", RequestViewCreate.as_view()),
    path("get-id/", GetIdView.as_view()),
    path("facility/", FacilityView.as_view()),
    path("get/", GetHospital.as_view()),
]
