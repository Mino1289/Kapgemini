export class User {
    constructor(
        public ID_user: number,
        public nom: string,
        public prenom: string,
        public email: string,
        public password: string,
        public profil_picture: string,
        public isRecruteur: number
    ) {
        this.ID_user = ID_user;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.profil_picture = profil_picture;
        this.isRecruteur = isRecruteur;
    }
}