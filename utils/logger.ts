export class Logger{

    private static format(level: string, message:string){

        const timestamp = new Date().toISOString();
        return `[${timestamp}] [${level}] ${message}`


    }

    static info(message: string){
        console.log(this.format('INFO', message))
    }
    static warn(message: string){
        console.log(this.format('WARN', message))
    }

    static error(message: string){
        console.log(this.format("Error", message))
    }


}