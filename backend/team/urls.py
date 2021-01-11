from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import SignUpView

urlpatterns = [
    path('signup', SignUpView, name="signup"),
    path('login', obtain_auth_token, name="login")
]
