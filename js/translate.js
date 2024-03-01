const traducciones = {
    'es': {
		 'boton': 'Cambiar Idioma',
		'experience': 'Experiencia',
	    'skills': 'Habilidades',
	    'contactme': 'Contactamé',
		'language': 'Traducir Ingles',
		'aboutme': 'Acerca de mi',
		'moreaboutme': 'Mas Sobre Mi',
		'aboutme1': 'Como desarrollador experimentado de Backend Java y Scala, aporto más de 8 años de experiencia invaluable a la industria del desarrollo de software.',
		'aboutme2': 'Me caracterizo por mi energía, responsabilidad, compromiso, dinamismo y fuertes habilidades de liderazgo. Abrazando un viaje continuo de aprendizaje y crecimiento, afronto con entusiasmo nuevos retos y experiencias. Prospero en entornos de colaboración en equipo, viendo los problemas como oportunidades para innovar y desarrollar soluciones de vanguardia.',
		'aboutme3': 'Con la certificación de Scrum Developer y un diploma en arquitectura avanzada de microservicios y DevOps, estoy bien equipado para navegar por las complejidades de las prácticas de desarrollo modernas.',
	    'networksocial': 'Redes Sociales',
	    'cellphone': 'Celular: 3136280783',
	    'mail': 'Correo: jairo910731@gmail.com',
		'download': "Descargar"
    },
    'en': {
		'boton': 'Change Language',
		'experience': 'Experience',
		'skills': 'Skills',
		'contactme': 'Contact Me',
		'language': 'Translate Spanish',
		'aboutme': 'About Me',
		'moreaboutme': 'More About Me',
		'aboutme1': 'As a seasoned Backend Java and Scala developer, I bring over 8 years of invaluable experience to the software development industry.',
		'aboutme2': 'I am characterized by my energy, responsibility, commitment, dynamism, and strong leadership skills. Embracing a continuous journey of learning and growth, I eagerly tackle new challenges and experiences. I thrive in collaborative team environments, viewing problems as opportunities to innovate and develop cutting-edge solutions.',
		'aboutme3': 'Holding certification as a Scrum Developer and possessing a Diploma in Advanced Microservices Architecture and DevOps, I am well-equipped to navigate the complexities of modern development practices.',
        'networksocial': 'Network Social',
	    'cellphone': 'Cell Phone: 3136280783',
	    'mail': 'Mail: jairo910731@gmail.com',
		'download': "Download"
    }
};

function toggleIdioma() {
    const idiomaActual = document.documentElement.lang;
    const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';

    document.documentElement.lang = nuevoIdioma;
    actualizarTraducciones(nuevoIdioma);
}

function actualizarTraducciones(idioma) {
    const elementos = document.querySelectorAll('[data-traduccion]');
    
    elementos.forEach(elemento => {
        const claveTraduccion = elemento.getAttribute('data-traduccion');
        elemento.textContent = traducciones[idioma][claveTraduccion];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const idiomaInicial = document.documentElement.lang || 'es';
    actualizarTraducciones(idiomaInicial);
});
