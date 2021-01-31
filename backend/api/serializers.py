from rest_framework import serializers
from django.contrib.auth import get_user_model
from api.models import Opening

UserModel = get_user_model()


class SignUpSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):

        user = UserModel.objects.create(
            username=validated_data['username'],
            email=validated_data["email"]
        )
        user.set_password(validated_data['password'])
        user.save()

        return user

    class Meta:
        model = UserModel
        fields = ("id", "username", "email", "password", )


class OpeningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Opening
        fields = '__all__'


# class UserInfoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserInfo
#         fields = '__all__'


# class ArenaSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Arena
#         fields = '__all__'


# class ByteSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Byte
#         fields = '__all__'


# class ThreadSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Thread
#         fields = '__all__'
