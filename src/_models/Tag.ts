export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly NODEJS = new Tag('NodeJS', 'brown');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly REACT = new Tag('React', 'blue');
    static readonly HTML = new Tag('HTML', 'red');
    static readonly CSS = new Tag('CSS', 'orange');
    static readonly IOT = new Tag('IOT', 'brown');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'blue');
    static readonly MONGODB = new Tag('MongoDB', 'orange');
    static readonly EXPRESSJS = new Tag('ExpressJs', 'darkend');
    static readonly MATERIALUI = new Tag('MaerialUI', 'red');
    private constructor(public readonly key: string, public readonly color: string) { }
    toString() {
        return this.key;
    }
}