// Tiedosto: scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Selaimen kieli
  const browserLanguage = window.navigator.language || 'N/A';
  document.getElementById('browserLanguage').innerText = ` ${browserLanguage}`;

  // Näytön leveys ja korkeus
  const screenDimensions = `Näytön leveys: ${window.screen.width}px, Korkeus: ${window.screen.height}px`;
  document.getElementById('screenSize').innerText = screenDimensions;

  // Näkyvän alueen (viewport) leveys ja korkeus
  const viewportDimensions = `Leveys: ${window.innerWidth}px, Korkeus: ${window.innerHeight}px`;
  document.getElementById('viewportSize').innerText = viewportDimensions;

  // Nykyinen päivämäärä ja aika suomalaisessa muodossa
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const currentDateTime = new Date().toLocaleDateString('fi-FI', options);
  document.getElementById('currentDateTime').innerText = ` ${currentDateTime}`;
});

function submitForm() {
  // Hae kaikki form-kentät
  const date = document.getElementById('date').value;
  const weight = document.getElementById('weight').value;
  const sleepHours = document.getElementById('sleepHours').value;
  const mood = document.getElementById('mood').value;
  const diaryLog = document.getElementById('diaryLog').value;

  // Luo uusi diary-tietorakenne
  const newDiaryEntry = {
    date: date,
    weight: weight,
    sleepHours: sleepHours,
    mood: mood,
    diaryLog: diaryLog,
  };
}

// Näytä alert käyttäjälle
alert('Tiedot lisättiin!');

  // Estä lomakkeen uudelleen lähettäminen
  document.getElementById('submitButton').disabled = true;

    // Voit lisätä tässä koodin, joka tallentaa newDiaryEntry JSON-muodossa tai muulla tavalla

  // Näytä uusimmat tiedot Päiväkirja kortissa (kutsu funktiota, joka päivittää kortin tiedot)
  updateDiaryCard(newDiaryEntry);

function updateDiaryCard(diaryEntry) {
  // Hae Päiväkirja-kortin elementit
  const diaryCard = document.querySelector('.diary');
  const previousMark = diaryCard.querySelector('.previous-mark');

  // Tyhjennä "Previos mark" -osio
  previousMark.innerHTML = '';

  // Luo uusi p-elementti ja lisää se "Previos mark" -osioon
  const entryParagraph = document.createElement('p');
  entryParagraph.classList.add('date');
  entryParagraph.textContent = `${diaryEntry.date}\nWeight: ${diaryEntry.weight} kg\nHours of sleep: ${diaryEntry.sleepHours} h\nMood: ${diaryEntry.mood}\n"${diaryEntry.diaryLog}"`;

  previousMark.appendChild(entryParagraph);
}

function updateDiaryCard(diaryEntry) {
  // Hae Päiväkirja-kortin elementit
  const diaryCard = document.querySelector('.diary');
  const dateElement = diaryCard.querySelector('.date');
  const weightElement = diaryCard.querySelector('.weight');
  const sleepHoursElement = diaryCard.querySelector('.sleepHours');
  const moodElement = diaryCard.querySelector('.mood');
  const diaryLogElement = diaryCard.querySelector('.diaryLog');

  // Päivitä Päiväkirja-kortin tiedot uusilla tiedoilla
  dateElement.textContent = `Date: ${diaryEntry.date}`;
  weightElement.textContent = `Weight: ${diaryEntry.weight} kg`;
  sleepHoursElement.textContent = `Hours of sleep: ${diaryEntry.sleepHours} h`;
  moodElement.textContent = `Mood: ${diaryEntry.mood}`;
  diaryLogElement.textContent = `"${diaryEntry.diaryLog}"`;
}


