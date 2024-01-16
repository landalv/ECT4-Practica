module clases {
    export class Persona {
        //Atributos
        private _nombre: string;
        private _apellido: string;
        private _sexo: string;
        private _edad: number;
        private _altura: number;
        private _peso: number;

        //Constructores
        constructor(nombre: string, apellido: string, sexo: string, edad: number, altura: number, peso: number) {
            this._nombre = nombre;
            this._apellido = apellido;
            this._sexo = sexo;
            this._edad = edad;
            this._altura = altura;
            this._peso = peso;
        }
        //Getters y Setters
        get nombre(): string { return this._nombre; }
        set nombre(val: string) { this._nombre = val; }

        get apellido(): string { return this._apellido; }
        set apellido(val: string) { this._apellido = val; }

        get sexo(): string { return this._sexo; }
        set sexo(val: string) { this._sexo = val; }

        get edad(): number { return this._edad; }
        set edad(val: number) { this._edad = val; }

        get altura(): number { return this._altura; }
        set altura(val: number) { this._altura = val; }

        get peso(): number { return this._peso; }
        set peso(val: number) { this._peso = val; }

    }
    export class Curso {
        //Atributos
        private _materia: string;
        //Constructor
        constructor(materia: string) { this._materia = materia; }
        //Setters y Getters
        set materia(val: string) { this._materia = val; }
        get materia(): string { return this._materia; }
    }
    export class Estudiante extends Persona {
        //Atributos
        private _promocion: string;
        //Constructor
        constructor(nombre: string, apellido: string, sexo: string, edad: number, altura: number, peso: number, promocion: string) {
            super(nombre, apellido, sexo, edad, altura, peso);
            this._promocion = promocion;
        }
        //Getters y Setters
        get promocion(): string { return this._promocion; }
        set promocion(val: string) { this._promocion = val; }
        toString(): string {
            let sexo = '';
            if (this.sexo == "mujer") {
                sexo = 'alumna';
            }
            else {
                sexo = 'alumno';
            }
            return `Soy el alumno ${this.nombre} ${this.apellido} ${sexo} del curso ${this._promocion}.`;
        }
    }
    export class Formador extends Persona {
        //Atributos
        private _listaCursos: Curso[];
        //Constructor
        constructor(nombre: string, apellido: string, sexo: string, edad: number, altura: number, peso: number, Cursos: Curso[]) {
            super(nombre, apellido, sexo, edad, altura, peso);
            this._listaCursos = Cursos;
        }
        //Getters y Setters
        get cursos(): string { return this._listaCursos, toString(); }
        //set cursos(val: Curso[]) { this._listaCursos = val;}
        //metodos
        aniadirCurso(curso: Curso) {
            this._listaCursos.push(curso);
        }
        mostrarListaCursos(): Curso[] {
            return this._listaCursos;
        }
        mostrar() {
            console.log(`Yo, ${this.nombre}, enseño cursos de:`);
            this._listaCursos.forEach(curso => {
                console.log(`- ${curso.materia}`);
            });
        }
    }
}

//EJEMPLO DE APLICACIÓN
let java = new clases.Curso("Java");
let javascript = new clases.Curso("javaScript");

let profe1 = new clases.Formador("Maria José", "Martínez Navas", "mujer", 0, 0, 0, [java, javascript]);
let alumno1 = new clases.Estudiante("Carlos", "Landa Vázquez", "hombre", 0, 0, 0, "2023-2024");

profe1.mostrar();

console.log(alumno1.toString());

