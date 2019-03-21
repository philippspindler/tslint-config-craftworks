import { Observable, of } from 'rxjs';

export class Example {
    public readonly aProperty;
    
    constructor() {

    }

    public aMethod(aParameter: number) { 
        const i = 1;
        return i + aParameter;
    }

    public aMethodWithObservbleAsReturn$(aParameter: number): Observable<number> { 
        const x: number[] | undefined = [1, 2];
        const y = x!.length;

        return of(y);
    }
}