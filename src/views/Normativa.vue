<template>
  <Layout title="AEG - Normativa">
    <div class="container my-5">
      <h1 class="text-center mb-5">Normativa - Estatuto Orgánico</h1>

      <div v-for="(section, index) in sections" :key="index">
        <h2 class="mb-4">{{ section.title }}</h2>
        <h3 class="mt-4">{{ section.subtitle }}</h3>
        <ul>
          <li v-for="(item, itemIndex) in section.items" :key="itemIndex">
            <strong>{{ item.title }}</strong>
            <span v-if="item.text">: {{ item.text }}</span>
            <ul v-if="item.subItems">
              <li v-for="(subItem, subItemIndex) in item.subItems" :key="subItemIndex">
                <span v-if="subItem.letter">{{ subItem.letter }})</span> {{ subItem.text }}
                <ul v-if="subItem.nestedItems">
                  <li v-for="(nestedItem, nestedIndex) in subItem.nestedItems" :key="nestedIndex">
                    {{ nestedItem }}
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/layout.vue';

export default {
  components: {
    Layout
  },
  name: 'Normativa',
  data() {
    return {
      sections: [
        {
          title: 'TÍTULO PRIMERO – DISPOSICIONES GENERALES',
          subtitle: 'CAPÍTULO I: DE LA ASOCIACIÓN',
          items: [
            { title: 'Artículo 1', text: 'La Asociación se denominará “Asociación de Estudiantes de Guanacaste”, pudiendo ser abreviado su nombre en las siglas “A.E.G.”' },
            { title: 'Artículo 2', text: 'Por su naturaleza, la A.E.G será de duración indefinida.' },
            { title: 'Artículo 3', text: 'La A.E.G tendrá su domicilio en la provincia de Guanacaste, cantón de Liberia, distrito central, Universidad de Costa Rica, Sede Guanacaste.' },
            { title: 'Artículo 4', text: 'Formará de su haber de la A.E.G, los tractos girados por la Federación de Estudiantes de la Universidad de Costa Rica, las cuotas, herencias, legados y donaciones que a favor de esta se hicieren las subvenciones que fuere posible conseguir de los entes estatales y privados; los bienes adquiridos y los fondos que se obtengan de las actividades propias de la A.E.G.' },
            {
              title: 'Artículo 5', text: 'Los fines primordiales de la A.E.G son los siguientes:',
              subItems: [
                { letter: 'a', text: 'Orientar a los y las estudiantes, de tal forma que se involucren verdaderamente al movimiento estudiantil de la Sede y de la U.C.R.' },
                { letter: 'b', text: 'Velar por el cumplimiento de los deberes y derechos de los y las estudiantes por parte de los y las docentes y administrativos que laboran en la Sede.' },
                { letter: 'c', text: 'Promover la preparación de profesionales capacitados en todos los aspectos en las diferentes carreras que se imparten en la Sede.' },
                { letter: 'd', text: 'Promover una investigación básica aplicable, que analice la problemática regional, nacional e internacional y proponer soluciones a corto y largo plazo para construir una sociedad más justa, en donde el hombre y la mujer logren hacerse valer por sus conocimientos.' },
                { letter: 'e', text: 'Proyectar las diferentes actividades del movimiento estudiantil de la Sede, en los diferentes campos a toda la región de Guanacaste.' },
                { letter: 'f', text: 'Acatar fielmente las resoluciones tomadas por la junta directiva de la A.E.G., y de la Asamblea General de estudiantes de la Sede.' },
              ]
            },
            {
              title: 'Artículo 6', text: 'Para el cumplimiento de sus fines la A.E.G. podrá entre otras actividades realizar:',
              subItems: [
                { letter: 'a', text: 'Recaudar y administrar los fondos necesarios para financiar la consecución de sus fines, esto, de conformidad con los acuerdos que así disponga la Junta Directiva de la A.E.G y que no contradigan Estatutos Orgánicos de la Universidad de Costa Rica y disposiciones emitidas por la Contraloría de la Universidad de Costa Rica.' },
                { letter: 'b', text: 'Realizar aquellas alianzas e impulsar convenios con otras entidades y órganos públicos o privados, tanto nacionales como internacionales, mientras ello no violente la autonomía universitaria.' },
              ]
            }
          ]
        },
        {
          title: '',
          subtitle: 'CAPÍTULO II: DE SUS MIEMBROS',
          items: [
            { title: 'Artículo 7', text: 'Serán asociados (as) activos (as) de la A.E.G. El estudiantado regular de la Sede Guanacaste, Universidad de Costa Rica que esté empadronado de conformidad con la normativa. Se entenderá por estudiante regular la población estudiantil que tenga al menos un curso matriculado en la Sede Guanacaste.' },
            {
              title: 'Artículo 8', text: 'Son derechos del estudiantado activo los siguientes:',
              subItems: [
                { letter: 'a', text: 'Tomar parte activa en las actividades de la A.E.G.' },
                { letter: 'b', text: 'Solicitar la interacción de la A.E.G., en defensa de sus deberes y derechos ante las diferentes instancias docentes y administrativas de la Sede.' },
                { letter: 'c', text: 'Elegir y ser electos(as) en los diferentes cargos de la A.E.G.' },
                { letter: 'd', text: 'Luchar permanentemente por la integración de todos los miembros asociados de la Sede a las diferentes actividades que se realicen en beneficio de esta.' },
                { letter: 'e', text: 'Asistir a las asambleas, presentar mociones y sugerencias como proyectos que considere pertinente para la consecución de los fines de la A.E.G.' },
                { letter: 'f', text: 'Solicitar informes económicos, labores, planes de trabajo, acuerdos internos, actas de la Junta Directiva, representantes de Consejo Superior Estudiantil, Asamblea de Sede, Consejo Asesor, Comisiones institucionales y demás puestos de representación estudiantil.' },
                { letter: 'g', text: 'Denunciar ante la fiscalía y/o Asamblea General de la A.E.G cualquier irregularidad que notaren en el desempeño de las funciones de la Junta Directiva, Representantes ante el Consejo Superior Estudiantil, Asamblea de Sede, Consejo Asesor, Comisiones Institucionales, demás puestos de representación estudiantil.' },
                { letter: 'h', text: 'Cualquier otra que el Estatuto le conceda.' },
              ]
            },
            {
              title: 'Artículo 9', text: 'Son deberes del estudiantado asociado los siguientes:',
              subItems: [
                { letter: 'a', text: 'Participar en todas las actividades organizadas por la A.E.G.' },
                { letter: 'b', text: 'No atentar contra el nombre de la A.E.G. y de la Sede.' },
                { letter: 'c', text: 'Colaborar con el logro de los fines de la A.E.G.' },
                { letter: 'd', text: 'Desempeñar en forma responsable los cargos en donde hayan sido nombrados.' },
                { letter: 'e', text: 'Votar en las elecciones de los diferentes órganos de la A.E.G.' },
                { letter: 'f', text: 'Contribuir económicamente, en los periodos de matrícula, con el fin de cubrir los gastos en los que incurra la A.E.G.' },
                { letter: 'g', text: 'Luchar permanentemente por la regionalización de la educación superior en nombre de la Sede.' },
              ]
            }
          ]
        },
        {
          title: 'TÍTULO SEGUNDO – DE LOS ÓRGANOS DE LA A.E.G',
          subtitle: '',
          items: [
            {
              title: 'Artículo 10', text: 'Son órganos de la A.E.G:',
              subItems: [
                { letter: 'a', text: 'Asamblea General de Estudiantes de la Sede de Guanacaste.' },
                { letter: 'b', text: 'Junta Directiva.' },
                { letter: 'c', text: 'Tribunal Electoral Estudiantil de la Sede de Guanacaste.' },
                { letter: 'd', text: 'Representantes Estudiantiles ante la Asamblea de Sede.' },
                { letter: 'e', text: 'Representantes Estudiantiles ante instancias de la Universidad de Costa Rica Sede Guanacaste.' },
                { letter: 'f', text: 'Defensoría Estudiantil Sede Guanacaste.' },
              ]
            }
          ]
        },
        {
          title: '',
          subtitle: 'CAPÍTULO I: DE LA ASAMBLEA GENERAL',
          items: [
            { title: 'Artículo 11', text: 'La Asamblea General es la máxima autoridad jerárquica de la A.E.G.' },
            {
              title: 'Artículo 12',
              subItems: [
                { letter: 'a', text: 'Aprobar y reformar los estatutos y reglamentos de la Asociación.' },
                { letter: 'b', text: 'Elegir a las y los miembros de la Junta Directiva y el Tribunal Electoral Estudiantil.' },
                { letter: 'c', text: 'Elegir o delegar en la Junta Directiva elección de las y los representantes estudiantiles ante la Asamblea de Sede y ante el Consejo Superior Estudiantil.' },
                { letter: null, text: 'Nota: Inaplicable en lo relativo a delegar la elección de la representación estudiantil en la Asamblea Universitaria y Asamblea de Sede de conformidad con el artículo 303 del Estatuto Orgánico de la Federación de Estudiantes de la Universidad de Costa Rica.' },
                { letter: 'd', text: 'Otras funciones que se deriven de este reglamento.' },
              ]
            },
            { title: 'Artículo 13', text: 'La Junta Directiva deberá coordinar la difusión y realización de la Asamblea General, ya sea ordinaria o extraordinaria.' },
            {
              title: 'Artículo 14',
              subItems: [
                { letter: null, text: 'El control de la asistencia, votaciones y ratificaciones de los acuerdos de la Asamblea lo efectuará el Tribunal Electoral Estudiantil de Guanacaste (T.E.E.G). El orden de la palabra y el registro de acuerdos mediante actas que se den en la Asamblea General de la A.E.G lo efectuará la Junta Directiva de la A.E.G.' },
                { letter: null, text: 'Nota: Inaplicable en lo relativo a la posibilidad de la Junta Directiva de dirigir la Asamblea General de conformidad con los artículos 18 y 110 del Reglamento General de Elecciones.' },
              ]
            },
            { title: 'Artículo 15', text: 'Los acuerdos de la Asamblea se aprobarán por mayoría simple, salvo en casos en que se refiera a la modificación de los reglamentos de la A.E.G., los cuales se aprobarán con mayoría calificada.' },
            { title: 'Artículo 16', text: 'Habrá dos tipos de Asamblea General: La Asamblea General Ordinaria y la Asamblea General Extraordinaria. Estas estarán compuestas por la totalidad de los asociados(as), sujetos a los requisitos de convocatoria y quórum establecidos en este Estatuto.' },
            {
              title: 'Artículo 17',
              subItems: [
                { letter: null, text: 'La Asamblea General Ordinaria será convocada con al menos cuatro días hábiles de antelación por la Junta Directiva.' },
                { letter: null, text: 'Dicha convocatoria deberá contener: Fecha, hora y lugar donde se realizará la Asamblea General Ordinaria, además los puntos de agenda en el orden a tratarse y deberá ser publicada por los medios oficiales de la A.E.G.' },
                { letter: null, text: 'En caso de que la Junta Directiva incumpla en realizar la convocatoria en el plazo indicado, se admitirá la auto-convocatoria de la Asamblea General de la A.E.G mediante la presentación del cinco por ciento (5%) de las firmas del padrón de asociadas y asociados ante el T.E.E.G, quien deberá realizar la convocatoria cumpliendo con los requisitos establecidos por este Estatuto.' },
                { letter: null, text: 'Nota: La convocatoria debe ser solicitada y realizada por el tribunal electoral asociativo de conformidad con los artículos 18 y 110 del Reglamento General de Elecciones.' },
              ]
            },
            {
              title: 'Artículo 18',
              subItems: [
                { letter: null, text: 'El quórum para la Asamblea General Ordinaria será de carácter estructural y funcional, estableciéndose como máximo tres llamadas.' },
                { letter: null, text: 'La primera llamada se realizará a la hora indicada en la convocatoria, el quórum será de la mitad más uno de la población asociada. De no cumplirse con el quórum en la primera llamada, se realizará una segunda llamada veinte (20) minutos después y se podrá sesionar con el quince por ciento (15%) de la población asociada. De no alcanzarse el quórum necesario, se realizará una tercera y última llamada veinte (20) minutos después y podrá sesionarse con no menos del tres por ciento (3%) de la población asociada.' },
                { letter: null, text: 'De no lograrse el quórum requerido en la tercera llamada, la Asamblea será suspendida y reprogramada.' },
              ]
            },
            {
              title: 'Artículo 19', text: 'La Asamblea General Estudiantil de la A.E.G. se convocará para tratar de los siguientes temas:',
              subItems: [
                { letter: 'a', text: 'Elección de la Junta Directiva y Representantes ante el Consejo Superior Estudiantil según disponga el reglamento de elecciones de la A.E.G.' },
                { letter: 'b', text: 'Elegir a los y las Representantes Estudiantiles ante la Asamblea de Sede.' },
                { letter: 'c', text: 'Elegir Defensoría Estudiantil.' },
                { letter: 'd', text: 'Elegir al Tribunal Electoral Estudiantil de Guanacaste.' },
                { letter: 'e', text: 'Rendición de cuentas que se efectuará en la última semana del período de gobierno.' },
              ]
            },
            { title: 'Artículo 20', text: 'La Asamblea General Ordinaria deberá reunirse al menos dos veces al año. Se entenderá por año el transcurso que inicia el primero de septiembre al treinta y uno de agosto siguiente.' },
            {
              title: 'Artículo 21',
              subItems: [
                { letter: null, text: 'La Asamblea General Extraordinaria se realizará tantas veces como sea necesaria. Tendrá los mismos requisitos de convocatoria que la Asamblea General Ordinaria, pero podrá ser convocada con al menos tres días hábiles de antelación. Podrán convocar:' },
                { letter: 'a', text: 'La Junta Directiva.' },
                { letter: 'b', text: 'El Tribunal Electoral Estudiantil de Guanacaste, en materia de su competencia.' },
                { letter: 'c', text: 'Cuando se realice una solicitud estudiantil, respaldada al menos por el 5% de las firmas de la población asociada.' },
                { letter: null, text: 'Nota: La convocatoria debe ser solicitada y realizada por el tribunal electoral asociativo de conformidad con los artículos 18 y 110 del Reglamento General de Elecciones.' },
              ]
            },
            {
              title: 'Artículo 22', text: 'La Asamblea General Extraordinaria conocerá:',
              subItems: [
                { letter: 'a', text: 'Propuestas para modificaciones parciales o totales al Estatuto.' },
                { letter: 'b', text: 'Los acuerdos definitivos de las peticiones y conflictos que los asociados(as) presenten.' },
                { letter: 'c', text: 'Sobre cualquier otro asunto fijado en las respectivas convocatorias.' },
              ]
            },
            { title: 'Artículo 23', text: 'El quórum para las Asambleas Generales Extraordinarias será igual al de las Asambleas Generales Ordinarias, estipulado en el artículo 18 de este Estatuto.' },
          ]
        },
        {
          title: '',
          subtitle: 'CAPÍTULO II: DE LA JUNTA DIRECTIVA',
          items: [
            { title: 'Artículo 24', text: 'La Junta Directiva es el órgano ejecutivo y administrador de la labor diaria de la A.E.G, la cual tendrá el periodo de un año según lo dispuesto en el Estatuto Orgánico de la Federación de Estudiantes de la Universidad de Costa Rica (EOFEUCR).' },
            {
              title: 'Artículo 25', text: 'La Junta Directiva de la A.E.G estará integrada por los siguientes cargos y podrán ser reelectos(as):',
              subItems: [
                { letter: 'a', text: 'Presidencia.' },
                { letter: 'b', text: 'Vicepresidencia.' },
                { letter: 'c', text: 'Tesorería.' },
                { letter: 'd', text: 'Secretaría General.' },
                { letter: 'e', text: 'Secretaría de Comunicación y Divulgación.' },
                { letter: 'f', text: 'Secretaría de Deportes.' },
                { letter: 'g', text: 'Fiscal.' },
                { letter: 'h', text: 'Vocalía I.' },
                { letter: 'i', text: 'Vocalía II.' },
              ]
            },
            { title: 'Artículo 26', text: 'Las y los miembros de la Junta Directiva podrán participar en actividades de índole político electoral. Sin embargo, no podrán desarrollar actividades proselitistas a nivel asociativo y federativo universitario. En caso de incumplimiento, se procederá según lo establecido en este Estatuto. Asimismo, no se permite utilizar la calidad de miembro en actividades de tipo político electoral.' },
            { title: 'Artículo 27', text: 'La Junta Directiva sesionará en forma ordinaria quincenalmente y de manera extraordinaria cuando sus miembros así lo acuerden. Deberá realizar de forma mensual al menos una sesión abierta para escuchar opiniones, propuestas y solicitudes del estudiantado. Esta debe ser convocada con cinco días de antelación por los medios oficiales escritos y electrónicos.' },
            {
              title: 'Artículo 28', text: 'En caso de renuncia o destitución de integrantes de la Junta Directiva, será nombrado el suplente respectivo, de acuerdo con las suplencias presentadas. Si no hay suplentes, la Junta Directiva convocará a una Asamblea General Extraordinaria en los siguientes quince días hábiles para la elección democrática de los puestos vacantes.',
              subItems: [
                { letter: null, text: 'Nota: La convocatoria debe ser solicitada y realizada por el tribunal electoral asociativo de conformidad con los artículos 18 y 110 del Reglamento General de Elecciones.' },
              ]
            },
            {
              title: 'Artículo 29', text: 'Para ser estudiante miembro de la Junta Directiva se requiere:',
              subItems: [
                { letter: 'a', text: 'Ser estudiante regular de la Sede Guanacaste.' },
                { letter: 'b', text: 'Ser mayor de dieciocho años.' },
                { letter: 'c', text: 'No desempeñar puestos administrativos o docentes en la Universidad de Costa Rica, salvo la población estudiantil que desempeñe horas estudiantes o asistentes.' },
                { letter: 'd', text: 'No pertenecer a ninguna de las otras Asociaciones Federadas de la Sede.' },
                { letter: 'e', text: 'Tener promedio ponderado no menor a 7.' },
              ]
            },
            {
              title: 'Artículo 30', text: 'Son funciones de la Junta Directiva de la A.E.G:',
              subItems: [
                { letter: 'a', text: 'Poner en ejecución las resoluciones que emanen de la F.E.U.C.R.' },
                { letter: 'b', text: 'Representar a las y los estudiantes asociados de la Sede.' },
                { letter: 'c', text: 'Fomentar el trabajo en equipo con las diferentes asociaciones de las carreras de la Sede.' },
                { letter: 'd', text: 'Nombrar representantes estudiantiles ante las diferentes instancias y comisiones de la Sede.' },
              ]
            },
            {
              title: 'Artículo 31', text: 'Son funciones de la Presidencia de la A.E.G:',
              subItems: [
                { letter: 'a', text: 'Representar de manera oficial y extraoficialmente a la A.E.G. en cualquier evento.' },
                { letter: 'b', text: 'Dirigir las sesiones de la Junta Directiva.' },
                { letter: 'c', text: 'Coordinar las labores de la Junta Directiva y las comisiones que se efectuasen.' },
                { letter: 'd', text: 'Firmar en conjunto con la Tesorería las órdenes de pago y giro que se extiendan.' },
                { letter: 'e', text: 'Las demás que este Estatuto indique.' },
              ]
            },
            {
              title: 'Artículo 32', text: 'Son funciones de la Vicepresidencia:',
              subItems: [
                { letter: 'a', text: 'Sustituir a la Presidencia en sus ausencias temporales o permanentes asumiendo las obligaciones y atribuciones de esta.' },
                { letter: 'b', text: 'Coordinar en conjunto con la Presidencia y las distintas asociaciones estudiantiles, actividades que desarrollen fines similares a los de la Asociación.' },
                { letter: 'c', text: 'Colaborar con la Presidencia en la Coordinación de la actividad general de la Asociación.' },
                { letter: 'd', text: 'Suplir, cuando fuere necesario, a la Presidencia de la Junta Directiva ante el Consejo Superior Estudiantil de la F.E.U.C.R.' },
                { letter: 'e', text: 'Firmar, en ausencia de la Presidencia, en conjunto con la Tesorería y Fiscalía todas las órdenes de pago y giro que se extiendan.' },
                { letter: 'f', text: 'Las demás que este estatuto indique.' },
              ]
            },
            {
              title: 'Artículo 33', text: 'Son funciones de la Tesorería de la A.E.G:',
              subItems: [
                { letter: 'a', text: 'Llevar al día la contabilidad detallada, las facturas timbradas y recibos de todos los ingresos y egresos.' },
                { letter: 'b', text: 'Vigilar que las cuentas de la A.E.G se cancelen puntualmente en el tiempo establecido.' },
                { letter: 'c', text: 'Cuidar los fondos de la A.E.G y velar por su uso adecuado según lo dicte el estatuto.' },
                { letter: 'd', text: 'Rendir un informe anual en la Asamblea General Ordinaria de la A.E.G, en conjunto con la Secretaría de la A.E.G.' },
                { letter: 'e', text: 'Autorizar con su firma y la de la Presidencia o Vicepresidencia y Fiscalía, los giros y órdenes de pago.' },
                { letter: 'f', text: 'Denunciar cualquier anomalía que se pretenda, se esté o se haya realizado con los fondos de la A.E.G.' },
                { letter: 'g', text: 'Las demás que este estatuto, la Junta Directiva, Estatutos de la Universidad de Costa Rica y disposiciones que emita la Contraloría Universitaria indiquen.' },
              ]
            },
            {
              title: 'Artículo 34', text: 'Son funciones de la Secretaría General:',
              subItems: [
                { letter: 'a', text: 'Tomar actas de las sesiones de la Junta Directiva en libros que estarán bajo su custodia.' },
                { letter: 'b', text: 'Notificar, a la Junta Directiva, la fecha y hora exactas de las sesiones que se programen.' },
                { letter: 'c', text: 'Facilitar copia de las actas a cualquier asociado o asociada que así lo solicite.' },
                { letter: 'd', text: 'Llevar un archivo ordenado y completo de todo documento, correspondencia y oficio que se envíe o reciba durante el período del gobierno.' },
                { letter: 'e', text: 'Las demás funciones que este estatuto y la Junta Directiva le indiquen.' },
              ]
            },
            {
              title: 'Artículo 35', text: 'Son funciones de la Secretaría de Comunicación y Divulgación:',
              subItems: [
                { letter: 'a', text: 'Administrar las páginas oficiales de la Asociación de Estudiantes Guanacaste.' },
                { letter: 'b', text: 'Promover dentro de la página espacios académicos, como noticias relevantes, acontecimientos y otros que permitan visibilizar los campos de acción bajo los cuales se desarrolla el perfil profesional.' },
                { letter: 'c', text: 'Las demás funciones que este estatuto y la Junta Directiva le indiquen.' },
              ]
            },
            {
              title: 'Artículo 36', text: 'Son funciones de la Secretaría de Deportes:',
              subItems: [
                { letter: 'a', text: 'Promover y organizar actividades deportivas para el beneficio de las personas estudiantes.' },
                { letter: 'b', text: 'Mantener comunicación con el gestor deportivo y participar en la comisión deportiva.' },
                { letter: 'c', text: 'Las demás funciones que este estatuto y la Junta Directiva le indiquen.' },
              ]
            },
            {
              title: 'Artículo 37', text: 'Son funciones de la Fiscalía:',
              subItems: [
                { letter: 'a', text: 'Velar por el cumplimiento del Estatuto.' },
                { letter: 'b', text: 'Fiscalizar la actividad económica y financiera de la A.E.G.' },
                { letter: 'c', text: 'Interpelar a rendición de cuentas a cualquier miembro de la Junta Directiva o miembro asociado que haya cometido una infracción a los deberes que le asigna este estatuto.' },
                { letter: 'd', text: 'Conocer sobre las renuncias de los miembros de la Junta Directiva de la A.E.G y Representantes ante el Consejo Superior Estudiantil.' },
                { letter: 'e', text: 'Conocer las suspensiones o renuncias de los asociados a tal calidad.' },
                { letter: 'f', text: 'Entre otras que este estatuto indique.' },
              ]
            },
            {
              title: 'Artículo 38', text: 'Son funciones de las y los Vocales:',
              subItems: [
                { letter: 'a', text: 'Asistir a la totalidad de las sesiones de Junta Directiva programadas.' },
                { letter: 'b', text: 'Sustituir las ausencias permanentes de las y los miembros de la Junta Directiva, con las excepciones que este estatuto establezca.' },
                { letter: 'c', text: 'Colaborar con la Secretaría de la asociación en el cumplimiento de sus funciones.' },
                { letter: 'd', text: 'Colaborar en las tareas que les sean otorgadas, según las facultades que la Junta Directiva y este estatuto dispongan.' },
              ]
            },
          ]
        },
        {
          title: '',
          subtitle: 'CAPÍTULO III: DE LA REPRESENTACIÓN EN EL CONSEJO SUPERIOR ESTUDIANTIL',
          items: [
            {
              title: 'Artículo 39', text: 'Los puestos de representantes estudiantiles ante el Consejo Superior Estudiantil serán dos:',
              subItems: [
                { letter: 'a', text: 'Propiedad.' },
                { letter: 'b', text: 'Suplencia.' },
              ]
            },
            {
              title: 'Artículo 40', text: 'Funciones de los representantes en el Consejo Superior Estudiantil:',
              subItems: [
                { letter: 'a', text: 'Asistir tantas veces como sea convocado el Consejo Superior Estudiantil, y justificar cualquier inasistencia.' },
                { letter: 'b', text: 'Brindar informe de labores ante la Asamblea General de Estudiantes.' },
                { letter: 'c', text: 'Informar sobre los temas expuestos y votaciones que afecten a la población estudiantil de la Sede Guanacaste.' },
                { letter: 'd', text: 'Las demás que este Estatuto disponga.' },
              ]
            },
          ]
        },
        {
          title: '',
          subtitle: 'CAPÍTULO IV: DE LOS REPRESENTANTES ESTUDIANTILES ANTE LA ASAMBLEA DE SEDE',
          items: [
            { title: 'Artículo 43', text: 'La cantidad de puestos para la representación estudiantil en la Asamblea de Sede corresponderá al veinticinco por ciento (25%) del profesorado que conforma la Asamblea de Sede.' },
            { title: 'Artículo 44', text: 'Se elegirán dos suplentes que tomarán función de asambleístas si algunos de los propietarios llegaran a renunciar o no matricular algún curso durante el periodo lectivo.' },
            { title: 'Artículo 45', text: 'Los asambleístas, tanto propietarios como suplentes, tendrán un periodo de 18 meses (1 año y 6 meses) a partir de la fecha en que fueron elegidos.' },
            {
              title: 'Artículo 46', text: 'Deberes de los representantes ante la Asamblea de Sede:',
              subItems: [
                { letter: 'a', text: 'Asistir a todas las sesiones de la Asamblea y justificar cualquier inasistencia.' },
                { letter: 'b', text: 'Rendir un informe de labores al final de cada semestre.' },
                { letter: 'c', text: 'Anunciar al estudiantado cuando existan elecciones dentro de la Asamblea.' },
                { letter: 'd', text: 'Incentivar debates sobre candidaturas a dirección y subdirección.' },
                { letter: 'e', text: 'Proponer a profesores responsables para coordinaciones.' },
                { letter: 'f', text: 'Denunciar decisiones que afecten al estudiantado.' },
                { letter: 'g', text: 'Denunciar ausencias injustificadas de otros representantes.' },
                { letter: 'h', text: 'Las demás que disponga este Estatuto.' },
              ]
            },
            {
              title: 'Artículo 47', text: 'DE LA ORGANIZACIÓN INTERNA DE LOS Y LAS REPRESENTANTES ESTUDIANTILES ANTE LA ASAMBLEA DE SEDE.',
              subItems: [
                { letter: null, text: 'Las y los representantes estudiantiles deben elegir a lo interno un coordinador o coordinadora que tendrá como única función llevar un control sobre las inasistencias a las sesiones de la Asamblea de Sede. Será a esa coordinación que los y las representantes estudiantiles deberán presentar por escrito la justificación por faltar alguna de las sesiones.' },
              ]
            },
            {
              title: 'Artículo 48', text: 'DE LA DESTITUCIÓN DE UN O UNA REPRESENTANTE A LA ASAMBLEA DE SEDE.',
              subItems: [
                { letter: null, text: 'Podrá ser destituido de su cargo el o la representante estudiantil a la Asamblea de Sede cuando no cumpla con sus deberes o cuando tenga tres ausencias injustificadas a las sesiones de la Asamblea de Sede. Para ello se debe convocar a una Asamblea General Estudiantil Extraordinaria y presentar el caso ante el plenario, quien deberá elegir mediante votación si es destituido o destituida de su puesto. La votación, para ser aprobada, deberá ser de dos tercios de los presentes. En caso de ser aprobada la destitución, el suplente 1 tomará el puesto vacante.' },
              ]
            },
            {
              title: 'Artículo 49', text: 'DE LA RENUNCIA DE UN O UNA REPRESENTANTE ANTE LA ASAMBLEA DE SEDE.',
              subItems: [
                { letter: null, text: 'En caso de que un o una representante decida renunciar a su puesto, deberá presentar la misma ante el T.E.E.G con copia a la Junta Directiva de la A.E.G de forma escrita, quienes deberán realizar lo estipulado en este Estatuto para sustituir la vacante según el artículo 28 párrafo segundo.' },
              ]
            },
            {
              title: 'Artículo 50', text: 'DE LOS REQUISITOS PARA SER REPRESENTANTE ESTUDIANTIL ANTE LA ASAMBLEA DE SEDE.',
              subItems: [
                { letter: null, text: 'Los requisitos para ser representante ante la Asamblea de Sede serán los siguientes:' },
                { letter: 'a', text: 'Ser estudiante regular de la Sede Guanacaste.' },
                { letter: 'b', text: 'Tener un promedio ponderado anual mínimo de 7,0.' },
              ]
            },
          ]
        },
        {
          title: '',
          subtitle: 'CAPÍTULO V: TRIBUNAL ELECTORAL ESTUDIANTIL DE GUANACASTE',
          items: [
            { title: 'Artículo 51', text: 'El Tribunal Electoral Estudiantil es el órgano electoral de la A.E.G. El tribunal goza de plena autonomía funcional y administrativa.' },
            { title: 'Artículo 52', text: 'Las y los miembros del Tribunal serán elegidos por la Asamblea General de Estudiantes. Este nombramiento se realizará en el mes de marzo.' },
            {
              title: 'Artículo 53', text: 'El Tribunal estará formado por siete (7) miembros, distribuidos de la siguiente forma:',
              subItems: [
                { letter: 'a', text: 'Presidencia' },
                { letter: 'b', text: 'Vicepresidencia' },
                { letter: 'c', text: 'Tesorería' },
                { letter: 'd', text: 'Secretaría' },
                { letter: 'e', text: 'Fiscalía' },
                { letter: 'f', text: 'Suplencia 1' },
                { letter: 'g', text: 'Suplencia 2' },
              ]
            },
            {
              title: 'Artículo 54', text: 'Para ser elegida o elegido miembro del Tribunal Electoral Estudiantil se requiere:',
              subItems: [
                { letter: 'a', text: 'Ser estudiante regular de la sede.' },
                { letter: 'b', text: 'No pertenecer a ninguna de las directivas de las asociaciones federadas de las carreras de la sede.' },
                { letter: 'c', text: 'Las demás que estipule en el estatuto del TEEU.' },
              ]
            },
            {
              title: 'Artículo 55', text: 'Compete en forma exclusiva al Tribunal Estudiantil:',
              subItems: [
                { letter: 'a', text: 'Realizar los procesos electorales y nombramientos de las y los miembros de la junta directiva y las y los representantes estudiantiles ante el Consejo de Sede.' },
                { letter: 'b', text: 'Fiscalizar las Asambleas Generales Estudiantiles.' },
                { letter: 'c', text: 'Cualquier otra que este reglamento o los estatutos de la asociación le asignen.' },
              ]
            },
          ]
        },
        {
          title: '',
          subtitle: 'CAPÍTULO VI: DE LA DEFENSORÍA ESTUDIANTIL DE LA SEDE GUANACASTE',
          items: [
            {
              title: 'Artículo 56', text: 'La defensoría estudiantil estará compuesta por:',
              subItems: [
                { letter: 'a', text: 'Defensor(a)' },
                { letter: 'b', text: 'Defensor(a) Adjunto(a)' },
                { letter: 'c', text: 'Colaborador(a)' },
              ]
            },
            { title: 'Artículo 57', text: 'La defensoría estará regulada por lo dispuesto en el EOFEUCR.' },
          ]
        },
        {
          title: '',
          subtitle: 'CAPÍTULO VII: DE LAS REPRESENTACIONES ESTUDIANTILES ANTE INSTANCIAS DE LA UCR SEDE GUANACASTE',
          items: [
            {
              title: 'Artículo 58', text: 'La A.E.G tendrá representación estudiantil en las siguientes comisiones permanentes:',
              subItems: [
                { letter: 'a', text: 'Coordinación de Docencia' },
                { letter: 'b', text: 'Coordinación de Investigación' },
                { letter: 'c', text: 'Coordinación de Acción Social' },
                { letter: 'd', text: 'Coordinación de Vida Estudiantil' },
                { letter: 'e', text: 'Comisión de Instalaciones Deportivas' },
                { letter: 'f', text: 'Comisión de Becas' },
                { letter: 'g', text: 'Comisión de Orden y Disciplina' },
                { letter: 'h', text: 'Comisión de Soda y Fotocopiadora' },
                { letter: 'i', text: 'Comisión de Transporte' },
                { letter: 'j', text: 'Consejo Asesor' },
              ]
            },
            {
              title: 'Artículo 59', text: 'La A.E.G tendrá comisiones a lo interno de su organización que estarán activas según corresponda:',
              subItems: [
                { letter: 'a', text: 'Comisión de Actividades Universitarias' },
                { letter: 'b', text: 'Comisión de Información y Divulgación' },
                { letter: 'c', text: 'Comisión de Asuntos Ambientales' },
                { letter: 'd', text: 'Comisión de Derechos Humanos' },
                { letter: 'e', text: 'Comisión de Cultura' },
                { letter: 'f', text: 'Demás que la Junta Directiva considere convenientes' },
              ]
            },
            { title: 'Artículo 60', text: 'La Junta Directiva de la A.E.G será el encargado de nombrar a los representantes y coordinadores de las comisiones tanto institucionales como internas y a sus suplentes. Por ser un puesto de confianza podrá revocar a la persona nombrada y sustituirla por quien crea conveniente siempre que sea estudiante activo de la Sede Guanacaste.' },
            { title: 'Artículo 61', text: 'Las o los representantes y coordinadores de cada comisión deberán presentar un informe sobre cada una de las sesiones a la Junta Directiva de la A.E.G, quien deberá incluirlo en su informe de labores que presentará a la Asamblea General Estudiantil al final de su periodo.' },
          ]
        },
        {
          title: 'TÍTULO TERCERO - DE LAS SANCIONES',
          subtitle: 'CAPÍTULO ÚNICO',
          items: [
            {
              title: 'Artículo 62', text: 'Las y los asociados que no cumplan con sus deberes o que obstaculicen a otros(as) el cumplimiento de los suyos serán sometidos a normas disciplinarias:',
              subItems: [
                { letter: 'a', text: 'Amonestación privada: Aplicada en caso de faltas leves, con mayoría absoluta favorable del total de los miembros presentes.' },
                {
                  letter: 'b', text: 'Amonestación pública: Aplicada en caso de faltas graves o muy graves, con mayoría calificada de dos tercios (2/3) de los miembros presentes. Ejemplos:',
                  nestedItems: [
                    'Graves: Negligencia o incumplimiento de las labores de un cargo.',
                    'Muy Graves: Suplantación ilegal de un cargo, falsificación ideológica o de documentos, entre otros.',
                  ]
                },
              ]
            },
            {
              title: 'Artículo 63', text: 'Quienes cometan faltas muy graves podrán ser sancionados con:',
              subItems: [
                { letter: 'a', text: 'Inhabilitación para ejercer cargos de representante estudiantil por un periodo de seis meses a un año.' },
                { letter: 'b', text: 'Suspensión de la calidad de asociado hasta por un año.' },
                { letter: 'c', text: 'Expulsión definitiva de la A.E.G.' },
              ]
            },
          ]
        },
        {
          title: 'TÍTULO CUARTO - DE LAS COMUNICACIONES OFICIALES DE LA ASOCIACIÓN',
          subtitle: 'CAPÍTULO ÚNICO',
          items: [
            { title: 'Artículo 64', text: 'Toda comunicación deberá regirse de acuerdo con este estatuto, utilizando los medios oficiales de la A.E.G como pizarras de información o el Facebook oficial de la asociación.' },
          ]
        },
        {
          title: 'TÍTULO QUINTO - DEL PRESUPUESTO DE LA A.E.G.',
          subtitle: 'CAPÍTULO ÚNICO',
          items: [
            { title: 'Artículo 65', text: 'El presupuesto comprende ingresos provenientes de la F.E.U.C.R. y otras actividades realizadas por la asociación.' },
            {
              title: 'Artículo 66', text: 'Los ingresos se distribuirán de la siguiente forma:',
              subItems: [
                { letter: null, text: 'Junta Directiva de la A.E.G.: 90%' },
                { letter: null, text: 'Tribunal Electoral Estudiantil: 10%' },
              ]
            },
            {
              title: 'Artículo 67', text: 'La distribución de ingresos internos será:',
              subItems: [
                { letter: null, text: 'Junta Directiva: 90%' },
                {
                  letter: null, text: 'Tribunal Estudiantil:',
                  nestedItems: [
                    'Gastos Administrativos: 2%',
                    'Financiamiento proceso electoral: 8%',
                  ]
                },
              ]
            },
            { title: 'Artículo 68', text: 'La recepción y administración de fondos estará a cargo del tesorero o tesorera de la A.E.G.' },
          ]
        },
        {
          title: 'TÍTULO SEXTO - REFORMAS A ESTE ESTATUTO',
          subtitle: 'CAPÍTULO ÚNICO',
          items: [
            { title: 'Artículo 69', text: 'Las reformas parciales se realizarán según lo dispuesto en este estatuto.' },
            { title: 'Artículo 70', text: 'Las reformas totales serán establecidas por la Junta Directiva o una comisión redactora, y deberán ser aprobadas por mayoría calificada ante la Asamblea General Ordinaria.' },
          ]
        },
        {
          title: 'TÍTULO SÉPTIMO - VIGENCIA DE ESTE ESTATUTO',
          subtitle: 'CAPÍTULO ÚNICO',
          items: [
            { title: 'Artículo 71', text: 'Este estatuto rige de forma indefinida a partir de su aprobación. (Modificado de forma parcial el 20 de septiembre de 2023).' },
          ]
        },
      ]
    };
  },
};
</script>