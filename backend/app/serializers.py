from rest_framework import serializers
from .models import BettingBoard, Bet

class BettingBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = BettingBoard
        fields = '__all__'

class BetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bet
        fields = '__all__'
