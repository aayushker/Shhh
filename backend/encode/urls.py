from django.urls import path
from .views import Encode, Decode

urlpatterns = [
    path('encode/', Encode.as_view(), name='encode'),
    path('decode/', Decode.as_view(), name='decode'),
]