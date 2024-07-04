from rest_framework import viewsets
from .models import BettingBoard, Bet
from .serializers import BettingBoardSerializer, BetSerializer

class BettingBoardViewSet(viewsets.ModelViewSet):
    queryset = BettingBoard.objects.all()
    serializer_class = BettingBoardSerializer

class BetViewSet(viewsets.ModelViewSet):
    queryset = Bet.objects.all()
    serializer_class = BetSerializer
