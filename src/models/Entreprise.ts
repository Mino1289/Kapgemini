export class Entreprise {
    constructor(
        public id: number,
        public nom: string,
        public address: string,
        public nombre_employe: number,
        public country: string,
        public domaine: string
    ) {
        this.id = id;
        this.nom = nom;
        this.address = address;
        this.nombre_employe = nombre_employe;
        this.country = country;
        this.domaine = domaine;
    }
}