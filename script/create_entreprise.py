import json
from faker import Faker

fake = Faker('fr_FR')  # Utilise le locale français
domaines = ["Informatique", "Finance", "Marketing", "Ressources Humaines", "Communication", "Vente", "Logistique", "Production", "Recherche et Développement", "Service Client", "Juridique", "Achat", "Qualité", "Maintenance", "Sécurité", "Environnement", "Autre"]
entreprises = []
address_verified = []
for i in range(1, 100):

    nom_entreprise = fake.company()
    address = fake.address()
    domaine = fake.random_element(elements=domaines)
    if address in address_verified:
        continue
    else:
        address_verified.append(address)
        entreprise = {
        "ID_entreprise": i,
        "nom": nom_entreprise,
        "address": address,
        "password": fake.password(),
        "nombre_employe": fake.random_int(min=1, max=1000, step=1),
        "country": "France",
        "domaine": domaine,
        }
        entreprises.append(entreprise)


data = {
    "entreprises": entreprises
}

with open('C:/Users/pourc/Desktop/Kareer/backend/entreprise.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)

print("Le fichier db.json a été généré avec succès!")
