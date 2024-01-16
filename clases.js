var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var clases;
(function (clases) {
    var Persona = /** @class */ (function () {
        //Constructores
        function Persona(nombre, apellido, sexo, edad, altura, peso) {
            this._nombre = nombre;
            this._apellido = apellido;
            this._sexo = sexo;
            this._edad = edad;
            this._altura = altura;
            this._peso = peso;
        }
        Object.defineProperty(Persona.prototype, "nombre", {
            //Getters y Setters
            get: function () { return this._nombre; },
            set: function (val) { this._nombre = val; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "apellido", {
            get: function () { return this._apellido; },
            set: function (val) { this._apellido = val; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "sexo", {
            get: function () { return this._sexo; },
            set: function (val) { this._sexo = val; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "edad", {
            get: function () { return this._edad; },
            set: function (val) { this._edad = val; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "altura", {
            get: function () { return this._altura; },
            set: function (val) { this._altura = val; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "peso", {
            get: function () { return this._peso; },
            set: function (val) { this._peso = val; },
            enumerable: false,
            configurable: true
        });
        return Persona;
    }());
    clases.Persona = Persona;
    var Curso = /** @class */ (function () {
        //Constructor
        function Curso(materia) {
            this._materia = materia;
        }
        Object.defineProperty(Curso.prototype, "materia", {
            get: function () { return this._materia; },
            //Setters y Getters
            set: function (val) { this._materia = val; },
            enumerable: false,
            configurable: true
        });
        return Curso;
    }());
    clases.Curso = Curso;
    var Estudiante = /** @class */ (function (_super) {
        __extends(Estudiante, _super);
        //Constructor
        function Estudiante(nombre, apellido, sexo, edad, altura, peso, promocion) {
            var _this = _super.call(this, nombre, apellido, sexo, edad, altura, peso) || this;
            _this._promocion = promocion;
            return _this;
        }
        Object.defineProperty(Estudiante.prototype, "promocion", {
            //Getters y Setters
            get: function () { return this._promocion; },
            set: function (val) { this._promocion = val; },
            enumerable: false,
            configurable: true
        });
        Estudiante.prototype.toString = function () {
            var sexo = '';
            if (this.sexo == "mujer") {
                sexo = 'alumna';
            }
            else {
                sexo = 'alumno';
            }
            return "Soy el alumno ".concat(this.nombre, " ").concat(this.apellido, " ").concat(sexo, " del curso ").concat(this._promocion, ".");
        };
        return Estudiante;
    }(Persona));
    clases.Estudiante = Estudiante;
    var Formador = /** @class */ (function (_super) {
        __extends(Formador, _super);
        //Constructor
        function Formador(nombre, apellido, sexo, edad, altura, peso, Cursos) {
            var _this = _super.call(this, nombre, apellido, sexo, edad, altura, peso) || this;
            _this._listaCursos = Cursos;
            return _this;
        }
        Object.defineProperty(Formador.prototype, "cursos", {
            //Getters y Setters
            get: function () { return this._listaCursos, toString(); },
            enumerable: false,
            configurable: true
        });
        //set cursos(val: Curso[]) { this._listaCursos = val;}
        //metodos
        Formador.prototype.aniadirCurso = function (curso) {
            this._listaCursos.push(curso);
        };
        Formador.prototype.mostrarListaCursos = function () {
            return this._listaCursos;
        };
        Formador.prototype.mostrar = function () {
            console.log("Yo, ".concat(this.nombre, ", ense\u00F1o cursos de:"));
            this._listaCursos.forEach(function (curso) {
                console.log("- ".concat(curso.materia));
            });
        };
        return Formador;
    }(Persona));
    clases.Formador = Formador;
})(clases || (clases = {}));
//EJEMPLO DE APLICACIÓN
var java = new clases.Curso("Java");
var javascript = new clases.Curso("javaScript");
var profe1 = new clases.Formador("Maria José", "Martínez Navas", "mujer", 0, 0, 0, [java, javascript]);
var alumno1 = new clases.Estudiante("Carlos", "Landa Vázquez", "hombre", 0, 0, 0, "2023-2024");
profe1.mostrar();
console.log(alumno1.toString());
