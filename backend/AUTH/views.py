from rest_framework import status
from rest_framework.generics import RetrieveAPIView, CreateAPIView
from django.contrib.auth import get_user_model, authenticate
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CreateUserSerializer

User = get_user_model()


class LoginUserView(APIView):
    def post(self, request, *args, **kwargs):
        user = authenticate(phone_number=request.data['phone_number'], password=request.data['password'])
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            res = {
                'name': user.name,
                'phone_number': user.phone_number,
                'email': user.email,
                'auth_token': str(token)
            }
            return Response(data=res, status=status.HTTP_200_OK)
        else:
            return Response(data={'error': 'Invalid number or password'}, status=status.HTTP_401_UNAUTHORIZED)


class CreateUserView(CreateAPIView):
    serializer_class = CreateUserSerializer
    queryset = User.objects.all()
