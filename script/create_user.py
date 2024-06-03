import json
import random
from faker import Faker

fake = Faker('fr_FR')  # Utilise le locale français

users = []
emails_verified = []
for i in range(1, 10000):

    nom = fake.last_name()
    prenom = fake.first_name()
    email = f"{prenom.lower()}.{nom.lower()}@gmail.com"

    if email in emails_verified:
        continue
    else:
        emails_verified.append(email)
        user = {
        "ID_user": i,
        "nom": nom,
        "prenom": prenom,
        "email": email,
        "password": fake.password(),
        "profil_picture": f"http://randomuser.me/api/portraits/{'men' if i % 2 == 0 else 'women'}/{i % 100}.jpg",
        "isRecruteur": 0
        }
        users.append(user)


data = {
    "users": users
}

with open('C:/Users/pourc/Desktop/Kareer/backend/user.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)

print("Le fichier db.json a été généré avec succès!")
