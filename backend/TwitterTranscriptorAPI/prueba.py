from django.http import HttpResponse

def cargar(request):
    print("Hola")
    return HttpResponse(status=200)