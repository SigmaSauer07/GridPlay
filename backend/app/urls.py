from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BettingBoardViewSet, BetViewSet

router = DefaultRouter()
router.register(r'boards', BettingBoardViewSet)
router.register(r'bets', BetViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
