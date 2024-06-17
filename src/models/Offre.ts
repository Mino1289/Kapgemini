import { Contrat } from "./Contrat";

export class Offre {
   constructor(
      public id: number,
      public titre: string,
      public contrat: Contrat,
      public emplacement: string,
      public description: string,
      public date: string,
      public recruteur_ID: number,
      public entreprise_ID: number
   ) {
      this.id = id;
      this.titre = titre;
      this.contrat = contrat;
      this.emplacement = emplacement;
      this.description = description;
      this.date = date;
      this.recruteur_ID = recruteur_ID;
      this.entreprise_ID = entreprise_ID;
   }
}