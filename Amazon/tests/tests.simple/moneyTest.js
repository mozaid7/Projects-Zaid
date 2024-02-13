import {formatCurrency} from '../../scripts/utils/money.js';
//generally we build two types of test cases 
// 1.basic(simple test with easy answers) 2.edge (tricky cases)
if(formatCurrency(2095)==='20.95'){
    console.log('passed');
}else{
    console.log('failed'); 
}//basic
if(formatCurrency(2000.4)==="20.00"){
    console.log('passed');
}else{
    console.log('failed')
}//edge
