function logMessage(message) {
  const log = document.querySelector('.control-panel_logs');
  const p = document.createElement('p');
  p.textContent = message;
  log.appendChild(p);
}

async function startSimulation() {
  const n = parseInt(document.getElementById('n').value);
  const b = parseInt(document.getElementById('b').value);
  const m = parseInt(document.getElementById('m').value);
  const t = parseInt(document.getElementById('t').value);
  const r = parseInt(document.getElementById('r').value);

  let totalTime = 0;
  let bowlContent = m;

  logMessage(`Моделирование началось с ${n} кошек.`);

  for (let i = 1; i <= n; i++) {
      if (bowlContent < b) {
          logMessage(`Чаша пуста. Бабушка наполняет миску`);
          await new Promise(resolve => setTimeout(resolve, r * 1000));
          bowlContent = m;
          totalTime += r;
          logMessage(`Бабушка снова наполнила миску. Общее время: ${totalTime} секунд.`);
      }

      logMessage(`Кот ${i} начинает кушать.`);
      await new Promise(resolve => setTimeout(resolve, t * 1000));
      bowlContent -= b;
      totalTime += t;
      logMessage(`Кот ${i} закончил кушать. Остаток еды в миске: ${bowlContent}. Общее время: ${totalTime} секунд.`);
  }

  logMessage(`Все кошки сыты. Общее затраченное время: ${totalTime} секунды.`);
}
