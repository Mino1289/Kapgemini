export class User {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public email: string,
        public password: string,
        public profil_picture: string,
        public isRecruteur: boolean
    ) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.profil_picture = profil_picture;
        this.isRecruteur = isRecruteur;
    }
}