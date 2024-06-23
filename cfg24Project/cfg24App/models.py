from django.db import models


# Create your models here.
class Notes(models.Model):
    title = models.CharField(max_length=60)
    content = models.CharField(max_length=120)

    def __str__(self):
        return self.title

class Farmer(models.Model):
    name=models.CharField(max_length=100)
    gender=models.CharField(max_length=10)

    def __str__(self):
        return self.name
class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=50)
    publish_date = models.DateField()

class Farmers(models.Model):
    f_name = models.CharField(max_length=255)
    contact_no = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    aadhar_number = models.CharField(max_length=12, unique=True)
    pincode = models.CharField(max_length=6)
    area = models.CharField(max_length=255)

    def __str__(self):
        return self.username
    
class query(models.Model):
    query = models.CharField(max_length=1000)
    def __str__(self):
        return self.username
