from Extractor import Extractor

extractor = Extractor()
linkInput = input("Introduce el link: ")
id = linkInput.split("/")[5].split("?")[0] 

print(id)
print("Cargando... Esto tardará unos minutos...")
extractor.getCaption(id)

print("Conversion finalizada")

input("Pulsa cualquier tecla para salir.")

