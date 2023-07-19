from rest_framework import serializers
from .models import Jewelry


class JewelrySerializer(serializers.ModelSerializer):
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
        ]
