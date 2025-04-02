from django.shortcuts import render
from .models import Place

def index(request):
    places = Place.objects.all()
    return render(request, 'info/index.html', {'places': places})
