import { expect } from 'chai';
import { Boisson, Alcool, Bio } from "../Boisson";
import { Certification } from "../Certification";
import { Connaissance } from "../Connaissance";
import { Film, GenreFilm, Trailer } from '../Film';
import { Personne, Genre, Religion } from '../Personne';
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
var bac = new Certification("bac", 2012);

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
  it('the title of movie shoulde be 12 Rounds 3: Lockdown', () => {
    expect(film._titre).to.equal("12 Rounds 3: Lockdown")
  });
  it('the number of trailers should be 2', () => {
    expect(film._trailer.length).to.equal(2);
  });
});

describe('boisson', () => {
  it('the drink of franck shoulde be coca', () => {
    expect(franck._boisson._nom).to.equal("coca")
  });
  it('the drink should be bio for sophie', () => {
    expect(sophie._boisson._bio).to.equal("oui");
  });
  it('the drink should be bio for thomas', () => {
    expect(thomas._boisson._bio).to.equal("oui");
  });
  it('the drink should be non alcool for franck', () => {
    expect(franck._boisson._alcool).to.equal("non");
  });
  it('the boir function should return "la boisson coca contient-il de l alcool ? non est elle bio ? non', () => {
    expect(franck.boire(franck._boisson)).to.equal("la boisson coca contient-il de l'alcool ? non est elle bio ? non");
  });
  it('the toString function should return "franck duil"', () => {
    expect(franck.toString()).to.equal("franck duil");
  });
});


describe('personne', () => {
  it('the name of thoams shoulde be guillon', () => {
    expect(thomas._nom).to.equal("guillon")
  });
  it('the genre of sphie should be femme', () => {
    expect(sophie._genre).to.equal("femme");
  });
  it('connaissances of romain should contain anglais', () => {
    expect(romain.connaissance).to.include(anglais);
  });
  it('the enseignements of romain should contain spring', () => {
    expect(romain.enseigner(romain.connaissance)).to.include(spring);
  });
  it('the enseignement of romain doesn t should contain anglais', () => {
    expect(romain.enseigner(romain.connaissance)).to.not.include(anglais);
  });
  it('the certification of franck should contain java', () => {
    expect(franck.certification).to.include(java);
  });
});


describe('formations', () => {
  it('the name of formation shoulde be dta123', () => {
    expect(dta123._nom).to.equal("dta123")
  });
  it('the date of beginning of formation should be 12/01/2015', () => {
    expect(dta123._dateDebut.getTime()).to.equal(new Date("12/01/2015").getTime());
  });
  it('the students of formation should contain franck', () => {
    expect(dta123._stagiaires).to.include(franck);
  });
  it('the teachers of formation should contain romain', () => {
    expect(dta123._formateurs).to.include(romain);
  });
  
});