from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .manager import UserManager


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)
    role = models.CharField(max_length=10, default="user")
    USERNAME_FIELD = "phone"
    REQUIRED_FIELDS = ["email", "role"]

    objects = UserManager()
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)


class UserClientProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=25)
    address = models.CharField(max_length=256)
    date_of_birth = models.DateField()

    def __str__(self):
        return self.name


class HospitalProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    address = models.CharField(max_length=256)
    name = models.CharField(max_length=25)
    def __str__(self):
        return self.name


class Employee(models.Model):
    hospital = models.ForeignKey(HospitalProfile, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    qualification = models.CharField(max_length=20)
    def __str__(self):
        return self.name
