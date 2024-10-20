class Athlete {
  constructor(
    id,
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymävuosi,
    paino,
    kuva,
    laji,
    saavutukset
  ) {
    this.id = id;
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymävuosi = syntymävuosi;
    this.paino = paino;
    this.kuva = kuva;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }
}

export default Athlete;
