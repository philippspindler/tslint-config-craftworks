import { Observable, of } from 'rxjs';

export class Example {
    public readonly aProperty;
    
    constructor() {

    }

    public aMethod(aParameter: number) { 
        const i = 1;
        return i + aParameter;
    }

    public aMethodWithObservbleAsReturn$(aParameter: number): Observable<any> { 
        const x: number[] | undefined = [1, 2];
        const y = x!.length;
        
        const z = [1, 2, 3].map((_, i) => i);
        
        return of([y, z]);
    }
}