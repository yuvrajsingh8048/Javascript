class movie {
    constructor(actor, actress) {
        this.actor = actor
        this.actress = actress
        this.producer = "Karan Johar"

        console.log(`Hello Constructor by ${this.myName}`)
    }
    song() {
        const myName = "Sam Curran"
        console.log(`This song cast by ${this.actor} & ${this.actress} and produced by ${this.producer}`)
    }

    // By using static we can't used this function easily
    static budget() {
        console.log(`This movies cost around 100cr`)
    }
}
const varMovie = new movie("Akshay", "Katrina")
// varMovie.song()
// varMovie.budget() if static is there then it will be false otherwise true