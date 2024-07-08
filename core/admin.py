# core/admin.py
from django.contrib import admin
from .models import CustomUser, Wallet, Escrow

admin.site.register(CustomUser)
admin.site.register(Wallet)
admin.site.register(Escrow)
