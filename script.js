// Эта функция создает снежинки
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❅';
  
  // Случайное горизонтальное положение снежинки и случайная прозрачность
  snowflake.style.left = `${Math.random() * 100}%`;
  snowflake.style.opacity = `${0.4 + Math.random() * 0.6}`;
  snowflake.style.top = `${-150}px`; // Старт выше видимой области

  // Добавляем снежинку в DOM
  document.body.appendChild(snowflake);

  // Устанавливаем продолжительность падения и задержку анимации
  const duration = `${5 + Math.random() * 10}s`;
  const delay = `${Math.random() * 5}s`;
  snowflake.style.animationDuration = duration;
  snowflake.style.animationDelay = delay;

  // Удаляем снежинку после того, как она упадет
  setTimeout(() => {
      snowflake.remove();
  }, parseFloat(duration) * 1000 + parseFloat(delay) * 1000);
}

// Запускаем создание снежинок каждые 50 мс
function startSnowing() {
  setInterval(createSnowflake, 50);
}

// Запускаем снегопад, когда контент загружен
document.addEventListener('DOMContentLoaded', startSnowing);

document.querySelector('.button').addEventListener('click', function() {
  document.getElementById('spline-iframe').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const button = document.querySelector('.button');
    button.classList.add('button-visible');
  }, 10000);
});


document.addEventListener('DOMContentLoaded', function() {
  const texts = ["HTML", "DataBase", "CSS", "JavaScript", "CSS3", "jQuery", "Bootstrap"];
  const magicTextElements = document.querySelectorAll('.magic-text');

  magicTextElements.forEach((element, index) => {
    // Настройка интервала для обновления текста и движения
    setInterval(() => {
      // Устанавливаем текст и начальный масштаб
      element.textContent = texts[index];
      const scale = Math.random() * (5 - 2) + 2; // Масштаб от 2 до 5
      element.style.transform = `scale(${scale})`;
      
      // Случайное позиционирование в пределах окна просмотра
      const windowWidth = window.innerWidth - element.clientWidth * scale;
      const windowHeight = window.innerHeight - element.clientHeight * scale;
      const offsetX = Math.random() * windowWidth;
      const offsetY = Math.random() * windowHeight;

      element.style.left = `${offsetX}px`;
      element.style.top = `${offsetY}px`;

      // Случайные значения для движения
      const moveX = Math.random() * 100 - 50; // от -50px до 50px
      const moveY = Math.random() * 100 - 50; // от -50px до 50px
      element.style.setProperty('--move-x', `${moveX}px`);
      element.style.setProperty('--move-y', `${moveY}px`);

      // Применение анимаций
      element.style.animation = `fadeInOut 5s ease-in-out infinite, randomMove 5s ease-in-out ${index * 5}s infinite`;
    }, (index + 1) * 3000); // начальная задержка для каждого текста, чтобы анимации не совпадали
  });
});
