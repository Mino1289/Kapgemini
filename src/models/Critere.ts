import { Contrat } from "./Contrat";
import { Entreprise } from "./Entreprise";

export class Critere {
    constructor(
        public contrat: Contrat[],
        public entreprise: number[],
    ) {
        this.contrat = contrat;
        this.entreprise = entreprise
    }
}