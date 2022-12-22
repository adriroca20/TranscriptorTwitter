from django.shortcuts import render
from django.http import HttpResponse, FileResponse
from .extractor import Extractor

# Create your views here.

def transcript(request):
    # url="https://twitter.com/i/spaces/1gqxvyzbdMRJB?s=20"
    extractor = Extractor()
    url = request.GET.get("url", "")
    buffer = extractor.getCaption(url)
    return FileResponse(buffer, as_attachment=True, filename="transcriptionTWT.pdf")