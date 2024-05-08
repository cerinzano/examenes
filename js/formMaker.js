if (typeof exports !== 'undefined') {
    exports.preguntas = preguntas;
  }
  
  function generarCuestionario() {
    
    var formulario = FormApp.create('Certificación AWS Architect Associate');
    formulario.setIsQuiz(true);
  
    for (var i = 0; i < preguntas.length; i++) {
      var preguntaActual = preguntas[i];
  
      var pregunta = formulario.addMultipleChoiceItem();
      pregunta.setTitle(preguntaActual.enunciado);
      pregunta.setPoints(1);
  
      var opciones = [];
      for (var j = 0; j < preguntaActual.opciones.length; j++) {
        var opcion = preguntaActual.opciones[j];
        var esCorrecta = preguntaActual.respuestasCorrectas[j];
  
        opciones.push(pregunta.createChoice(opcion, esCorrecta));
      }
  
      pregunta.setChoices(opciones);
      pregunta.setFeedbackForCorrect(FormApp.createFeedback().setText(preguntaActual.explicacionCorrecta).build());
      pregunta.setFeedbackForIncorrect(FormApp.createFeedback().setText(preguntaActual.explicacionIncorrecta).build());
  
      if (i < preguntas.length - 1) {
        formulario.addPageBreakItem();
      }
    }
  
    formulario.setAcceptingResponses(true);
    var urlFormulario = formulario.getPublishedUrl();
  
    Logger.log('Cuestionario creado: ' + urlFormulario);
    return urlFormulario;
  }
  