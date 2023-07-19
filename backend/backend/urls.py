from django.contrib import admin
from django.urls import path
from api.views import JewelryViewSet

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/jewelry/', JewelryViewSet.as_view())
]
