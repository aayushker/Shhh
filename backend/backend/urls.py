from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from encode.views import Heartbeat
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('encode.urls')),
    path('', Heartbeat, name='heartbeat'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)