import ford from '../img/autos/ford/ford.png';
import mondeo from '../img/autos/ford/mondeo/mondeo.jpg';
import bronco from '../img/autos/ford/bronco/bronco.jpg';
import ecosport from '../img/autos/ford/ecosport/ecosport.jpg';
import territory from '../img/autos/ford/territory/territory.jpg';
import fiat from '../img/autos/fiat/fiat.png';
import mobi from '../img/autos/fiat/mobi/mobi.png';
import toro from '../img/autos/fiat/toro/toro.png';
import uno from '../img/autos/fiat/uno/uno.png';
import peugeot from '../img/autos/peugeot/peugeot.png';
import p208 from '../img/autos/peugeot/208/208.png';
import p308 from '../img/autos/peugeot/308/308.png';
import p5008 from '../img/autos/peugeot/5008/5008.png';
import patagonica from '../img/autos/peugeot/patagonica/patagonica.png';
import renault from '../img/autos/renault/renault.png';
import captur from '../img/autos/renault/captur/captur.jpg';
import logan from '../img/autos/renault/logan/logan.jpg';
import sandero from '../img/autos/renault/sandero/sandero.jpg';
import steway from '../img/autos/renault/steway/steway.jpg';
import volkswagen from '../img/autos/volkswagen/volkswagen.png';
import gol from '../img/autos/volkswagen/gol/gol.png';
import polo from '../img/autos/volkswagen/polo/polo.png';
import virtus from '../img/autos/volkswagen/virtus/virtus.png';

import { imgFordMondeo, imgFordBronco, imgFordEcosport, imgFordTerritory  } from '../Data/imgAutos';
import { imgFiatMobi, imgFiatToro, imgFiatUno } from '../Data/imgAutos';
import { imgPeugeot208, imgPeugeot308, imgPeugeot5008, imgPeugeotPatagonica } from '../Data/imgAutos';
import { imgRenaultCaptur, imgRenaultLogan, imgRenaultSandero, imgRenaultSteway } from '../Data/imgAutos';
import { imgVolkswagenGol, imgVolkswagenPolo, imgVolkswagenVirtus } from '../Data/imgAutos';


export const apiSimpleAutos= [
    {
        id: 179760,
        marca: 'Ford',
        modelo: 'Mondeo Híbrido',
        precio: 11000000,
        img: mondeo,
        cantidad: 4,
        imgMarca: ford,
        descripcion: 'Ford Mondeo Híbrido 2021',
        tipo: 'auto'
    },{
        id: 255882,
        marca: 'Ford',
        modelo: 'Bronco',
        precio:  6500000,
        cantidad: 4,
        img: bronco,
        imgMarca: ford,
        descripcion: 'Ford Bronco 2021',
        tipo: 'auto'
    },{
        id: 467051,
        marca: 'Ford',
        modelo: 'Ecosport',
        precio: 3400000,
        cantidad: 4,
        img: ecosport,
        imgMarca: ford,
        descripcion: 'Ford Ecosport 2021',
        tipo: 'auto'
    },{
        id: 894454,
        marca: 'Ford',
        modelo: 'Territory',
        precio: 5400000,
        cantidad: 4,
        img: territory,
        imgMarca: ford,
        descripcion: 'Ford Territory 2021',
        tipo: 'auto'
    },{
        id: 585811,
        marca: 'Fiat',
        modelo: 'Mobi',
        precio: 1300000,
        cantidad: 4,
        img: mobi,
        imgMarca: fiat,
        descripcion: 'Fiat Mobi 2021',
        tipo: 'auto'
    },{
        id: 335661,
        marca: 'Fiat',
        modelo: 'Toro',
        precio: 2800000,
        cantidad: 4,
        img: toro,
        imgMarca: fiat,
        descripcion: 'Fiat Toro 2021',
        tipo: 'auto'
    },{
        id: 173248,
        marca: 'Fiat',
        modelo: 'Uno Way',
        precio: 1200000,
        cantidad: 4,
        img: uno,
        imgMarca: fiat,
        descripcion: 'Fiat Uno 2021',
        tipo: 'auto'
    },{
        id: 892602,
        marca: 'Peugeot',
        modelo: '208',
        precio: 2700000,
        cantidad: 4,
        img: p208,
        imgMarca: peugeot,
        descripcion: 'Peugeot 208 2021',
        tipo: 'auto'
    },{
        id: 347439,
        marca: 'Peugeot',
        modelo: '308',
        precio: 5500000,
        cantidad: 4,
        img: p308,
        imgMarca: peugeot,
        descripcion: 'Peugeot 308 2021',
        tipo: 'auto'
    },{
        id: 158095,
        marca: 'Peugeot',
        modelo: '5008',
        precio: 9500000,
        cantidad: 4,
        img: p5008,
        imgMarca: peugeot,
        descripcion: 'Peugeot 5008 2021',
        tipo: 'auto'
    },{
        id: 234765,
        marca: 'Peugeot',
        modelo: 'Partner Patagonica',
        precio: 3800000,
        cantidad: 4,
        img: patagonica,
        imgMarca: peugeot,
        descripcion: 'Peugeot Partner Patagonica 2021',
        tipo: 'auto'
    },{
        id: 704160,
        marca: 'Renault',
        modelo: 'Captur',
        precio: 3500000,
        cantidad: 4,
        img: captur,
        imgMarca: renault,
        descripcion: 'Renault Captur 2021',
        tipo: 'auto'
    },{
        id: 496303,
        marca: 'Renault',
        modelo: 'Logan',
        precio: 3800000,
        cantidad: 4,
        img: logan,
        imgMarca: renault,
        descripcion: 'Renault Logan 2021',
        tipo: 'auto'
    },{
        id: 496335,
        marca: 'Renault',
        modelo: 'Sandero',
        precio: 2700000,
        cantidad: 4,
        img: sandero,
        imgMarca: renault,
        descripcion: 'Renault Sandero 2021',
        tipo: 'auto'
    },{
        id: 247474,
        marca: 'Renault',
        modelo: 'Stepway',
        precio: 2900000,
        cantidad: 4,
        img: steway,
        imgMarca: renault,
        descripcion: 'Renault Stepway 2021',
        tipo: 'auto'
    },{
        id: 398579,
        marca: 'Volkswagen',
        modelo: 'Gol',
        precio: 1800000,
        cantidad: 4,
        img: gol,
        imgMarca: volkswagen,
        descripcion: 'Volkswagen Gol 2021',
        tipo: 'auto'
    },{
        id: 892280,
        marca: 'Volkswagen',
        modelo: 'Polo',
        precio: 3800000,
        cantidad: 4,
        img: polo,
        imgMarca: volkswagen,
        descripcion: 'Volkswagen Polo 2021',
        tipo: 'auto'
    },{
        id: 919775,
        marca: 'Volkswagen',
        modelo: 'Virtus',
        precio: 4600000,
        cantidad: 4,
        img: virtus,
        imgMarca: volkswagen,
        descripcion: 'Volkswagen Virtus 2021',
        tipo: 'auto'
    }
]
export const apiDetalladaAutos= [
    {
        id: 179760,
        marca: 'Ford',
        modelo: 'Mondeo Híbrido',
        precio: 11000000,
        cantidad: 4,
        img: mondeo,
        imgMarca: ford,
        imgBanner: imgFordMondeo.banner,
        imgDescriptivas: [imgFordMondeo.img1, imgFordMondeo.img2, imgFordMondeo.img3, imgFordMondeo.img4],
        Titulo: 'Ford Mondeo Eficiencia y rendimiento',
        descripcion: 'Bajo el capót de un híbrido verán las mismas partes que en un vehículo convencional más una gran diferencia: un motor eléctrico. El motor de combustión interna y el motor eléctrico trabajan en conjunto para propulsar el vehículo.',
        tipo: 'auto'
    },{
        id: 255882,
        marca: 'Ford',
        modelo: 'Bronco',
        precio: 6500000,
        cantidad: 4,
        img: bronco,
        imgMarca: ford,
        imgBanner: imgFordBronco.banner,
        imgDescriptivas: [imgFordBronco.img1, imgFordBronco.img2, imgFordBronco.img3, imgFordBronco.img4],
        Titulo: 'El icono de la aventura',
        descripcion: 'La Bronco Sport Wildtrak cuenta con un avanzado sistema de tracción 4WD con control vectorial de torque y bloqueo de diferencial trasero. Además, su Sistema de Gestión de Terrenos (GOAT) tiene hasta 7 modos de manejo.',
        tipo: 'auto'
    },{
        id: 467051,
        marca: 'Ford',
        modelo: 'Ecosport',
        precio: 3400000,
        cantidad: 4,
        img: ecosport,
        imgMarca: ford,
        imgBanner: imgFordEcosport.banner,
        imgDescriptivas: [imgFordEcosport.img1, imgFordEcosport.img2, imgFordEcosport.img3, imgFordEcosport.img4],
        Titulo: 'Creara para transfornar tu imaginación.',
        descripcion: 'La Ecosport conserva los elementos que definen su identidad: transmite confianza, combina refinamiento urbano con espíritu aventurero y revela una alta calidad en su dinámica de manejo.',
        tipo: 'auto'
    },{
        id: 894454,
        marca: 'Ford',
        modelo: 'Territory',
        precio: 5400000,
        cantidad: 4,
        img: territory,
        imgMarca: ford,
        imgBanner: imgFordTerritory.banner,
        imgDescriptivas: [imgFordTerritory.img1, imgFordTerritory.img2, imgFordTerritory.img3, imgFordTerritory.img4],
        Titulo: 'Entrentemos la rutina, enfrentemos el cambio',
        descripcion: 'La Territory incorpora Ford Co-Pilot 360, un avanzado sistema de asistencia a la conducción de vanguardia, que incluye camara 360, alerta de puntos ciego, Sistema antibloqueo de frenos (ABS), distribución electrónica de frenado (EBD) y asistencia electrónica al frenado de emergencia (EBA)​',
        tipo: 'auto'
    },{
        id: 585811,
        marca: 'Fiat',
        modelo: 'Mobi',
        precio: 1300000,
        cantidad: 4,
        img: mobi,
        imgMarca: fiat,
        imgBanner: imgFiatMobi.banner,
        imgDescriptivas: [imgFiatMobi.img1, imgFiatMobi.img2, imgFiatMobi.img3, imgFiatMobi.img4],
        Titulo: 'Nuevo Fiat MOBI Like',
        descripcion: 'El FIAT Mobi mantiene su esencia pero ahora renueva su parrilla delantera y algunos otros detalles en línea con el resto de los modelos de FIAT. Este city car también agrega novedades en el equipamiento como la central multimedia de 7’’ con conectividad Android Auto & Carplay.',
        tipo: 'auto'
    },{
        id: 335661,
        marca: 'Fiat',
        modelo: 'Toro',
        precio: 2800000,
        cantidad: 4,
        img: toro,
        imgMarca: fiat,
        imgBanner: imgFiatToro.banner,
        imgDescriptivas: [imgFiatToro.img1, imgFiatToro.img2, imgFiatToro.img3, imgFiatToro.img4],
        Titulo: 'Tienes todo lo que necesitás para una nueva aventura.',
        descripcion: 'De una, te va a fascinar el nuevo capot. Después, te vas a enamorar de la nueva parrilla, con el logo de Fiat y el detalle de la bandera italiana. Un diseño musculoso, que equilibra belleza y fuerza. El frente de la nueva Fiat Toro es increible.',
        tipo: 'auto'
    },{
        id: 173248,
        marca: 'Fiat',
        modelo: 'Uno Way',
        precio: 1200000,
        cantidad: 4,
        img: uno,
        imgMarca: fiat,
        imgBanner: imgFiatUno.banner,
        imgDescriptivas: [imgFiatUno.img1, imgFiatUno.img2, imgFiatUno.img3, imgFiatUno.img4],
        Titulo: 'Varios autos en UNO solo.',
        descripcion: 'El Fiat Uno llama la atención. Además de su renovado diseño frontal –más moderno y lleno de personalidad–, el Uno cuenta con nuevos paragolpes y parrilla, que resaltan los contornos del modelo.',
        tipo: 'auto'
    },{
        id: 892602,
        marca: 'Peugeot',
        modelo: '208',
        precio: 2700000,
        cantidad: 4,
        img: p208,
        imgMarca: peugeot,
        imgBanner: imgPeugeot208.banner,
        imgDescriptivas: [imgPeugeot208.img1, imgPeugeot208.img2, imgPeugeot208.img3, imgPeugeot208.img4],
        Titulo: 'Unboring the future',
        descripcion: 'El diseño del 208 adopta el nuevo lenguaje de diseño de la marca Peugeot, con la nueva firma lumínica que se asemeja a los colmillos del León. En el frente, aparece el nombre del modelo para un toque distintivo y moderno. En el lateral, el juego de sombras le da un perfil dinámico. Y en la parte posterior, las luces traseras con forma de garra completan un diseño armonioso.',
        tipo: 'auto'
    },{
        id: 347439,
        marca: 'Peugeot',
        modelo: '308',
        precio: 5500000,
        cantidad: 4,
        img: p308,
        imgMarca: peugeot,
        imgBanner: imgPeugeot308.banner,
        imgDescriptivas: [imgPeugeot308.img1, imgPeugeot308.img2, imgPeugeot308.img3, imgPeugeot308.img4],
        Titulo: 'Estilo y Elegancia',
        descripcion: 'De nuevas líneas en su diseño exterior, el Peugeot 308 integra los últimos códigos estilísticos de la marca. A simple vista, un estilo moderno con detalles tecnológicos lumínicos impactantes, de frente felino, que conjuga lo dinámico y lo exclusivo.',
        tipo: 'auto'
    },{
        id: 158095,
        marca: 'Peugeot',
        modelo: 'SUV 5008',
        precio: 9500000,
        cantidad: 4,
        img: p5008,
        imgMarca: peugeot,
        imgBanner: imgPeugeot5008.banner,
        imgDescriptivas: [imgPeugeot5008.img1, imgPeugeot5008.img2, imgPeugeot5008.img3, imgPeugeot5008.img4],
        Titulo: 'SUV Peugeot 5008 ',
        descripcion: 'Dejate seducir por el nuevo SUV PEUGEOT 5008. Con un nuevo frente, este SUV tiene líneas elegantes y modernas que conjugan en un diseño sofisticado. Un vehículo pensado para disfrutar en familia gracias a sus 7 plazas.',
        tipo: 'auto'
    },{
        id: 234765,
        marca: 'Peugeot',
        modelo: 'Partner Patagonica',
        precio: 3800000,
        cantidad: 4,
        img: patagonica,
        imgMarca: peugeot,
        imgBanner: imgPeugeotPatagonica.banner,
        imgDescriptivas: [imgPeugeotPatagonica.img1, imgPeugeotPatagonica.img2, imgPeugeotPatagonica.img3, imgPeugeotPatagonica.img4],
        Titulo: 'La Compañera para tu familia',
        descripcion: 'Con su aspecto que inspira robustez y dinamismo, Partner Patagonica afirma su pertenencia al universo de los monovolumenes. Sus faros de vidrio liso y las protecciones reforzadas imponen un carácter robusto de confianza y solidez. ',
        tipo: 'auto'
    },{
        id: 704160,
        marca: 'Renault',
        modelo: 'Captur',
        precio: 3500000,
        cantidad: 4,
        img: captur,
        imgMarca: renault,
        imgBanner: imgRenaultCaptur.banner,
        imgDescriptivas: [imgRenaultCaptur.img1, imgRenaultCaptur.img2, imgRenaultCaptur.img3, imgRenaultCaptur.img4],
        Titulo: 'Renault Captur',
        descripcion: 'Inspirado en el concept car del mismo nombre, Renault CAPTUR representa un nuevo lenguaje en términos de diseño: moderno y sofisticado.',
        tipo: 'auto'
    },{
        id: 496303,
        marca: 'Renault',
        modelo: 'Logan',
        precio: 3800000,
        cantidad: 4,
        img: logan,
        imgMarca: renault,
        imgBanner: imgRenaultLogan.banner,
        imgDescriptivas: [imgRenaultLogan.img1, imgRenaultLogan.img2, imgRenaultLogan.img3, imgRenaultLogan.img4],
        Titulo: 'Un sedán para el momento en el que estás.',
        descripcion: 'El diseño renovado, el gran espacio interior junto con un baúl suficientemente grande para todo lo que querés llevar, son algunas de las características que hacen al Renault LOGAN, el vehículo que te merecés.',
        tipo: 'auto'
    },{
        id: 496335,
        marca: 'Renault',
        modelo: 'Sandero',
        precio: 2700000,
        cantidad: 4,
        img: sandero,
        imgMarca: renault,
        imgBanner: imgRenaultSandero.banner,
        imgDescriptivas: [imgRenaultSandero.img1, imgRenaultSandero.img2, imgRenaultSandero.img3, imgRenaultSandero.img4],
        Titulo: 'Sos urbano,sos alguien con caractér.',
        descripcion: 'Con un diseño completamente renovado, su nueva identidad lumínica, llantas diamantadas 16” y su caja CVT, el Renault SANDERO es el auto perfecto que se adapta a todo lo que sos.',
        tipo: 'auto'
    },{
        id: 247474,
        marca: 'Renault',
        modelo: 'Stepway',
        precio: '$2.900.000',
        cantidad: 4,
        img: steway,
        imgMarca: renault,
        imgBanner: imgRenaultSteway.banner,
        imgDescriptivas: [imgRenaultSteway.img1, imgRenaultSteway.img2, imgRenaultSteway.img3, imgRenaultSteway.img4],
        Titulo: 'Un vehículo con actitud para enfrentar cualquier camino.',
        descripcion: 'Su gran despeje del suelo y sus nuevos faros C-Shape le otorgan una actitud intrépida que junto a las luces LED traseras, trazan una línea que resalta el movimiento. Un auto diseñado a la altura de lo que te propongas .',
        tipo: 'auto'
    },{
        id: 398579,
        marca: 'Volkswagen',
        modelo: 'Gol',
        precio: 1800000,
        cantidad: 4,
        img: gol,
        imgMarca: volkswagen,
        imgBanner: imgVolkswagenGol.banner,
        imgDescriptivas: [imgVolkswagenGol.img1, imgVolkswagenGol.img2, imgVolkswagenGol.img3, imgVolkswagenGol.img4],
        Titulo: 'El auto que te mereces',
        descripcion: 'El Gol incorpora en su versión Trendline la caja automática Tiptronic de 6 velocidades para que disfrutes de tus viajes como nunca antes. Esta nueva característica se combina con el reconocido motor 1.6 l de 16 V y 110 CV.',
        tipo: 'auto'
    },{
        id: 892280,
        marca: 'Volkswagen',
        modelo: 'Polo',
        precio: 3800000,
        cantidad: 4,
        img: polo,
        imgMarca: volkswagen,
        imgBanner: imgVolkswagenPolo.banner,
        imgDescriptivas: [imgVolkswagenPolo.img1, imgVolkswagenPolo.img2, imgVolkswagenPolo.img3, imgVolkswagenPolo.img4],
        Titulo: 'Vas a querer llamarlo tu nuevo auto',
        descripcion: 'El nuevo Polo GTS se convierte en una referencia en deportividad dentro de su segmento gracias a su diseño imponente y exclusivo. Los detalles de calidad en rojo y negro brillante, los faros full LED y su frontal aguerrida nos muestran toda la deportividad en una sola mirada.',
        tipo: 'auto'
    },{
        id: 919775,
        marca: 'Volkswagen',
        modelo: 'Virtus',
        precio: 4600000,
        cantidad: 4,
        img: virtus,
        imgMarca: volkswagen,
        imgBanner: imgVolkswagenVirtus.banner,
        imgDescriptivas: [imgVolkswagenVirtus.img1, imgVolkswagenVirtus.img2, imgVolkswagenVirtus.img3, imgVolkswagenVirtus.img4],
        Titulo: 'La potencia que buscás, con la comodidad que necesitás.',
        descripcion: 'El Nuevo Virtus GTS se convierte en una nueva referencia en deportividad marcando diferencia con su gran espacio interno. Su diseño imponente exclusivo trae detalles de altísima calidad en color rojo y negro sumados a las líneas cromadas en su exterior. Su frontal aguerrido nos muestra toda la deportividad en una sola mirada.',
        tipo: 'auto'
    }
]