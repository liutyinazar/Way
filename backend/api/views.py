from django.shortcuts import render
from rest_framework import generics
from .models import Jewelry
from .serializers import JewelrySerializer


class JewelryViewSet(generics.ListAPIView):
    queryset = Jewelry.objects.all()
    serializer_class = JewelrySerializer