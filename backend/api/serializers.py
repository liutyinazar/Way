from rest_framework import serializers
from .models import Jewelry, JewelryImage, Coloboration


class ColoborationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coloboration
        fields = ("title", "content", "date", "cover")


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = JewelryImage
        fields = ("file", "jewelry_id")


class JewelrySerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)
    coloboration = ColoborationSerializer()


    class Meta:
        model = Jewelry
        fields = [
            "id",
            "title",
            "description",
            "price",
            "quantity",
            "type",
            "metal",
            "stone",
            "coloboration",
            "images",
        ]
