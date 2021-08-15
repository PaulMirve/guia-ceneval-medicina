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
        ['aumenta el riesgo de lesión renal',
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
        ['Vena ácigos',
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
        ['Infiltrado alveolar',
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
    new Question(
        `¿Cuál es la opción terapéutica que se debe seleccionar para el principal síntoma de la
        paciente:
        `,
        ['Antiespasmódicos',
        'Inhibidor de la bomba de protones',
        'Ablandador de heces',
        'Metformina'],
        'Ablandador de heces',
        ``
    ),
    new Question(
        `El tratamiento quirúrgico de primera elección en esta paciente es:`,
        ['Ooforectomía',
        'Histerectomía',
        'Hemicolectomía',
        'Laparoscopia'],
        'Histerectomía',
        `Cuando se tiene el diagnóstico de cáncer ovárico se recomienda la cirugía
        estadificadora: 1) lavado peritoneal, 2) histerectomía total abdominal , 3)
        salpingooforectomía residual, 4) omentectomía infracólica, 5) linfadenectomía pélvica
        bilateral , linfadenectomía retroperitoneal.`
    ),
    new Question(
        `Una niña de 6 años con cuadros de 3 días de evolución, manifestados por irritabilidad
        nocturna, llega al servicio de urgencias con fiebre 38°C, malestar general, cefalea, dolor
        faríngeo, así como máculas, pústulas y vesículas, umbilicadas en cabeza y cuello, se
        detecta odinofagia, la paciente presenta prurito generalizado, con huellas de rascado en
        diferentes estadios de evolución, y costras melicéricas, lesiones compatibles con varicela.
        De acuerdo con el cuadro clínico y el diagnóstico establecido en esta niña el diagnóstico
        diferencial más probable es`,
        ['Impétigo',
        'Sarampión',
        'Rubeola',
        'Púrpura de Henoch-Schonlein'],
        'Impétigo',
        `El impétigo es uno de los diagnosticos diferenciales para varicela . incidencia en
        niños entre los 2 a 6 años, frecuente en climas calidos tropicales o subtropicales, presenta
        lesiones bien delimitadas, multiples en miembros y cara ( localización periorificial alrededor
        de narinas y boca), las características patognomónicas son las costras melisericas.`
    ),
    new Question(
        `Una paciente de 25 años acude a la consulta por malestar general, astenia, disminución
        del apetito, adinamia. Refiere retraso menstrual de 5 semanas, EF: se encuentra TEMP
        37.2°C y adenomegalias retro auriculares, se observa erupción en piel de color eritematoso,
        predominante en tronco, que inicio en la cabeza y se expandió en todo el cuerpo.
        Con base en el cuadro clínico de la paciente el diagnostico más probable es:
        `,
        ['Escarlatina', 'Roséola', 'Rubeola', 'Sarampión'],
        'Rubeola',
        `En los adultos pueden experimentar de 1- 5 dias pródromos como: fiebre leve
        (37.2 – 37.8°C, dolor de cabeza, malestar general , coriza , conjuntivitis, y adenopatía
        retroauricular, cervicales o suboccipitales. Seguido de una erupción cutánea que inicia en
        cara y se extiende por resto del cuerpo en sentido descendente. A medida que se extiende
        a tronco , va desapareciendo en cara. Exantema maculo papular rosado.`
    ),
    new Question(
        `El principal diagnóstico diferencial de la enfermedad presente en esta paciente es:`,
        ['Sarampión', 'Varicela', 'Escarlatina', 'Roséola'],
        'Sarampión',
        `GPC IMSS- 109-08, PREVENCION, DX, Y TTO DEL PACIENTE PEDIATRICO
        CON SARAMPION : el sarampión cuenta con cuadros clínicos similares a otras
        enfermedades exantemáticas: rubeola, escarlatina, dengue, exantema súbito, roséola,
        Kawasaki, eritema infeccioso .
        Ruseola o exantema súbito: incubación de 5 -15 dias, fiebre intensa, adenopatía
        retroauricular, exantema maculopapular en torax y abdomen.
        Escarlatina: fiebre elevada , malestar general. Odinofagia, adenopatías cervicales,
        hipertrofia amigdalina con exudado blanquecino, artralgias, exantema maculopapular
        distribución cefalocaudal puntiforme marcado en frente y mejillas`
    ),
    new Question(
        `Una paciente de 21 años acude a consulta por disnea leve intermitente en los últimos 6
        meses, asociado a tos productiva. Fuma una cajetilla a la semana desde hace 2 años. En la
        exploración física se detectan sibilancias difusas bilaterales.
        Ante la sospecha de bronquitis crónica ¿cuál es el diagnóstico diferencial más probable?`,
        ['EPOC', 'Asma', 'Neumonía', 'Bronquiolitis'],
        'Asma',
        `Según la GPC de ASMA en el adulto, menciona que las principales causas de exacerbación
        de ASMA son infecciones, bronquitis crónica entre otras, también se asocia el humo de
        tabaco. Se descarta EPOC por que la edad mínima de instauración diagnóstica es de 35
        años según la GPC de EPOC, neumonía se descarta porque no menciona el caso clínico
        datos de infección, y bronquiolitis solo se presenta en niños y es de etiología vira`
    ),
    new Question(
        `Una niña de 10 años es llevada al servicio de urgencias por presentar artralgias,
        cefalea, malestar general y erupciones en la piel. La madre refiere que su hija ha tenido
        episodios de infecciones de vías aéreas superiores de manera recurrente; particularmente
        una de mayor intensidad hace 1 semana. En la exploración física se encuentra con
        temperatura 38°C, artritis en rodillas, codos y muñecas; en piel de tronco se observan
        máculas de contorno delimitado y serpenteante con centro pálido.
        El examen de laboratorio que apoya el diagnóstico en este paciente es:`,
        ['antiestreptolisinas',
        'hemaglutinación',
        'hemocultivo',
        'Pruebas de función hepáticas'],
        'antiestreptolisinas',
        ``
    ),
    new Question(
        `La complicación más frecuente que puede esperarse en esta paciente es:`,
        ['artritis juvenil',
        'insuficiencia valvular',
        'insuficiencia hepática',
        'sepsi'],
        'insuficiencia valvular',
        ``
    ),
    new Question(
        `Con base en el cuadro clínico que presentan esta niña, el pronóstico es:`,
        ['bueno para la vida, malo para la función',
        'malo para la vida, bueno para la función',
        'malo para la vida, malo para la función',
        'bueno para la vida, bueno para la función'],
        'malo para la vida, bueno para la función',
        `Según la GPC de fiebre reumática, esta paciente cumple con criterios para sospechar de
        este diagnóstico, comenzando con la edad, infecciones de repetición en vías respiratorias
        (faringoamigdalitis), fiebre, artritis y exantema, el principal agente etiológico relacionada con
        la aparición de la fiebre reumática es el estreptococo beta hemolítico grupo A, el estándar
        de oro para diagnóstico de estreptococo beta hemolítico del grupo A es el cultivo faríngeo,
        en ausencia de esta opción se solicitarán las antiestreptolisinas (mide las estretptolisinas,
        que son productos extracelulares con propiedad antigénica producida por las bacterias
        estreptococo Beta hemolíticos), en cuanto a la complicaciones más frecuentes en este caso
        las valvulares son las más comunes en un 60% afectando principalmente la válvula mitral
        como dato distintivo de cardiopatía reumática, el resto de manifestaciones suelen
        desaparecer progresivamente durante el tratamiento, en cuanto al pronóstico es
        dependiente del grado de las complicaciones por lo que en este momento es malo para la
        vida por los cuadros repetitivos de infecciones y el riesgo de complicaciones y bueno para la
        función ya que en este momento no se mencionan datos de complicaciones cardiacas.`
    ),
    new Question(
        `Mujer de 40 años presenta en forma progresiva astenia, cefalgia (principalmente tras un
            esfuerzo y mareo con los cambios bruscos de posición; posteriormente aparece caída del
            cabello y fragilidad de uñas. Los ciclos menstruales son de 25 x 10 con sangrado abundante
            desde hace 2 años. En la exploración física se encuentran con TA de 100/70 mmHg, palidez
            de tegumentos de +/+++, taquicardia con soplo plurifocal I/IV. El laboratorio reporta 3 000
            000/µl de eritrocito, hemoglobina de 7.5 g/dl, hematocrito de 23%, VCM de 69.4 µL, HCM de
            20 pg, CHCM de 28.8 g/dl, leucocitos de 5900/µL, plaquetas 450 000 µL y reticulocitos 9%
            (cuenta no corregida).
            Con base en lo datos mostrados, el estudio de laboratorio que precisa el diagnostico en esta
            paciente es el nivel sérico de:`,
        [ 'hepcidina',
        'ferroportina',
        'hemosiderina',
        'transferrina'],
        'transferrina',
        `Con base en los resultados de laboratorio el más adecuado en esta caso clínico es la toma
        de transferrina (ya que no está entre las opciones la ferritina que es la prueba más sensible
        y específico) para confirmar una anemia ferropénica, ya que se trata de un sangrado
        crónico y la paciente tiene datos clínicos de déficit
        de hierro (mujeres pre-menopausia y con sangrado menstrual anormal) . Anemia se define
        en mujeres con un hematocrito < 37 % hemoglobina menos de < 12 g/dl`
    ),
    new Question(
        `Un paciente de 32 años, con diagnóstico de sida, sin apego al tratamiento, acude al
        servicio de urgencias por presentar diarrea secretora, nauseas, vómito y fiebre intermitente.
        El agente causal probable de su padecimiento es Cryptosporidium parvum.
        ¿Qué estudio de laboratorio se requiere realizar para detectar el probable agente causal del
        cuadro que presenta?`,
        ['Estudio de heces con tinción de kinyoun modificada',
        'Biometría hemática',
        'Coprocultivo',
        'Frotis sanguíneo grueso'],
        'Estudio de heces con tinción de kinyoun modificada',
        `La tinción de kinyoun es el método de elección para este caso ya que sirve para detectar
        agentes acido-alcohol resistentes (bacterias, paracitos, algunas familias de cryptosporidium)
        se le denomina modificada porque es una variación de tinción de ziehl-neelsen con la
        diferencia de que no se calienta la placa, se descarta las otras opciones porque no son
        indicadas en este agente etiológico.`
    ),
    new Question(
        `Una paciente de 58 años, con menarca a los 10 años, acude al consultorio por presentar
        en la mama derecha una masa de 5 cm, con bordes irregulares y de consistencia blanda,
        además de astenia, adinamia y pérdida de peso de aproximadamente 10 kg en el último
        año.
        El estudio para confirmar el diagnóstico en esta paciente es:`,
        ['Ultrasonido mamario',
        'Biopsia de nódulo mamario',
        'Radiografía de tórax',
        'Mastografía'],
        'Biopsia de nódulo mamario',
        `Según la GPC el GOLD ESTANDAR es la toma de biopsia para confirmar diagnostico ya
        que los demás estudios se utilizan de inicio en lesiones sospechosas de malignidad.`
    ),
    new Question(
        `Un hombre de 25 años acude al servicio de Urgencias por dolor abdominal que inició
        hace 3 días, localizado en la región periumbilical se irradia al cuadrante inferior derecho y se
        acompaña de náuseas y vómito de contenido alimentario. Además, refiere anorexia y
        ataque al estado general. En la exploración física se observa que el dolor es menos intenso
        pero se ha agregado T de 38.5 °C
        ¿Cuál es el estudio de gabinete requerido para confirmar la sospecha diagnóstica?`,
        ['Rx simple',
        'Ultrasonido',
        'TAC simple',
        'Resonancia magnética'],
        'TAC simple',
        `Según la GPC de diagnóstico y tratamiento de apendicitis, La radiografía simple ya no se
        considera estudio inicial de elección, el ultrasonido logra la visualización del apéndice solo
        en 1/3 de los casos solo es de elección en pacientes embarazadas entre el primer y
        segundo trimestre y niños.
        La tomografía sensible entre 96-98% y especifica de 83-89% se considera el
        ESTANDAR DE ORO para diagnóstico de apendicitis puede revelar engrosamiento de
        pared apendicular > 2 mm y la presencia de apendicolito, flegmón, absceso, liquido libre o
        apariencia deshilachada de la grasa en fosa iliaca derecha, debe considerarse su uso en
        mujeres embarazadas en el tercer trimestre solo con duda diagnostica valorar riesgo
        beneficio.`
    ),
    new Question(
        `Un enfermero de 35 años, siente un chasquido brusco en la región lumbar al momento
        de cargar a un paciente hospitalizado. Al día siguiente, despierta con un dolor intenso y
        entumecimiento del dedo gordo del pie derecho. El estudio que ofrece mayor sensibilidad y
        especificidad para este caso es:`,
        ['placas radiográficas en proyección AP, lateral y oblicuas',
        'tomografía axial de columna lumbar con medio de contraste',
        'resonancia magnética de columna lumbar con medio de contraste',
        'electromiografía con velocidades de conducción nerviosa'],
        'tomografía axial de columna lumbar con medio de contraste',
        `En este caso según la GPC de manejo de trauma de columna, menciona que la TAC y la
        RM son estudios de elección en lesiones de columna toracolumbares, en este caso
        específicamente al mencionar la presencia de chasquido podemos sospechar de una
        espondilolistesis o fractura lo que causaría una compresión medular y el estudio de elección
        seria la TAC para descartar principalmente la factura, cabe resaltar que el paciente no
        presenta antecedentes patológicos ni se descarta lesión nerviosa por lo que debe de
        considerarse el uso de la RM.`
    ),
    new Question(
        `Un paciente de 21 años acude a consulta por que se detectó una tumoración en el
        cuello. Tiene el antecedente de una tia con cancer de tiroideo; en la exploración física se
        registran signos vitales normales, cuello cilíndrico, tráquea central, desplazable se palpan
        adenopatías en niveles II y III del cuello por delante del esternocleidomastoideo derecho;
        durante la palpación de tiroides se identifica un nódulo en el lóbulo derecho de la glándula,
        de aproximadamente 1.5 cm
        ¿Cual es el estudio que establece el diagnóstico del caso?`,
        ['RMN', 'BAAF', 'USG', 'TAC'],
        'USG',
        `Según gpc de tumor maligno de tiroides. El USG de cuello debe ser
        realizado en pacientes con uno o más nódulos tiroideos palpables.`
    ),
    new Question(
        `Una paciente de 75 años es llevada al servicio de urgencias por la presencia de
        evacuaciones disminuidas de consistencia y abundantes, malolientes y de color negro
        intenso. Los familiares refieren que tiene diagnóstico de osteoartrosis de la rodilla izquierda
        y que toma 250 mg de naproxeno cada 8 horas diariamente desde varios años atrás. Desde
        hace un mes ingiere, por incremento del dolor 10 mg de ketorolaco cada 8 horas. En la
        exploración física se detecta FC de 110/min, FR de 20/min y TA de 100/60 mmHg; se
        observa con palidez ++ de tegumentos y regular estado de hidratación; abdomen plano con
        peristalsis aumentada de intensidad y se despierta dolor con la palpación media en
        epigastrio, sin irradiaciones y sin datos de irritación peritoneal. la biometría hemática reporta
        hemoglobina de 8 g/dL, hematocrito de 25%, leucocitos 12,500/mm3, neutrófilos 60% y
        plaquetas 160,000/mm3.
        El estudio de gabinete que establece el diagnóstico de certeza en este caso es:`,
        ['Serie esofago-gastroduodenal',
        'Angiografía gástrica',
        'Gammagrafía con eritrocitos marcados',
        'Gastroduodenoscopia'],
        'Gastroduodenoscopia',
        `Según GPC manejo de úlcera péptica en adultos en el primer y segundo
        nivel de atención. La endoscopia es la prueba diagnóstica de elección para investigar las
        lesiones del tracto digestivo superior y presenta un elevado rendimiento diagnóstico para
        patología orgánica en el paciente con dispepsia.`
    ),
    new Question(
        `Un paciente de 20 años presenta disuria, hipertermia y dolor lumbar de 10 días de
        evolución. La TA registro 129/80 mmHg, la FC 88/min y la FR 22/min; se despierta dolor con
        la palpación en la región lumbar. La citometría hemática reporta leucocitosis de 30,000 y el
        EGO bacteriuria y piocitos. Se solicita urocultivo, reportando Escherichia coli.
        ¿Cuantas unidades formadoras de colonias se espera encontrar para confirmar el
        diagnóstico de este paciente?`,
        ['100', '1,000', '10,000', '100,000'],
        '100,000',
        `Según GPC. Nos dice que para el diagnostico de infeccion de vias
        urinarias el examen microscópico de orina corresponde a bacteriuria de >100,000.`
    ),
    new Question(
        `Un paciente de 50 años obesa con hallazgo de litiasis vesicular, en un chequeo
        realizado hace 1 año (sin manejo), llega a urgencias con dolor epigástrico intenso y
        transfictivo acompañado de anorexia, nauseas y vomito. Durante la exploración destaca
        distensión abdominal, fiebre, taquicardia, deshidratación e ictericia.
        ¿El estudio de gabinete que establece el diagnóstico de certeza en este caso es?`,
        ['Placa simple de abdomen',
        'Ultrasonido abdominal',
        'Tomografía computada de abdomen',
        'Panendoscopia de tubo digestivo alto'],
        'Ultrasonido abdominal',
        `Según GPC colecistitis y colelitiasis. El ultrasonido abdominal es positivo
        en el 98% (sensibilidad) de los casos de colelitiasis, realizado por personal experimentado,
        por lo que es la prueba no invasiva de primera elección.
        `
    ),
    new Question(
        `Un paciente de 32 años con 6 SDG presenta datos de hiperemesis gravídica. Se
        establece el diagnóstico de enfermedad trofoblástica y se le realiza un perfil hormonal que
        reporta la hormona folículo estimulante de 5 UI, luteinizante 10 UI, gonadotropina coriónica
        humana de 1,000,000 UI y progesterona de <10 ng/mL.
        ¿Con base en estos datos, el parámetro relacionado con la enfermedad de la paciente
        corresponde a la hormona?`,
        ['Luteinizante',
        'Gonadotropina',
        'Progesterona',
        'Folículo estimulante'],
        'Gonadotropina',
        `Según GPC de Enfermedad trofoblástica. EL usg tiene un valor limitado,
        por lo cual es necesario considerar el cuadro clínico y los niveles de BhCG.`
    ),
    new Question(
        `Un hombre de 26 años acude por presentar, desde hace 6 días, astenia, adinamia, dolor
        de tipo cólico, de intensidad leve a moderada, localizado en cuadrante superior derecho,
        además de náusea.
        Refiere que el dia de ayer se agregó emesis de contenido gastroalimentario y sin mejora del
        dolor. Durante la exploración física se encuentra con escleras ictéricas +, mucosa oral bien
        hidratada, cardiopulmonar sin compromiso aparente, abdomen blando, depresible y
        doloroso a la palpación media y profunda en hipocondrio derecho, murphy negativo, rebote
        negativo, peristalsis presente y se percute matidez en hipocondrio derecho dos traveses de
        dedo subcostal derecho.
        Se presentan los siguientes resultados en la biometría hemática: Hb de 18.2 mg/dL, Hto de
        54.6%, leucocitos de 11,200 mg/dL, neutrófilos de 58%, linfocitos de 48% y bandas de 1%.
        En la química sanguínea: glucosa de 72 mg/dL, BUN de 12.2 mg/dL y creatinina 0.8 mg/dL.
        En la prueba de función hepática: BT de 2.1 mg/dL, BD 1.9 mg/dL, BI 1.2 mg/dL, FA de 123
        UI, GGT de 22 UI, AST de 320 UI, ALT 254 UI, proteínas totales de 8.2 mg/dL y albúmina
        de 3.2 mg/dL
        ¿Qué resultados anormales orientan al diagnóstico presuntivo?`,
        [ 'Hiperbilirrubinemia',
        'Transaminasas',
        'Leucocitosis',
        'Hipoalbuminemia'],
        'Transaminasas',
        `Según GPC. Principales indicadores de daño hepático AST (valores
            normales 10-45 UI) y ALT (valores normales 10-43)`
    ),
    new Question(
        `Una mujer de 75 años que sufre Alzheimer y estreñimiento es traída de un asilo al
        servicio de urgencias por presentar cuadro de 8 horas de evolución, caracterizado por
        distensión y dolor abdominal de tipo cólico intenso localizado en la fosa iliaca izquierda; no
        ha podido evacuar ni canalizar gases por el recto. En la exploración física se encuentra
        quejumbrosa, presenta abdomen con distensión, timpanismo y peristalsis de lucha, dolor
        intenso durante la palpación en la fosa iliaca y flanco izquierdos. Se solicita radiografía de
        abdomen en donde se evidencia asa en “U” invertida distendida o signo del “grano de café”,
        desaparición de haustras. Se solicita colon por enema con imagen en “pico de pájaro”.
        ¿La descripción de las imágenes encontradas en los estudios de gabinete sugiere?`,
        ['Síndrome de Crohn',
        'Cáncer de recto',
        'Vólvulo de sigmoides',
        'Diverticulitis de colon'],
        'Vólvulo de sigmoides',
        `Según la GPC de vólvulo de colon. La radiografía simple de abdomen
        permite el diagnóstico de vólvulo sigmoideo en 51.3% a 66%. Los hallazgos radiológicos
        más frecuentes en vólvulo de sigmoides son: - Ausencia de gas rectal (90%), -Sigmoide
        distendido en forma de U invertida (86%), -Signo del grano de café (76%). Datos clínicos:
        dolor abdominal, distensión abdominal, ausencia de canalización de gases, ausencia de
        evacuaciones, náusea, vómito, resistencia muscular.`
    ),
    new Question(
        `Un hombre de 24 años , con antecedentes de dermatitis atópica y asma bronquial,
        presenta cuadro clínico de 7 días de evolución caracterizado por dolor faríngeo, tos
        productiva con expectoración amarillo-verdosa y secreción retronasal. El médico le
        prescribe penicilina G procainica y se la aplican en el servicio de enfermería. Transcurridos
        5 minutos, el paciente presenta sensación de desvanecimiento, taquicardia, disnea,
        aumento de la temperatura corporal y disminución de la tensión arterial. Una vez
        estabilizado el paciente, se le realiza determinación de inmunoglobulinas.
        ¿Cual de estas se encontrará elevada?`,
        [ 'IgA', 'IgE', 'IgM', 'IgG'],
        'IgE',
        `Según GPC de Asma bronquial. Rx de tórax, biometría hemática completa,
        eosinófilos en moco nasal o IgE sérica`
    ),
    new Question(
        `. Un paciente de 65 años con pirosis y regurgitaciones de 5 años de evolución se le
        realiza una panendoscopia, en la cual se observa mucosa esofágica inferior hiperémica,
        unión gastroesofágica a 39 cm de la arcada dentaria superior y pinza diafragmática
        localizada a 5 cm, después de que el endoscopio franquea sin dificultad la unión
        gastroesofágica.
        ¿Estos hallazgos indican que el paciente cursa con?`,
        [ 'Esofagitis caustica',
        'Estenosis esofágica',
        'Esofago de barret',
        'Hernia hiatal'],
        'Hernia hiatal',
        `Debido a la ubicación de la pinza diafragmática`
    ),
    new Question(
        `Un adulto de 60 años, gerente de empresa, con estilo de vida sedentario y que niega
        tabaquismo y alcoholismo, acude a consulta externa con un electrocardiograma que se
        tomó como parte de un chequeo de rutina y se refiere asintomático. En el trazo del ECG se
        observa FC de 65/min, complejos QRS precedidos por indas P, intervalo PR de 0.28
        segundos, Complejo QRS de 0.10s, ondas P positivas en DI, DII, y aVF, Ondas T negativas
        en AVR, eje eléctrico de +60 e índice de Sokolow (SV1 + RV6) de 28 mm.
        ¿Cual es el resultado anormal en el ECG del paciente?`,
        [ 'Frecuencia Cardiaca',
        'Intervalo PR',
        'Ondas T negativas en AVR',
        'Eje eléctrico'],
        'Intervalo PR',
        `FC normal (60-100 lpm), Intervalo PR normal (0.12-0.20s), Ondas T
        negativas siempre en AVR, Eje eléctrico normal (-30 a 90)`
    ),
    new Question(
        `Un paciente de 29 años presenta crecimiento en el cuello, insomnio, pérdida de peso de
        aproximadamente 5 kg, caida del cabello y sequedad de pie. En la exploración física se
        encuentra taquicardia, exoftalmos, aumento de volumen en glándula tiroides sin dolor a la
        palpación, temblor fino en ambas manos y edema de MsPs. Se solicitan pruebas de función
        tiroidea en las que se registran TSH de 0.3 mU/mL, T3 total de 3.1 nmol/L, T3 libre de 12
        pmol/L, T4 total de 145 nmol/L, T4 libre de 35 nmol/L, anticuerpos anti TSH-R elevados y
        anticuerpos TSAb elevados
        ¿Que resultado establece el diagnóstico?`,
        ['TSH menor de 0.5 mU/mL',
        'T3 y T4 totales dentro de rango normal con T3 y T4 libre elevados',
        'Anticuerpos TSH-R y TSAb elevados',
        'Anticuerpos antiTg elevados'],
        'TSH menor de 0.5 mU/mL',
        `Según GPC enfermedad de Graves (hipertiroidismo). LA mejor manera de
        medir la función tiroidea es medir niveles de TSH. Un nivel de TSH baja o suprimida indica
        que la tiroides presenta un problema de hiperfunción. valores normales de TSH (0.4-4.2).
        `
    ),
    new Question(
        `Una paciente de 45 años refiere que, posterior a eventos de respiración profunda y
        rápida, presenta parestesias, sensación de hormigueo en las extremidades y mareos. Estas
        manifestaciones remiten cuando la paciente se tranquiliza. Durante el evento, al medir
        gases asteriales, se espera encontrar:`,
        [ 'PaO2 aumentada y PaCO2 normal',
        'PaO2 y PaCO2 aumentadas',
        'PaO2 y PaCO2 disminuidas',
        'PaO2 normal y PaCO2 disminuida'],
        'PaO2 normal y PaCO2 disminuida',
        `Respiraciones aumentadas tendría que aumentar niveles de oxigeno y disminuir niveles de
        PaCO2, que esto nos da la clínica de la paciente con alcalosis respiratoria al no realizarse la
        hematosis de manera correcta. Ninguna de las opciones tiene lo que esperarías en una
        gasometría con una alcalosis respiratoria pura.`
    ),
    new Question(
        `Una paciente de 27 años. GII, AII PI acude a consulta porque desea embarazarse, una
        histerosalpingografia demuestra que no hay paso del medio de contraste desde el cérvix
        uterino. El DX definitivo en este caso es:`,
        ['utero bicorne',
        'endometriosis tubaria',
        'sinequias uterinas',
        'insuficiencia istmico cervical'],
        'sinequias uterinas',
        `Sindrome de Asherman: se debe de sospechar en pacientes con con antedecentes de
        hipomenorrea, abortos de repetición o antecedentes de legrados, el diagnostico se realiza
        con visualización directa mediante histeroscopia, menor sensibilidad con
        histerosalpingografia.`
    ),
    new Question(
        `Lactante de 6 meses, irritable, inicialmente intermitente desde hace 4 horas, constante
        llanto intenso, 6 vomitos de contenido gástrico, y dos evacuaciones de mucosas con
        abundante sangre y con aspecto a jalea, EF; 120 lpm, T 38ºC llanto con lagrimas escasas,
        mucosa oral seca, abdomen distendido y timpánico, masa en forma de salchicha en CSD,
        no hay ruidos peristálticos, tacto rectal con sangrado.
        ¿Cual es el diagnóstico de este paciente?`,
        ['ileo paralitico',
        'conducto onfalomesenterico permeable',
        'intususcepcion',
        'malrotacion intestinal'],
        'intususcepcion',
        `La invaginación intestinal o intususcepción es una enfermedad obstructiva en niños la triada
        clásica donde se presenta masa abdominal palpable, en forma de salchicha, heces color
        rojo (como jalea de grosella), y dolor abdominal agudo; además de vómitos.`
    ),
    new Question(
        `Recien nacido de 38 SDG, madre sana, obtenido por cesarea, llora y respira al nacer,
        peso y talla normal, a los 10 min de alumbrado inicia con datos leves de dif respiratoria,
        aleteo nasal y retracción xifoidea leve, se pasa a terapia intermedia, Rx torax; nueve
        espacios intercostales, aumento de trama parahiliar y cisuritis.
        ¿ cual es el diagnóstico definitivo ?`,
        ['sindrome de aspiracion meconial',
        'deficiencia de factor sulfactante',
        'taquipnea transitoria',
        'hipertension pulmonar'],
        'taquipnea transitoria',
        `Según GPC: inicio en las primeras horas de ida, se resuelve entre las 24 y 72 horas,
        factores de riesgo; recién nacidos a termino o cercanos a termino, nacer por cesárea o en
        forma precipitada por vía vaginal, se caracteriza FC >60 rpm, aumento de requerimientos de
        oxígeno. Imágenes en RX de tórax; Rectificación de arcos costales, herniación del
        parénquima pulmonar, hiperclaridad pulmonar, aumento del espacio intercostal,
        aplanamiento del diafragma. Cisuritis, incremento del diámetro anteroposterior, congestior
        parahiliar simétrica.`
    ),
    new Question(
        `Paciente de 6 años, palidez generalizada, astenia leve, somnoliencia y mal rendimiento
        escolar, BH reporta hb 10 mg/dl, Hto 31%, leucos 6.700/mm3, neutro 45%, linfocitos 48%,
        monocitos 4%, eosinofilos 2%, basófilos 1% plaquetas 256,000 VCM 72 fL, HCM 22 pg,
        CHbCH 29 g/dL, retis 1.2%
        Estos datos sugieren una anemia:
        `,
        ['normocitica normocromica',
        'microcitica hipocromica',
        'macrocitica normocromica',
        'hemolitica'],
        'microcitica hipocromica',
        `Valores normales de BH: VCM (83-100 fL) HCM (28-32 pg). Aprenderse valores de BH.
        `
    ),
    new Question(
        `. Acude a consulta un paciente de 57 años que presenta hipertensión arterial con 5 años
        de evolución, bajo tratamiento con 25 mg de captopril cada 24 horas. Se registra TA de
        120/80 mmHg, FC de 63/min, FR de 17/min y T de 36.8ªC. Durante la exploración física no
        se observan datos anormales. Se solicita un electrocardiograma y perfil de lípidos como
        parte de un chequeo anual y se observa FC de 65/min, complejos QRS precedidos de
        ondas P, intervalo PR de 0.28 segundos, complejo QRS de 0.10 segundos, ondas P
        positivas en DI, DII y aVF, ondas T negativas en aVR, eje eléctrico de +60ª, índice de
        Sokolow (SV1 + RV6) de 28 mm. En los exámenes de laboratorio se reporta colesterol total
        de 180 mg/dl, triglicéridos de 120 mg/dl, HDL de 50 mg/dl y LDL de 80 mg/dl.
        ¿Cuál es el diagnóstico de este paciente?`,
        [ 'hipercolesterolemia',
        'hipertrigliceridemia',
        'hipertrofia ventricular izquierda',
        'bloqueo auriculo ventricular de 1er grado'],
        'bloqueo auriculo ventricular de 1er grado',
        `Según GPC, es definido como la prolongación anormal del intervalo PR mayor a 0.20
        segundos.`
    ),
    new Question(
        `Un paciente de 72 años en incluido, previo consentimiento informado, en un protocolo
        para la aplicación de una droga en experimentación, posteriormente decide abandonarlo
        pues el tratamiento le ha provocado severas reacciones secundarias.
        Ante esta situación el oncólogo responsable debe:`,
        ['evitar su salida del protocolo, pues el firmo un consentimiento informado',
        'canalizarlo al juridico de la institucion por daños y prejuicios',
        'evitar su salida del estudio pues las reacciones secundarias son normales enualquier medicamento de experimentacion',
        'permitirle dejar el estudio en el momento que lo desee, sin importar la causa'],
        'permitirle dejar el estudio en el momento que lo desee, sin importar la causa',
        `Pauta internacional para la investigación y experimentación biomédica en seres humanos
        nos dice que la persona es libre de negarse a participar y tendrá la libertad de retirarse de la
        investigación en cualquier momento sin sanción o pérdida de beneficios a los cuales en otra
        circunstancia tendría derecho. La declaración de Helsinki de la asociación medica mundial
        habla lo mismo.`
    ),
    new Question(
        `Se llevara a acabo un ensayo clínico en el que se estudiará la eficacia de un nuevo
        medicamento contra la hipertensión arterial, se pretende la inclusión de pacientes que
        acude a consulta en el hospital en el que se desarrolla el ensayo. ¿Qué información debe
        integrarse, de manera indispensable en el consentimiento informado?`,
        [ 'los antecedentes patologicos del paciente',
        'la participacion es indispensable para recibir la atencion medica',
        'los posibles efectos adversos son responsabilidad del paciente',
        'la libertad del paciente para retirarse del estudio'],
        'la libertad del paciente para retirarse del estudio',
        `Se justifica con la respuesta anterior.`
    ),
    new Question(
        `Un paciente de 30 años es atendido en urgerncias por una herida de arma de fuego en
        el torax, una pareja de transeuntes lo encontro inconciente en la via publica y solicito apoyo
        por paramedicos, quienes lo llevaron al hospital y al llegar informaron que portaba una
        identificacion como donante de organos. durante el traslado, se le practicó trasqueostomia
        por edema generalizado de las vias aereas que dificultaba la intubacion. fue ingresado en
        estado de coma y conectado a un respirador. pero al presentar indicios de choque
        hipovolemico, se determino la necesidad de realizar una toracotomia de emergencia,
        procedimiento para el que se requiere la firma de consentimiento informado. la trabajadora
        social asegura no haber localizado al familiar de contacto indicado en la identificacion del
        paciente, sin embargo los testigos reportaron el caso acudiendo al hospital para declarar
        que lo habian reconocido como vecino de la zona donde lo hallaron.
        Con base en la condicion actual del herido ¿quienes deben firmar el consentimiento o la
        autorizacion del paciente?
        `,
        [ 'trabajadora social y su superior',
        'transeúntes testigos',
        'medico tratante y cirujano',
        'paramedicos'],
        'medico tratante y cirujano',
        `Según la NOM 004 del expediente clínico; en caso de incapacidad transitoria o permanente
        y ante la imposibilidad de que el familiar tutor o representante legal firme el consentimiento,
        se procederá bajo acuerdo de por lo menos dos de los médicos autorizados por el hospital
        dejando por escrito constancia en el expediente clínico.`
    ),
    new Question(
        `Se programa a un paciente de 26 años para hemioplastia umbilical. El cirujano elabora
        el consentimiento informado, en el que registra el nombre de la institución, el lugar y la
        fecha, el nombre del procedimiento a realizar, la autorización al personal de salud, para la
        atención de contingencias, el riesgo del procedimiento, así como el nombre completo y la
        firma del médico, del paciente y de dos testigos .
        ¿Qué dato se omitió en el documento?`,
        ['Pronóstico',
        'Gráficos de signos vitales',
        'Plan de manejo y seguimiento',
        'Beneficios esperados'],
        'Beneficios esperados',
        `ya que es el único apartado que debe ir dentro del consentimiento
        informado`
    ),
    new Question(
        `Una mujer de 77 años es ingresada al servicio de medicina interna en estado de coma
        por accidente cerebrovascular. La paciente tiene como antecedente padecer de diabetes
        mellitus 2 desde hace 28 años y estar en tratamiento de diálisis peritoneal, debido a
        insuficiencia renal crónica desde hace 1 año por necropsia diabética a las 72 horas del
        internamiento desarrolla insuficiencia respiratoria aguda y fallece por para cardiorespiratorio
        De acuerdo con la evolución de la paciente ¿Qué enfermedad deberá anotarse como causa
        directa de la muerte con base a las características del certificado de defunción y la
        normativa vigente:`,
        ['paro cardiorespiratorio',
        'evento cerebral vascular',
        'nefropatia diabética',
        'insuficiencia respiratoria'],
        'insuficiencia respiratoria',
        `ya que según el llenado correcto de defunción define como la
        causa directa al último evento que provoca que muera el paciente`
    ),
    new Question(
        `Un paciente de 45 años es trasladado a urgencias tras haber sufrido un accidente
        automovilístico. En la anamnesis se observa consciente, cooperador, orientado en persona,
        pero no en tiempo y espacio, con aliento alcohólico evidente, no porta identificación, durante
        la explotación física se reporta TA 100/70, FC 85, respiratoria de 20 y Glasgow de 14,
        además se aprecia una herida cortante en la cara externa del muslo izquierdo, de 12cm de
        longitud que abarca la piel y tejido celular suscitando por lo que requiere sutura
        ¿Cuál es la acción que debe realizar de acuerdo al tratamiento de la herida?
        `,
        ['solicitar al paciente que firme el consentimiento informado',
        'localizar a un familiar para que brinde el consentimiento informado',
        'proceder bajo acuerdo de dos médicos autorizados',
        'iniciar tratamiento si recabar consentimiento'],
        'localizar a un familiar para que brinde el consentimiento informado',
        `bebido a que el paciente está alcoholizado y no está
        orientado en sus tres esferas por lo que no se encuentra en condiciones de poder firmar`
    ),
    new Question(
        `Un paciente de 58 años con a ntecedentes de úlcera duodenal e hipertensión es llevado
        al servicio de urgencias por ambulancia en situación de shock y datos de una probable
        peritonitis. El paciente presenta un paro cardiorespiratorio y fallece.
        En el certificado de defunción el diagnóstico de shock es la causa:`,
        ['básica', 'directa', 'secundaria', 'asociada'],
        'secundaria',
        `porque no se considera ni una causa básica ni directa según el
        llenado correcto del certificado`
    ),
    new Question(
        `Unas mujer de 35 años con embarazo de 36 semanas es trasladada en ambulancia al
        servicio de urgencias por presentar convulsiones de 1 día de evolución. En el interrogatorio
        indirecto se reporta que la paciente, desde una semana antes presentó cifras de TA
        180/120, edema y proteinuria elevada el ginecobstetra decide culminar el embarazo por ti A
        abdominal. Posteriormente la paciente es trasladada a la unidad de cuidados intensivos Y
        ahí presenta hemorragia cerebral y 12 horas después fallece
        Para el llenado del certificado de defunción del paciente ¿Cuál es la causa que debe
        consignarse como causa directa de la muerte?`,
        ['EClampsia',
        'preeclampsia',
        'hemorragia cerebral',
        'embarazo de riesgo'],
        'hemorragia cerebral',
        `porque la causa directa se considera como el último evento
        que provoca que muera el paciente.`
    ),
    new Question(
        `Una mujer de 54 años con antecedente de diabetes mellitus tipo 2 de 15 años de
        evolución, desarrollo glomeruloesclerosis diabética 6 meses antes de su muerte y 5 días
        previos presento un infarto transmural aviso del.miocardio y paro respiratorio
        Con base a la evolución que tuvo la paciente ¿ cuál es la causa directa de muerte Que debe
        registrarse en el certificado de defunción?
        `,
        ['Diabetes mellitus 2',
        'Paro respiratorio',
        'infarto transmural agudo al miocardio',
        'Coma o cetoacidosis diabetica'],
        'infarto transmural agudo al miocardio',
        `piden la causa directa y el último evento que provoca que
        muera el paciente`
    ),
    new Question(
        `Una mujer de 36 años, posterior a un intento de violación por un sujeto desconocido,
        acude al Ministerio público para certificación de lesiones, el médico legista anota en el
        certificado la presencia de lesiones eritematosas superficiales en brazos y cara anterior de
        ambos muslos, caracterizadas por ser de trazo lineal, paralelas, con eliminación de la
        epidermis en algunas zonas y en otras con eliminación superficial de la dermis.
        Las lesiones que presenta la paciente se clasifican como heridas:`,
        [ 'Pediculada', 'Escoriación', 'Perforantes', 'Incisas'],
        'Escoriación',
        `porque las características de la lesión, en la escoriacion lo
        más significativo es la pérdida de continuidad de epidermis y dermis, así como el trazo lineal`
    ),
    new Question(
        `Un torero de 18 años es trasladado a urgencias al presentar una herida en el abdomen;
        en la exploración física, se encuentra inconsciente y se observa una lesión de forma circular
        en la fosa iliaca 7, con bordes que tienen anillo de contusión, en extremos con paredes lisas
        en forma de conducto y con una profundidad que alcanza la cavidad abdominal.
        ¿ Qué tipo de herida se debe registrar en el expediente del paciente?`,
        ['Cortante',
        'Punzante',
        'Punzocortante',
        'Corto contudente'],
        'Corto contudente',
        `por la s características de la lesión, y estas las corto
        contudentes se caracterizan por tener bordes lisos y son provocadas por una fuerza mayor
        Y suelen perforar hasta observa hueso.`
    ),
    new Question(
        `Una adolescente de 16 años, acude al servicio de urgencias y refiere haberse peleado
        con su vecina. Presenta herida que interrumpe la integridad de la piel, se bordes regulares
        en antebrazo izquierdo.
        Como se clasifica esa herida:
        `,
        [ 'Contundente', 'Cortante', 'Punzante', 'Mixta'],
        'Cortante',
        ` por las características de la lesión interrumpe integridad de piel y
        los bordes son regulares al ser causada con objetos como latas, vidrio o cuchillo.
        `
    ),
    new Question(
        `Un paciente de 26 años es trasladado a urgencias, porque presenta lesiones luego de
        una riña callejera, se encuentra inconsciente luego durante la exploración física, destaca
        una herida con sangrado moderado en el cuero cabelludo con bordes irregulares
        equimóticos y puentes dérmicos
        ¿Qué tipo de lesión tiene?`,
        ['Contusa', 'Corto contudente', 'Cortante', 'Punzante'],
        'Contusa',
        `por las características de esta lesión las cuales tiene bordes
        irregulares, puede haber equimosis, o hematoma con erosiones.
        `
    ),
    new Question(
        `En un hospital ubicado en el suroeste del país se identificaron diversas enfermedades
        infecciosas que requieren notificación para su vigilancia epidemiológica: dos casos de
        infección por VPH y dos por meningitis, uno por citomegalovirus y otro más por Neisseria
        meningitiditis. Además, se reportaron tres casos de infección por dengue. ¿Qué caso
        requiere notificación epidemiológica inmediata y semanal?`,
        ['Dengue',
        'Infección por VPH',
        'Meningitis viral',
        'Meningitis meningocócica'],
        'Meningitis meningocócica',
        `Notificación inmediata (durante las primeras 24 hrs de conocimiento del padecimiento)
        según NOM-017-SSA2-2012, apéndice A.`
    ),
    new Question(
        `En un centro de salud se atendieron 7 casos de padecimientos infectocontagiosos
        infantiles de entre 4 y 14 años en la última semana. Sin embargo, no todos los casos se
        notificaron de manera inmediata , como lo establece la norma vigente. Seleccione los
        padecimientos que debieron notificarse con dicha frecuencia.
        1. Parotiditis
        2. Amibiasis intestinal
        3. Tosferina
        4. Faringoamigdalitis estreptococica
        5. Enteritis debida a rotavirus
        6. Sarampión
        `,
        ['1,2,3', '1,4,5', '2,4,6', '3,5,6'],
        '3,5,6',
        `NOM-017-SSA2-2012 para la vigilancia epidemiológica, todas las prevenibles con
        vacunación excepto hepatitis A y B, papiloma, parotiditis y varicela son de notificación
        inmediata
        `
    ),
    new Question(
        `En la consulta de un centro de salud se recibió, en el mismo día, un paciente con
        diagnóstico de paludismo por P. vivax, dos con fiebre por dengue, uno con TB pulmonar y
        otro más con lesión por abeja africanizada. Al elaborar el informe de los padecimientos.
        ¿cuál debe notificarse de manera inmediata?
        `,
        ['Lesión por abeja africanizada',
        'Paludismo por plasmodium vivax',
        'Fiebre por dengue',
        'TB pulmonar'],
        'Lesión por abeja africanizada',
        `Según la NOM- 017-SSA2-2012 para la vigilancia epidemiológica, paludismo por P. vivax,
        fiebre por dengue y TB pulmonar son de notificación semanal excepto la lesión por la abeja
        africanizada que es de notificación inmediata`
    ),
    new Question(
        `En el servicio de urgencias se recibe una paciente de 35 años que trabaja en el campo.
        Presenta rigidez generalizada y espasmos musculares. No la acompaña ningún familiar y
        tampoco se puede investigar si se le ha aplicado la vacuna del tétanos. ¿En qué momento
        se debe notificar este caso a las autoridades sanitarias?
        `,
        ['Hasta que se confirme el caso',
        'En menos de 24 hrs',
        'De 24 a 48 hrs',
        'En cualquier momento'],
        'En menos de 24 hrs',
        `Según la NOM-017-SSA2-2012 para la vigilancia epidemiológica es de notificación
        inmediata (Durante las primeras 24 hrs)`
    ),
    new Question(
        `En un centro de salud comunitario se prepara el reporte de vigilancia epidemiológica
        semanal y se identifica el registro de dos menores procedentes de la misma escuela con
        diagnóstico de hepatitis A. ¿Cómo deben notificarse estos registros en el reporte?`,
        ['Evento', 'Alerta', 'Brote', 'Caso'],
        'Brote',
        `Según la NOM-017-SSA2-2012 para la vigilancia epidemiológica se considera brote a la
        presencia de dos o más casos asociados epidemiológicamente entre sí`
    ),
    new Question(
        `El médico responsable de una clínica de atención primaria deberá hacerse cargo de la
        elaboración de reportes semanales, mensuales y anuales; por lo que decide capacitar al
        personal de la clínica respecto de la enfermedades que se notifican a las autoridades
        sanitarias ante cualquier caso sospechoso. Una enfermedad que debe considerarse para
        dicha capacitación es:`,
        ['Faringoamigdalitis bacteriana', 'NAC', 'Otitis', 'Rabia'],
        'Rabia',
        `Según el Sistema Nacional de Vigilancia de la Salud (SNVS) en el módulo de Vigilancia
        Clínica (C2) son de notificación individual inmediata ante caso sospechoso las
        enfermedades zoonóticas entre las que se encuentra rabia.`
    ),
    new Question(
        `Un adolescente es llevado a la unidad de salud por presentar evacuaciones líquidas
        profusas, como “agua de arroz” en número de 10, vómito continuo y datos de
        deshidratación, ante esta situación la acción de vigilancia epidemiológica es:`,
        ['Capacitar a los familiares sobre la hidratación oral y saneamiento básico',
        'Otorgar tratamiento profiláctico a convivientes',
        'Notificar a la instancia correspondiente como caso sospechoso',
        'Realizar búsqueda de portadores en familia y convivientes'],
        'Notificar a la instancia correspondiente como caso sospechoso',
        `Según la NOM-016-SSA2-2012 para la vigilancia, prevención, control, manejo y tratamiento
        de cólera apartado 4. Vigilancia epidemiológica y generalidades, inciso 4.3 Los casos
        sospechosos, confirmados y defunciones por cólera, así como brotes son objeto de
        notificación inmediata durante las primeras 24 hrs.`
    ),
    new Question(
        `Se reporta una prueba positiva de reacción en cadena de polimerasa en tiempo real en
        un paciente que presenta fiebre, tos y dificultad respiratoria menor a 8 hrs de evolución.
        Esto conduce a un diagnóstico de caso:`,
        [ 'Sospechoso', 'Probable', 'Compatible', 'Confirmado'],
        'Confirmado',
        `Según la NOM-017-SSA2-2012 para la vigilancia epidemiológica caso confirmado se refiere
        a todo caso cuyo diagnóstico se confirma por estudios auxiliares de laboratorio con signos y
        síntomas alusivos a enfermedad`
    ),
    new Question(
        `Un paciente de 50 años, con cuadro febril de 39.5°c de inicio súbito, tiene dolor articular
        severo, mialgias, cefalea, náuseas, vómito, rash y conjuntivitis. Aunque vive en una zona
        tropical donde no se ha identificado la circulación del virus chikungunya, el médico
        considera que se trata de un caso probable. ¿Qué acción de vigilancia epidemiológica debe
        implementarse?`,
        ['Toma de muestra para detección de ARN viral',
        'Descarte del caso hasta confirmar la circulación del virus',
        'Inicio inmediato del tratamiento ativiral',
        'Toma de muestra inmediata de los contactos'],
        'Toma de muestra para detección de ARN viral',
        `Según los lineamientos para la vigilancia epidemiológica y diagnóstico por laboratorio de
        fiebre chikungunya en las zonas en donde no se ha identificado la circulación del virus
        chikungunya, a los casos que cumplan con la definición estricta de casos sospechoso de
        CHIK se tomará muestra al 100% de los casos.`
    ),
    new Question(
        `Una paciente de 25 años que reside en la península de yucatán acude a consulta
        porque presenta fiebre no cuantificada de 3 días de evolución, así como mialgias, artralgias
        y cefalea. La consulta sucede en la época en la que cada año se reportan casos de dengue,
        además de la probable presencia del mosquito Aedes aegypti. ¿Con qué acción de
        vigilancia epidemiológica se debe iniciar?`,
        [ 'Determinar el índice larvario',
        'Confirmar casos de dengue en la zona',
        'Realizar estudio del caso',
        'Llevar a cabo el control del brote'],
        'Confirmar casos de dengue en la zona',
        `Según los lineamientos para la vigilancia epidemiológica de fiebre por dengue y fiebre
        hemorrágica por dengue la primera acción que se debe de tomar ante un caso probable de
        fiebre por dengue es notificar todos los casos probables para posterior hacer la toma de
        muestras pertinentes y una vez confirmada la presencia de la enfermedad mediante el
        diagnóstico de laboratorio se debe clasificar y estudiar los casos sobre las bases
        epidemiológicas.`
    ),
    new Question(
        `En el centro de salud local, en los últimos días se atendieron a varios niños con tos de
        14 o más días de evolución, de tipo paroxística, cianosante y con estridor laríngeo
        respiratorio. Además de la notificación inmediata ¿Qué acciones de vigilancia
        epidemiológica deben llevarse a cabo de manera prioritaria?`,
        ['Estudio de Brote e inmunización a menores de 5 años y mujeres embarazadas.',
        'Cálculo de la tasa de ataque e inmunización a toda la población.',
        'Estudio de caso e inmunización a menores de 5 años y mujeres embarazadas.',
        'Estudio de brote e iniciar antitusígenos.'],
        'Cálculo de la tasa de ataque e inmunización a toda la población.',
        `Caso probable de Tos ferina: Toda persona con tos paroxística con siete o más días de
        evolución con al menos uno o más de los siguientes signos o síntomas: tos en accesos,
        cianosante, emetizante, apnea o estridor laríngeo.
        Estudio de brote: Es la investigación de los factores de riesgo epidemiológico individual y/o
        poblacional involucrado ante la presencia de dos o más casos asociados en un área
        geográfica delimitado y en el mismo periodo de tiempo. En algunos padecimientos la
        presencia de un caso en un lugar que no ha ocurrido casos se considera como un brote.
        Los objetivos del Sistema de Vigilancia Epidemiológica de Tos ferina son los
        siguientes:
        -Identificar oportunamente la ocurrencia de casos de Tos ferina en el país.
        -Notificar de manera inmediata a la jurisdicción sanitaria la totalidad de los casos probables
        y confirmados
        -Notificar la totalidad de los casos probables de Síndrome Coqueluchoide/tos ferina a través
        del SUIVE a la jurisdicción sanitaria
        - Asegurar la quimioprofilaxis a los contactos intradomiciliarios, extradomiciliarios ante un
        caso confirmado de B. pertussis.`
    ),
    new Question(
        `Se estableció un consultorio privado en una comunidad rural, sin embargo los médicos
        encargados se ausentaron de manera injustificada, por lo que la atención brindada fue
        irregular. Por ello, después de un año, el servicio de consulta no ha alcanzado el punto de
        equilibrio necesario. ¿Qué principio de la administración se debe aplicar para tomar
        decisiones que solucionen este problema?`,
        ['Planeación', 'Organización', 'Control', 'Dirección'],
        'Dirección',
        `El proceso administrativo se define como una consecución de fases o etapas a través de las
        cuales se lleva a cabo la práctica administrativa: planeación, organización, dirección y
        control.
        Proceso Administrativo
        Planeación: ¿Qué se va a hacer? Objetivos, políticas, diagnóstico, programas y
        presupuestos
        Organización: ¿Cómo se dividirá el trabajo? Unidades de mando y procedimientos
        Integración: ¿Quién y con qué se va a hacer? Personal: selección, contratación,
        capacitación, materiales, finanzas, compras, producción, entre otros.
        Dirección: ¿Cómo se debe hacer? Autoridad, mando, toma de decisiones, supervisión,
        delegación, instrucciones y comunicación.
        Control: ¿Cómo se hizo? Evaluación, comparación, determinación de las desviaciones,
        corrección de fallas y retroalimentación`
    ),
    new Question(
        `Es llevado a urgencia un paciente de 28 años con heridas ocasionadas por arma de
        fuego durante un asalto, una en el cuello y otra en el abdomen. En la exploración física se
        encuentra con palidez de tegumentos, con presencia de orificio de entrada de bala a nivel
        cervical y con herida de aproximadamente 1 cm en fosa iliaca izquierda y datos de abdomen
        agudo, sin orificio de salida del proyectil. Se encuentra diaforético, polipneico, con aumento
        de volumen y deformidad en el cuello, presenta desviación de la tráquea hacia la derecha.
        Se acompaña de sangrado profuso por lesión de la arteria carótida izquierda. Dada la
        gravedad y la presencia de alteración de los signos vitales con un estado de choque
        hipovolémico, se ingresa a quirófano para realizar bypass de la carótida, además de
        colostomía debido a una perforación del colon descendente. Con base en la normativa del
        expediente clínico ¿Qué información es indispensable integrar en la nota preoperatoria del
        paciente?
        `,
        ['Consentimiento informado con acto autorizado por realizar',
        'Resumen de la exploración física y resultados de los estudios',
        'Informe del procedimiento quirúrgico por realizar',
        'Nombre y firma del responsable de la cirugía.'],
        'Nombre y firma del responsable de la cirugía.',
        `NOM 004 Del Expediente Clínico Nota Preoperatoria.
        Deberá elaborarla el cirujano que va a intervenir al paciente, incluyendo a los cirujanos
        dentistas (excepto el numeral 8.5.7 para estos últimos) y deberá contener como mínimo:
        8.5.1 Fecha de la cirugía;
        8.5.2 Diagnóstico;
        8.5.3 Plan quirúrgico;
        8.5.4 Tipo de intervención quirúrgica;
        8.5.5 Riesgo quirúrgico;
        8.5.6 Cuidados y plan terapéutico preoperatorios; y
        8.5.7 Pronóstico.
        8.6 Un integrante del equipo quirúrgico podrá elaborar un reporte de la lista de verificación
        de la cirugía, en su caso, podrá utilizar la lista Organización Mundial de la Salud en esta
        materia para dicho propósito.
        8.7 Nota preanestésica, vigilancia y registro anestésico.`
    ),
    new Question(
        `En el área de medicina preventiva de una unidad de primer nivel de atención se
        coordinara un programa de orientación sobre salud reproductiva con el objetivo de disminuir
        la alta tasa de embarazos adolescentes eventualmente. Para ello se deben determinar las
        metas generales y especificas de la campaña, con base en antecedentes, documentales
        provenientes de diversas fuentes. ¿A qué etapa del proceso administrativo corresponde
        esta actividad?`,
        [ 'Planeación', 'Organización', 'Control', 'Dirección'],
        'Planeación',
        `El proceso administrativo se define como una consecución de fases o etapas a través de las
        cuales se lleva a cabo la práctica administrativa: planeación, organización, dirección y
        control.
        Proceso Administrativo
        Planeación: ¿Qué se va a hacer? (Prevenir), Objetivos (disminuir la alta tasa de
        embarazos adolescentes eventualmente), políticas, diagnóstico, programas y presupuestos
        Organización: ¿Cómo se dividirá el trabajo? Unidades de mando y procedimientos
        Integración: ¿Quién y con qué se va a hacer? Personal: selección, contratación,
        capacitación, materiales, finanzas, compras, producción, entre otros.
        Dirección: ¿Cómo se debe hacer? Autoridad, mando, toma de decisiones, supervisión,
        delegación, instrucciones y comunicación.
        Control: ¿Cómo se hizo? Evaluación, comparación, determinación de las desviaciones,
        corrección de fallas y retroalimentación.
        `
    ),
    new Question(
        `En una unidad de salud comunitaria se implementó un programa para disminuir la
        incidencia de vaginitis, debido a que se incrementaron los casos en los últimos años. Al año
        de aplicar el procedimiento, se encontró que los casos de vaginitis habían disminuido 5%.
        Dentro del proceso de administración en salud, los resultados reportados corresponden a la
        etapa de:
        `,
        ['Planeación', 'Organización', 'Control', 'Dirección'],
        'Control',
        `Proceso Administrativo
        Planeación: ¿Qué se va a hacer? (Prevenir), Objetivos (disminuir la alta tasa de
        embarazos adolescentes eventualmente), políticas, diagnóstico, programas y presupuestos
        Organización: ¿Cómo se dividirá el trabajo? Unidades de mando y procedimientos
        Integración: ¿Quién y con qué se va a hacer? Personal: selección, contratación,
        capacitación, materiales, finanzas, compras, producción, entre otros.
        Dirección: ¿Cómo se debe hacer? Autoridad, mando, toma de decisiones, supervisión,
        delegación, instrucciones y comunicación.
        Control: ¿Cómo se hizo? (Se implementó un programa) Evaluación (los casos de vaginitis
        disminuyeron 5%), comparación, determinación de las desviaciones, corrección de fallas y
        retroalimentación.`
    ),
    new Question(
        `Una mujer de 51 años fue referida a la unidad de patología mamaria. El resultado de la
        punción informa carcinoma ductal infiltrante, por lo que se le indica tratamiento con
        poliquimioterapia adyuvante al que se siguieron varias sesiones de radioterapia. Pasados 4
        años. La paciente solicita un resumen clínico de su manejo, para iniciar un proceso legal en
        contra de la institución por complicaciones. ¿Qué documento del expediente clínico
        proporciona los datos necesarios para lo que requiere la paciente?`,
        ['Historia Clínica',
        'Nota de Interconsulta',
        'Nota postoperatoria',
        'Nota de egreso'],
        'Historia Clínica',
        `Segun la NOM 004 Del Expediente Clínico
        4.10 Resumen clínico: al documento elaborado por un médico, en el cual, se registran los
        aspectos relevantes de la atención médica de un paciente, contenidos en el expediente
        clínico.
        Deberá tener como mínimo: padecimiento actual, diagnósticos, tratamientos, evolución,
        pronóstico y estudios de laboratorio y gabinete.
        La Historia Clínica debe contar con: Interrogatorio, EF, Resultados previos y actuales de
        estudios de laboratorio, gabinete y otros, Diagnósticos o problemas clínicos, Pronóstico,
        Indicación terapéutica, Nota de evolución, Evolución y actualización del cuadro clínico,
        Resultados relevantes de los estudios de los servicios auxiliares de diagnóstico y
        tratamiento que hayan sido solicitados previamente, Diagnósticos o problemas clínicos,
        Pronóstico, Tratamiento e indicaciones médicas, Nota de Interconsulta, Criterios
        Diagnósticos, Plan de estudios, Sugerencias Diagnosticas y Tratamiento.
        `
    ),
    new Question(
        `Una mujer con 33 semanas de embarazo y artritis ingresa al servicio de urgencias
        posterior a una caída de su propia altura, que le produce artralgia en rodilla derecha, dolor
        intenso, rigidez, y dificultad al caminar Con base en la NOM del expediente clínico, la nota
        médica de urgencias de esta paciente debe incluir:`,
        ['Nota de Referencia',
        'Nota de evolución',
        'Pronostico',
        'Nota de Traslado'],
        'Nota de evolución',
        `Segun la NOM 004 Del Expediente Clínico
        7. De las notas médicas en urgencias
        Inicial: Deberá elaborarla el médico y deberá contener lo siguiente: Fecha y hora en que se
        otorga el servicio, SV, Motivo de la atención, Resumen del interrogatorio, exploración física
        y estado mental, en su caso, Resultados relevantes de los estudios de los servicios
        auxiliares de diagnóstico y tratamiento que hayan sido solicitados previamente,
        Diagnósticos o problemas clínicos, Tratamiento y pronóstico, Nota de evolución: Deberá
        elaborarla el médico cada vez que proporciona atención al paciente.
        En los casos en que el paciente requiera interconsulta por médico especialista, deberá
        quedar por escrito, tanto la solicitud, que deberá realizar el médico solicitante, como la nota
        de interconsulta que deberá realizar el médico especialista`
    ),
    new Question(
        `Un hombre de 30 años es trasladado por una ambulancia a un hospital de traumatología
        con una herida de proyectil disparado con arma de fuego, localizada en mesogastrio y
        penetrante de cavidad abdominal. El tratamiento es quirúrgico, con diagnostico
        postoperatorio de laceración y reparación de los vasos abdominales, así como perforación
        de colon descendente sin extracción de la bala. Su evolución es tórpida. Con base en la
        NOM de expediente clínico, la nota preoperatoria de esta paciente debe incluir:`,
        ['El consentimiento informado',
        'La operación planeada',
        'Los incidentes',
        'Nombre del responsable de la cirugía.'],
        'La operación planeada',
        `Nota Preoperatoria.
        Deberá elaborarla el cirujano que va a intervenir al paciente, incluyendo a los cirujanos
        dentistas (excepto el numeral 8.5.7 para estos últimos) y deberá contener como mínimo:
        8.5.1 Fecha de la cirugía;
        8.5.2 Diagnóstico;
        8.5.3 Plan quirúrgico;
        8.5.4 Tipo de intervención quirúrgica;
        8.5.5 Riesgo quirúrgico;
        8.5.6 Cuidados y plan terapéutico preoperatorios; y
        8.5.7 Pronóstico.
        8.6 Un integrante del equipo quirúrgico podrá elaborar un reporte de la lista de verificación
        de la cirugía, en su caso, podrá utilizar la lista Organización Mundial de la Salud en esta
        materia para dicho propósito.
        8.7 Nota preanestésica, vigilancia y registro anestésico.`
    ),
    new Question(
        `El diagnóstico de salud de una comunidad rural marginada muestra un incremento en la
        incidencia de casos de neonatos con defectos del tubo neural respecto a la media nacional.
        Sin embargo se confirmó que en la zona no hay generadores de desechos tóxicos que
        expliquen este fenómeno. ¿Qué programa del Sistema Nacional de Salud se debe aplicar
        para llevar a cabo las acciones específicas?
        `,
        ['Atención a la salud de la infancia y la adolescencia',
        'Entornos y comunidades saludables',
        'Salud materna y perinatal',
        'Promoción de la Salud y determinantes sociales.'],
        'Salud materna y perinatal',
        `NOM 007 Para Atención de embarazo, parto y puerperio
        5.2.1.13 Para prevenir defectos del tubo neural, es importante prescribir 0.4 mg de ácido
        fólico y micronutrientes desde el periodo, mínimo tres meses previos a la primera consulta y
        durante todo el embarazo.`
    ),
    new Question(
        `Un niño de 13 años es llevado a consulta por presentar fatiga, cansancio y cefalea
        intensa. La madre refiere que el cuadro inició hace un mes y que su rendimiento escolar se
        ha visto afectado; además tuvo problemas por consumo de alcohol y peleas con sus
        compañeros. En la exploración física se le observa desnutrido con peso bajo para su talla,
        se identifica reflejo de ojo banco y desviación de ojo izquierdo. En el miembro inferior hay
        una herida cicatrizada que el paciente refiere haberse realizado con una lámina,
        probablemente oxidada. ¿Cuál es el programa del Sistema Nacional de Salud que debe
        atender lo prioritario?`,
        ['Salud para la infancia y la Adolescencia',
        'Cáncer en la infancia y la adolescencia',
        'Prevención social de la violencia y la delincuencia',
        'Vacunación Universal.'],
        'Prevención social de la violencia y la delincuencia',
        `Programa nacional para la prevención social de la violencia y la delincuencia
        La elaboración y desarrollo de las políticas de prevención social de la violencia y la
        delincuencia requiere que los servidores públicos cuenten con conocimientos que les
        permitan identificar este tipo de situaciones a partir de los factores que las generan, así
        como sus causas y consecuencias, más allá de criminalizar a las personas que cometen
        actos de violencia o delincuencia.
        Por ende, los retos que se identifican para la siguiente administración son:
        -Establecer estrategias de coordinación entre las distintas secretarías involucradas en la
        atención de aquellos factores que podrían generar violencia y delincuencia.
        -Crear mecanismos que permitan la coordinación entre los tres órdenes de gobierno y
        fomentar la participación activa de la ciudadanía`
    ),
    new Question(
        `En una comunidad urbana se ha incrementado la incidencia de abortos
        espontáneos. Las autoridades de salida deciden emprender acciones a fin de
        disminuir dicha incidencia. ¿Qué programa de salud será de utilidad para disminuir
        el número de casos en esta comunidad?`,
        ['Salud sexual y reproductiva del adolescente',
        'Planificación familiar y anticoncepción',
        'Salud materna y perinatal',
        'Prevención y atención a la violencia'],
        'Salud materna y perinatal',
        `De acuerdo con el programa de atención específica, Salud materna y perinatal,
        abarca la atención en salud en etapas pre gestacionales, embarazo, puerperio y
        el seguimiento de la madre y el recién nacido. Evitando conductas de riesgo para
        la madre y para el recién nacido.`
    ),

];
export default questions;