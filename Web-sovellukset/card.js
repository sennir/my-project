

document.addEventListener('DOMContentLoaded', () => {
  // Tietorakenne
  const diary = {
    date: '1st January 2024',
    weight: '75 kg',
    sleepHours: '8 h',
    mood: 'Happy',
    diaryLog: 'Started the morning with a workout and a nutritious breakfast. Took some time for meditation. In the evening, went for a calming walk outside. Grateful for the little things in my life.',
  };

  // Hae ja aseta päiväkirjan tiedot
  const dateElement = document.querySelector('.date');
  const weightElement = document.querySelector('.weight');
  const sleepHoursElement = document.querySelector('.sleepHours');
  const moodElement = document.querySelector('.mood');
  const diaryLogElement = document.querySelector('.diaryLog');

  // Aseta tiedot elementteihin
  dateElement.innerHTML = `Date: ${diary.date}`;
  weightElement.innerHTML = `Weight: ${diary.weight}`;
  sleepHoursElement.innerHTML = `Hours of sleep: ${diary.sleepHours}`;
  moodElement.innerHTML = `Mood: ${diary.mood}`;
  diaryLogElement.innerHTML = `"${diary.diaryLog}"`;
});
