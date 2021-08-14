import Question from "../Models/Question";

const questions = [
    new Question(`Un paciente de 23 años se presenta a la consulta por cursar con dificultad respiratoria,
    disnea progresiva y fiebre de 3 días de evolución, además de expectoración verdosa. En la
    exploración física se detecta disnea, taquicardia, polipnea, matidez a la percusión y
    asimetría en la amplexion y amplexacion. se le diagnostica posible síndrome
    pleuropulmonar.
    Con base en el cuadro del paciente ¿cuál es el signo característico para el diagnóstico
    presuntivo establecido?`, ['Expectoración', 'Fiebre', 'Matidez', 'Asimetría'], 'Matidez', `La paciente está pasando por un proceso Neumónico según la GPC prevención, diagnóstico
    y tratamiento de la neumonía Adquirida en la comunidad en Adultos donde refiere que los
    únicos patrones clínicos que predicen Neumonía son: Fiebre de más de 37.8 C, FR >25
    rpm, producción de esputo continuo durante todo el dia, mialgias y sudoración nocturna en
    ausencia de inflamacion e irritacion de orofaringe y rinorrea.
    Razón por la cual la fiebre sería el patrón característico para la detección de la patología en
    este paciente.`),
    new Question(`Un paciente de 62 años acude a urgencias por presentar dolor abdominal tipo cólico
    localizado en fosa iliaca izquierda, sin irradiaciones, de 3 días de evolución, que ha
    incrementado en intensidad. también ha presentado náuseas, vómito de contenido
    alimentario en dos ocasiones, astenia y adinamia, refiere una pérdida de peso de 8 kg en el
    último mes y haber presentado un cuadro dolor semejante en varias ocasiones desde hace
    8 m mieses, pero con estreñimiento crónico y en ocasiones con cuadros diarreicos en los
    que se llegó a detectar sangre, sin moco y que cedían con medicamentos. en la exploración
    física se registra T/A 120/80 FC 90 FR 22 y T 37 C se observa Abdomen distendido,
    doloroso a la palpación profunda en fosa iliaca izquierda, peristalsis aumentada y sin datos
    de irritación peritoneal.
    Seleccione las manifestaciones claves del Padecimiento: 1) cambios en hábitos intestinales
    2) Náuseas
    3) dolor abdominal crónico
    4) vómito
    5) distensión abdominal
    6) pérdida de peso`, ['1,2,4', '1,3,6', '2,3,5'], '1,3,6', `Debido a que falta un inciso de respuesta en este paciente es por descarte, náuseas y
    vómitos son síntomas subjetivos que pueden ser provocados por múltiples etiologías, por la
    edad y pensando en un posible síndrome paraneoplásico los signos de importancia sería la
    pérdida de peso mayor al 10%, los cambios en hábitos intestinales y por último por el
    antecedente sería el dolor abdominal crónico`),
    new Question(`Un paciente de 17 años acude a urgencias por dolor intenso en región lumbar de 24
horas de evolución, con irradiación a genitales. en la exploración física se encuentra con un
peso de 65 kg talla de 1.70 m T 37 C se observa hidratado con marcha antiálgica, facies
dolorosas, inquieto, diaforético y palidez + el abdomen con peristalsis disminuida, dolor en
FID, giordano derecho positivo, el EGO muestra ph de 7 leucos de 8/campo, cristales de
oxalato de calcio ++ se realiza diagnóstico de urolitiasis.
De la manifestaciones clínicas que presenta la paciente, ¿cuáles se consideran claves para
el diagnóstico ?`, [' Giordano derecho positivo y marcha antiálgica',
        'Dolor en FID y peristalsis disminuida',
        'dolor lumbar e irradiación a genitales',
        'giordano derecho positivo y dolor en FID'], 'dolor lumbar e irradiación a genitales', `La GPC Abordaje y manejo del cólico renoureteral secundario a litiasis en el servicio de
urgencias dicta considerar diagnóstico clínico de urolitiasis cuando presente 1. Dolor de
inicio súbito, uni o bilateral, intenso, localizado en fosa lumbar y ángulo costovertebral que
sigue el margen inferior de la 12 costilla y se irradia característicamente siguiendo el
trayecto ureteral anterodescente hasta la vejiga, escroto , labios menores o cara interna del
muslo, el paciente se sujeta la fosa renal y busca una posición antiálgica imposible de
encontrar.`),
    new Question(` Un paciente de 65 años con antecedentes de índice tabáquico de 25 paquetes/año,
    acude a consulta con cuadro de 4 años de evolución caracterizado por tos productiva en
    accesos sin predominio de hora, expectoración matutina verde, disnea de grandes a
    medianos esfuerzos , sibilancias en esfuerzo físico. a la exploración física presenta cianosis
    ungueal y de mucosa oral, saturación de pulso 79% al aire ambiente, síndrome de
    rarefacción y espirometría con obstrucción al flujo aéreo grado severo.
    Las manifestaciones clínicas que apoyan el diagnóstico en este paciente son:`, 
    [' índice tabáquico, tos y sibilancias',
        'tos crónica, productiva y disnea',
        'saturación de 79%, cianosis y disnea',
        'disnea, cianosis y sibilancias'], 
        'tos crónica, productiva y disnea', 
        `La GPC de diagnóstico y tratamiento de la enfermedad pulmonar obstructiva crónica: se
    podrá considerar el DX de EPOC en personas mayores de 35 años con tos crónica y con
    factores de riesgo para Epoc y los siguientes síntomas: Disnea al ejercicio, tos crónica ,
    producción regular de esputo, bronquitis frecuente en invierno y sibilancias`),
    new Question(
        `Un paciente de 3 años es llevado por su madre a consulta ya que lo ha percibido con
        malestar general e inapetencia persistente. en la exploración física se registra T de 38.3 C y
        se observa erupción en la piel de color eritematoso maculopapular, predominantemente en
        el tronco, con inicio en la cabeza y distribuido en todo el cuerpo: así como adenomegalias
        retroauriculares.
        Una manifestación clínica clave son las manchas de`,
        ['Roth', 'Koplik', 'Forchheimer', 'janeway'],
        'Forchheimer',
        ``
    ),
    new Question(
        `El diagnóstico presuntivo del paciente es:`,
        ['rubeola', 'sarampión', 'escarlatina', 'eccema numula'],
        'rubeola',
        ``
    ),
    new Question(
        `El diagnóstico diferencial es:`,
        ['sarampión',
        'varicela escarlatina',
        'escarlatina',
        'eccema numular'],
        'sarampión',
        `Debido a la temperatura y al patrón del exantema maculopapular con progresión
        cefalocaudal hablamos de Sarampión razón por la cual manifestación clave sería las
        manchas de KOPLIK pero eso fue lo que pense jaja pero no hay muchos datos (LA CLAVE
        ESTÁ EN LAS ADENOMEGALIAS RETROAURICULARES CARACTERÍSTICAS DE
        RUBEOLA) y en la última pregunta aparece sarampión como DX diferencial, así que el
        cuadro de rubéola también es compatible el mismo patrón maculopapuloso cefalocaudal y
        con el caso donde se pueden presentar las manchas de Forchheimer que no son
        patognomónicos y pueden aparecer también en sarampión y escarlatina y como Dx
        diferencial sarampión.`
    ),
    new Question(
        `Un paciente de 22 años acudió a consulta hace 4 días con dolor abdominal bajo. refiere
        dolor durante las relaciones sexuales, flujo transvaginal y fiebre, además de sentirse irritada,
        con ardor al orinar y palpitaciones. cuenta con antecedentes de G1 P1 IVS 14 años, cuatro
        parejas sexuales y anticoncepción con DIU, reporta ingesta de alcohol, En la exploración
        física se despierta dolor en abdomen bajo con la palpación , en cérvix con movilización y en
        los anexos durante el examen bimanual, se prescribió tratamiento ambulatorio a base de
        levofloxacino más metronidazol. El dia de hoy regresa al servicio de urgencias con T 39 C y
        FC 110 la paciente se hospitaliza y se inicia tratamiento con ceftriaxona, doxiciclina y
        además metronidazol.
        ¿Qué manifestaciones clínicas presentes en la paciente son clave para el padecimiento con
        el que cursa?`,
        ['fiebre, irritación y palpitaciones',
        'dolor abdominal bajo, leucorrea y dispareunia',
        'leucorrea, fiebre y disuria',
        'dolor abdominal bajo, malestar general y palpitaciones'],
        'dolor abdominal bajo, leucorrea y dispareunia',
        `La paciente cursa por un cuadro de vaginosis bacteriana la cual la GPC Prevención,
        diagnóstico y tratamiento de vaginitis infecciosa en mujeres de edad reproductiva en el
        primer nivel de atención dice que en la infección por tricomoniasis ante la presencia de flujo
        anormal o leucorrea, fetidez, Disuria, dolor pélvico bajo, vulvitis, vaginitis.
        `
    ),
    new Question(
        `¿Qué interacción tiene el alcohol con el tratamiento farmacológico prescrito ?`,
        [ 'aumenta el riesgo de lesión renal',
        'disminuye la absorción intestinal',
        'aumenta sus efectos tóxicos',
        'se produce efecto antabuse'],
        'se produce efecto antabuse',
        `El tratamiento con Metronidazol puede ser inadecuado combinado con la ingesta de alcohol
        por que provoca que las moléculas de alcohol no puedan metabolizarse para su correcta
        degradación y excreción provocando el efecto ANTABUSE`
    ),
    new Question(
        `Una mujer de 24 años acude a consulta por oligo opsomenorrea de 4 años de evolución,
        refiere el deseo de embarazarse desde hace 2 años sin tener éxito alguno. menciona que
        ha subido 14 kg en 1 año y que hace 1 semana presentó disuria, tenesmo y urgencia
        miccional. hace 1 año se le diagnosticó DM para la cual recibió glibenclamida sin buen
        control hace 6 meses se le diagnostica depresión y es tratada con clonazepam. en la
        exploración física TA 130/85 IMC 32 obesidad tipo androide, hirsutismo grado 16, según la
        escala de ferriman gallwey, acné y alopecia leve. se inició manejo con control de peso,
        buscando una pérdida ponderal del 10%, se prescribe acetato de ciproterona/etinilestradiol
        y se modifica TX de DM y depresión por Metformina / sertralina respectivamente. después
        de 6 meses de tratamiento, la paciente mejora y se inició inducción de la ovulación con
        citrato de clomifeno.
        Con base en los datos clínicos que presenta la paciente el síndrome que se integra es`,
        ['hiperplasia suprarrenal',
        'de cushing',
        'hiperandrogenismo secundario a fármacos',
        'de ovario poliquístico'],
        'de ovario poliquístico',
        `Hablamos de una mujer en edad fértil que cursa por cuadro de trastorno menstrual, que
        impide que la paciente se embarace , datos de hiperandrogenismo (hirsutismo, acné,
        Alopecia), y co-morbilidad con sobrepeso y obesidad mas diabetes mellitus . son criterios
        para SOP según la GPC`
    ),
    new Question(
        `Un paciente de 48 años acude a consulta por presentar astenia, tos productiva con
        hemoptisis, disnea y dolor torácico. En la inspección se detecta respiración superficial,
        taquipnea, tiraje intercostal, diaforesis, expansión torácica y movilidad diafragmática
        disminuida ; con la palpación se percibe aumento de las vibraciones vocales y dolor a la
        compresión ; se ausculta ausencia de murmullo vesicular, soplo tubárico, estertores
        crepitantes periféricos, broncofonía , pectoriloquia , matidez y submatidez.
        Con los datos clínicos mostrados ¿qué síndrome integra este paciente?`,
        ['Condensación pulmonar',
        'Rarefacción pulmonar',
        'Atelectasia pulmonar',
        'Derrame pleural'],
        'Condensación pulmonar',
        ``
    ),
    new Question(
        `Una paciente de 40 años asiste a consulta por presentar epistaxis disnea de esfuerzo,
        palpitaciones, cefalea, fatiga, astenia y adinamia. En la exploración física se encuentra con
        palidez de piel y mucosas , disminución en la amplitud del pulso , taquicardia, soplo sistólico
        de eyección tipo funcional y edema de miembros periféricos
        Con los datos clínicos mostrados ¿qué síndrome se integra en esta paciente?`,
        ['Hemorrágico', 'Uremio', 'Anémico', 'Anginoso'],
        'Anémico',
        ``
    ),
    new Question(
        `Un paciente de 60 años, trabajador de la construcción, con tabaquismo positivo a razón
        de 20 a 25 cigarrillos al día desde hace 25 años, refiere tos crónica y baja de peso
        involuntaria. Se indican exámenes complementarios por probable carcinoma broncogenico.
        Hace 15 días presenta edema de cara y brazo derecho de forma progresiva. En la
        exploración física se detecta leve disfonía, edema de cara y miembro torácico derecho y
        flebectasias en estos sitios. Con esta manifestación en el paciente se infiere que se trata del
        síndrome de?`,
        [ 'Vena ácigos',
        'Bud Chiarri',
        'Vena cava inferior',
        'Vena cava superior'],
        'Vena cava superior',
        `Las manifestaciones más frecuentes son edema facial, disnea, tos, ortopnea, edema en
        brazos y cuello y cefalea. Los hallazgos más frecuentes a la exploración clínica son el
        edema facial, edema cervical o de los brazos, dilatación de las venas del hemicuerpo
        superior y plétora o cianosis facial.`
    ),
    new Question(
        `Un hombre de 78 años, portador de enfisema pulmonar, presenta súbitamente dolor en
        hemitórax derecho acompañado de disnea progresiva, además de aumento del trabajo
        respiratorio y malestar. En la exploración física del hemitórax derecho se observa amplexion
        y amplexacion disminuidos, y se percibe timpanismo, ruidos respiratorios disminuidos y
        pectoriloquia disminuida. Con los datos mostrados, ¿qué síndrome pleuropulmonar se
        integra en el paciente?`,
        ['Derrame pleural',
        'Condensación',
        'Cavitación',
        'Neumotórax'],
        'Neumotórax',
        `'Derrame pleural',
        'Condensación',
        'Cavitación',
        'Neumotórax'`
    ),
    new Question(
        `Paciente de 23 años con rinitis alérgica desde la infancia, sinusitis fronto maxilar desde
        hace 2 semanas, recibió penicilina procainica y antihistamínicos sin presentar mejoría, es
        llevado al servicio de urgencias por cefalea frontal izquierda, continua y progresiva, refiere
        visión doble, desde hace 24 hrs presentando fiebre de 38.5º, dificultad a la marcha. A su
        ingreso de urgencias presenta crisis convulsiva tónico clónica aprox. De 20 segundos de
        duración, con pérdida de la conciencia , control de esfínter vesical, y mordedura de lengua.
        A la EF se ve TA de 105/70, FC 96 temp 37.8, pupilas isocóricas e hiporreflecticas,
        secreción nasal izquierda espesa, y costrosa, disartria, Glasgow 12, Kernig y Brudzinski,
        Babinski derecho disminuido, y disminución de la fuerza del hemicuerpo derecho, reflejos
        osteotendinosos aumentados, leucos 16.300, vih positivo.
        ¿Cuál es el síndrome que se puede establecer con base en la afección neurológica?
        `,
        ['neurona motora inferior',
        'plexo sacro',
        'neurona motora superior',
        'denervación distal'],
        'neurona motora superior',
        `El síndrome de motoneurona superior (piramidal) consiste en debilidad, sobre todo de
        musculatura extensora de extremidades superiores y de la flexora de las inferiores, torpeza
        de extremidades, espasticidad, hiperreflexia, que puede asociarse a clonus, y aparición de
        reflejos patológicos, particularmente, el signo de Babinski
        La afectación bilateral de la vía córtico-bulbar, origina el síndrome pseudobulbar cuyo
        síntoma más característico es la incontinencia emotiva (risa y llanto espasmódicos).
        Además, agrava los trastornos de la fonación, la disartria y disfagia causados por la
        afectación de la motoneurona inferior, con la aparición de sialorrea.`
    ),
];
export default questions;