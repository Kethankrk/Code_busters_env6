from django.db import models
from users.models import Employee




class Prescription(models.Model):
    doctor = models.ForeignKey(Employee, on_delete=models.CASCADE)
    description = models.CharField(max_length=600)

class Medicine(models.Model):
    name = models.CharField(max_length=60)
    prescription = models.ForeignKey(Prescription, on_delete=models.CASCADE)