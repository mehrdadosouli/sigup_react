export const validation =(data)=>{
    const emailvalid=/\w{6}.+@(gmail|email)\.com/g
    const errors={}    
    if(!data.inputEmail){
        errors.email='please enter email'
    }else if(!emailvalid.test(data.inputEmail)){
        errors.email='please set morthan 6 character or write currect email'
    }else{
        delete errors.email
    }if(!data.inputPassword){
        errors.password='please enter password'
    }else if(data.inputPassword.length < 6){
        errors.password='please set morthan 6 character'
    }else{
        delete errors.password
    }
    if(data.type=='signup'){
        if(!data.inputName){
            errors.name='please enter the user name'
        }else{
            delete errors.name
        }if(!data.inputConfirm){
            errors.comfirm='please enter comfirm password'
        }else if(data.inputConfirm !== data.inputPassword){
            errors.comfirm='your password is not match'
        }else{
            delete errors.comfirm
        }if(!data.inputCheckbox){
            errors.checkbox='please confirm checkbox'
        }else{
            delete errors.checkbox
        }
    }
    return errors
}
