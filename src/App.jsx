import React, { useState, useEffect } from 'react';
import './assets/css/style.css'

function App() {
  // Definimos los estilos de fuentes para aplicarlos fácilmente
  const elegantSerif = {
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
  };
  const elegantCursive = {
    fontFamily: "'Great Vibes', 'Apple Chancery', 'Segoe Script', cursive"
  };
  // --- LÓGICA DE LA CUENTA REGRESIVA ---
  const calculateTimeLeft = () => {
    const weddingDate = new Date('2026-06-27T18:00:00');
    const difference = weddingDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        segs: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5" style={{ backgroundColor: '#1B3058 !important' }}>
        <a href="index.html" className="navbar-brand d-block d-lg-none">
          <h1 className="mb-n2" style={{ ...elegantCursive, color: 'white' }}>Pablo <span style={{ color: 'rgb(113 74 0)' }}>&</span> Lupita</h1>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav ml-auto py-0">
            <a href="#home" className="nav-item nav-link active">Inicio</a>
            <a href="#parents" className="nav-item nav-link">Nuestra Familia</a>
            <a href="#event" className="nav-item nav-link">Evento</a>
          </div>
          <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
            <h1 className="mb-n2" style={{ ...elegantCursive, color: 'white' }}>Pablo <span style={{ color: 'rgb(113 74 0)' }}>&</span> Lupita</h1>
          </a>
          <div className="navbar-nav mr-auto py-0">
            <a href="#gifts" className="nav-item nav-link">Regalos</a>
            <a href="#rsvp" className="nav-item nav-link">Confirmar</a>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5 pb-5" id="home">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item position-relative active" style={{ height: '100vh', minHeight: '400px' }}>
              <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{ objectFit: 'cover' }} alt="Carousel 1" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h5 className="text-white text-uppercase mb-3" style={{ ...elegantSerif, letterSpacing: '4px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    Tenemos el honor de invitarte
                  </h5>
                  <h1 className="display-1 text-white mb-md-4" style={{ ...elegantCursive, marginTop: '20px' }}>Pablo & Lupita</h1>
                  <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                    <h3 className="text-uppercase font-weight-normal text-white m-0" style={{ letterSpacing: '2px', ...elegantSerif }}>¡Nos casaremos!</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{ height: '100vh', minHeight: '400px' }}>
              <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{ objectFit: 'cover' }} alt="Carousel 2" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h5 className="text-white text-uppercase mb-3" style={{ ...elegantSerif, letterSpacing: '4px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    Tenemos el honor de invitarte
                  </h5>
                  <h1 className="display-1 text-white mb-md-4" style={{ ...elegantCursive, marginTop: '20px' }}>Pablo & Lupita</h1>
                  <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                    <h3 className="text-uppercase font-weight-normal text-white m-0" style={{ letterSpacing: '2px', ...elegantSerif }}>¡Nos casaremos!</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{ height: '100vh', minHeight: '400px' }}>
              <img className="position-absolute w-100 h-100" src="img/989af255-a572-4567-b6f1-e4b30d83b684.jpg" style={{ objectFit: 'cover' }} alt="Carousel 3" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h5 className="text-white text-uppercase mb-3" style={{ ...elegantSerif, letterSpacing: '4px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    Tenemos el honor de invitarte
                  </h5>
                  <h1 className="display-1 text-white mb-md-4" style={{ ...elegantCursive, marginTop: '20px' }}>Pablo & Lupita</h1>
                  <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                    <h3 className="text-uppercase font-weight-normal text-white m-0" style={{ letterSpacing: '2px', ...elegantSerif }}>¡Nos casaremos!</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev justify-content-start" href="#header-carousel" data-slide="prev">
            <div className="btn btn-primary px-0" style={{ width: '68px', height: '68px', backgroundColor: 'rgb(113 74 0)', border: 'none' }}>
              <span className="carousel-control-prev-icon mt-3"></span>
            </div>
          </a>
          <a className="carousel-control-next justify-content-end" href="#header-carousel" data-slide="next">
            <div className="btn btn-primary px-0" style={{ width: '68px', height: '68px', backgroundColor: 'rgb(113 74 0)', border: 'none' }}>
              <span className="carousel-control-next-icon mt-3"></span>
            </div>
          </a>
        </div>
      </div>
      {/* Carousel End */}

      {/* --- Cuenta Regresiva Start --- */}
      <div className="container-fluid py-5">
        <div className="container text-center">
          <h2 className="mb-4" style={{ ...elegantSerif, color: '#1B3058', fontWeight: 'bold' }}>Faltan solo...</h2>
          <div className="row justify-content-center">
            {Object.keys(timeLeft).map((interval) => (
              <div className="col-3 col-md-2 mb-3" key={interval}>
                <div className="p-3 shadow-sm" style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '15px', border: '2px solid rgb(113 74 0)' }}>
                  <h2 className="mb-0" style={{ ...elegantSerif, color: 'rgb(113 74 0)', fontWeight: 'bold' }}>{timeLeft[interval] || '0'}</h2>
                  <span className="text-uppercase" style={{ fontSize: '0.7rem', color: '#1B3058', fontWeight: 'bold' }}>{interval}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Cuenta Regresiva End */}

      {/* Parents & Godparents Start */}
      <div className="container-fluid py-5" id="parents">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: '3px', color: 'rgb(113, 74, 0)', fontWeight: 'bold' }}>Bendecidos por</h6>
            <h1 className="display-4" style={{ color: '#1B3058', ...elegantCursive }}>Nuestra Familia</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="row text-center">
            <div className="col-md-6 mb-4">
              <h3 style={{ color: 'rgb(113, 74, 0)', ...elegantCursive, fontWeight: 500 }}>Padres de Pablo</h3>
              <p className="mb-1 font-weight-bold" style={{ ...elegantSerif, fontSize: '1.5rem' }}>Víctor Manuel González Barra</p>
              <p className="font-weight-bold" style={{ ...elegantSerif, fontSize: '1.5rem' }}>Ana María Alvarado Vera</p>
            </div>
            <div className="col-md-6 mb-4">
              <h3 style={{ color: 'rgb(113, 74, 0)', ...elegantCursive, fontWeight: 500 }}>Madre de Lupita</h3>
              <p className="font-weight-bold" style={{ ...elegantSerif, fontSize: '1.5rem' }}>Auda Ofelia Flores Montenegro</p>
            </div>
          </div>
          <div className="row mt-2 text-center">
            <div className="col-12">
              <h3 style={{ color: 'rgb(113, 74, 0)', ...elegantCursive, fontWeight: 500 }}>Nuestros Padrinos</h3>
              <p className="mb-1 font-weight-bold" style={{ ...elegantSerif, fontSize: '1.5rem' }}>Arturo Ayala Flores</p>
              <p className="font-weight-bold" style={{ ...elegantSerif, fontSize: '1.5rem' }}>Silvia Cristina Espejel Sánchez</p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Start */}
      <div className="container-fluid py-5" id="event">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: '3px', color: 'rgb(113 74 0)', fontWeight: 'bold' }}>Evento</h6>
            <h1 className="display-4" style={{ color: '#1B3058', ...elegantCursive }}>Dónde y Cuándo</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10 text-center mb-5">
              <h5 className="text-muted" style={{ fontStyle: 'italic', lineHeight: '1.6', ...elegantSerif, fontWeight: 500, fontSize: '1.6rem' }}>
                «¡Te pedimos que participes de la celebración del sacramento del matrimonio acudiendo a la misa! Es lo más importante para nosotros y, si puedes, adquiere el estado de gracia confesándote para que puedas recibir la comunión y ofrecerla por nuestro matrimonio.»
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 border-right" style={{ borderColor: 'rgb(113 74 0) !important' }}>
              <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
                <img className="img-fluid mb-4 w-75 shadow" src="img/catedral.jpg" alt="Catedral" style={{ borderRadius: '15px', height: '250px', objectFit: 'cover' }} />
                <h4 className="mb-3" style={{ color: '#1B3058', fontWeight: '700', ...elegantSerif }}>La Misa</h4>
                <p className="mb-1" style={{ fontSize: '1.3rem', color: 'rgb(113 74 0)', fontWeight: 'bold', ...elegantSerif }}>Santa Iglesia Catedral de Tehuacán</p>
                <p className="mb-1" style={{ fontStyle: 'italic', color: '#1B3058', ...elegantSerif }}>Preside: Pbro. Gonzalo González Alvarado, msp.</p>
                <p className="mb-0" style={elegantSerif}><strong>27 de Junio, 2026 - 6:00 PM</strong></p>
                <a href="https://maps.app.goo.gl/vP91kqvgzyBTHtmNA" target="_blank" rel="noreferrer" className="btn btn-outline-primary mt-2" style={{ borderColor: 'rgb(113 74 0)', color: 'rgb(113 74 0)', ...elegantSerif }}>Ver ubicación</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center text-md-left ml-md-3">
                <img className="img-fluid mb-4 w-75 shadow" src="img/julia.jpg" alt="Salón" style={{ borderRadius: '15px', height: '250px', objectFit: 'cover' }} />
                <h4 className="mb-3" style={{ color: '#1B3058', fontWeight: '700', ...elegantSerif }}>La Fiesta</h4>
                <p className="mb-1" style={elegantSerif}>Rancho "Santa Julia"</p>
                <p className="mb-0" style={elegantSerif}><strong>Después de la Eucaristía</strong></p>
                <a href="https://maps.app.goo.gl/PBWn4oAraUwkA8Q19" target="_blank" rel="noreferrer" className="btn btn-outline-primary mt-2" style={{ borderColor: 'rgb(113 74 0)', color: 'rgb(113 74 0)', ...elegantSerif }}>Ver ubicación</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gifts Start */}
      <div className="container-fluid py-5" id="gifts">
        <div className="container py-5 text-center">
          <div className="section-title position-relative text-center">
            <h1 className="display-4" style={{ color: '#1B3058', ...elegantCursive }}>Un Detalle</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <p className="mb-4" style={{ ...elegantSerif, fontSize: '1.5rem' }}>«Su compañía es lo más importante para nosotros. Si desean tener un detalle adicional, pueden llevar un presente o ayudarnos a cumplir nuestro sueño de amueblar nuestro hogar y disfrutar de nuestro primer viaje como esposos.»</p>
              <div className="bg-light p-4 shadow-sm" style={{ borderRadius: '15px', border: '2px solid rgb(113 74 0)' }}>
                <p className="text-uppercase mb-1" style={{ fontSize: '1.5rem', color: '#1B3058', ...elegantSerif }}>Clabe Interbancaria</p>
                <h3 className="font-weight-bold mb-2" style={{ color: 'rgb(113 74 0)', ...elegantSerif, fontSize: '1.9rem' }}>127180001213912334</h3>
                <p className="mb-0 text-muted" style={elegantSerif}><strong style={{ color: '#1B3058' }}>Banco Azteca</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RSVP Start */}
      <div className="container-fluid py-5" id="rsvp">
        <div className="container py-5 text-center">
          <div className="section-title position-relative text-center">
            <h1 className="display-4" style={{ color: '#1B3058', ...elegantCursive }}>¿Nos acompañas?</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <p className="mb-4 mt-3" style={{ ...elegantSerif, fontSize: '1.5rem' }}>
            Por favor, confírmanos tu asistencia antes del <strong>15 de Marzo de 2026</strong>.
          </p>
          <div className="d-flex justify-content-center flex-column flex-md-row">
            <a href="https://wa.me/5215548663698?text=¡Hola! Confirmo mi asistencia a celebrar con ustedes su unión matrimonial." className="btn font-weight-bold py-3 px-5 m-2 shadow" style={{ backgroundColor: '#1B3058', color: 'white', borderRadius: '30px', ...elegantSerif }}>
              Asistiré con gusto
            </a>
            <a href="https://wa.me/5215548663698?text=Hola, lamentablemente no podré asistir a su boda, pero les deseo lo mejor." className="btn btn-outline-secondary font-weight-bold py-3 px-5 m-2" style={{ borderRadius: '30px', ...elegantSerif, color: '#1B3058', borderColor: '#1B3058' }}>
              No podré asistir
            </a>
          </div>
        </div>
      </div>

      {/* Footer Start */}
      <div className="container-fluid py-5" id="contact" style={{ marginTop: '90px', backgroundColor: '#1B3058' }}>
        <div className="container text-center py-5">
          <h1 style={{ color: 'rgb(113 74 0)', ...elegantCursive, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', fontWeight: 'bold', fontSize: '4.5rem', lineHeight: 1.2 }}>¡Gracias!</h1>
          <p className="m-0" style={{ ...elegantSerif, letterSpacing: '1px', color: 'black' }}>© Pablo & Lupita 2026</p>
        </div>
      </div>
    </>
  );
}

export default App;