export class Offre {
    constructor(public ID: number,
        public titre: string,
        public contrat: string,
        public emplacement: string,
        public marque: string,
        public apply_url: string,
        public date: Date,
    ) {
        this.ID = ID;
        this.titre = titre;
        this.contrat = contrat;
        this.emplacement = emplacement;
        this.marque = marque;
        this.apply_url = apply_url;
        this.date = date;        
    }
}