from django.contrib import admin
from .models import AuthUser


@admin.register(AuthUser)
class AuthUser(admin.ModelAdmin):
    list_display = ['name', 'phone_number']
