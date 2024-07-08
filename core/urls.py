# core/urls.py
from django.urls import path
from .views import UserCreateView, WalletView, EscrowView

urlpatterns = [
    path('api/register/', UserCreateView.as_view(), name='register'),
    path('api/wallet/<int:pk>/', WalletView.as_view(), name='wallet'),
    path('api/escrow/', EscrowView.as_view(), name='escrow'),
]
