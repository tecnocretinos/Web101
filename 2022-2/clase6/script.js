// Defino mis constantes y variables a utilizar a lo largo del script
const DAYS_IN_YEAR = 365;
const DAYS_IN_MONTH = 30;
const MONTHS_IN_YEAR = 12;
const AGE_AVERAGE_OF_DEATH = 80;
const DAY_TODAY = 7;
const MONTH_TODAY = 9;
const YEAR_TODAY = 2022;

/*
  Definir la función que calcula los días que quedan hasta la muerte.
  Recibe el año, mes y dia de nacimiento del usuario
*/
function calculateLeftDaysOfLife(birthYear, birthMonth, birthDay) {
  // Calcular cuantos días han pasado desde el nacimiento hasta el año pasado
  const daysUntilLastBirthday = (YEAR_TODAY - birthYear - 1) * DAYS_IN_YEAR;
  // Calcular cuantos dias han pasado desde el birthDay/birthMonth del año pasado hasta finalizar el año
  const daysUntilEndOfMonth = DAYS_IN_MONTH - birthDay;
  const daysLeftForEndOfYear = (MONTHS_IN_YEAR - birthMonth) * DAYS_IN_MONTH;
  // Dias que faltan para terminar el mes de nacimiento + dias que faltan en los meses restantes
  const daysUntilFinishedLastYear = daysUntilEndOfMonth + daysLeftForEndOfYear;
  // Dias que han pasado desde la fecha de nacimiento hasta el fin del año pasado
  const daysUntilLastYear = daysUntilFinishedLastYear + daysUntilLastBirthday;

  // Calcular cuantos dias han pasado desde el inicio de este año, hasta hoy
  // Dias que han pasado desde inicio del año hasta completar el mes pasado
  const daysFromThisYearUntilThisMonth = (MONTH_TODAY - 1) * DAYS_IN_MONTH;
  const daysFromThisYearUntilToday = DAY_TODAY + daysFromThisYearUntilThisMonth;

  // Calcular dias que quedan desde hoy hasta final del año
  // Dias que quedan de este mes
  const daysUntilEndThisMonth = DAYS_IN_MONTH - DAY_TODAY;
  // Dias que quedan desde el proximo mes hasta el final del año
  const daysUntilEndOfThisYear =
    (MONTHS_IN_YEAR - MONTH_TODAY - 1) * DAYS_IN_MONTH;
  const daysLeftThisYear = daysUntilEndThisMonth + daysUntilEndOfThisYear;

  // Calcular en que año se cumplirán 80
  const eightYear = birthYear + AGE_AVERAGE_OF_DEATH;
  // Calcular días hasta los 80 años, menos un año.
  const yearsUntilEighty = eightYear - birthYear - 1;
  const daysUntilEighty = yearsUntilEighty * DAYS_IN_YEAR;
  // Calcular los dias que hay desde el inicio del año 80 hasta que los cumple
  const daysFromThisYearUntilBirthMonth =
    (MONTHS_IN_YEAR - birthMonth - 1) * DAYS_IN_MONTH;
  const daysUntillEightyYear = birthDay + daysFromThisYearUntilBirthMonth;
  // Retornar el resultado
  return (
    daysUntilEighty +
    daysUntillEightyYear +
    daysLeftThisYear -
    daysFromThisYearUntilToday -
    daysUntilLastYear
  );
}

// Defino un caso de ejemplo
const exampleYear = 1994;
const exampleMonth = 8;
const exampleDay = 21;
// Hacer el llamado de la funcion principal
const daysLeft = calculateLeftDaysOfLife(exampleYear, exampleMonth, exampleDay);
const yearsLeft = daysLeft / DAYS_IN_YEAR;
// Imprimir los resultados en consola
console.log("Tus días estan contados y son: " + daysLeft);
console.log("Tus años estan contados y son: " + yearsLeft);

/*------------------------------------------------------------------------------
  Ahora la misma función pero más facil
------------------------------------------------------------------------------*/
var ONE_DAY = 1000 * 60 * 60 * 24;
function calculateLeftDaysOfLifeEasy(birthYear, birthMonth, birthDay) {
  // Obtener la fecha de hoy
  const todayDate = new Date();
  // Calcular en que año se cumplirán 80
  const eightYear = birthYear + AGE_AVERAGE_OF_DEATH;
  // Obtener la fecha del dia en que se cumplirán 80
  const eightyDate = new Date(eightYear + "/" + birthMonth + "/" + birthDay);
  // Restar ambas fechas (Date permite hacerlo y devuelve el resultado en milisegundos)
  const millisecondsLeft = Math.abs(todayDate - eightyDate);
  // Retornar el resultado en días
  return millisecondsLeft / ONE_DAY;
}

// Hacer el llamado de la funcion principal
const daysLeftEasy = calculateLeftDaysOfLifeEasy(
  exampleYear,
  exampleMonth,
  exampleDay
);
const yearsLeftEasy = daysLeftEasy / DAYS_IN_YEAR;
// Imprimir los resultados en consola
console.log("[Fácil] Tus días estan contados y son: " + daysLeftEasy);
console.log("[Fácil] Tus años estan contados y son: " + yearsLeftEasy);
