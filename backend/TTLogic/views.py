from django.shortcuts import render
from django.http import HttpResponse
from .extractor import Extractor
# Create your views here.

def transcript(request):
    extractor = Extractor()
    url = request.GET.get("url")
    extractor.getCaption(url)
    return HttpResponse(200)