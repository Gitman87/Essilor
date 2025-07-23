const firstCardContent = `<li class="hero-wrapper-li">
            
              <img src="./assets/images/photos/first_card.webp" class="hero-wrapper-image" alt="">
            
            <div class="hero-wrapper-overlay"></div>
            <div class="hero-wrapper-content-wrapper">
              <div class="hero-wrapper-content-wrapper-description">
                <h2 class="hero-wrapper-content-wrapper-description-header">
                  Odkryj Varilux Physio extensee
                </h2>
                <p class="hero-wrapper-content-wrapper-description-para">
                  Soczewka progresywna, która przewiduje zmiany rozmiaru źrenicy wciągu dnia. Wspomagane przez sztuczną inteligencję ioparte na dynamice źrenic soczewki Varilux® Physio® extensee™ optymalizują budowę soczewki wzależności od zmian rozmiaru źrenicy, zapewniając doskonałe widzenie wkażdym świetle.
                </p>
                <button class="hero-wrapper-content-wrapper-description-button">Odkryj</button>
              </div>
              <div class="hero-wrapper-content-wrapper-carousel">
                <button onclick="moveSlideLeft()" class="hero-wrapper-content-wrapper-carousel-left hero-wrapper-content-wrapper-carousel-left-disabled hero-nav-button">
                  <div class="hero-wrapper-content-wrapper-carousel-left-arrow hero-nav-arrow "> &lt; </div>
                  <div class="hero-wrapper-content-wrapper-carousel-left-active-circle"></div>
                </button>
                <div class="hero-wrapper-content-wrapper-carousel-line-container">
                  <hr class="hero-wrapper-content-wrapper-carousel-line-container-line">
                </div>
                <button  onclick="moveSlideRight()" class="hero-wrapper-content-wrapper-carousel-right hero-nav-button">
                  <div class="hero-wrapper-content-wrapper-carousel-right-arrow hero-nav-arrow"> > </div>
                  <div class="hero-wrapper-content-wrapper-carousel-right-frontcircle"></div>
                  <div class="hero-wrapper-content-wrapper-carousel-right-active-circle"></div>
                </button>
              </div>
            
          </li>`;
const secondCardContent = `<li class="hero-wrapper-li">
            
              <img src="./assets/images/photos/second_card.webp" class="hero-wrapper-image" alt="">
            
            <div class="hero-wrapper-overlay"></div>
            <div class="hero-wrapper-content-wrapper">
              <div class="hero-wrapper-content-wrapper-description">
                <h2 class="hero-wrapper-content-wrapper-description-header">
                  Evolving vision
                </h2>
                <p class="hero-wrapper-content-wrapper-description-para">
                W Essilor® wierzymy, że wzrok to nasz najcenniejszy zmysł, a pełne wykorzystanie jego potencjału może odmienić życie. Odkryj, jak nasze nieustanne innowacje wzmacniają i chronią Twój wzrok.
                </p>
                <button class="hero-wrapper-content-wrapper-description-button">Odkryj</button>
              </div>
              <div class="hero-wrapper-content-wrapper-carousel">
                <button onclick="moveSlideLeft()" class="hero-wrapper-content-wrapper-carousel-left hero-wrapper-content-wrapper-carousel-left-disabled hero-nav-button">
                  <div class="hero-wrapper-content-wrapper-carousel-left-arrow hero-nav-arrow "> &lt; </div>
                  <div class="hero-wrapper-content-wrapper-carousel-left-active-circle"></div>
                </button>
                <div class="hero-wrapper-content-wrapper-carousel-line-container">
                  <hr class="hero-wrapper-content-wrapper-carousel-line-container-line">
                </div>
                <button  onclick="moveSlideRight()" class="hero-wrapper-content-wrapper-carousel-right hero-nav-button">
                  <div class="hero-wrapper-content-wrapper-carousel-right-arrow hero-nav-arrow"> > </div>
                  <div class="hero-wrapper-content-wrapper-carousel-right-frontcircle"></div>
                  <div class="hero-wrapper-content-wrapper-carousel-right-active-circle"></div>
                </button>
              </div>
              </div>
            
          </li>`;
const thirdCardContent = `<li class="hero-wrapper-li">
            
              <img src="./assets/images/photos/third_card.webp" class="hero-wrapper-image" alt="">
            
            <div class="hero-wrapper-overlay"></div>
            <div class="hero-wrapper-content-wrapper">
              <div class="hero-wrapper-content-wrapper-description">
                <h2 class="hero-wrapper-content-wrapper-description-header">
                  Odkryj Transitions GEN S
                </h2>
                <p class="hero-wrapper-content-wrapper-description-para">
                 Oto Transitions® GEN S: nowy, ponadprzeciętny, oferujący dynamiczne i wyraźne widzenie, współgrający z ciągle zmieniającym się tempem życia standard dla soczewek, który pokochasz.
                </p>
                <button class="hero-wrapper-content-wrapper-description-button">Odkryj</button>
              </div>
              <div class="hero-wrapper-content-wrapper-carousel">
                <button onclick="moveSlideLeft()" class="hero-wrapper-content-wrapper-carousel-left hero-wrapper-content-wrapper-carousel-left-disabled hero-nav-button">
                  <div class="hero-wrapper-content-wrapper-carousel-left-arrow hero-nav-arrow "> &lt; </div>
                  <div class="hero-wrapper-content-wrapper-carousel-left-active-circle"></div>
                </button>
                <div class="hero-wrapper-content-wrapper-carousel-line-container">
                  <hr class="hero-wrapper-content-wrapper-carousel-line-container-line">
                </div>
                <button  onclick="moveSlideRight()" class="hero-wrapper-content-wrapper-carousel-right hero-nav-button">
                  <div class="hero-wrapper-content-wrapper-carousel-right-arrow hero-nav-arrow"> > </div>
                  <div class="hero-wrapper-content-wrapper-carousel-right-frontcircle"></div>
                  <div class="hero-wrapper-content-wrapper-carousel-right-active-circle"></div>
                </button>
              </div>
              </div>
            
          </li>`;
const fourthCardContent = `<li class="hero-wrapper-li">
            
              <img src="./assets/images/photos/fourth_card.webp" class="hero-wrapper-image" alt="">
            
            <div class="hero-wrapper-overlay"></div>
            <div class="hero-wrapper-content-wrapper">
              <div class="hero-wrapper-content-wrapper-description">
                <h2 class="hero-wrapper-content-wrapper-description-header">
                  Niezwykłe soczewki poprawiające jakość widzenia bez wysiłku
                </h2>
                <p class="hero-wrapper-content-wrapper-description-para">
                  Daj się oczarować przygodzie Persol x Varilux®, w której przejrzystość staje się oczywista. Ciesz się płynnymi przejściami z bliska na odległość, a wszystko to w kultowym stylu, który idealnie pasuje do Twojej wizji.
                </p>
                <button class="hero-wrapper-content-wrapper-description-button">Odkryj</button>
              </div>
              <div class="hero-wrapper-content-wrapper-carousel">
                <button onclick="moveSlideLeft()" class="hero-wrapper-content-wrapper-carousel-left hero-wrapper-content-wrapper-carousel-left-disabled hero-nav-button">
                  <div class="hero-wrapper-content-wrapper-carousel-left-arrow hero-nav-arrow "> &lt; </div>
                  <div class="hero-wrapper-content-wrapper-carousel-left-active-circle"></div>
                </button>
                <div class="hero-wrapper-content-wrapper-carousel-line-container">
                  <hr class="hero-wrapper-content-wrapper-carousel-line-container-line">
                </div>
                <button  onclick="moveSlideRight()" class="hero-wrapper-content-wrapper-carousel-right hero-nav-button">
                  <div class="hero-wrapper-content-wrapper-carousel-right-arrow hero-nav-arrow"> > </div>
                  <div class="hero-wrapper-content-wrapper-carousel-right-frontcircle"></div>
                  <div class="hero-wrapper-content-wrapper-carousel-right-active-circle"></div>
                </button>
              </div>
              </div>
            
          </li>`;
const fifthCardContent = `<li class="hero-wrapper-li">
            
              <img src="./assets/images/photos/fifth_card.webp" class="hero-wrapper-image" alt="">
            
            <div class="hero-wrapper-overlay"></div>
            <div class="hero-wrapper-content-wrapper">
              <div class="hero-wrapper-content-wrapper-description">
                <h2 class="hero-wrapper-content-wrapper-description-header">
                  Nowa generacja soczewek Varilux XR series
                </h2>
                <p class="hero-wrapper-content-wrapper-description-para">
               To soczewki progresywne, które perfekcyjnie odzwierciedlają ruchy Twoich oczu. Dzięki zaawansowanej technologii sztucznej inteligencji, soczewki Varilux® XR series™ są w stanie przewidzieć, jak obserwujesz świat, zapewniając natychmiastową ostrość, nawet podczas ruchu oraz płynne przejście od bliży do dali.
                </p>
                <button class="hero-wrapper-content-wrapper-description-button">Odkryj</button>
              </div>
              <div class="hero-wrapper-content-wrapper-carousel">
                <button onclick="moveSlideLeft()" class="hero-wrapper-content-wrapper-carousel-left hero-wrapper-content-wrapper-carousel-left-disabled hero-nav-button">
                  <div class="hero-wrapper-content-wrapper-carousel-left-arrow hero-nav-arrow "> &lt; </div>
                  <div class="hero-wrapper-content-wrapper-carousel-left-active-circle"></div>
                </button>
                <div class="hero-wrapper-content-wrapper-carousel-line-container">
                  <hr class="hero-wrapper-content-wrapper-carousel-line-container-line">
                </div>
                <button  onclick="moveSlideRight()" class="hero-wrapper-content-wrapper-carousel-right hero-nav-button">
                  <div class="hero-wrapper-content-wrapper-carousel-right-arrow hero-nav-arrow"> > </div>
                  <div class="hero-wrapper-content-wrapper-carousel-right-frontcircle"></div>
                  <div class="hero-wrapper-content-wrapper-carousel-right-active-circle"></div>
                </button>
              </div>
              </div>
            
          </li>`;
const sixthCardContent = `<li class="hero-wrapper-li">
            
              <img src="./assets/images/photos/sixth_card.webp" class="hero-wrapper-image" alt="">
            
            <div class="hero-wrapper-overlay"></div>
            <div class="hero-wrapper-content-wrapper">
              <div class="hero-wrapper-content-wrapper-description">
                <h2 class="hero-wrapper-content-wrapper-description-header">
                  Essilor Expertse
                </h2>
                <p class="hero-wrapper-content-wrapper-description-para">
                 Nie zawsze łatwo jest znaleźć idealną parę okularów. Oprawy muszą nam się podobać, a szkła okularowe – pasować do naszego stylu życia. Dzięki poradom właściwego specjalisty ochrony wzroku cały proces przebiegnie o wiele płynniej.
                </p>
                <button class="hero-wrapper-content-wrapper-description-button">Odkryj</button>
              </div>
              <div class="hero-wrapper-content-wrapper-carousel">
                <button onclick="moveSlideLeft()" class="hero-wrapper-content-wrapper-carousel-left hero-wrapper-content-wrapper-carousel-left-disabled hero-nav-button">
                  <div class="hero-wrapper-content-wrapper-carousel-left-arrow hero-nav-arrow "> &lt; </div>
                  <div class="hero-wrapper-content-wrapper-carousel-left-active-circle"></div>
                </button>
                <div class="hero-wrapper-content-wrapper-carousel-line-container">
                  <hr class="hero-wrapper-content-wrapper-carousel-line-container-line">
                </div>
                <button  onclick="moveSlideRight()" class="hero-wrapper-content-wrapper-carousel-right hero-nav-button">
                  <div class="hero-wrapper-content-wrapper-carousel-right-arrow hero-nav-arrow"> > </div>
                  <div class="hero-wrapper-content-wrapper-carousel-right-frontcircle"></div>
                  <div class="hero-wrapper-content-wrapper-carousel-right-active-circle"></div>
                </button>
              </div>
              </div>
            
          </li>`;
export {
  firstCardContent,
  secondCardContent,
  thirdCardContent,
  fourthCardContent,
  fifthCardContent,
  sixthCardContent,
};
