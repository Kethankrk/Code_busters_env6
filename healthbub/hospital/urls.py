from django.urls import path
from .views import RequestView, GetIdView

urlpatterns = [
    path("request/", RequestView.as_view()),
    path("get-id/", GetIdView.as_view()),
]
