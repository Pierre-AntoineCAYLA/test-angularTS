import { Stagiaire } from "./Stagiaire";
import { Formateur } from "./Formateur";

export class Formation{

    _nom:string;
    _dateDebut:Date;
    _dateFin:Date;
    _stagiaires:Array<Stagiaire>
    _formateurs:Array<Formateur>

    constructor(nom:string,dateDebut:Date, dateFin:Date, stagiaires:Array<Stagiaire>, formateurs:Array<Formateur>){
        this._nom=nom;
        this._dateDebut=dateDebut;
        this._dateFin=dateFin;
        this._stagiaires=stagiaires;
        this._formateurs=formateurs;
    }
}