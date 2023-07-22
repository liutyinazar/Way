from django.contrib import admin
from django.urls import path, include, re_path
from api.views import JewelryViewSet, ImageViewSet, ColoborationViewSet

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/jewelry/", JewelryViewSet.as_view()),
    path("api/v1/jewelry/image/", ImageViewSet.as_view()),
    path("api/v1/coloboration/", ColoborationViewSet.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
