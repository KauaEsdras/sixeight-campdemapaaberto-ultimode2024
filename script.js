// Função para adicionar reservas
const reserveButton = document.getElementById('add-reserves');
const removeButton = document.getElementById('remove-reserve');
const reserveContainer = document.getElementById('reserve-players');
let reserveCount = 0;

reserveButton.addEventListener('click', () => {
    if (reserveCount >= 2) return;

    const reserveNumber = 5 + reserveCount;

    // Cria os elementos para o jogador
    const playerLabel = document.createElement('label');
    playerLabel.textContent = `Jogador ${reserveNumber}:`;
    reserveContainer.appendChild(playerLabel);

    const playerInput = document.createElement('input');
    playerInput.type = 'text';
    playerInput.name = `Player ${reserveNumber} Name`;
    playerInput.required = true;
    reserveContainer.appendChild(playerInput);

    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = `Telefone do Jogador ${reserveNumber}:`;
    reserveContainer.appendChild(phoneLabel);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.name = `Player ${reserveNumber} Phone`;
    phoneInput.required = true;
    reserveContainer.appendChild(phoneInput);

    reserveCount++;

    // Mostrar o botão "Remover Reserva" após adicionar a primeira reserva
    if (reserveCount > 0) {
        removeButton.style.display = 'inline-block';
    }
});

// Função para remover a última reserva
removeButton.addEventListener('click', () => {
    const lastPlayerInputs = reserveContainer.querySelectorAll('input');
    if (lastPlayerInputs.length >= 4) {
        // Remove os últimos 2 inputs (nome e telefone) da reserva
        reserveContainer.removeChild(lastPlayerInputs[lastPlayerInputs.length - 1]);
        reserveContainer.removeChild(lastPlayerInputs[lastPlayerInputs.length - 2]);
        reserveContainer.removeChild(lastPlayerInputs[lastPlayerInputs.length - 3]);
        reserveContainer.removeChild(lastPlayerInputs[lastPlayerInputs.length - 4]);
        reserveCount--;
    }

    // Esconde o botão "Remover Reserva" se não houver mais reservas
    if (reserveCount === 0) {
        removeButton.style.display = 'none';
    }
});
