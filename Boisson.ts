export enum Bio{
    oui='oui',
    non='non',
}

export enum Alcool{
    oui='oui',
    non='non'
}

export class Boisson{
    _nom:string;
    _alcool:Alcool;
    _bio:Bio;

     constructor(nom:string, alcool:Alcool, bio:Bio){
     this._nom=nom;
     this._alcool=alcool;
     this._bio=bio;
     }

     set nom (nom){this._nom=nom}
     get nom (){return this._nom}
     set alcool (alcool){this._alcool=alcool}
     get alcool (){return this._alcool}
     set bio (bio){this._bio=bio}
     get bio (){return this._bio}
    
}
