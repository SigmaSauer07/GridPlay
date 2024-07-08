# core/models.py
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    # Your additional fields here

    groups = models.ManyToManyField(
        Group,
        related_name='customuser_set',  # Change this related_name
        blank=True,
        help_text=('The groups this user belongs to. A user will get all permissions '
                   'granted to each of their groups.'),
        related_query_name='user',
    )

    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_set',  # Change this related_name
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='user',
    )

class Wallet(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

class Escrow(models.Model):
    transaction_id = models.CharField(max_length=255, unique=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
