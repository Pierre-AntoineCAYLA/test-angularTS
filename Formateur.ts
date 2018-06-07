import { Personne, Genre, Religion } from "./Personne";
import { Connaissance } from "./Connaissance";
import { Boisson } from "./Boisson";

export class Formateur extends Personne{
 
    private _connaissance:Array<Connaissance>;

    constructor(connaissance:Array<Connaissance>,nom:string,prenom:string,genre:Genre, religion:Religion, boisson:Boisson ){
        super(nom,prenom,genre, boisson, religion)
        this._connaissance=connaissance;
    }

    set connaissance (connaissance){this._connaissance=connaissance}
    get connaissance (){return this._connaissance}

    public enseigner(_connaissance:Array<Connaissance>){
        let connaissanceConfirme:Array<Connaissance> = new Array<Connaissance>();
        _connaissance.forEach(connaissance => {
            if (connaissance._annee>2){
                connaissanceConfirme.push(connaissance);
            }
        });
        return connaissanceConfirme;
    }

}
