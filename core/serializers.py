# core/serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Wallet, Escrow

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = get_user_model().objects.create_user(**validated_data)
        Wallet.objects.create(user=user)
        return user

class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = ['id', 'user', 'balance']

class EscrowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Escrow
        fields = ['id', 'transaction_id', 'amount', 'user']
