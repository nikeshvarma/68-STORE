from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import AuthUser


class CreateUserSerializer(serializers.ModelSerializer):
    auth_token = serializers.SerializerMethodField()

    class Meta:
        model = AuthUser
        fields = ['name', 'phone_number', 'email', 'password', 'auth_token']

    def get_auth_token(self, user):
        return str(Token.objects.create(user=user))

    def create(self, validated_data):
        user = super(CreateUserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
