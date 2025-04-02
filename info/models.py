from django.db import models

class Place(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    map_url = models.URLField(blank=True, null=True)  # <- Žemėlapio nuoroda

    def __str__(self):
        return self.title

class PlaceImage(models.Model):
    place = models.ForeignKey(Place, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='info/images/')

    def __str__(self):
        return f"{self.place.title} - nuotrauka"
