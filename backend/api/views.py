from django.shortcuts import render
from rest_framework import generics
from .models import Jewelry, JewelryImage, Coloboration
from .serializers import JewelrySerializer, ImageSerializer, ColoborationSerializer


class ColoborationViewSet(generics.ListAPIView):
    queryset = Coloboration.objects.all()
    serializer_class = ColoborationSerializer


class ImageViewSet(generics.ListAPIView):
    queryset = JewelryImage.objects.all()
    serializer_class = ImageSerializer


class JewelryViewSet(generics.ListAPIView):
    queryset = Jewelry.objects.all()
    serializer_class = JewelrySerializer
