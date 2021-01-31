from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class Opening(models.Model):
    STATUS = [
        ('to apply', 'to apply'),
        ('applied', 'applied'),
        ('ongoing', 'ongoing'),
        ('rejected', 'rejected'),
        ('offer', 'offer')
    ]

    user = models.CharField(max_length=255, blank=True)
    company = models.CharField(max_length=255)
    role = models.CharField(max_length=255, blank=True)
    status = models.CharField(
        max_length=20, choices=STATUS, default='to apply')
    notes = models.TextField(blank=True, null=True)
    applied_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.company + " - " + self.role


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
