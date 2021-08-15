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
    new Question(
        `¿ Cuál es el examen de laboratorio prioritario por realizar?`,
        ['cultivo de moco nasal',
        'determinación de CPK, TGO y DHL',
        'citoquímico de LCR',
        'reacción en cadena de polimerasa'],
        'cultivo de moco nasal',
        `segun la GPC la punción de LCR se encuentra contraindicada por existir mayor correlación
        de riesgo , en este caso el primer paso diagnóstico es realizar cultivo y/o biopsia de material
        contaminado para establecer patógeno y continuar tratamiento , complementar con
        paraclínicos y como gold standard de diagnóstico es la TAC.`
    ),
    new Question(
        `Con base en la información expuesta , el diagnóstico para este paciente es:`,
        ['osteomielitis de huesos nasales',
        'tumor cerebral',
        'absceso cerebral',
        'miastenia gravis'],
        'absceso cerebral',
        `La primera interacción para la formación del absceso, es la vía de entrada de los patógenos
        al SNC, la disemina-ción contigua, representa la vía más común de 75 a 85% de los casos,
        la vía hematológica es la responsable de 14 a 28%, relacionada a neumonía, empiemas y
        endocarditis, entre otras. Y, por último, la diseminación directa (secundaria a drenajes
        ventriculares, colocación de catéteres epidurales, trauma craneoencefálico, implantes
        cocleares y procedimientos faciales) cuenta con 10% de las vías de entrada.
        Los factores del huésped que predisponen a la forma- ción del absceso cerebral son:1.
        Físicos (trauma y cirugías).2. Inmunosupresión como cardiopatías congénitas, enfermedad
        De Osler-Weber-Rendu, deficiencias del com- plemento, neoplasias, uso de esteroides,
        bronquiectasias, infección por VIH, entre otras.`
    ),
    new Question(
        `El tratamiento médico de elección es:
        `,
        ['antibiótico combinado dirigido y anticomicial',
        'antihistamínico y mucolítico',
        'inmunosupresores e inmunoglobulina',
        'citotóxico y antiinflamatorio no esteroideo'],
        'antibiótico combinado dirigido y anticomicial',
        `La concentración plasmática de antibióticos no se correlaciona con la del SNC, esto
        relacionado con las pro- piedades físicas del antibiótico, así como su habilidad para cruzar
        la barrera hematoencefálica.
        La penicilina, ampicilina, cefuroxima, cloranfenicol, TMP/SMZ, ceftazidima, metronidazol,
        linezolid y piperacilina/tazobactam demuestran concentraciones te- rapéuticas
        intracraneales adecuadas y pueden ser admi- nistradas como monoterapia o en
        combinación de prime- ra elección.`
    ),
    new Question(
        `Una paciente de 12 años vive en una casa hogar. Se desconocen antecedentes
        heredo-familiares y personales patológicos. Después de dos semanas de un cuadro
        respiratorio alto, presenta artralgias con flogosis en grandes articulaciones que cambian de
        localización, con duración de dos a tres días en cada articulación, epistaxis anterior bilateral
        de aparición espontánea y fiebre alta no cuantificada. Desde hace 48 horas presenta disnea
        de pequeños esfuerzos y palpitaciones. En la exploración física se detecta un peso de 30kg,
        estatura de 1.40 cm, FC 180/min, FR de 40/min, y T de 38 C, se observa diaforético, con
        taquipnea, en posición semisentado, cianosis en labios y lechos subungueales, plétora
        yugular bilateral. En la auscultación cardiaca se perciben ruidos cardiacos rítmicos,
        disminuidos de intensidad, con soplo protodiastólico grado II en foco aórtico; en la
        auscultación pulmonar con abundantes estertores subcrepitantes diseminados. Se palpa
        hepatomegalia de 1- 2 cm en líneas convencionales, no hay esplenomegalia. La rodilla
        derecha y el codo izquierdo está aumentados de volumen, enrojecidos y con disminución de
        la movilidad pasiva y activa por dolor.
        Con base en la historia clínica mostradas, ¿Cuál es el diagnóstico presuntivo?`,
        ['Endocarditis bacteriana subaguda',
        'Lupus eritematoso sistémico',
        'Artritis reumatoide juvenil',
        'Fiebre reumática aguda'],
        'Fiebre reumática aguda',
        `Segun la gpc investigar Antecedentes a investigar en sospecha de fiebre reumática
        Faringoamigdalítis por EBHGA Condiciones de la vivienda adversas. Familiares con fiebre
        reumática. Síntomas y signos más comunes de la fiebre reumática
        Criterios de Jones: el diagnóstico de fiebre reumática se establece con la presencia, en un
        primer episodio, de dos criterios mayores o de un criterio mayor y dos menores, y en un
        episodio recurrente, además, con tres criterios menores, más la evidencia de un cuadro
        precedente de infección por estreptococo beta hemolítico del grupo A.
        Criterios mayores
        Poliartritis. Usualmente es asimétrica y migratoria, pero puede ser aditiva, que afecta
        grandes articulaciones. Corea. Consiste en movimientos involuntarios, incoordinados
        especialmente en manos, pies, lengua y cara, que desaparecen con el sueño y pueden
        afectar un solo lado del cuerpo (hemicorea). Afecta con mayor frecuencia a las mujeres en
        la adolescencia. Se observa en signos la incapacidad para mantener la protrusión de la
        lengua.
        Carditis. Afecta principalmente las válvulas mitral y aórtica. Al principio produce
        regurgitación valvular. Se presenta como un soplo holosistólico apical con o sin soplo de
        flujo mesodiastólico, o un soplo diastólico temprano en la base del corazón (regurgitación
        aórtica). Presenta un aspecto característico en la ecocardiografía, que confirma el
        diagnóstico.`
    ),
    new Question(
        `¿Qué estudios de laboratorio se requieren para confirmar el diagnóstico?`,
        ['Factor reumatoide, proteína C reactiva, anticuerpos anti CCP',
        'Citología hemática, proteína C reactiva, antiestreptolisinas',
        'Hemocultivo, citología hemática examen general orina anticuerpos antinuclearesomplemento examen general de orina',
        'Anticuerpos antinucleares, complemento, examen general de orina'],
        'Citología hemática, proteína C reactiva, antiestreptolisinas',
        `Dentro de los criterios menores de jones se encuentran diversos parametros :Reactantes de
        fase aguda: la velocidad de sedimentación globular (VSG) y la proteína C reactiva (PCR)
        están elevadas, habitual- mente, por encima de 50 mm y con la PCR de más de 50. Las
        mucoproteínas también están aumentadas. Cursa con leucocitosis, elevación del
        complemento y alteraciones en el proteinograma con las alfa-2 y las gammaglobulinas
        aumentadas. ademas Son signos biológicos de infección reciente. Se comprueba una
        elevación casi constante de los anticuerpos estreptocócicos, principalmente, el título de
        antiestreptolisinas.`
    ),
    new Question(
        `¿Cuál es el tratamiento farmacológico indicado para este paciente?`,
        ['Furosemida, digoxina, prednisona y penicilina',
        'Antiinflamatorios no esteroideos, espironolactona , digoxina y metrotexate',
        'Hidroxicloroquina, ciclofosfamida, furosemida y azatriopina',
        'Anticoagulantes, aminoglucósidos, espironolactona y digoxina'],
        'Furosemida, digoxina, prednisona y penicilina',
        `Tratamiento antibiótico: se usa penicilina procaína 600 000 U cada 12 horas durante diez
        días, seguidas de penicilina benzatina 600 000-900 000 U semanales y pasada la fase
        aguda se inicia la quimiopro laxis con- tinuada. Se usan en los pacientes con afectación
        cardiaca grave con fallo cardiaco o pericarditis y en casos con recidiva de FR con secuela
        cardiaca anterior. Se utiliza la prednisona, por vía oral, a 2 mg/kg/ día, en cuatro tomas,
        durante diez días reba- jando a 1 mg/kg/día diez días más y posteriormente Otras medidas:
        consiste en el tratamiento de las complicaciones, como la insu ciencia cardiaca, que precisa
        diuréticos y digital.`
    ),
    new Question(
        `Una paciente de 23 años, con 29 SDG normo evolutivas, acude a consulta y refiere que
        desde hace 72 horas inicio con fiebre de hasta 39°C además, presenta cefalea intensa,
        odinofágia importante, hiperoxia, mialgias considerables, malestar general, rinorrea hialina
        abundante y tos no productiva en accesos que aumentó desde hace 24 horas. Se agregó
        cianosis ungueal y en las últimas 6 horas cursa con aumento de trabajo respiratorio,
        angustia, diaforesis y palpitaciones. Desde hace 2 días recibe claritromicina y acetaminofén,
        sin registrarse mejoría. No se auscultan estertores alveolares, predomina la hipoaereación
        universal. La BH y QS de 27 elementos son normales. Se efectúa una telerradiografía de
        tórax con mandil de plomo abdominal y se observa lo siguiente. Con base en los datos clínicos, ¿Cuál es el diagnóstico de la paciente?
        `,
        ['Vasculitis pulmonar',
        'Neumonía de focos múltiples',
        'Influenza epidémica',
        'Enfermedad de legionario'],
        'Influenza epidémica',
        `Neumonía no podría ser ya que lleva dos días con tratamiento y no ha mejorado además de
        que no proporciona datos para clasificación de crub 65.
        Legionella se encuentra en agua de torres de refrigeración de aire acondicionado y
        condensadores evaporantes y en el suelo en lugares de excavación. Los antibióticos como
        la eritromicina, (el cual no ha tenido mejoría ) el levaquin o la azitromicina parecen ser
        eficaces en el tratamiento de la enfermedad.
        `
    ),
    new Question(
        `¿Qué estudio de laboratorio establece el diagnóstico de certeza?
        `,
        ['PCR',
        'cultivo de expectoración',
        'gasometría arterial',
        'IgM contra legionella'],
        'PCR',
        `La GPC de la secretaría de salud establece que el método de diagnóstico más sensible y
        específico es la PCR (prueba confirmatoria); también se cuenta con detección de antígenos
        por inmunofluorescencia y pruebas diagnósticas rápidas con resultados en 10-30 minutos,
        se emplean muestras nasales obtenidas con hisopos preferentemente en los primeros 5
        días desde la aparición de los síntomas.`
    ),
    new Question(
        `¿ Que elemento de la telerradiografía se considera relevante?`,
        [ 'Infiltrado alveolar',
        'Ocupación intersticial',
        'Congestión vascular',
        'Cardiomegalia'],
        'Infiltrado alveolar',
        `Rx de tórax: Infiltrados alveolares difusos bilaterales.
        Prevención diagnóstico y tratamiento de la influenza estacional.`
    ),
    new Question(
        `¿Cuál es el tratamiento farmacológico de elección?`,
        ['Imipenem', 'Furosemida', 'Prednisona', 'Oseltamivir'],
        'Oseltamivir',
        `Durante una infección por el nuevo virus de influenza A (H1N1) sin complicaciones
        secundarias podría utilizarse el oseltamivir o zanamivir durante el embarazo. 5.
        Se sugiere utilizar oseltamivir en casos de influenza enfermedad grave o complicada grave
        o complicada grave o complicada, durante el embarazo.prevención diagnóstico y
        tratamiento de la influenza estacional.`
    ),
    new Question(
        `Un lactante de 14 meses es llevado a consulta por presentar cuadro, de 24 horas de
        evolución, manifestado por fiebre intermitente de 38° C que cede con administración de
        antipiréticos, rinorrea hialina abundante y tos seca progresiva en accesos. Durante la
        exploración física se observó hidratado, afebril, con dificultad respiratoria manifestada por
        tiraje intercostal leve y retracción Xifoidea leve, en la auscultación se muestran estertores
        crepitantes finos y sibilancias al final de la espiración, por lo que se sospecha de
        bronquiolitis.
        De acuerdo con los datos clínicos, ¿cuál es el diagnóstico diferencial del paciente?`,
        ['Cuerpo extraño en vía aérea',
        'Neumonía',
        'Laringotraqueobronquitis',
        'Crisis asmática'],
        'Neumonía',
        `Cuando la temperatura es mayor a 39°C (axilar), se recomienda buscar complicaciones u
        otras posibles enfermedades como diagnósticos diferenciales que son:
        Neumonía, Laringotraqueomalacia, Aspiración de cuerpo extraño, Reflujo gastroesofágico.
        GPC diagnóstico y tratamiento de bronquiolitis aguda en niños/niñas en el primer nivel de
        atención`
    ),
    new Question(
        `Un paciente de 15 años se presenta con su madre refiere malestar general y anorexia, y
        hace un par de días observó lesiones en los carrillos como aftas blancas en la exploración
        física se detecta T de 37.8°C, mal estado general, rinorrea hialina y ojos llorosos; presenta
        erupción en piel de color eritematoso maculopapular, predominantemente en tronco, con
        inicio en cara y distribución en todo el cuerpo; se detectan adenomegalias. La madre no
        recuerda cuales vacunas le han aplicado.
        Con base en el cuadro clínico que presenta el paciente el diagnóstico presuncional es:`,
        ['Rubéola', 'Sarampión', 'Escarlatina', 'Varicela'],
        'Sarampión',
        `Fase pre-eruptiva: Fiebre, malestar, conjuntivitis, lagrimeo, edema palpebral y tos. Manchas
        de KOPLIK: Enantema blanco puntiforme en carrillo a nivel de 2dos molares. Fase
        eruptiva: Exantema maculo-papular eritematoso que desaparece a la presión.
        GPC prevención diagnóstico y tratamiento del paciente pediátrico con sarampión.`
    ),
    new Question(
        `El principal diagnóstico diferencial de esta enfermedad es:`,
        ['Roséola', 'Varicela', 'Escarlatina', 'Rubeola'],
        'Rubeola',
        `El diagnóstico diferencial del sarampión debe hacerse con otras enfermedades eruptivas
        febriles con un curso clínico semejante al sarampión tales como RUBÉOLA, escarlatina,
        dengue y exantema súbito.
        GPC prevención diagnóstico y tratamiento del paciente pediátrico con sarampión.`
    ),
    new Question(
        ` El tratamiento de elección en este caso es:
        `,
        ['Alcanfor',
        'Antihistamínico tópico',
        'Paracetamol',
        'Esteroides'],
        'Paracetamol',
        `VITAMINA A (>2 años 200 mil) … Fiebre: Paracetamol (Baja toxicidad)…. Adecuado aporte
        de nutrientes y líquidos.
        No existe un tratamiento específico del sarampión, por lo que los pacientes infectados
        deben recibir un manejo de apoyo para prevenir complicaciones graves.
        GPC prevención diagnóstico y tratamiento del paciente pediátrico con sarampión.`
    ),
    new Question(
        `La complicación más frecuente de esta enfermedad en este grupo etario es:`,
        ['Infertilidad', 'Neumonía', 'Encefalitis', 'Sordera'],
        'Encefalitis',
        `+ frecuente: Neumonía (56-80%), 2da CRUP 50% +
        Grave: Agudo: Encefalitis desmielinizante (2 sem).....GPC prevención diagnóstico y
        tratamiento del paciente pediátrico con sarampión
        `
    ),
    new Question(
        `Una paciente de 69 años acude a consulta por dolor en rodilla derecha, limitación
        funcional para subir y bajar escaleras, además de dolor en manos el cual es asimétrico y de
        predominio derecho. en la EF se detecta aumento en volumen en articulación
        interfalángicas distales de la mano derecha, la rodilla con limitación a la flexión.
        La hipótesis diagnóstica en esta paciente es:`,
        ['Artritis gotosa',
        'Tendinitis patelar',
        'Osteoartrosis',
        'Artritis reumatoide'],
        'Artritis gotosa',
        `Respuesta: GPC SSA-216-09 de Artritis Gotosa, De acuerdo a la clasificación de artritis
        gotosa con 1 o más criterios: 1) presencia de cristales urato monosodico en liquido articular
        , 2) evidencia de tofo que contiene uratos, 3) 6 o mas caract clínicas,de laboratorio y
        radiológicas a continuación: 3.1) mas de un ataque de artritis aguda , 3.2) inflamación
        máxima desarrollada en 1 dia, 3.3)ataque de monoartritis, 3.4) enrojecimiento observados
        sobre las articulaciones, 3.5) dolor o inflamación en la 1°era articulación metatarsofalagica,
        3.6) ataque unilateral de la primera articulación metatarsofalangica, 3.7)ataque unilateral de
        la articulación tarsal, 3.8) presencia o sospecha de tofo , 3.9) hiperuricemia , 3.10)
        inflamación asimétrica en una articulación como se observa en imágenes radiológicas, 3.11)
        quiste subcortical sin erosiones en imágenes radiológicas, 3.12 ) cultivo de liquido articular
        para microorganismos durante el ataque.
        Diagnosticos diferenciales: pseudogota, artritis séptica y artritis reumatoide (simétrica y
        oliarticular , nódulos reumatoideos son firmes y no están en áreas extensoras).`
    ),
    new Question(
        `Se solicita una radiografía con proyección anteroposterior de mano, esperando encontrar
        disminución en:`,
        ['espacio articular',
        'densidad de partes blandas',
        'espacio a nivel de falanges proximales',
        'espacios corticales'],
        'densidad de partes blandas',
        ``
    ),
    new Question(
        `El tratamiento de elección es con:`,
        ['Esteroides e inmovilización',
        'Metrotexate y AINES',
        'Colchicina e inmovilización',
        'Reposo articular y AINES'],
        'Colchicina e inmovilización',
        `Ataque agudo de gota: tratamiento de primera elección: colchicina oral y AINES
        Se da tto con AINES (los de mayor eficacia son indometacina, diclofenaco, tenoxicam,
        naproxenom etoricoxib de 4 a 7 dias , con dosis altas los 3-4 primeros dias y teniendo
        mantenimiento por los 7 a 10 dias. COLCHICINA: administrar en las primeras 24 hrs
        preferentemente (dosis de 0.5 mg cada 4 hrs, dosis normal usada es 0.5 a 1.5 mg /dia via
        oral)
        `
    ),
    new Question(
        `¿Cuál es el tratamiento inicial de elección para la rehabilitación de rodilla?`,
        ['Ejercicios en bicicleta',
        'Fortalecimiento del cuádriceps',
        'Ejercicios a contra peso',
        'Caminata'],
        'Caminata',
        `Respuesta: se deben evitar actividades físicas intensa por que el trauma de las
        articulaciones propicia ataques agudos de gota. La actividad física debe ser moderada. Se
        recomienda realizar ejercicio de bajo impacto todos los dias`
    ),
    new Question(
        `Una paciente nulípara de 55 años acude a consulta por distención abdominal, en estos
        meses su habito intestinal cambio de evacuar diariamente a cada 2 días, no ha sangrado
        por recto o vagina, ni disminución de peso, cuenta con antecedentes de diabetes mellitus en
        tratamiento desde hace 5 años, durante la EF se palpa tumor en cuadrante inferior derecho
        de aprox 10 cm, no hay cambios en la coloración y temperatura de la piel, refiere dolor leve
        a la palpación del mismo. El diagnóstico diferencial más probable es cáncer`,
        ['Ovárico', 'De colon', 'Endometrio', 'Metastasico'],
        'Ovárico',
        `Respuesta: de acuerdo a la GPC tumor pélvico ginecológico IMSS-511-11, El 90% de los
        canceres pelvicos ginecológicos son de origen ovárico en EUA , Y en mexico el cáncer de
        ovario es la primera causa de muerte por cáncer ginecológico y es la cuarta por cáncer en
        todas las mujeres.
        Aunque la síntomas no son patognomónicos el dolor pélvico o abdominal persistente ( más
        de 2 semanas ), distensión abdominal , cambios en el hábito intestinal ( estreñimiento ,
        heces acintadas), molestias urinarias ( poliuria , urgencia urinaria) son manifestaciones
        frecuentes cuando está involucrado el peritoneo.`
    ),
];
export default questions;