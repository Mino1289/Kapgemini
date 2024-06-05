export class Entreprise {
    constructor(
        public ID_entrepise: number,
        public nom: string,
        public address: string,
        public nombre_employe: number,
        public country: string,
        public domaine: string
    ) {
        this.ID_entrepise = ID_entrepise;
        this.nom = nom;
        this.address = address;
        this.nombre_employe = nombre_employe;
        this.country = country;
        this.domaine = domaine;
    }
}