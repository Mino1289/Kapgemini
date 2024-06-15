import { Status } from "./Status";

export class Candidature {
    constructor(
        public id: number,
        public candidat_ID: number,
        public offre_ID: number,
        public date: string,
        public status: Status
    ) {
        this.id = id;
        this.candidat_ID = candidat_ID;
        this.offre_ID = offre_ID;
        this.date = date;
        this.status = status;
    }
}