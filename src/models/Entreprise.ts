export class Entreprise {
    constructor(
        public id: number,
        public nom: string,
        public nombre_employe: number,
        public emplacement: string,
        public emplacement_exact : string,  
        public domaine: string
    ) {
        this.id = id;
        this.nom = nom;
        this.nombre_employe = nombre_employe;
        this.emplacement = emplacement;
        this.emplacement_exact = emplacement_exact;
        this.domaine = domaine;
    }
}