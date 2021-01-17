from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class Arena(models.Model):
    name = models.CharField(max_length=256, blank=True)

    def __str__(self):
        return self.name


class UserInfo(models.Model):
    username = models.CharField(max_length=255)
    arena = models.ManyToManyField(
        Arena, blank=True, null=True)

    def __str__(self):
        return self.username


class Byte(models.Model):
    WEIGHTAGE = [
        ('CHILL', 'CHILL'),
        ('NORMAL', 'NORMAL'),
        ('ASAP', 'ASAP'),
        ('DUE', 'DUE')
    ]

    STATUS = [
        ('TODO', 'TODO'),
        ('ACTIVE', 'ACTIVE'),
        ('REVIEW', 'REVIEW'),
        ('FINISHED', 'FINISHED')
    ]

    content = models.TextField()
    weightage = models.CharField(
        max_length=10, choices=WEIGHTAGE, default="CHILL")
    status = models.CharField(max_length=10, choices=STATUS, default="TODO")
    arena = models.ForeignKey(Arena, on_delete=models.CASCADE)
    user_info = models.ForeignKey(
        UserInfo, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.content


class Thread(models.Model):
    content = models.TextField()
    author = models.CharField(max_length=256)
    byte = models.ForeignKey(Byte, on_delete=models.CASCADE)

    def __str__(self):
        return self.content


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
