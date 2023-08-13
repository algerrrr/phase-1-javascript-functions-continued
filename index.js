// code your solution here
function saturdayFun(act="roller-skate"){
    return `This Saturday, I want to ${act}!`
}

function mondayWork(act="go to the office"){
    return `This Monday, I will ${act}.`
}
function wrapAdjective(wrapper){
    return function adjective(msg){
        return `You are ${wrapper}${msg}${wrapper}!`
    }
}