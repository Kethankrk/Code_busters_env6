from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("login/", TokenObtainPairView.as_view()),
    path("api/hospital/", include("hospital.urls")),
    path("api/", include("users.urls")),
    path("refresh/", TokenRefreshView.as_view()),
]
