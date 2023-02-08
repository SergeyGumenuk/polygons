from django.db import models


class Polygon(models.Model):
    vertices = models.JSONField(unique=True)
    created = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to='polygon_images/%Y/%m/%d')
    image_base_64 = models.TextField()

    class Meta:
        ordering = ['-created']
