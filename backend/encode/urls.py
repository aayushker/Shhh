from django.urls import path
from .views import Encode

urlpatterns = [
    path('', Encode.as_view(), name='Encode')
]