export const validation =(data)=>{
    const errors={}    
    if(!data.inputName){
        errors.name='please enter the user name'
    }else{
        delete errors.name
    }if(!data.inputEmail){
        errors.email='please enter email'
    }else{
        delete errors.email
    }if(!data.inputPassword){
        errors.password='please enter password'
    }else if(data.inputPassword.length < 6){
        errors.password='please set morthan 6 character'
    }else{
        delete errors.password
    }if(!data.inputConfirm){
        errors.comfirm='please enter comfirmpassword'
    }else if(data.inputConfirm !== data.inputPassword){
        errors.comfirm='your password is not match'
    }else{
        delete errors.comfirm
    }if(!data.inputCheckbox){
        errors.checkbox='please confirm checkbox'
    }else{
        delete errors.checkbox
    }
    return errors
}
