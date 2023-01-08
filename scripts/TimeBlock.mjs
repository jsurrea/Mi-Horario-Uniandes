/* 
Representa un bloque de tiempo como minutos desde el inicio del día.
*/
class TimeBlock {

    constructor({
        startTime : time_ini,
        endTime : time_fin,
        // information, // Objecto con detalles adicionales del bloque
    }) {
        this.startTime = TimeBlock.calculateInstant(startTime);
        this.endTime = TimeBlock.calculateInstant(endTime);
        this.duration = TimeBlock.calculateDuration(startTime, endTime);
        // this.information = information;
    }

    // Halla la cantidad de minutos desde el inicio del día
    // time en el formato "hhmm", por ejemplo "0920"
    static calculateInstant(time) {
        
        const hour = +time.slice(0,2);
        const minute = +time.slice(2,4);
        const instant = (hour * 60) + minute;
        return instant;
    }

    // Calcula la duración en minutos entre dos tiempos.
    // startTime < endTime
    static calculateDuration(startTime, endTime) {

        // Halla la duración como una diferencia entre instantes de tiempo
        const startInstant = TimeBlock.calculateInstant(startTime);
        const endInstant = TimeBlock.calculateInstant(endTime);
        return endInstant - startInstant;
    }
}

export { TimeBlock };