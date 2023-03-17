import React from "react";

class Movie extends React.Component{
    render(){
        return(
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Filmtipset</title>
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  {/* navigation */}

  {/* Start container */}
  <div className="grid-containerfilm">
    <div
      className="leftOne"
      style={{ backgroundColor: "rgb(44, 44, 44)", padding: "4%" }}
    >
      <div id="movieContainer">
        <h1>Trailer</h1>
        <div className="moviebox">
          <video controls="" id="trailer">
            <source src="shrek2.mp4" type="video/mp4" />
          </video>
        </div>
        <br />
        <br />
        <p style={{ fontSize: 14 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi autem
          inventore sunt? Quos esse harum error autem dolore aliquam at iste
          inventore dolorum, nam nesciunt deserunt eveniet, aut dolores eligendi
          odit cupiditate quod voluptate. Neque consequatur fugit rerum
          consectetur dolore beatae molestias dolorem maiores cupiditate. Eius,
          reprehenderit ducimus. Odio non ea necessitatibus atque optio! Ullam,
          velit! Quam maxime natus, voluptates iste odit iure nisi ipsa porro.
          Totam odio nemo doloremque dignissimos nihil culpa ea soluta suscipit
          praesentium repudiandae voluptates ad cum similique aut eius atque,
          libero, labore alias velit vel sit qui? Iste quod dolore voluptate
          voluptatem, nulla explicabo unde, eveniet ratione perspiciatis
          incidunt saepe? Natus nisi cum dolorem nulla magnam. Sunt, dicta?
          Perferendis sequi ea deleniti quasi corrupti vitae velit reprehenderit
          accusamus quisquam facilis veritatis enim rerum tempora, quos
          recusandae eveniet molestias cupiditate dolorem laboriosam officia est
          at amet. Beatae ut accusamus blanditiis voluptatem nihil itaque
          deserunt modi culpa vero tempora cumque nulla et non expedita facilis,
          fugit sed fugiat inventore magni ex? Ducimus quas error, possimus
          iusto quis odio praesentium delectus temporibus vitae veritatis
          doloribus excepturi animi vel consequatur dicta obcaecati. Error
          libero necessitatibus commodi animi repellat, earum tempore voluptatum
          eveniet, laboriosam similique asperiores optio officiis illum odio.
        </p>
        <br />
      </div>
    </div>
    <div className="emptyspace"> " "</div>
    <div
      className="rightonefilm"
      style={{ backgroundColor: "rgb(44, 44, 44)", marginRight: 30 }}
    >
      <div className="resc-1">
        <h1 style={{ fontSize: 15, marginLeft: "10%" }}>
          Väldigt givande film
        </h1>
        <h2 style={{ fontSize: 15, marginLeft: "10%" }}>Shrekmannen </h2>
        <h3 style={{ fontSize: 9, marginLeft: "10%" }}> 21 februari 2022</h3>
        <p className="resctext" style={{ marginLeft: "10%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cum
          nulla nobis ducimus! Similique debitis vitae adipisci ad, sint, ipsam
          temporibus magnam expedita dolore iste, error ullam. Quasi mollitia
          ullam nulla assumenda blanditiis ipsa ducimus eveniet facilis modi, ab
          provident cupiditate consectetur at quod accusantium omnis id ea saepe
          temporibus quibusdam. Error ipsum exercitationem, asperiores quam
          quidem facilis voluptatem rerum nostrum quo nisi accusamus repellat
          praesentium qui. Voluptatum recusandae quidem unde totam quibusdam ab
          dicta reprehenderit odit eum aliquid ut perspiciatis rerum, cumque
          facilis eaque, reiciendis ad dolorem. Harum ad saepe repellendus optio
          ab nesciunt quaerat tempore dolorem, vel perferendis!
        </p>
        <div className="stars">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
        </div>
      </div>
      <div className="resc-2">
        <h1 style={{ fontSize: 15, marginLeft: "10%" }}>
          Väldigt givande film
        </h1>
        <h2 style={{ fontSize: 15, marginLeft: "10%" }}>Shrekmannen </h2>
        <h3 style={{ fontSize: 9, marginLeft: "10%" }}> 21 februari 2022</h3>
        <p className="resctext" style={{ marginLeft: "10%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          accusamus nesciunt quo laboriosam, odit dolores ipsum hic quis sint
          quam animi quisquam reiciendis maiores quibusdam esse debitis ratione
          officiis similique? Iure dolor laboriosam, consequatur nemo temporibus
          unde voluptatibus corporis a. Ipsa at magnam eius cupiditate adipisci
          dolorem laboriosam optio tenetur similique eos tempora in unde aperiam
          dolorum rem repudiandae minima temporibus sint vitae voluptates
          explicabo, error illum! Corporis illum natus ipsum consequatur
          blanditiis ut in veniam aliquid fugiat perferendis, expedita
          repudiandae deserunt voluptatibus quod repellendus recusandae
          doloribus saepe vel. Reprehenderit omnis velit qui modi, suscipit
          corporis laudantium laborum fugit itaque.
        </p>
        <div className="stars">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
        </div>
      </div>
      <div className="resc-3">
        <h1 style={{ fontSize: 15, marginLeft: "10%" }}>
          Väldigt givande film
        </h1>
        <h2 style={{ fontSize: 15, marginLeft: "10%" }}>Shrekmannen </h2>
        <h3 style={{ fontSize: 9, marginLeft: "10%" }}> 21 februari 2022</h3>
        <p className="resctext" style={{ marginLeft: "10%" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus id
          aliquam fugit blanditiis maiores vel corrupti veritatis ex rem magni
          pariatur voluptatum perferendis iusto, obcaecati est exercitationem
          atque, adipisci qui quia ea ipsam. Mollitia iste obcaecati fuga ad
          labore maxime alias, maiores dolorum cum blanditiis vel earum ipsum
          aliquam? Consequatur?
        </p>
        <div className="stars">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
        </div>
      </div>
    </div>
  </div>
  <h1 style={{ marginLeft: "5%" }}>Skådespelare </h1>
  <div className="grid-containersec" style={{ backgroundColor: "#131313" }}>
    <div className="actor">
      <h2>Mike Myers</h2>
      <img
        className="moviepicture"
        src="/Users/mikaelmeander/Desktop/Html skoj/MV5BMTY0MTM1MTM5Nl5BMl5BanBnXkFtZTcwNzA1OTM3MQ@@._V1_-2.jpg"
        style={{ borderRadius: "15%" }}
      />
    </div>
    <div className="actor">
      <h2>Cameron Diaz</h2>
      <img
        className="moviepicture"
        src="/Users/mikaelmeander/Desktop/Html skoj/MV5BMTkxNTI5NzM4MV5BMl5BanBnXkFtZTcwMTI3ODY3Mg@@._V1_FMjpg_UX1000_.jpg"
        style={{ borderRadius: "15%" }}
      />
    </div>
    <div className="actor">
      <h2>Antonio Banderas</h2>
      <img
        className="moviepicture"
        src="/Users/mikaelmeander/Desktop/Html skoj/Antonio_Banderas_2014.jpg"
        style={{ borderRadius: "15%" }}
      />
    </div>
    <div className="actor">
      <h2>Eddie Murphy</h2>
      <img
        className="moviepicture"
        src="/Users/mikaelmeander/Desktop/Html skoj/Eddie-Murphy-2007.jpg-2.webp"
        style={{ borderRadius: "15%" }}
      />
    </div>
    <div className="actor">
      <h2>Julie Andrews</h2>
      <img
        className="moviepicture"
        src="/Users/mikaelmeander/Desktop/Html skoj/MV5BMjExMTYyODA2Ml5BMl5BanBnXkFtZTYwMTgyMDA0._V1_.jpg"
        style={{ borderRadius: "15%" }}
      />
    </div>
  </div>

</>


        )
    }
}
export default Movie;

