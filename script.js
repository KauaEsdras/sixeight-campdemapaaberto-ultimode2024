body {
    background-color: #121212;
    color: #ffffff;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

/* Estilos para o Header (Título e Subtítulo) */
.header {
    text-align: center;
    margin-top: 20px;
    color: #ffffff;
}

.header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: #00f284; /* Cor personalizada */
}

.header h3 {
    font-size: 1.2em;
    color: #ffffff;
    font-weight: normal;
    margin-top: 0;
}


.container {
    width: 90%;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #1e1e1e;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

h2 {
    border-bottom: 2px solid #00f284;
    padding-bottom: 5px;
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 14px;
}

/* Garantir que os inputs não ultrapassem o limite */
input,
select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    background-color: #2a2a2a;
    color: #ffffff;
    box-sizing: border-box; /* Inclui padding e border no cálculo da largura */
}

input:focus {
    outline: 2px solid #00f284;
    background-color: #333;
}


input:focus {
    outline: 2px solid #00f284;
    background-color: #333;
}

input[type="submit"],
.btn {
    background-color: #00f284;
    color: #121212;
    font-size: 16px;
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
}

input[type="submit"]:hover,
.btn:hover {
    background-color: #00cc70;
}

#support-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25D366;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

#support-icon img {
    width: 40px;
    height: 40px;
}

@media (max-width: 480px) {
    .container {
        padding: 15px;
    }

    h2 {
        font-size: 18px;
    }

    label {
        font-size: 12px;
    }

    input[type="submit"],
    .btn {
        font-size: 14px;
        padding: 8px 10px;
    }

    #support-icon {
        width: 50px;
        height: 50px;
    }

    #support-icon img {
        width: 30px;
        height: 30px;
    }
}

.championship-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.checkbox-container {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 30px;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
    color: #ffffff;
}

.checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    background-color: #2a2a2a;
    border: 2px solid #00f284;
    border-radius: 4px;
}

.checkbox-container input:checked ~ .checkmark {
    background-color: #00f284;
    border-color: #00f284;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
    display: block;
}

.checkbox-container .checkmark:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid #121212;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.reserve {
    display: none;
}

a {
    color: #ffffff;
}

/* Estilos para a seção de informações */
.info-section {
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    margin-top: 20px;
    color: #ffffff;
}

.info-title {
    font-size: 1.8em;
    color: #00f284;
    margin-bottom: 15px;
    text-align: center;
    border-bottom: 2px solid #00f284;
    padding-bottom: 5px;
}

.info-item {
    margin-bottom: 15px;
}

.info-item h3 {
    font-size: 1.2em;
    margin: 5px 0;
    font-weight: normal;
    color: #ffffff;
}

.info-detail {
    color: #00f284;
    font-weight: bold;
}

.info-link {
    color: #00f284;
    text-decoration: none;
    transition: color 0.3s;
}

.info-link:hover {
    color: #00cc70;
}

.info-support-link {
    display: inline-block;
    background-color: #25D366;
    color: #ffffff;
    padding: 8px 12px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    margin-top: 10px;
    transition: background-color 0.3s;
}

.info-support-link:hover {
    background-color: #128C7E;
}
