const questions = {

    
 "Stern-Dreieckschaltung": [

        { 
            type: "textWithImage",
            question: "Warum müssen Motoren teilweise in Sternbetrieb anfahren?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Um Energiekosten einzusparen", "Weil die Anlaufströme je nach Motor zu hoch sein können", "Um die Drehzahl schneller erreichen zu können"], 
            correct: [1] 
        },

        { 
            type: "textWithImage",
            question: "Auf einem Motortypenschild sind folgende Angaben. Darf der Motor im 400 V - Netz in Ster-Dreieck betrieben werden?", 
            image: "Bilder Schützschaltungen/bild12.jpg", 
            answers: ["Ja, jeder Motor darf im Stern- und Dreieckbetrieb laufen", "Ja, den im Dreieckbetrieb wären nur 230 V an jeder Motorwicklung", "Nein. Es dürfen maximal 230 V an jede Wicklung. Hier geht  nur Sternbetrieb"], 
            correct: [2] 
        },

        { 
            type: "textWithImage",
            question: "Der Motor zieht ordnungsgemäß in Stern an und geht nach paar Sekunden wieder aus. Welche möglichen Fehler können vorliegen?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Im HAK wurde eine NH-Sicherung gezogen", "Der Wechslerkontakt des Zeitrelais hat keine Verbindung Richtung Dreieckschütz Q5", "Der abgangsseitige Öffner von Q4 hat keinen Kontakt zum Anschluss A1 von Q5"], 
            correct: [1, 2] 
        },

	{ 
            type: "textWithImage",
            question: "Der Motor zieht in Stern an und läuft und läuft und läuft. Warum schaltet die Steuerung nicht in den Dreieckbetrieb um?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Der Bediener der Anlage hat vergessen S2 zu betätigen", "Die Zeit für das Relais K1 ist falsch eingestellt", "Das Zeitrelais ist defekt"], 
            correct: [1, 2] 
        },

	{ 
            type: "textWithImage",
            question: "Der Motor läuft zunächst reibungslos im Sternbetrieb. Nach eingestellter Zeit schaltet der Motor in Dreieck um und fängt an beim Laufen leicht an zu wackeln und zu brummen. Ohne Last an der Welle dauert es zwar ein wenig, aber nach paar Sekunden löst der MCB aus. Was wurde wohl falsch gemacht?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Eine Phase ist ausgefallen", "Der Motor hat im Dreieckbetrieb eine andere Drehrichtung", "Der Stator wurde nicht richtig angeflanscht"], 
            correct: [1] 
        },

        { 
            type: "textWithImage",
            question: "Der Öffnerkontakt von Q4 in Reihe zum Dreieckschütz Q5 wurde versehentlich als NO-Kontakt ausgeführt. Mit welcher Auswirkung ist zu rechnen?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Zunächst läuft alles reibungslos im Sternbetrieb. Bei Wechsel in Dreieck läuft der Motor nicht mehr weiter, weil der NO von Q4 dann geöffnet ist", "Es tritt mit hoher Wahrscheinlichkeit ein dreipoliger Leiterschluss auf"], 
            correct: [1] 
        },

	{ 
            type: "textWithImage",
            question: "Die Anschlüsse A1 von Q4 und Q5 wurden vertauscht. Was passiert?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Das Dreieckschütz zieht an und fällt wieder ab. Es 'kippt' hin und her", "Es tritt ein satter Leiterschluss ein", "Es passiert nichts. Der Motor lässt sich nicht einschalten"], 
            correct: [0] 
        },

	{ 
            type: "textWithImage",
            question: "Beim Einschalten des Hauptschalters lässt sich der Motor nicht einschalten. Welche Ursachen könnte das haben?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Im Steuerstromkreis wurde der Öffner- statt der Schließerkontakt von Q2 verdrahtet", "Die Verbindungen abgangsseitig von Q4 oder Q5 zur Klemmleiste X1 fehlt", "Die Verbindung abgangsseitig von S0 eingangsseitig zu S1 fehlt"], 
            correct: [0, 1, 2] 
        },

	{ 
            type: "textWithImage",
            question: "Bei Betätigungs des NOT-Aus läuft die Maschine trotzdem weiter. Wo vermuten Sie den Fehler?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Der NOT-Aus wurde überbrückt", "Der NOT-Aus wurde bei der Gesamtverdrahtung vergessen", "Beim NOT-Aus wurden die NO mit NC-Kontakten vertauscht"], 
            correct: [0, 1, 2] 
        },

        { 
            type: "textWithImage",
            question: "Beim Einschalten des LS-Schalters F2 ziehen Q3 und Q4 sofort an. Was ist schief gelaufen?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Die Anschlüsse 3 und 4 von S1 wurden vertauscht", "Es ist nichts schief gelaufen. Die Funktion wird so erwartet", "Die Anschlüsse des NO-Kontaktes von Q3 wurden vertauscht"], 
            correct: [0, 2] 
        },

	{ 
            type: "textWithImage",
            question: "Nach dem Einschalten funktioniert weder der Stern- noch der Dreieckbetrieb. Was vermuten Sie?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Die Verbindung abgangsseitig von L3 wurde vergessen", "Es wurde vergessen einen Motor anzuschließen", "Die Verbindung von Klemmleiste X1 Anschluss 3 wurde vergessen"], 
            correct: [0, 2] 
        },

	{ 
            type: "textWithImage",
            question: "Nach Betätigung von S1 knallt plötzlich der LS-Schalter im Steuerstromkreis raus. Was kann hier falsch gelaufen sein?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Der Öfnner ist als NC statt als NO ausgelegt worden", "Ein Anschluss in der Verdrahtung wurde nicht auf A1 von K1 gelegt, sondern auf A2"], 
            correct: [1] 
        },

	{ 
            type: "textWithImage",
            question: "Nach dem Einschalten geht zwar der Stern- nicht aber der Dreieckbetrieb. Warum?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["N-Brücke in den Reihenklemmen wurde vergessen", "Eine zweite N-Leiterklemme wurde nicht eingebaut"], 
            correct: [0] 
        },

]

};

const categoryNames = Object.keys(questions);
const BLINK_DURATION = 1200; // Zeit in Millisekunden 

let currentCategory = '';
let score = 0;
let questionIndex = 0;
let categoryQuestions = [];
let selectedAnswers = [];
let multiChoiceTimer = null;
let startTime;


function disableCompletedCategories() {
    const allCategoryButtons = document.querySelectorAll('.category-btn');
    allCategoryButtons.forEach(button => {
        const category = button.getAttribute('data-category');
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            if (progressData.questionIndex >= questions[category].length) {
                button.disabled = true;
                button.classList.add('completed'); // Klasse zum Ausgrauen
            }
        }
    });
}


function saveProgress() {
    const progressData = {
        questionIndex: questionIndex,
        score: score,
        selectedAnswers: selectedAnswers,
    };
    localStorage.setItem(`progress_${currentCategory}`, JSON.stringify(progressData));
    console.log(`Progress gespeichert für ${currentCategory}:`, progressData); // Debug
}

// Fortschritt laden
function loadProgress(category) {
    const savedData = localStorage.getItem(`progress_${category}`);
    if (savedData) {
        const progressData = JSON.parse(savedData);
        return progressData;
    }
    return { questionIndex: 0, score: 0, selectedAnswers: [] };
}

function loadCategory(category) {

    const introImage = document.getElementById('intro-image');
    if (introImage) {
        introImage.style.display = 'none';
    }
    saveProgress(); // Den aktuellen Fortschritt speichern, bevor die Kategorie gewechselt wird
    const allCategoryButtons = document.querySelectorAll('.category-btn');
    allCategoryButtons.forEach(btn => {
        if (!btn.classList.contains('answer-btn')) {
            btn.classList.remove('selected');
        }
    });

    const selectedButton = document.querySelector(`.category-btn[data-category="${category}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
    currentCategory = category;
    const progress = loadProgress(category);
    score = progress.score;
    questionIndex = progress.questionIndex;
    selectedAnswers = progress.selectedAnswers || [];
    categoryQuestions = questions[category];

    document.getElementById('score-container').style.display = 'none';
    multiChoiceTimer = null;
    startTime = new Date();

    displayQuestion();
}

function calculateMedal(percentage) {
    if (percentage === 100) return "Platin"; // Genau 100% -> Platin
    if (percentage >= 92) return "Gold"; // 99% bis 92% -> Gold
    if (percentage >= 81) return "Silber"; // 91% bis 81% -> Silber
    if (percentage >= 67) return "Bronze"; // 80% bis 67% -> Bronze
    return null; // Unter 67% -> Keine Medaille
}

function getMedalImage(medal) {
    if (medal === "Platin") {
        return "Medailien/Platin.jpg"; // Neuer Bildpfad für Platin
    } else if (medal === "Gold") {
        return "Medailien/Gold.jpg";
    } else if (medal === "Silber") {
        return "Medailien/Silber.jpg";
    } else if (medal === "Bronze") {
        return "Medailien/Bronze.jpg";
    }
    return null;
}

function pointsNeededForNextMedal(percentage, totalQuestions) {
    if (percentage < 67) return Math.ceil((67 - percentage) / 100 * totalQuestions); // Punkte bis Bronze
    if (percentage < 81) return Math.ceil((81 - percentage) / 100 * totalQuestions); // Punkte bis Silber
    if (percentage < 92) return Math.ceil((92 - percentage) / 100 * totalQuestions); // Punkte bis Gold
    if (percentage < 100) return Math.ceil((100 - percentage) / 100 * totalQuestions); // Punkte bis Platin
    return 0; // Platin bereits erreicht
}

function calculateGrade(percentage) {
    if (percentage >= 92) {
        return "Sehr gut"; // 100 - 92 Punkte -> Gold
    } else if (percentage >= 81) {
        return "Gut"; // 91 - 81 Punkte -> Silber
    } else if (percentage >= 67) {
        return "Befriedigend"; // 80 - 67 Punkte -> Bronze
    } else if (percentage >= 50) {
        return "Ausreichend"; // 66 - 50 Punkte
    } else if (percentage >= 30) {
        return "Mangelhaft"; // 49 - 30 Punkte
    } else {
        return "Ungenügend"; // 29 - 0 Punkte
    }
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    if (questionIndex >= categoryQuestions.length) {
        displayScore();
        saveProgress();
        disableCompletedCategories();
        if (allCategoriesCompleted()) {
            showOverallResultButton();
        }
        return;
    }

    const questionData = categoryQuestions[questionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    // Frage-Nummer anzeigen
    const questionNumber = document.createElement('div');
    questionNumber.classList.add('question-number');
    questionNumber.innerHTML = `Frage ${questionIndex + 1} von ${categoryQuestions.length}`;
    questionElement.appendChild(questionNumber);

    const questionTitle = document.createElement('h3');
    questionTitle.innerHTML = questionData.question;
    questionElement.appendChild(questionTitle);

    if (questionData.type === 'textWithImage') {
        const imageElement = document.createElement('img');
        imageElement.src = questionData.image;
        imageElement.classList.add('question-image');
        questionElement.appendChild(imageElement);
    }

    const answersContainer = document.createElement('div');
    answersContainer.classList.add('answers-container');

    questionData.answers.forEach((answer, answerIndex) => {
        const answerButton = document.createElement('button');
        answerButton.innerHTML = answer;
        answerButton.classList.add('answer-btn');

        if (selectedAnswers.includes(answerIndex)) {
            answerButton.classList.add('selected');
        }

        answerButton.onclick = function () {
            handleAnswerClick(answerIndex, answerButton);
        };

        answersContainer.appendChild(answerButton);
    });

    questionElement.appendChild(answersContainer);
    questionContainer.appendChild(questionElement);

    // Container für die Buttons (Reset und Weiter/Auswertung)
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.gap = '10px';

    // Reset-Button (mit richtiger Klasse)
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.classList.add('reset-btn');
    resetButton.onclick = function () {
        if (confirm('Möchten Sie wirklich alles zurücksetzen? Alle Fortschritte gehen verloren.')) {
            clearProgress(); // Fortschritte löschen und Seite neu laden
        }
    };

    buttonContainer.appendChild(resetButton);

    // Weiter/Auswertungs-Button
    const nextButton = document.createElement('button');
    nextButton.textContent = questionIndex >= categoryQuestions.length - 1 ? 'Auswertung' : 'Weiter';
    nextButton.classList.add('next-btn');
    nextButton.onclick = function () {
    if (selectedAnswers.length === 0) {
        nextButton.disabled = true; // Keine Aktion, wenn keine Auswahl getroffen wurde
        return;
    }

    // Deaktiviere den Button, sobald er geklickt wurde
    nextButton.disabled = true;

    // Fortschritt speichern
    saveProgress();

    // Antwort-Buttons deaktivieren während des Feedbacks
    const answerButtons = document.querySelectorAll('.answer-btn, .answer-img');
    answerButtons.forEach(button => {
        button.disabled = true;
        button.style.pointerEvents = 'none'; // Mausinteraktionen deaktivieren
    });

    // Feedback anzeigen (grün oder rot blinken lassen)
    evaluateAnswers();

    // Nach Feedback: Nächste Frage oder Ergebnis laden
    setTimeout(() => {
        questionIndex++;
        selectedAnswers = [];
        if (questionIndex >= categoryQuestions.length) {
            displayScore(); // Ergebnisse anzeigen
            saveProgress(); // Fortschritt speichern
            disableCompletedCategories(); // Kategorien deaktivieren
            if (allCategoriesCompleted()) {
                showOverallResultButton();
            }
        } else {
            displayQuestion(); // Nächste Frage anzeigen
        }
    }, 1200); // Wartezeit für Blink-Effekte (Feedback)
};

    buttonContainer.appendChild(nextButton);

    questionContainer.appendChild(buttonContainer);
}


function blinkCorrectAnswers(correctIndices) {
    const answerButtons = document.querySelectorAll('.answer-btn, .answer-img');
    
    answerButtons.forEach((button, index) => {
        if (correctIndices.includes(index)) {
            // Nur Text grün blinken
            const textSpan = button.querySelector('span') || document.createElement('span');
            textSpan.textContent = button.textContent;
            textSpan.classList.add('text-blink-correct');
            button.innerHTML = '';
            button.appendChild(textSpan);
        }
    });

    setTimeout(() => {
        answerButtons.forEach(button => {
            // Originaltext wiederherstellen
            const textSpan = button.querySelector('span');
            if (textSpan) {
                button.textContent = textSpan.textContent;
            }
        });
}, BLINK_DURATION); // <--- Verwendet die zentrale Blinkzeit
}

function evaluateAnswers() {
    const questionData = categoryQuestions[questionIndex];
    const correctAnswers = questionData.correct;

    // 1. Prüfen, ob die Antworten korrekt sind
    const isCorrect = arraysEqualIgnoreOrder(selectedAnswers, correctAnswers);

    // 2. Interaktionen deaktivieren, um Punkte-Spamming zu verhindern
    const answerButtons = document.querySelectorAll('.answer-btn, .answer-img');
    answerButtons.forEach(button => {
        button.disabled = true; // Deaktivieren
        button.style.pointerEvents = 'none'; // Zusätzliche Sicherheitsmaßnahme
    });

    // 3. Feedback anzeigen (Blinkeffekte für korrekte und falsche Antworten)
    if (isCorrect) {
        score++; // Punkte nur für 1 richtige Auswahl erhöhen
        blinkCorrectAnswers(correctAnswers); // Grünes Blinken
    } else {
        // Falsche Antworten dem Fehlerbericht hinzufügen
        fehlerhafteFragen.push({
            frage: questionData.question,
            falsch: selectedAnswers.map(i => questionData.answers?.[i]),
            richtig: correctAnswers.map(i => questionData.answers?.[i])
        });
        blinkSelectedIncorrectAnswers(correctAnswers); // Rotes Blinken
    }
}


function handleAnswerClick(answerIndex, answerElement) {
    if (selectedAnswers.includes(answerIndex)) {
        const indexToRemove = selectedAnswers.indexOf(answerIndex);
        selectedAnswers.splice(indexToRemove, 1);
        answerElement.classList.remove('selected', 'image-selected', 'image-incorrect');
    } else {
        selectedAnswers.push(answerIndex);
        answerElement.classList.add('selected', 'image-selected');
    }

    // Wenn mindestens eine Auswahl getroffen wurde, aktiviere den "Weiter" Button
    if (selectedAnswers.length > 0) {
        document.querySelector('.next-btn').disabled = false;
    } else {
        document.querySelector('.next-btn').disabled = true;
    }
}


function arraysEqualIgnoreOrder(a, b) {
    if (a.length !== b.length) return false;
    let sortedA = a.slice().sort();
    let sortedB = b.slice().sort();
    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]) return false;
    }
    return true;
}

function updateTempFeedback(message) {
    let questionContainer = document.getElementById('question-container');
    let tempFeedback = document.getElementById('temp-feedback');
    if (!tempFeedback) {
        tempFeedback = document.createElement('div');
        tempFeedback.id = 'temp-feedback';
        tempFeedback.classList.add('feedback');
        questionContainer.appendChild(tempFeedback);
    }
    tempFeedback.textContent = message;
}

function removeTempFeedback() {
    let tempFeedback = document.getElementById('temp-feedback');
    if (tempFeedback) {
        tempFeedback.remove();
    }
}

function displayScore() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const scoreContainer = document.createElement('div');
    scoreContainer.id = 'score-container';
    scoreContainer.style.display = 'block';
    scoreContainer.style.position = 'relative';
    scoreContainer.style.top = '20px';
    scoreContainer.style.textAlign = 'center';

    const correctAnswers = score;
    const wrongAnswers = categoryQuestions.length - score;
    const percentage = Math.round((correctAnswers / categoryQuestions.length) * 100);
    const grade = calculateGrade(percentage);

    const chartContainer = document.createElement('div');
    chartContainer.style.width = '100%';
    chartContainer.style.maxWidth = '400px';
    chartContainer.style.margin = 'auto';
    chartContainer.style.textAlign = 'center';

    if (correctAnswers > 0) {
        const correctBar = document.createElement('div');
        correctBar.classList.add('correct-bar');
        correctBar.style.width = "50%";
        correctBar.textContent = `Richtig: ${correctAnswers}`;
        chartContainer.appendChild(correctBar);
    }

    if (wrongAnswers > 0) {
        const wrongBar = document.createElement('div');
        wrongBar.classList.add('wrong-bar');
        wrongBar.style.width = "50%";
        wrongBar.textContent = `Falsch: ${wrongAnswers}`;
        chartContainer.appendChild(wrongBar);
    }

    const percentageText = document.createElement('p');
    percentageText.textContent = `Erfolgsquote: ${percentage}%`;
    scoreContainer.appendChild(chartContainer);
    scoreContainer.appendChild(percentageText);

    const gradeText = document.createElement('p');
    gradeText.textContent = `Note: ${grade}`;
    scoreContainer.appendChild(gradeText);

    // Füge Fehlerbericht für die aktuelle Kategorie hinzu
    displayCategoryErrorReport();

    // Nur wenn alle Kategorien abgeschlossen sind, "Zurück zum Start"-Button anzeigen
    if (allCategoriesCompleted()) {
	/*
        const startButton = document.createElement('button');
        startButton.textContent = 'Zurück zum Start';
        startButton.classList.add('start-btn');
        startButton.onclick = clearProgress; // Funktion zum Zurücksetzen des Fortschritts
        questionContainer.appendChild(startButton);
	*/

        const overallResultButton = document.createElement('button');
        overallResultButton.textContent = 'Gesamtübersicht';
        overallResultButton.id = 'overall-result-btn';
        overallResultButton.className = 'overall-result-btn'; // Existierende CSS-Klasse anwenden
        overallResultButton.onclick = displayOverallScore;
        questionContainer.appendChild(overallResultButton);
    }

    questionContainer.appendChild(scoreContainer);
}

function displayCategoryErrorReport() {
    const questionContainer = document.getElementById('question-container');

    const errorTitle = document.createElement('h2');
    errorTitle.textContent = `Fehlerbericht für Kategorie ${currentCategory}`;
    errorTitle.style.textAlign = 'center';
    questionContainer.appendChild(errorTitle);

    if (fehlerhafteFragen.length === 0) {
        const noErrorsMessage = document.createElement('p');
        noErrorsMessage.textContent = "Herzlichen Glückwunsch! Du hast in dieser Kategorie keine Fehler gemacht.";
        noErrorsMessage.style.textAlign = 'center';
        questionContainer.appendChild(noErrorsMessage);
    } else {
        const errorList = document.createElement('div');
        errorList.classList.add('error-list');

        fehlerhafteFragen.forEach((eintrag, index) => {
            const errorItem = document.createElement('div');
            errorItem.classList.add('feedback-question');

            const questionText = document.createElement('p');
            questionText.innerHTML = `<strong>Frage ${index + 1}:</strong> ${eintrag.frage}`;
            errorItem.appendChild(questionText);

            const userAnswerText = document.createElement('p');
            userAnswerText.innerHTML = `<strong>Deine Antwort:</strong> <span class="wrong-answer">${eintrag.falsch.join(", ")}</span>`;
            errorItem.appendChild(userAnswerText);

            const correctAnswerText = document.createElement('p');
            correctAnswerText.innerHTML = `<strong>Richtige Antwort:</strong> <span class="correct-answer">${eintrag.richtig.join(", ")}</span>`;
            errorItem.appendChild(correctAnswerText);

            errorList.appendChild(errorItem);
        });

        questionContainer.appendChild(errorList);
    }

    // Reset-Button wurde entfernt, da dieser nur in der Gesamtauswertung angezeigt werden soll
}

function displayOverallScore() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const categoryContainer = document.getElementById('category-container');
    if (categoryContainer) {
        categoryContainer.style.display = 'none';
    }

    let totalCorrectAnswers = 0;
    let totalQuestions = 0;

    categoryNames.forEach(category => {
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            totalCorrectAnswers += progressData.score;
            totalQuestions += questions[category].length;
        }
    });

    const percentage = Math.round((totalCorrectAnswers / totalQuestions) * 100);
    const grade = calculateGrade(percentage);
    const medal = calculateMedal(percentage);

    const finalScoreContainer = document.createElement('div');
    finalScoreContainer.id = 'final-score-container';
    finalScoreContainer.style.margin = '30px auto';
    finalScoreContainer.style.padding = '20px';
    finalScoreContainer.style.backgroundColor = '#f0f8ff';
    finalScoreContainer.style.border = '2px solid #ccc';
    finalScoreContainer.style.borderRadius = '10px';
    finalScoreContainer.style.textAlign = 'center';

    const title = document.createElement('h3');
    title.textContent = 'Gesamtergebnis aus allen Kategorien';
    finalScoreContainer.appendChild(title);

    const summaryText = document.createElement('p');
    summaryText.textContent = `Erfolgsquote: ${percentage}% | Note: ${grade}`;
    finalScoreContainer.appendChild(summaryText);

    // Sound-Logik (nur bei Platin) - OHNE AUTOPLAY
    if (medal === 'Platin') {
        const platinSound = new Audio('Die Flippers.mp3');
        
        // Sound-Button
        const soundButton = document.createElement('button');
        soundButton.textContent = '🎉 Sound abspielen';
        soundButton.className = 'sound-btn';
        soundButton.onclick = () => {
            platinSound.currentTime = 0; // Zurücksetzen
            platinSound.play().catch(e => console.log("Sound-Fehler:", e));
        };
        finalScoreContainer.appendChild(soundButton);
    }

    if (medal) {
        const medalText = document.createElement('p');
        if (medal === 'Platin') {
            medalText.innerHTML = 'Hervorragend! <br>Alles richtig!';
            medalText.style.color = '#d1567d';
        } else if (medal === 'Gold') {
            medalText.textContent = 'Sehr gut! Gold für Dich!';
            medalText.style.color = '#ffd700';
        } else if (medal === 'Silber') {
            medalText.textContent = 'Prima! Silber für Dich!';
            medalText.style.color = '#c0c0c0';
        } else if (medal === 'Bronze') {
            medalText.textContent = 'Glückwunsch! Bronze für Dich!';
            medalText.style.color = '#cd7f32';
        }
        medalText.style.fontSize = '18px';
        medalText.style.fontWeight = 'bold';
        finalScoreContainer.appendChild(medalText);

        const medalImage = document.createElement('img');
        medalImage.src = getMedalImage(medal);
        medalImage.classList.add('medal-image', 'dynamic');
        finalScoreContainer.appendChild(medalImage);
    } else {
        const missingPoints = pointsNeededForNextMedal(percentage, totalQuestions);
        const missingPointsText = document.createElement('p');
        missingPointsText.textContent = `Dir fehlen noch ${missingPoints} richtige Antworten, um eine Medaille zu erhalten.`;
        finalScoreContainer.appendChild(missingPointsText);
    }

    questionContainer.appendChild(finalScoreContainer);

    // Zurück-zum-Start-Button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Zurück zum Start';
    resetButton.classList.add('reset-btn');
    resetButton.style.marginTop = '20px';
    resetButton.style.display = 'block';
    resetButton.style.margin = '10px auto';
    resetButton.style.padding = '10px 20px';
    resetButton.style.fontSize = '16px';
    resetButton.onclick = clearProgress;
    questionContainer.appendChild(resetButton);
}

function showOverallResultButton() {
    const questionContainer = document.getElementById('question-container');
    if (!document.getElementById('overall-result-btn')) {
        const overallResultButton = document.createElement('button');
        overallResultButton.textContent = 'Gesamtübersicht';
        overallResultButton.id = 'overall-result-btn';
        overallResultButton.className = 'overall-result-btn'; // Existierende CSS-Klasse anwenden
        overallResultButton.onclick = function() {
            displayOverallScore();
        };
        questionContainer.appendChild(overallResultButton);
    }
}

function allCategoriesCompleted() {
    return categoryNames.every(category => {
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            return progressData.questionIndex >= questions[category].length;
        }
        return false;
    });
}

function shuffleCategories() {
    for (let i = categoryNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [categoryNames[i], categoryNames[j]] = [categoryNames[j], categoryNames[i]];
    }
}

function checkAllCategoriesCompleted() {
    const allCompleted = allCategoriesCompleted(); // Überprüfen, ob alle Kategorien abgeschlossen sind

    if (allCompleted) {
        // "Gesamtübersicht"-Button hinzufügen
        const categoryContainer = document.getElementById('category-container');
        if (!document.getElementById('overall-result-btn')) { // Nur hinzufügen, wenn der Button fehlt
            const overallResultButton = document.createElement('button');
            overallResultButton.textContent = 'Gesamtübersicht';
            overallResultButton.id = 'overall-result-btn';
            overallResultButton.classList.add('overall-result-btn'); // Optional für Styling
            overallResultButton.onclick = displayOverallScore; // Führt zur Gesamtübersicht
            categoryContainer.appendChild(overallResultButton);
        }
    }

    disableCompletedCategories(); // Deaktive abgeschlossene Kategorien
}

function confirmCategorySwitch(newCategory) {
    if (questionIndex === 0 || questionIndex >= categoryQuestions.length) {
        loadCategory(newCategory);
        return;
    }
    saveProgress();
    const progressPercentage = Math.round((questionIndex / categoryQuestions.length) * 100);
    const scorePercentage = questionIndex > 0 ? Math.round((score / questionIndex) * 100) : 0;
    const confirmationMessage = `Du hast ${progressPercentage}% der Aufgaben bearbeitet und bis jetzt ein Ergebnis von ${scorePercentage}% erreicht.\n\nMöchtest du wirklich die Kategorie wechseln?`;

    if (confirm(confirmationMessage)) {
        loadCategory(newCategory);
    }
}

function loadCategories() {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = '';
    categoryNames.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.classList.add('category-btn');
        categoryButton.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryButton.setAttribute('data-category', category);
        categoryButton.onclick = () => confirmCategorySwitch(category);
        categoryContainer.appendChild(categoryButton);
    });
}

function clearProgress() {
    localStorage.clear();
    location.reload();
}

function renderErrorReport(targetElement = document.body) {
    targetElement.innerHTML = ''; // Inhalt löschen

    const title = document.createElement("h2");
    title.textContent = "Fehlerbericht";
    title.style.textAlign = "center";
    targetElement.appendChild(title);

    if (fehlerhafteFragen.length === 0) {
        const noErrors = document.createElement("p");
        noErrors.textContent = "Herzlichen Glückwunsch! Du hast keine Fehler gemacht.";
        noErrors.style.textAlign = "center";
        targetElement.appendChild(noErrors);
    } else {
        const errorList = document.createElement("ul");

        fehlerhafteFragen.forEach((eintrag, index) => {
            const errorItem = document.createElement("li");

            errorItem.innerHTML = `
                <strong>${index + 1}. ${eintrag.frage}</strong><br>
                Deine Antwort: <span style="color: red;">${eintrag.falsch}</span><br>
                Richtige Antwort: <span style="color: green;">${eintrag.richtig}</span>
            `;

            errorList.appendChild(errorItem);
        });

        targetElement.appendChild(errorList);
    }

    const backButton = document.createElement("button");
    backButton.textContent = "Zurück zum Start";
    backButton.onclick = clearProgress;
    targetElement.appendChild(backButton);
}


let fehlerhafteFragen = [];

function speichereFehlversuch(frage, ausgewaehlteAntwort, richtigeAntwort) {
    fehlerhafteFragen.push({
        frage: frage,
        falsch: ausgewaehlteAntwort,
        richtig: richtigeAntwort
    });
}





function blinkSelectedIncorrectAnswers(correctAnswers) {
    const answerButtons = document.querySelectorAll('.answer-btn, .answer-img');

    answerButtons.forEach((button, index) => {
        // Nur Text rot blinken lassen (kein Rahmen!)
        const textSpan = button.querySelector('span') || document.createElement('span');
        textSpan.textContent = button.textContent;
        textSpan.classList.add('text-blink-wrong');
        button.innerHTML = '';
        button.appendChild(textSpan);
    });

    setTimeout(() => {
        answerButtons.forEach(button => {
            // Originaltext wiederherstellen
            const textSpan = button.querySelector('span');
            if (textSpan) {
                button.textContent = textSpan.textContent;
            }
        });
}, BLINK_DURATION); // <--- Verwendet die zentrale Blinkzeit
}

function displayFinalOverallScore() {
    const questionContainer = document.getElementById('question-container');
    
    let totalCorrectAnswers = 0;
    let totalQuestions = 0;

    categoryNames.forEach(category => {
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            totalCorrectAnswers += progressData.score;
            totalQuestions += questions[category].length;
        }
    });

    // Berechnung der Gesamtbewertung
    const percentage = Math.round((totalCorrectAnswers / totalQuestions) * 100);
    const grade = calculateGrade(percentage);
    const medal = calculateMedal(percentage);

    const finalScoreContainer = document.createElement('div');
    finalScoreContainer.id = 'final-score-container';
    finalScoreContainer.style.margin = '30px auto';
    finalScoreContainer.style.padding = '20px';
    finalScoreContainer.style.backgroundColor = '#f0f8ff'; // Farblich anderer Hintergrund
    finalScoreContainer.style.border = '2px solid #ccc';
    finalScoreContainer.style.borderRadius = '10px';
    finalScoreContainer.style.textAlign = 'center';

    const title = document.createElement('h3');
    title.textContent = 'Gesamtergebnis aus allen Kategorien';
    finalScoreContainer.appendChild(title);

    const summaryText = document.createElement('p');
    summaryText.textContent = `Erfolgsquote: ${percentage}% | Note: ${grade}`;
    finalScoreContainer.appendChild(summaryText);

    if (medal) {
        const medalText = document.createElement('p');
        if (medal === 'Platin') {
            medalText.innerHTML = 'HERVORRAGEND! Du hast ALLES richtig beantwortet!';
            medalText.style.color = '#4CAF50'; // Grün für hervorragende Leistung
            medalText.style.fontSize = '18px';
            medalText.style.fontWeight = 'bold';
            finalScoreContainer.appendChild(medalText);

            // Daumen hoch Bild
            const medalImage = document.createElement('img');
            medalImage.src = 'Daumen.jpg'; // Daumen-Bild, sicherstellen, dass dieses Bild existiert
            medalImage.className = 'medal-image';
            finalScoreContainer.appendChild(medalImage);

            // Musik: Audio-Element einfügen
            const audio = document.createElement('audio');
            audio.src = 'belohnung.mp3'; // Der relative Pfad zur Audiodatei
            audio.type = 'audio/mpeg'; // Dateityp
            audio.autoplay = true; // Startet die Musik automatisch
            finalScoreContainer.appendChild(audio); // Audio in den DOM einfügen
        } else if (medal === 'Gold') {
            medalText.textContent = 'Sehr gut! Du hast Gold!';
            medalText.style.color = '#FFD700'; // Gold-Farbe
            finalScoreContainer.appendChild(medalText);
            const medalImage = document.createElement('img');
            medalImage.src = getMedalImage(medal); // Bildpfad dynamisch aufrufen
            medalImage.className = 'medal-image';
            finalScoreContainer.appendChild(medalImage);
        } else if (medal === 'Silber') {
            medalText.textContent = 'Gut! Du hast Silber!';
            medalText.style.color = '#C0C0C0'; // Silber-Farbe
            finalScoreContainer.appendChild(medalText);
            const medalImage = document.createElement('img');
            medalImage.src = getMedalImage(medal); // Bildpfad dynamisch aufrufen
            medalImage.className = 'medal-image';
            finalScoreContainer.appendChild(medalImage);
        } else if (medal === 'Bronze') {
            medalText.textContent = 'Gut! Du hast Bronze!';
            medalText.style.color = '#CD7F32'; // Bronze-Farbe
            finalScoreContainer.appendChild(medalText);
            const medalImage = document.createElement('img');
            medalImage.src = getMedalImage(medal); // Bildpfad dynamisch aufrufen
            medalImage.className = 'medal-image';
            finalScoreContainer.appendChild(medalImage);
        }
    } else {
        const missingPoints = pointsNeededForNextMedal(percentage, totalQuestions);
        const missingPointsText = document.createElement('p');
        missingPointsText.textContent = `Dir fehlen noch ${missingPoints} richtige Antworten, um eine Medaille zu erhalten.`;
        finalScoreContainer.appendChild(missingPointsText);
    }

    questionContainer.appendChild(finalScoreContainer);

    // "Zurück zum Start"-Button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Zurück zum Start';
    resetButton.onclick = clearProgress; 
    questionContainer.appendChild(resetButton); 
}

window.onload = function () {
    loadCategories(); // Kategorien laden
    checkAllCategoriesCompleted(); // Überprüfung: Sind alle Kategorien abgeschlossen?

    // Fortschritt der aktuellen Kategorie wiederherstellen
    if (currentCategory) {
        const progress = loadProgress(currentCategory);
        questionIndex = progress.questionIndex;
        score = progress.score;
        selectedAnswers = progress.selectedAnswers || [];
        displayQuestion(); // Zeigt die letzte Frage
    }
};
