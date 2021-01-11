from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import SignUpSerializer
from rest_framework.authtoken.models import Token


@api_view(['POST', ])
def SignUpView(request):
    if request.method == "POST":
        serializer = SignUpSerializer(data=request.data)
        response = {}

        if serializer.is_valid():
            account = serializer.save()
            response['response'] = "Successfully registered!"
            response["email"] = account.email
            response["username"] = account.username
            token = Token.objects.get(user=account).key
            response['token'] = token
        else:
            response = serializer.errors

        return Response(response)
