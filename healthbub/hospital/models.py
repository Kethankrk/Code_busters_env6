from django.db import models
from users.models import Employee, CustomUser, HospitalProfile


class Request(models.Model):
    doctor = models.ForeignKey(Employee, on_delete=models.CASCADE)
    patient = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    hosptial = models.ForeignKey(HospitalProfile, on_delete=models.CASCADE)
    date = models.DateField()


class Facility(models.Model):
    hosptial = models.ForeignKey(HospitalProfile, on_delete=models.CASCADE)
    name = models.CharField(max_length=80)
