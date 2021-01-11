from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class Arena(models.Model):
    name = models.CharField(max_length=256)

    def __str__(self):
        return self.name


class User(models.Model):
    username = models.CharField(max_length=256)
    email = models.EmailField()
    password = models.CharField(max_length=256)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
