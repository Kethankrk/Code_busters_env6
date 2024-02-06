from rest_framework.generics import ListCreateAPIView
from .models import Request
from .serializer import RequestSerilaizer


class RequestView(ListCreateAPIView):
    queryset = Request.objects.all()
    serializer_class = RequestSerilaizer
