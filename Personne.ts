import { Boisson } from "./Boisson";

export enum Religion{
    Buddhism='Buddhism', 
    Judaism='Judaism', 
    Islam='Islam', 
    Catholicism='Catholicism', 
    Atheist='Atheist'
}    


export enum Genre{
    Homme='homme',
    Femme='femme'
}

export class Personne{
    _nom :string;
    _prenom :string;
    _genre:Genre;
    _boisson:Boisson
    private _religion:Religion|undefined;
     


    constructor(nom:string, prenom:string, genre:Genre, boisson:Boisson, religion?:Religion){
        this._nom=nom;
        this._prenom=prenom;
        this._genre=genre;
        this._boisson=boisson;
        this._religion=religion;
    }

    set nom (nom){this._nom=nom}
    get nom (){return this._nom}
    set prenom (prenom){this._prenom=prenom}
    get prenom (){return this._prenom}

    public boire(boisson:Boisson){
        return ("la boisson "+this._boisson.nom+" contient-il de l'alcool ? " +this._boisson.alcool+" est elle bio ? "+this._boisson.bio)
    }

   

    toString(){
        return (""+this.prenom+" " +this.nom)
    }

}