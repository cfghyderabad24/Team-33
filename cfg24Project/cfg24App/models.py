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