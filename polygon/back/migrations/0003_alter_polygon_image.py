# Generated by Django 4.1.6 on 2023-02-08 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0002_alter_polygon_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='polygon',
            name='image',
            field=models.ImageField(upload_to='polygon_images/%Y/%m/%d'),
        ),
    ]
