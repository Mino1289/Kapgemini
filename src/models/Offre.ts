export class Offre {
   constructor(
      public ID_offre: number,
      public titre: string,
      public contrat: string,
      public emplacement: string,
      public marque: string,
      public description: string,
      public date: string,
      public recruteur_ID: number,
      public ID_entreprise: string
   ) {
      this.ID_offre = ID_offre;
      this.titre = titre;
      this.contrat = contrat;
      this.emplacement = emplacement;
      this.marque = marque;
      this.description = description;
      this.date = date;
      this.recruteur_ID = recruteur_ID;
      this.ID_entreprise = ID_entreprise;
   }
}