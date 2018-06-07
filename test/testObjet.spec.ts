import { expect } from 'chai';
import { Boisson, Alcool, Bio } from "../Boisson";
import { Certification } from "../Certification";
import { Connaissance } from "../Connaissance";
import { Film, GenreFilm, Trailer } from '../film';
import { Personne, Genre, Religion } from '../personne';
import { Formation } from '../Formation';
import { Stagiaire } from '../Stagiaire';
import { Formateur } from '../Formateur';


var date = new Date("12/01/2015");
var date2 = new Date("04/02/2012");
var date3 = new Date("01/02/2013");

var rounds1 = new Trailer(date2, "/trailer1/", "trailer", false, true);
var rounds2 = new Trailer(date3, "/trailer2/", "trailer", false, true);

var trailers = new Array<Trailer>(rounds1, rounds2);

var acteurs = new Array<string>("gerard", "jean", "mathilde");
var film = new Film("12 Rounds 3: Lockdown", date, "Lionsgate", "image.png", "/trailer/", "a", GenreFilm.action_and_adventure, "Stephen Reynolds", acteurs, trailers)

var java = new Certification("java", 2018);
var bac = new Certification("bac", 2018);

var certifications = new Array<Certification>(java, bac)

var spring = new Connaissance("spring", 15);
var anglais = new Connaissance("anglais", 1)

var connaissances = new Array<Connaissance>(anglais,spring);

var coca = new Boisson("coca", Alcool.non, Bio.non);
var biere = new Boisson("biere", Alcool.oui, Bio.oui);
var cafe = new Boisson("cafe", Alcool.non, Bio.oui);

var franck = new Stagiaire(certifications, "duil", "franck", Genre.Homme, Religion.Atheist, coca);
var sophie = new Stagiaire(certifications, "vrduzier", "sophie", Genre.Femme, Religion.Catholicism, biere);

var stagiaires = new Array<Stagiaire>(franck, sophie);

var romain = new Formateur(connaissances, "dubin", "romain", Genre.Homme, Religion.Islam, biere);
var thomas = new Formateur(connaissances, "guillon", "thomas", Genre.Homme, Religion.Catholicism, cafe);

var formateurs = new Array<Formateur>(romain, thomas);

var dta123 = new Formation("dta123", date, date2, stagiaires, formateurs);

describe('film', () => {
  it('shoulde be 12 Rounds 3: Lockdown', () => {
    expect(film._titre).to.equal("12 Rounds 3: Lockdown")
  });
  it('should be 2', () => {
    expect(film._trailer.length).to.equal(2);
  });
});

describe('boisson', () => {
  it('shoulde be coca', () => {
    expect(franck._boisson._nom).to.equal("coca")
  });
  it('should be oui sophie', () => {
    expect(sophie._boisson._bio).to.equal("oui");
  });
  it('should be oui thomas', () => {
    expect(thomas._boisson._bio).to.equal("oui");
  });
  it('should be non franck', () => {
    expect(franck._boisson._alcool).to.equal("non");
  });
  it('should be "la boisson coca contient-il de l alcool ? non est elle bio ? non', () => {
    expect(franck.boire(franck._boisson)).to.equal("la boisson coca contient-il de l'alcool ? non est elle bio ? non");
  });
  it('should be "franck duil"', () => {
    expect(franck.toString()).to.equal("franck duil");
  });
});


describe('personne', () => {
  it('shoulde guillon', () => {
    expect(thomas._nom).to.equal("guillon")
  });
  it('should be femme', () => {
    expect(sophie._genre).to.equal("femme");
  });
  it('should be anglais', () => {
    expect(romain.connaissance).to.include(anglais);
  });
  it('should be spring', () => {
    expect(romain.enseigner(romain.connaissance)).to.include(spring);
  });
  it('should be not angalais', () => {
    expect(romain.enseigner(romain.connaissance)).to.not.include(anglais);
  });
  it('should be java', () => {
    expect(franck.certification).to.include(java);
  });
});


describe('formations', () => {
  it('shoulde dta123', () => {
    expect(dta123._nom).to.equal("dta123")
  });
  it('should be 12/01/2015', () => {
    expect(dta123._dateDebut.getTime()).to.equal(new Date("12/01/2015").getTime());
  });
  it('should be franck', () => {
    expect(dta123._stagiaires).to.include(franck);
  });
  it('should be romain', () => {
    expect(dta123._formateurs).to.include(romain);
  });
  
});