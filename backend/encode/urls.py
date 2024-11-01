from django.urls import path
from .views import Encode, Decode, testEncode, testDecode

urlpatterns = [
    path('encode/', Encode.as_view(), name='encode'),
    path('decode/', Decode.as_view(), name='decode'),
    path('testencode/', testEncode.as_view(), name='testencode'),
    path('testdecode/', testDecode.as_view(), name='testdecode'),
]