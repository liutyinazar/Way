from django.db import models
from django.core.validators import MinValueValidator
from .choises import METAL as M
from .choises import STONE as S
from .choises import TYPE as T


class Jewelry(models.Model):
    title = models.CharField(max_length=80)  # назва
    description = models.TextField(max_length=300)  # опис товару
    price = models.DecimalField(
        max_digits=8, decimal_places=2, validators=[MinValueValidator(0)]
    )  # ціна товару
    quantity = models.PositiveIntegerField(default=1)  #  кількість товару на складі
    type = models.CharField(
        choices=T, default="option1", max_length=20
    )  # тип товару ( обручка, кольє або сережки )
    metal = models.CharField(choices=M, default="option1", max_length=20)  # тип металу
    stone = models.CharField(
        choices=S, default="option1", max_length=20
    )  # тип каміння або його відсутність

    def __str__(self):
        return self.title

# add image for items

# class JewelryImage(models.Model):
#     file = models.ImageField()
#     jewelry_id = 