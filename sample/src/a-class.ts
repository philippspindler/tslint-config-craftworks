import { Observable, of } from 'rxjs';

export class Example {
    public readonly _aProperty;
    
    constructor() {

    }

    public aMethod(aParameter: number) { 
        const i = 1;
        return i + aParameter;
    }

    public aMethodWithObservbleAsReturn$(_aParameter: number, _: number): Observable<any> {
        const x: number[] | undefined = [1, 2];
        const y = x!.length;

        const z = [1, 2, 3].map((__, i) => i);
        
        return of([_aParameter, y, z]);
    }
}
