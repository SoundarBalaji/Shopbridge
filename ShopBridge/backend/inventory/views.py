from django.shortcuts import render
from rest_framework import viewsets  # add this
from .serializers import InventorySerializer  # add this
from .models import Inventory  # add this


class InventoryView(viewsets.ModelViewSet):  # add this
    serializer_class = InventorySerializer  # add this
    queryset = Inventory.objects.all()  # add this
