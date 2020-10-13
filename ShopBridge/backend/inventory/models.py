from django.db import models

# Create your models here.
class Inventory(models.Model):
    name=models.CharField(max_length=100, null=False)
    description=models.CharField(max_length=1000, null=True)
    price=models.IntegerField(null=False)
    product_image=models.ImageField(null=True)

    def __str__(self):
        return self.name