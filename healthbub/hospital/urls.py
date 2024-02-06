from django.urls import path
from .views import RequestView

urlpatterns = [path("request/", RequestView.as_view())]
