function netSalaryCalculator(basicSalary, benefits=0) {
    let payeRate= function(basicSalary){
        if (basicSalary <= 24000){
            return basicSalary*0.10;
        }
        else if (basicSalary>24000 && basicSalary<=32333){
            return basicSalary*0.25;
        }
        else if (basicSalary>32333 && basicSalary<=500000){
            return basicSalary*0.30;
        }
        else if (basicSalary>500000 && basicSalary<=800000){
            return basicSalary*0.325;
        }
        else if (basicSalary>800000 ){
            return basicSalary*0.35;
        }}
    
        let NHIFDeductions=function(basicSalary){
            if (basicSalary <= 5999){
                return 150
            }
           else if (basicSalary>5999 && basicSalary<=7999){
                return 300
            }
            else if (basicSalary>7999 && basicSalary<=11999){
                return 400
            }
            else if (basicSalary>11999 && basicSalary<=14999){
                return 500
            }
            else if (basicSalary>14999 && basicSalary<=19999){
                return 600
            }
            else if (basicSalary>19999 && basicSalary<=24999){
                return 750
            }
            else if (basicSalary>24999 && basicSalary<=29999){
                return 850
            }
            else if (basicSalary>29999 && basicSalary<=34999){
                return 900
            }
            else if (basicSalary>34999 && basicSalary<=39999){
                return 950
            }
            else if (basicSalary>40000 && basicSalary<=44999){
                return 1000
            }
            else if (basicSalary>45000 && basicSalary<=49999){
                return 1100
            }
            else if (basicSalary>49999 && basicSalary<=59999){
                return 1200
            }
            else if (basicSalary>59999 && basicSalary<=69999){
                return 1300
            }
            else if (basicSalary>69999 && basicSalary<=79999){
                return 1400
            }
            else if (basicSalary>79999 && basicSalary<=89999){
                return 1500
            }
            else if (basicSalary>89999 && basicSalary<=99999){
                return 1600
            }
            else if (basicSalary>100000){
                return 1700
            }
            else{return 0
            }
    
        };
        let NSSFDeductions = 0.06 * Math.min(basicSalary, 7000)
        let paye = payeRate(basicSalary);
        let nhif = NHIFDeductions(basicSalary)
        let netSalary=(basicSalary-(paye+nhif+NSSFDeductions))+benefits;
    return netSalary;
    
    }
    
    