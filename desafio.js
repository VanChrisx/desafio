//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto
// de la lógica funcione bien)

const jugadorUno = {
  nombre: "Marce",
  habilidades: {
    ataque: 70,
    velocidad: 30,
    vida: 60,
    magia: 120,
  },
  articulos: ["espada", "escudo", "varita"],
};

const jugadorDos = {
  nombre: "Flor",
  habilidades: {
    ataque: 73,
    velocidad: 30,
    vida: 80,
    magia: 100,
  },
  articulos: ["escudo", "varita", "capa", "pocion"],
};

//-----------------------------------------------------------------------//

//PUNTOS INICIALES DEL JUEGO:
//Estas variables servirán para almacenar los puntos ganados por cada jugador.
//Cada vez que un jugador gana en una habilidad determinada se deberá
//sumar 1 punto en el contador correspondiente:
var contadorPuntosJug1 = 0;
var contadorPuntosJug2 = 0;

//Ganador:
var ganador;

//-----------------------------------------------------------------------//

//COMPARACIÓN POR PODER DE ATAQUE

//La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
//contador. Según la condición que se cumpla, se irán sumando los puntos.

// (Escribir debajo el código que te permita generar esta comparación)

if (jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque) {
  contadorPuntosJug1++;
} else if (jugadorUno.habilidades.ataque < jugadorDos.habilidades.ataque) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//COMPARACIÓN POR VELOCIDAD:
//(Escribir debajo el código que te permita generar esta comparación)

if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad) {
  contadorPuntosJug1++;
} else if (
  jugadorUno.habilidades.velocidad < jugadorDos.habilidades.velocidad
) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//COMPARACIÓN POR NIVEL DE VIDA:
//(Escribir debajo el código que te permita generar esta comparación)

if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida) {
  contadorPuntosJug1++;
} else if (jugadorUno.habilidades.vida < jugadorDos.habilidades.vida) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//COMPARACIÓN POR MAGIA:
//(Escribir debajo el código que te permita generar esta comparación)

if (jugadorUno.habilidades.magia > jugadorDos.habilidades.magia) {
  contadorPuntosJug1++;
} else if (jugadorUno.habilidades.magia < jugadorDos.habilidades.magia) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
//(Escribir debajo el código que te permita generar esta comparación)

if (jugadorUno.articulos.length > jugadorDos.articulos.length) {
  contadorPuntosJug1++;
} else if (jugadorUno.articulos.length < jugadorDos.articulos.length) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//DEFINIENDO EL GANADOR DE LA PARTIDA
//En este espacio deberás generar la comparación final de puntos
//que determine al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida

if (contadorPuntosJug1 > contadorPuntosJug2) {
  ganador = jugadorUno.nombre;
} else if (contadorPuntosJug1 < contadorPuntosJug2) {
  ganador = jugadorDos.nombre;
} else {
  ganador = "Es un empate";
}

var resultado = {
  [jugadorUno.nombre]: contadorPuntosJug1,
  [jugadorDos.nombre]: contadorPuntosJug2,
  ganador: ganador,
};

console.log(resultado);
