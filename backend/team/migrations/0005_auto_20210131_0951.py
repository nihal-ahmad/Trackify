# Generated by Django 3.1.5 on 2021-01-31 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0004_auto_20210131_0943'),
    ]

    operations = [
        migrations.AddField(
            model_name='opening',
            name='user',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='opening',
            name='notes',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='opening',
            name='role',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]