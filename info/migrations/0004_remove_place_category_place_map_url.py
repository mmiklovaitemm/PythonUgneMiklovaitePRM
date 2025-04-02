# Generated by Django 5.1.7 on 2025-04-02 10:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0003_place_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='place',
            name='category',
        ),
        migrations.AddField(
            model_name='place',
            name='map_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
