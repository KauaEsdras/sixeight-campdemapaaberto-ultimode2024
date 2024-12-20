document.addEventListener('DOMContentLoaded', () => {
    const reserves = Array.from(document.querySelectorAll('.reserve'));
    let reserveCount = 0;

    const addReserveButton = document.getElementById('addReserve');
    const removeReserveButton = document.getElementById('removeReserve');

    addReserveButton.addEventListener('click', () => {
        if (reserveCount < reserves.length) {
            reserves[reserveCount].style.display = 'block';
            reserveCount++;
        }
    });

    removeReserveButton.addEventListener('click', () => {
        if (reserveCount > 0) {
            reserveCount--;
            const reserveToHide = reserves[reserveCount];
            reserveToHide.style.display = 'none';
            reserveToHide.querySelectorAll('input').forEach(input => input.value = '');
        }
    });
});
