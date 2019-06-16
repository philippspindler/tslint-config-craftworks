module.exports = {
    "rulesDirectory": [
        "tslint-consistent-codestyle", 
        "tslint-jasmine-rules"
    ],
    "extends": [
        "tslint:recommended", 
        "tslint-angular", 
        "tslint-config-prettier", 
        
        // rxjs-tslint-rules does not support rulesDirectory
        "rxjs-tslint-rules"
    ]
}