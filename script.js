/**
 * REPOSITORIO DE CONFIGURACIÓN INTEGRAL DE TARJETAS POR PESTAÑA (INICIO)
 */
const estructuraNavegacionCompleta = {
    inicio: [
        { id: 'ini_motivacion', clase: 'bg-palette-blue', icono: '<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>', h3: 'MENSAJES DE MOTIVACIÓN', sub: 'Encuentra paz en tiempos difíciles', desc: 'Encuentra una palabra de paz en un tiempo de tribulación.' },
        { id: 'ini_reflexiones', clase: 'bg-palette-gold', icono: '<path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-10 5.5h-2v2h2v1.5h-2v3H7.5v-3h-2v-1.5h2v-2h-2V8h2V5h1.5v3h2v1.5z"/>', h3: 'REFLEXIONES DIARIAS', sub: 'Versículos y devocionales', desc: 'Devocionales y versículos que restauran y fortalecen el espíritu.' },
        { id: 'ini_oracion', clase: 'bg-palette-blue', icono: '<path d="M12 2c-1.1 0-2 .9-2 2v3.22c-.62.29-1.13.77-1.45 1.39L6.16 13.4c-.42.84-.16 1.87.6 2.42l3.41 2.48V22h3.65v-3.7l3.41-2.48c.76-.55 1.02-1.58.6-2.42l-2.39-4.78c-.32-.62-.83-1.1-1.45-1.39V4c0-1.1-.9-2-2-2z"/>', h3: 'PIDE ORACIÓN', sub: 'Déjanos orar por ti', desc: 'Déjanos orar y estructurar para levantar una cadena intercesora de oración.' },
        { id: 'ini_testimonios', clase: 'bg-palette-blue', icono: '<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 1.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>', h3: 'TESTIMONIOS DE FE', sub: 'Historias que inspiran', desc: 'Testimonios de milagros y lecciones de fe de nuestra hermosa comunidad.' },
        { id: 'ini_recursos', clase: 'bg-palette-gold', icono: '<path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.17 0-2.39.15-3.5.5v15.25c0 .18.04.36.12.51.12.22.34.39.58.44 1.05.2 2.21.3 3.3.3 1.95 0 4.05-.4 5.5-1.5 1.45 1.1 3.55 1.5 5.5 1.5 1.1 0 2.22-.1 3.3-.3.24-.05.47-.21.58-.44.08-.15.12-.33.12-.51V5zM3 18.5V7c1.1-.35 2.3-.5 3.5-.5 1.95 0 4.05.4 5.5 1.5v11.5c-1.45-1.1-3.55-1.5-5.5-1.5-1.2 0-2.4.15-3.5.5zm18 0c-1.1-.35-2.3-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5V8c1.45-1.1 3.55-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>', h3: 'RECURSOS ESPIRITUALES', sub: 'Guías, música y esperanza', desc: 'Accede de forma gratuita a herramientas de lectura bíblica y material espiritual.' }
    ]
};

/**
 * REPOSITORIO DE TEXTOS PARA LOS MODALES DE INICIO Y CITAS BÍBLICAS
 */
const textosVentanasModales = {
    ini_motivacion: { t: "MENSAJES DE MOTIVACIÓN", s: "Luchar por la vida con el corazón firme", c: "Carlitos nos enseñó que la verdadera motivación no nace de la ausencia de problemas, sino de la presencia de Dios en el corazón. Si hoy estás cansado, enfermo o sientes que ya no puedes más, mira su ejemplo: vale la pena luchar por cada segundo de vida, sonreír a pesar del dolor y mantener intacta la esperanza." },
    ini_reflexiones: { t: "REFLEXIONES DIARIAS", s: "La adoración como medicina para el alma", c: "Incluso en sus días más difíciles en el hospital, Carlitos oraba y adoraba. Aprendimos de él que adorar en la prueba cambia la perspectiva: no le dices a Dios qué tan grande es tu problema, le dices a tu problema qué tan grande es tu Dios. Cada día es una oportunidad de poner nuestra fe por encima de cualquier circunstancia terrenal." },
    ini_oracion: { t: "PIDE ORACIÓN", s: "Unidos en la misma fe", c: "Cuando Carlitos flaqueaba, la oración de su familia y hermanos en la fe le devolvía el aliento para seguir batallando. No cargues con tus problemas a solas. Queremos unirnos a ti en fe, levantar tu nombre en oración y sostener tus manos en el plano espiritual cuando sientas que las fuerzas físicas disminuyen." },
    ini_testimonios: { t: "TESTIMONIOS DE FE", s: "Una batalla ganada en el espíritu", c: "Carlitos no perdió la batalla contra la enfermedad; la ganó de la forma más hermosa y trascendental. La ganó porque el cáncer nunca pudo quitarle su fe, nunca pudo apagar su hermosa sonrisa y nunca pudo silenciar su adoración. Su partida física es solo el testimonio final de que su alma ahora goza de perfecta salud." },
    ini_recursos: { t: "RECURSOS ESPIRITUALES", s: "Palabras que levantan al caído", c: "Accede a las promesas bíblicas de sanidad, fortaleza y restauración que Carlitos memorizaba y cantaba. Queremos que estas herramientas sean un bálsamo reconfortante para tu mente en los días grises, recordándote que la última palabra sobre tu vida la tiene el Creador." },
    
    // CITAS BÍBLICAS INTERACTIVAS
    cita_filipenses: { t: "FILIPENSES 4:13", s: "Fortaleza divina absoluta", c: "«Todo lo puedo en Cristo que me fortalece». Este pasaje nos recuerda que nuestros límites físicos y humanos son superados por la gracia soberana de Jesús. En medio de los tratamientos severos, esta declaración blindaba la mente de Carlitos." },
    cita_salmos: { t: "SALMO 23:4", s: "Paz en el valle de sombra", c: "«Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento». La certeza de la cercanía del Pastor celestial quita todo terror frente al diagnóstico adverso." },
    cita_isaias: { t: "ISAÍAS 41:10", s: "El sostén de la mano derecha de Dios", c: "«No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia». Un mandato divino de paz para descansar por completo en sus brazos." },
    cita_juan: { t: "JUAN 11:25-26", s: "La victoria sobre el final terrenal", c: "«Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá. Y todo aquel que vive y cree en mí, no morirá eternamente». El pilar fundamental de nuestra esperanza: la muerte no tiene la última palabra." }
};

/**
 * FUNCIÓN CENTRAL DE NAVEGACIÓN
 */
function cambiarSeccion(nombreSeccion) {
    const botones = document.querySelectorAll('.nav-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    
    const botonActivo = document.getElementById(`btn-${nombreSeccion}`);
    if (botonActivo) botonActivo.classList.add('active');

    const contenedorPrincipal = document.getElementById('dynamic-content-area');
    if (!contenedorPrincipal) return;
    contenedorPrincipal.textContent = ''; 

    // EVALUACIÓN DE SECCIONES DINÁMICAS
    if (nombreSeccion === 'contacto') {
        inyectarSeccionContactoRedes(contenedorPrincipal);
        return;
    }
    if (nombreSeccion === 'sobre') {
        inyectarSobreCarlitos(contenedorPrincipal);
        return;
    }
    if (nombreSeccion === 'fe') {
        inyectarFeEsperanza(contenedorPrincipal);
        return;
    }
    if (nombreSeccion === 'recursos') {
        inyectarRecursosCitas(contenedorPrincipal);
        return;
    }

    // POR DEFECTO: SECCIÓN DE INICIO CON LAS 5 TARJETAS
    const listaTarjetas = estructuraNavegacionCompleta[nombreSeccion];
    if (!listaTarjetas) return;

    const divGrid = document.createElement('div');
    divGrid.className = 'grid-five-columns';

    listaTarjetas.forEach(t => {
        const btnCard = document.createElement('button');
        btnCard.className = `action-card ${t.clase}`;
        btnCard.onclick = function() { abrirModalTarjetaSeguro(t.id); };

        const divIcon = document.createElement('div');
        divIcon.className = 'vector-box';
        
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("viewBox", "0 0 24 24");
        svgElement.innerHTML = t.icono; 
        divIcon.appendChild(svgElement);

        const elementoH3 = document.createElement('h3');
        elementoH3.textContent = t.h3;

        const elementoSub = document.createElement('p');
        elementoSub.className = 'bold-sub';
        elementoSub.textContent = t.sub;

        const elementoDesc = document.createElement('p');
        elementoDesc.className = 'paragraph-desc';
        elementoDesc.textContent = t.desc;

        btnCard.appendChild(divIcon);
        btnCard.appendChild(elementoH3);
        btnCard.appendChild(elementoSub);
        btnCard.appendChild(elementoDesc);
        divGrid.appendChild(btnCard);
    });

    contenedorPrincipal.appendChild(divGrid);
}

/**
 * 1. SECCIÓN SOBRE CARLITOS (Texto corrido de su historia + Espacio para Prédicas)
 */
function inyectarSobreCarlitos(contenedor) {
    const view = document.createElement('div');
    view.className = 'static-section-view';

    const h2 = document.createElement('h2');
    h2.textContent = 'LA HISTORIA DE UN GUERRERO DE FE';
    
    const p1 = document.createElement('p');
    p1.textContent = 'La vida de Carlitos Polanco fue un testimonio viviente de lo que significa caminar bajo la gracia divina. Desde muy joven, se caracterizó por su sensibilidad espiritual, expresada principalmente a través de su adoración sincera y su inseparable guitarra. Con su música, no buscaba el reconocimiento humano, sino levantar altares de intimidad con Dios que lograban transformar la atmósfera de cualquier lugar.';

    const p2 = document.createElement('p');
    p2.textContent = 'Al enfrentar la dura prueba de un diagnóstico de salud adverso, su fe no menguó; al contrario, se intensificó. Su habitación de hospital pasó de ser un espacio de dolor a un santuario de milagros espirituales, donde médicos, enfermeras y visitas encontraban consuelo al ver su imperturbable sonrisa. Carlitos batalló centímetro a centímetro con valentía, dándonos a todos la lección más grande de integridad: la debilidad de nuestro cuerpo terrenal es el escenario perfecto para el poder de Dios.';

    const divPredicas = document.createElement('div');
    divPredicas.style.marginTop = '40px';
    divPredicas.style.padding = '25px';
    divPredicas.style.background = '#f7fafc';
    divPredicas.style.borderLeft = '4px solid #0f2c59';
    divPredicas.style.borderRadius = '4px';

    const titlePredicas = document.createElement('h3');
    titlePredicas.style.fontFamily = '"Cinzel", serif';
    titlePredicas.style.color = '#0f2c59';
    titlePredicas.style.marginBottom = '12px';
    titlePredicas.textContent = 'SUS PRÉDICAS Y REFLEXIONES EN AUDIO Y VIDEO';

    const pPredicas = document.createElement('p');
    pPredicas.style.fontSize = '13.5px';
    pPredicas.style.color = '#718096';
    pPredicas.style.fontStyle = 'italic';
    pPredicas.textContent = '[Espacio reservado para la inserción y enlaces multimedia de las prédicas grabadas de Carlitos Polanco]';

    divPredicas.appendChild(titlePredicas);
    divPredicas.appendChild(pPredicas);

    view.appendChild(h2);
    view.appendChild(p1);
    view.appendChild(p2);
    view.appendChild(divPredicas);
    contenedor.appendChild(view);
}

/**
 * 2. SECCIÓN FE Y ESPERANZA (Texto de Fe continuo)
 */
function inyectarFeEsperanza(contenedor) {
    const view = document.createElement('div');
    view.className = 'static-section-view';

    const h2 = document.createElement('h2');
    h2.textContent = 'FE INQUEBRANTABLE Y ESPERANZA VIVA';

    const p1 = document.createElement('p');
    p1.textContent = 'La fe no es la certeza de que Dios hará exactamente lo que nosotros queremos en nuestros tiempos humanos; la fe es la convicción absoluta de que, independientemente de lo que veamos con nuestros ojos físicos, Él mantiene el control absoluto y sus planes son eternamente perfectos. Carlitos caminó con esa mirada puesta en lo alto, comprendiendo que los valles oscuros no representan el final del camino.';

    const p2 = document.createElement('p');
    p2.textContent = 'Esta sección es un recordatorio para todo aquel que atraviesa una tormenta o recibe un diagnóstico adverso. No te desanimes. La gracia divina se perfecciona en tu debilidad. Te invitamos a abrazar la paz sobrenatural que Carlitos experimentó, sabiendo que la victoria definitiva ya ha sido ganada en la cruz y que para el hijo de Dios, la última meta es solo el comienzo de la verdadera vida eterna.';

    view.appendChild(h2);
    view.appendChild(p1);
    view.appendChild(p2);
    contenedor.appendChild(view);
}

/**
 * 3. SECCIÓN RECURSOS (Citas de la Biblia dinámicas con Modal Seguro)
 */
function inyectarRecursosCitas(contenedor) {
    const view = document.createElement('div');
    view.className = 'static-section-view';

    const h2 = document.createElement('h2');
    h2.textContent = 'RECURSOS: CITAS DE LA SAGRADA BIBLIA';

    const pIntro = document.createElement('p');
    pIntro.textContent = 'Haz clic sobre cualquiera de los siguientes pasajes bíblicos que sostenían la fe de Carlitos para abrir y leer su contenido completo de forma interactiva:';

    const divCitasContainer = document.createElement('div');
    divCitasContainer.style.display = 'flex';
    divCitasContainer.style.flexDirection = 'column';
    divCitasContainer.style.gap = '12px';
    divCitasContainer.style.marginTop = '20px';

    const citas = [
        { id: 'cita_filipenses', textoBtn: '• FILIPENSES 4:13 — Leer promesa de fortaleza divina' },
        { id: 'cita_salmos', textoBtn: '• SALMO 23:4 — Leer promesa de paz en la dificultad' },
        { id: 'cita_isaias', textoBtn: '• ISAÍAS 41:10 — Leer palabra de apoyo contra el temor' },
        { id: 'cita_juan', textoBtn: '• JUAN 11:25-26 — Leer declaración de vida eterna' }
    ];

    citas.forEach(c => {
        const btnCita = document.createElement('button');
        btnCita.style.width = '100%';
        btnCita.style.textAlign = 'left';
        btnCita.style.padding = '14px 20px';
        btnCita.style.background = '#ebf4fa';
        btnCita.style.border = '1px solid #cbd5e0';
        btnCita.style.borderRadius = '6px';
        btnCita.style.fontFamily = '"Montserrat", sans-serif';
        btnCita.style.fontSize = '14px';
        btnCita.style.fontWeight = '500';
        btnCita.style.color = '#0f2c59';
        btnCita.style.cursor = 'pointer';
        btnCita.style.transition = 'background 0.2s';
        
        btnCita.onmouseover = function() { btnCita.style.background = '#cedee7'; };
        btnCita.onmouseout = function() { btnCita.style.background = '#ebf4fa'; };
        btnCita.onclick = function() { abrirModalTarjetaSeguro(c.id); };
        
        btnCita.textContent = c.textoBtn;
        divCitasContainer.appendChild(btnCita);
    });

    view.appendChild(h2);
    view.appendChild(pIntro);
    view.appendChild(divCitasContainer);
    contenedor.appendChild(view);
}

/**
 * 4. SECCIÓN CONTACTO (Solo los 3 iconos limpios pedidos)
 */
function inyectarSeccionContactoRedes(contenedor) {
    const wrapperContacto = document.createElement('div');
    wrapperContacto.className = 'contacto-wrapper';

    const titulo = document.createElement('h2');
    titulo.className = 'contacto-titulo';
    titulo.textContent = 'MANTENTE CONECTADO';

    const subtitulo = document.createElement('p');
    subtitulo.className = 'contacto-subtitulo';
    subtitulo.textContent = 'Redes oficiales de memoria y fe';

    const contenedorRedes = document.createElement('div');
    contenedorRedes.className = 'contacto-redes-container';

    // Se corrigió el color del texto de la clase dorada para que no sea blanco y mantenga contraste óptimo
    const redes = [
        { nombre: 'Facebook', url: 'https://facebook.com', claseColor: 'bg-palette-blue', claseTexto: '', svg: '<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>' },
        { nombre: 'Instagram', url: 'https://instagram.com', claseColor: 'bg-palette-gold', claseTexto: 'color-dark-gold', svg: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>' },
        { nombre: 'TikTok', url: 'https://tiktok.com', claseColor: 'bg-palette-blue', claseTexto: '', svg: '<path d="M12.525.02c1.31.01 2.61.03 3.91.05.08 1.53.63 3.01 1.61 4.18 1.15 1.2 2.76 1.93 4.41 2.06v3.63c-1.66-.07-3.3-.61-4.67-1.57-.74-.53-1.37-1.19-1.87-1.95v7.4c.03 2.45-1.07 4.81-2.96 6.38-1.99 1.64-4.69 2.3-7.23 1.77-2.54-.53-4.73-2.16-5.89-4.47C-.4 14.77-.28 11.75 1.5 9.8c1.69-1.85 4.3-2.69 6.84-2.22v3.7c-1.3-.35-2.7-.02-3.72.85-.98.83-1.42 2.14-1.16 3.39.26 1.25 1.2 2.26 2.43 2.58 1.24.32 2.58-.13 3.34-1.14.39-.53.58-1.17.56-1.82V.02z"/>' }
    ];

    redes.forEach(red => {
        const linkRed = document.createElement('a');
        linkRed.href = red.url;
        linkRed.target = '_blank';
        linkRed.className = `action-card social-circle-btn ${red.claseColor}`;

        const boxIcono = document.createElement('div');
        boxIcono.className = 'vector-box';
        
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("viewBox", "0 0 24 24");
        svgElement.innerHTML = red.svg;
        boxIcono.appendChild(svgElement);

        const etiquetaText = document.createElement('span');
        if (red.claseTexto) {
            etiquetaText.className = red.claseTexto;
        }
        etiquetaText.textContent = red.nombre.toUpperCase();

        linkRed.appendChild(boxIcono);
        linkRed.appendChild(etiquetaText);
        contenedorRedes.appendChild(linkRed);
    });

    wrapperContacto.appendChild(titulo);
    wrapperContacto.appendChild(subtitulo);
    wrapperContacto.appendChild(contenedorRedes);
    contenedor.appendChild(wrapperContacto);
}

/**
 * CONTROL DE APERTURA Y CIERRE SEGURO DEL MODAL (SANITISED TEXT CONTENT)
 */
function abrirModalTarjetaSeguro(idTarjeta) {
    const modal = document.getElementById('secure-app-modal');
    const cajaContenido = document.getElementById('modal-secure-payload');
    
    if (!modal || !cajaContenido) return;
    cajaContenido.textContent = ''; 

    const datos = textosVentanasModales[idTarjeta];
    if (datos) {
        const h2 = document.createElement('h2');
        h2.textContent = datos.t;

        const sub = document.createElement('p');
        sub.className = 'bold-sub'; 
        sub.textContent = datos.s;

        const p = document.createElement('p');
        p.style.marginTop = '15px';
        p.style.lineHeight = '1.6';
        p.style.fontSize = '14px';
        p.textContent = datos.c;

        cajaContenido.appendChild(h2);
        cajaContenido.appendChild(sub);
        cajaContenido.appendChild(p);

        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
    }
}

function cerrarVentanaModal() {
    const modal = document.getElementById('secure-app-modal');
    if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    }
}

// INICIALIZADORES ASÍNCRONOS Y DE CARGA SEGURA DE EVENTOS DOM
document.addEventListener("DOMContentLoaded", () => {
    const btnInicio = document.getElementById("btn-inicio");
    const btnSobre = document.getElementById("btn-sobre");
    const btnFe = document.getElementById("btn-fe");
    const btnRecursos = document.getElementById("btn-recursos");
    const btnContacto = document.getElementById("btn-contacto");
    const cerrarBtn = document.getElementById("cerrar-modal");

    if (btnInicio) btnInicio.addEventListener("click", () => cambiarSeccion("inicio"));
    if (btnSobre) btnSobre.addEventListener("click", () => cambiarSeccion("sobre"));
    if (btnFe) btnFe.addEventListener("click", () => cambiarSeccion("fe"));
    if (btnRecursos) btnRecursos.addEventListener("click", () => cambiarSeccion("recursos"));
    if (btnContacto) btnContacto.addEventListener("click", () => cambiarSeccion("contacto"));
    if (cerrarBtn) cerrarBtn.addEventListener("click", cerrarVentanaModal);

    // Arranca la web por defecto en la cuadrícula estructurada de Inicio
    cambiarSeccion("inicio");
});

window.addEventListener("click", (e) => {
    const modal = document.getElementById("secure-app-modal");
    if (e.target === modal) {
        cerrarVentanaModal();
    }
});