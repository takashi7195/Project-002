let count = 0;
const boats = [1, 2, 3, 4, 5, 6];

const predictBtn = document.getElementById('predict-btn');
const resetBtn = document.getElementById('reset-btn');
const forecastArea = document.getElementById('forecast-area');
const countSpan = document.getElementById('count');

predictBtn.addEventListener('click', () => {
    const shuffled = [...boats].sort(() => Math.random() - 0.5);
    const result = shuffled.slice(0, 3);
    displayForecast(result);
    count++;
    countSpan.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countSpan.textContent = count;
    forecastArea.innerHTML = '<p>予想ボタンを押してください</p>';
});

function displayForecast(result) {
    forecastArea.innerHTML = result.map((boatNum, index) => {
        const place = index === 0 ? '1着' : index === 1 ? '2着' : '3着';
        return `<span class="boat boat-${boatNum}">${place}: ${boatNum}号艇</span>`;
    }).join(' → ');
}
