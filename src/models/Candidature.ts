export class Candidature {
    constructor(
        public ID_candidature: number,
        public candidat_ID: number,
        public offre_ID: number,
        public date: string
    ) {
        this.ID_candidature = ID_candidature;
        this.candidat_ID = candidat_ID;
        this.offre_ID = offre_ID;
        this.date = date;
    }
}