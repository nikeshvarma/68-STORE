from django.urls import path
from . import views

urlpatterns = [
    path('sign-up/', views.CreateUserView.as_view()),
    path('login/', views.LoginUserView.as_view())
]
