export enum GenreFilm{
    action_and_adventure,
    comedie,
    romantique,
    tragedie
}

export class Film{

    _titre:string;
    _dateSortie:Date;
    _studio:string;
    _poster:string;
    _location:string;
    _note:string;
    _genre:GenreFilm;
    _realisateur:string;
    _acteurs:Array<string>;
    _trailer:Array<Trailer>

    constructor(titre:string, dateSortie:Date, studio:string, poster:string, location:string, note:string, genre:GenreFilm, realisateur:string, acteurs:Array<string>, trailer:Array<Trailer>){
        this._titre=titre;
        this._dateSortie=dateSortie;
        this._studio=studio;
        this._poster=poster;
        this._location=location;
        this._note=note;
        this._genre=genre;
        this._realisateur=realisateur;
        this._acteurs=acteurs;
        this._trailer=trailer;
    }
}

export class Trailer{
    _dateSortie:Date;
    _url:string;
    _type:string;
    _exclusive:boolean;
    _hd:boolean

    constructor(dateSortie:Date, url:string, type:string, exclsuif:boolean, hd:boolean){
        this._dateSortie=dateSortie;
        this._url=url;
        this._type=type;
        this._exclusive=exclsuif;
        this._hd=hd;
    }
}