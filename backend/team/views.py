from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import (
    SignUpSerializer,
    ArenaSerializer,
    UserInfoSerializer,
    ByteSerializer,
    ThreadSerializer
)
from .models import (
    Arena,
    UserInfo,
    Byte,
    Thread
)
from rest_framework.authtoken.models import Token
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView
)
from rest_framework import status


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

            new_user = UserInfo(username=account.username)
            new_user.save()
        else:
            response = serializer.errors

        return Response(response)


def Validate(token):
    if token:
        token = token[7:]
        username = Token.objects.get(key=token).user
        return username
    else:
        return "Unauthorized"


@api_view(['POST', ])
def ArenaCreateView(request):
    if request.method == "POST":
        username = Validate(request.META.get('HTTP_AUTHORIZATION'))
        arena_name = request.query_params.get('arena_name', None)

        print('[USERNAME, ARENA_NAME]', username, arena_name)

        new_arena = Arena(name=arena_name)
        new_arena.save()

        owner = UserInfo.objects.get(username=username)
        owner.arena.add(new_arena)

        return Response({"status": status.HTTP_201_CREATED})


class UsersArenaListView(ListAPIView):
    serializer_class = ArenaSerializer

    def get_queryset(self):
        if self.request.method == "GET":
            validate = Validate(self.request.META.get('HTTP_AUTHORIZATION'))
            print(validate)

            if validate == "Unauthorized":
                return Response({"status": validate})

            return Arena.objects.filter(userinfo__username=validate)


class ArenaMembersListView(ListAPIView):
    serializer_class = UserInfoSerializer

    def get_queryset(self):
        arena_name = self.kwargs.get('arena_name')

        return UserInfo.objects.filter(arena__name=arena_name)


class ArenaBytesListView(ListAPIView):
    serializer_class = ByteSerializer

    def get_queryset(self):
        arena_name = self.kwargs.get('arena_name')
        return Byte.objects.filter(arena__name=arena_name)
