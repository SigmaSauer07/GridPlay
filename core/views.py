# core/views.py
from rest_framework import generics
from django.contrib.auth import get_user_model
from .models import Wallet, Escrow
from .serializers import UserSerializer, WalletSerializer, EscrowSerializer

class UserCreateView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

class WalletView(generics.RetrieveUpdateAPIView):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer

class EscrowView(generics.ListCreateAPIView):
    queryset = Escrow.objects.all()
    serializer_class = EscrowSerializer
