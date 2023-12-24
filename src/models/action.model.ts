export class Action {
  [key: string]: String | number | Date | boolean | undefined;

    name!: String;
    objective!: String;
    responsible!: String;
    beneficiaries!: number;
    creationDate!: Date;
    success!: boolean;
    isModifying?: boolean = false;

    constructor(name: String,
      objective: String,
      responsible: String,
      beneficiaries: number,
      creationDate: Date) {
          this.name=name;
          this.objective=objective;
          this.responsible=responsible;
          this.beneficiaries=beneficiaries;
          this.creationDate=creationDate;

     }
  }
  