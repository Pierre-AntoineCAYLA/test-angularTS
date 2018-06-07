import { Personne, Genre, Religion } from "./Personne";
import { Certification } from "./Certification";
import { Boisson } from "./Boisson";

export class Stagiaire extends Personne{
 
    private _certification:Array<Certification>;

    constructor(certification:Array<Certification>,nom:string,prenom:string,genre:Genre, religion:Religion, boisson:Boisson ){
        super(nom,prenom,genre, boisson, religion)
        this._certification=certification;
    }

    set certification (certification){this._certification=certification}
    get certification(){return this._certification}
}