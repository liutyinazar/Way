from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin, Group

class User(AbstractUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=225)
    phone = models.CharField(max_length=20)

    username = None
    first_name = None
    last_name = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        swappable = 'AUTH_USER_MODEL'

User._meta.get_field('groups').related_name = 'user_account_set'
User._meta.get_field('user_permissions').related_name = 'user_account_set'