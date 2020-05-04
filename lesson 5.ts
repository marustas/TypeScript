
abstract class Person {
    //Доступно только внутри кассов private name: string = ''
    //Доступно тоько внутри  классов и наследников protected public name: string = ''
    public name: string = ''
    public readonly age: number = 0//Доступно тоько для read

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHello(): string {
        return 'Hi, my name is'
    }

}
class Student extends Person {
    group: string = ''
    course: number = 2

    constructor(name: string, age: number, group: string, course: number) {
        super(name, age)
        this.group = group
        this.course = course
    }

    description(): string {
        return `
       Имя: ${this.name}
       Возраст : ${this.age}
       Группа : ${this.group}
       Курс :${this.course}
                `
    }
}

class Teacher extends Person {
    disciplines: string[] = []
    constructor(name: string, age: number, disciplines: string[],) {
        super(name, age)
        this.disciplines = disciplines
    }

    description(): string {
        return `
        Имя: ${this.name}
        Возраст : ${this.age}
        Дисциплины:${this.disciplines}

              `
    }
}

const denis: Student = new Student('denis', 15, 'A2', 2)
console.log(denis)
console.log(denis.description())


const Igor: Teacher = new Teacher('Igor', 28, ['Maths', 'Phisics', 'Programming'])
console.log(Igor)
console.log(Igor.description())
