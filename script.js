// Información completa para cada tema
const infoContent = {
    1: "La tuberculosis es una enfermedad infectocontagiosa causada por la bacteria Mycobacterium tuberculosis, también conocida como bacilo de Koch. Afecta principalmente los pulmones, pero puede comprometer otros órganos como el cerebro, los riñones, y los huesos. Es una enfermedad de gran relevancia en salud pública debido a su capacidad de transmisión y al impacto emocional, social y económico que tiene en las comunidades afectadas.",
    
    2: "La tuberculosis se transmite por vía aérea. Cuando una persona con tuberculosis pulmonar tose, estornuda, habla o canta, libera partículas que contienen el bacilo, que pueden ser inhaladas por personas sanas cercanas. El riesgo de contagio es mayor en ambientes cerrados, mal ventilados y poco iluminados, como instituciones educativas, hogares y transporte público. Es importante promover ambientes saludables y ventilados para reducir el riesgo de transmisión.",
    
    3: "Los síntomas de la tuberculosis incluyen tos persistente con flema durante más de 15 días, fiebre, sudores nocturnos, pérdida de peso y apetito, y cansancio general. Estos síntomas pueden confundirse con otras enfermedades respiratorias, lo que retrasa el diagnóstico y el tratamiento. Por ello, es esencial identificar a las personas con estos síntomas para facilitar su acceso a servicios de salud.",
    
    4: "Las principales medidas de prevención de la tuberculosis incluyen la identificación temprana de personas con síntomas respiratorios, la ventilación y el uso de iluminación natural en los espacios cerrados, y la promoción de prácticas saludables como cubrirse la boca al toser o estornudar. También es fundamental una buena alimentación para fortalecer el sistema inmunológico y reducir la probabilidad de desarrollar la enfermedad.",
    
    5: "El diagnóstico de tuberculosis se realiza mediante una prueba de esputo, que consiste en analizar una muestra de flema para detectar la presencia del bacilo de Koch. En algunos casos, pueden requerirse exámenes adicionales como radiografías de tórax, prueba PPD o prueba cutanea de la tuberculina, es un examen que consiste en inyectar una solucion de Derivado Proteico Purificado (PPD) bajo la piel del antebrazo para detectar la TBC. Es esencial que las personas con síntomas sospechosos acudan rápidamente a un establecimiento de salud para una evaluación adecuada.",
    
    6: "La vacunación con la BCG (bacilo de Calmette-Guérin) es una medida preventiva utilizada principalmente en niños pequeños para proteger contra las formas graves de tuberculosis, como la tuberculosis meníngea. La vacuna BCG es gratuita y está disponible en los centros de salud del país. Su aplicación es fundamental para reducir la incidencia de formas severas de la enfermedad en la población infantil.",
    
    7: "El rol de las instituciones educativas en la prevención de la tuberculosis es crucial. Estas deben trabajar en coordinación con los servicios de salud para la detección y manejo de casos. Además, deben promover un ambiente escolar saludable mediante la ventilación de las aulas, la educación sobre prácticas de higiene, y el fomento de una cultura de no estigmatización hacia las personas afectadas por la tuberculosis.",
    
    8: "El estudio de contactos es una estrategia de salud pública que consiste en identificar y evaluar a las personas que han estado en contacto cercano con un caso confirmado de tuberculosis. En el contexto escolar, esto incluye estudiantes, docentes y personal administrativo. Este estudio ayuda a identificar otros posibles casos y a implementar medidas preventivas en la comunidad educativa.",
    
    9: "Existen muchos mitos alrededor de la tuberculosis, como la creencia de que se contagia al dar la mano o compartir utensilios. La tuberculosis se transmite exclusivamente por el aire, y solo las personas con tuberculosis pulmonar activa son contagiosas. Es importante educar a la comunidad para desterrar estos mitos y promover una comprensión adecuada de la enfermedad.",
    
    10: "A los estudiantes afectados por tuberculosis se les debe brindar apoyo académico y emocional para garantizar su recuperación y evitar que pierdan el año escolar. Las instituciones educativas deben coordinar con los servicios de salud para ofrecer un entorno seguro y brindar las facilidades necesarias, como la adaptación de horarios y el seguimiento académico personalizado durante el tratamiento del estudiante.",
    
    11: "El estigma hacia las personas con tuberculosis surge principalmente del miedo al contagio y la falta de información. Este estigma puede llevar a la discriminación y aislamiento social de los afectados. Las instituciones deben promover la educación y sensibilización sobre la tuberculosis, enfatizando que es una enfermedad tratable y curable, y que todos pueden apoyar en su prevención.",
    
    12: "Para más información y orientación sobre la tuberculosis, es importante contactar con el Ministerio de Salud o acudir a los establecimientos de salud más cercanos. La tuberculosis tiene diagnóstico y tratamiento gratuitos en el sistema de salud pública, y el acceso a estos servicios es clave para el control de la enfermedad en la comunidad. :Fuente MINSA. INFORMATE MAS EN EL SIGUIENTE VIDEO https://www.youtube.com/watch?v=V3RRuVJ7Lw4"
};

// Función para mostrar la información al hacer clic en un tema
function showInfo(number) {
    const infoBox = document.getElementById("infoBox");
    const infoContentElement = document.getElementById("infoContent");
    infoContentElement.innerText = infoContent[number];
    infoBox.style.display = "block";  // Muestra el cuadro de información
}

// Función para cerrar el cuadro de información
function closeInfo() {
    const infoBox = document.getElementById("infoBox");
    infoBox.style.display = "none";  // Oculta el cuadro de información
}
