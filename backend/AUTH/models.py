from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager
from django.utils.translation import ugettext_lazy as _


class AuthUser(AbstractUser):
    username = None
    first_name = None
    last_name = None
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10, unique=True, null=False, blank=False)
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = ['email']

    objects = CustomUserManager()

    def __str__(self):
        return self.name

    def create_user(self):
        pass

    class Meta:
        db_table = 'tbl_auth_users'
