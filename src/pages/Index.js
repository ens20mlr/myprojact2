import React from "react";

class Index extends React.Component{
    render(){
        return(
            <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Filmtipset</title>
            <link rel="stylesheet" href="print.css" type="text/css" media="print" />
            <link rel="stylesheet" href="style.css" media="screen" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
              integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/fontawesome.min.css"
            />
            <div className="Wrapper">
       
              {/* Start container */}
              <div className="grid-containerAll">
                <div
                  className="leftOne"
                  style={{ backgroundColor: "rgb(44, 44, 44)", padding: "4%" }}
                  onclick="get_random_image()"
                >
                  <div className="moviepicturebig" id="shrekbror">
                    <div className="bottom-left" style={{ fontSize: 25 }}>
                      <a href="/Movie" id="shrek2">
                        Shrek 2
                      </a>
                    </div>
                    <div id="movieContainer">
                      <img  src={require('../files/shrekbild.jpg')} width="100px" height="150px" />
                    </div>
                  </div>
                </div>
                <div className="emptyspace"> " "</div>
                <div
                  className="rightOne"
                  style={{ backgroundColor: "rgb(44, 44, 44)", marginRight: "15%" }}
                >
                  <div className="film-1">
                    <img
                      className="moviepicture"
                      id="film1"
                      src={require('../files/harrypotter.jpg')}
                      style={{ float: "left" }}
                      onclick="get_random_image()"
                    />
                    <p className="filmtext">
                      En föräldralös pojke skrivs in i en skola för trolldom, där han får
                      veta sanningen om sig själv, sin familj och den fruktansvärda ondska
                      som hemsöker den magiska världen.
                    </p>
                    <br />
                  </div>
                  <div className="film-2">
                    {/* <h4>Conjouring 2</h4> */}
                    <img className="moviepicture"  src={require('../files/conjouring.jpg')} />
                    <p className="filmtext">
                      An orphaned boy enrolls in a school of wizardry, where he learns the
                      truth about himself, his family and the terrible evil that haunts
                      the magical world. clear Lyssna
                    </p>
                    <br />
                  </div>
                  <div className="film-3">
                    <img className="moviepicture"  src={require('../files/wakanda.jpeg')} />
                    <p className="filmtext">
                      Folket i Wakanda kämpar för att skydda sitt hem från ingripande
                      världsmakter när de sörjer kung T'Challas död
                    </p>
                    <br />
                  </div>
                </div>
              </div>
              {/* info section */}
              <div className="info">
                <div className="leftside" style={{ background: "#131313" }}>
                  <h1>Sveriges främsta filmcommunity</h1>
                  <p>
                    Filmtipset har varit hem för Sveriges alla filmälskare i snart 20 år
                    och är fortfarande ett av de bästa sätten att hålla reda på vilka
                    filmer du sett, samt få tips på både nya och gamla filmer värda att
                    se. Vi finns här för dig - du kan lämna både ris och ros angående nya
                    sajten i vårt forum. Din feedback gör att vi kan göra nya Filmtipset
                    bättre än det någonsin varit. Tack!
                  </p>
                </div>
                <div className="rightside" style={{ background: "#131313" }}>
                  <h1>Senaste betygsatta filmerna</h1>
                  <table className="content-table">
                    <thead>
                      <tr>
                        <th>Användare</th>
                        <th>Film</th>
                        <th>Betyg</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> Shrek,LOVER1337</td>
                        <td> Shrek 2</td>
                        <td> 5</td>
                      </tr>
                      <tr>
                        <td> Shrek,LOVER137</td>
                        <td> Shrek 2</td>
                        <td> 5</td>
                      </tr>
                      <tr>
                        <td> Shrek,LOVER337</td>
                        <td> Shrek 2</td>
                        <td> 5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <h1 style={{ marginLeft: "3%" }}>Senaste inlägget i forum:</h1>
            {/* Forum */}
            <section className="forum">
              <div className="text">
                <h2>När film och serievärlden influerar spelvärlden</h2>
                <p>
                  Ordet populärkultur ett samlingsbegrepp som omfattar åtskilliga
                  kulturella områden. Exempel på detta är populärlitteratur (exempelvis
                  författare med bred folklig förankring som Camilla Läckberg, Denise
                  Rudberg eller Fredrik Backman), populärmusik (här kan exempelvis Justin
                  Bieber, Beyonce eller Lady Gaga nämnas) och till och med populärpress.
                  Det som förenar dessa områden är att de är folkliga i en mer ursprunglig
                  mening. Ibland kännetecknas populärkulturella verk av sin mer tekniskt
                  definierade karaktär och betecknar då utbudets kvantitet och räckvidd,
                  som gällande masslitteratur exempelvis. Ibland gifter sig två eller fler
                  populärkulturella verk och ger upphov till något alldeles eget. Detta
                  sker exempelvis när en bästsäljande bok som Da Vinci-koden filmatiseras
                  och får ytterligare genomslag på bioduken, eller när Michael Jacksons
                  samlade alster skapar underlag för en musikal (”This is it”), eller då
                  en samtida trend eller företeelse influerar modevärlden, som när
                  designern Jeremy Scott inspirerades av Las Vegas och lät temat styra en
                  hel modekollektion- och visning. Ovanstående kombination är också mycket
                  vanlig inom spelvärlden då populära karaktärer från film- eller
                  serievärlden används som förlaga för att skapa ett dynamiskt spel. I
                  denna artikel exemplifierar vi detta vidare. Pablo Escobar - inte bara
                  en karaktär i en serie 2015 släppte streamingtjänsten Netflix serien
                  Narcos där den brasilianske skådespelaren Wagner Moura skildrade den
                  enigmatiske colombianske figuren Pablo Escobar. Serien vann snabbt
                  genomslag hos tittarna och skapade populärkulturella markörer i form av
                  mode och säregna uttryck. 2020 släpptes exempelvis nyheten om att Narcos
                  blir ett modemärke för herrar och att bland annat hoodies och jackor
                  kommer att säljas under dess namnet framöver. Serien har även influerat
                  spelvärlden då Pablo Escobar numer inte bara är en karaktär från
                  Netflix-serien utan även en figur inom ramen för ett spännande
                  casinospel. I videosloten Narcos består spelplanen av fem hjul, tre
                  rader och 243 vinstlinjer och med ljudeffekter och imponerande grafik
                  kan spelentusiasterna och Narcos-fansen här hänge sig till serien i ett
                  helt annat format. Prince of Persia För 10 år sedan släpptes Prince of
                  Persia, en påkostad actionfylld film med Jake Gyllenhaal i huvudrollen.
                  Handlingen kretsade kring den unge prinsen Dastan som är på rymmen och
                  som måste stoppa en skurk som utan att veta om det hotar att förstöra
                  världen med en särskild dolk som gör det möjligt för den magiska sanden
                  inuti att vrida tillbaka tiden. Med en så pass spännande handling är det
                  kanske inte så konstigt att filmen även är förkroppsligad i ett
                  plattformsspel som skapades av Brøderbund och som kom ut på marknaden
                  redan 1989. I detta fall var det alltså spelvärlden som influerade
                  filmvärlden och inte tvärtom. Miami Vice 80-tals serien Miami Vice var
                  en hit då det begav sig och visades mellan 1984–89 på amerikansk teve.
                  Serien blev snabbt en framgång inte minst på grund av det säregna modet
                  som huvudrollsinnehavarna bar (vem minns inte Don Johnson och Philip
                  Michael Thomas upprullade kavajärmar och t-shirtar i grälla färger?) och
                  seriens distinkta och medryckande 80-tals soundtrack. Serien blev
                  sedermera film år 2006 och filmen användes i sin tur som förlaga när
                  spelvärlden, med plattformen Playstation Portable i täten, bestämde sig
                  för att skapa ett spel baserat på filmen.
                </p>
              </div>
            </section>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  " @keyframes rotate{\n                    0%{\n                        transform:rotate(360deg);\n                    }\n                }"
              }}
            />
           
            {/* wapper ends */}
          </>
          
        )
    }
    }
            export default Index;
  

