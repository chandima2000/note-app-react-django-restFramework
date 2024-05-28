from django.shortcuts import render # type: ignore
from django.contrib.auth.models import User # type: ignore
from rest_framework import generics # type: ignore
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny # type: ignore


# Create your views here.
class CreateUserView(generics.CreateApiView):
    queryset = User.objects.all()
    serializer_class = User
    permission_classes = [AllowAny]