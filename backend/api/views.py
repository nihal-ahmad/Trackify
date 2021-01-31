from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import api_view
from .serializers import (
    SignUpSerializer,
    OpeningSerializer
)
from .models import Opening
from rest_framework.authtoken.models import Token
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView
)
from django.core import serializers
from django.http import HttpResponse


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


def Validate(token):
    if token:
        token = token[7:]
        username = Token.objects.get(key=token).user
        return username
    else:
        return "unauthorized"


class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

        token,  created = Token.objects.get_or_create(user=user)

        return Response({
            'token': token.key,
            'username': user.username
        })


@api_view(['POST', ])
def CreateNewOpening(request):
    if request.method == 'POST':
        user = Validate(request.META.get('HTTP_AUTHORIZATION'))
        company = request.POST.get('company')
        role = request.POST.get('role')
        _status = request.POST.get('status')
        notes = request.POST.get('notes')
        applied_date = request.POST.get('applied_date')

        new_opening = Opening(
            user=user,
            company=company,
            role=role,
            status=_status,
            notes=notes,
            applied_date=applied_date
        )

        new_opening.save()

        return Response({'status':  201})


@api_view(['POST', ])
def UpdateOpening(request):
    if request.method == 'POST':
        company = request.POST.get('company')
        role = request.POST.get('role')
        _status = request.POST.get('status')
        notes = request.POST.get('notes')
        applied_date = request.POST.get('applied_date')

        opening_id = request.POST.get('id')
        opening = Opening.objects.get(id=opening_id)

        opening.company = company
        opening.role = role
        opening.status = _status
        opening.notes = notes
        opening.applied_date = applied_date

        opening.save()

        return Response({'status': 200})


class ToApplyList(ListAPIView):
    serializer_class = OpeningSerializer

    def get_queryset(self):
        user = Validate(self.request.META.get('HTTP_AUTHORIZATION'))
        to_apply = Opening.objects.filter(user=user).filter(status='to apply')
        return to_apply


class AppliedList(ListAPIView):
    serializer_class = OpeningSerializer

    def get_queryset(self):
        user = Validate(self.request.META.get('HTTP_AUTHORIZATION'))
        applied = Opening.objects.filter(user=user).filter(status='applied')
        return applied


class OngoingList(ListAPIView):
    serializer_class = OpeningSerializer

    def get_queryset(self):
        user = Validate(self.request.META.get('HTTP_AUTHORIZATION'))
        ongoing = Opening.objects.filter(user=user).filter(status='ongoing')
        return ongoing


class RejectedList(ListAPIView):
    serializer_class = OpeningSerializer

    def get_queryset(self):
        user = Validate(self.request.META.get('HTTP_AUTHORIZATION'))
        rejected = Opening.objects.filter(user=user).filter(status='rejected')
        return rejected


class OfferList(ListAPIView):
    serializer_class = OpeningSerializer

    def get_queryset(self):
        user = Validate(self.request.META.get('HTTP_AUTHORIZATION'))
        offer = Opening.objects.filter(user=user).filter(status='offer')
        return offer

# @api_view(['POST', ])
# def ArenaCreateView(request):
#     if request.method == "POST":
#         username = Validate(request.META.get('HTTP_AUTHORIZATION'))
#         arena_name = request.query_params.get('arena_name', None)

#         print('[USERNAME, ARENA_NAME]', username, arena_name)

#         new_arena = Arena(name=arena_name)
#         new_arena.save()

#         owner = UserInfo.objects.get(username=username)
#         owner.arena.add(new_arena)

#         return Response({"status": status.HTTP_201_CREATED})


# class UsersArenaListView(ListAPIView):
#     serializer_class = ArenaSerializer

#     def get_queryset(self):
#         if self.request.method == "GET":
#             validate = Validate(self.request.META.get('HTTP_AUTHORIZATION'))
#             print(validate)

#             if validate == "Unauthorized":
#                 return Response({"status": validate})

#             return Arena.objects.filter(userinfo__username=validate)


# class ArenaMembersListView(ListAPIView):
#     serializer_class = UserInfoSerializer

#     def get_queryset(self):
#         arena_name = self.kwargs.get('arena_name')

#         return UserInfo.objects.filter(arena__name=arena_name)


# class ArenaBytesListView(ListAPIView):
#     serializer_class = ByteSerializer

#     def get_queryset(self):
#         arena_name = self.kwargs.get('arena_name')
#         return Byte.objects.filter(arena__name=arena_name)
