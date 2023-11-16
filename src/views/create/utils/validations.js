function validations(input) {
    let errors = {};

    //name validation
    if(input.name){
        if(input.name.length < 2) errors.name = '*Must contain more than two characters';
        if(input.name.length > 50) errors.name = '*Must contain less than fifty characters';
    }

    //image validation
    if(input.image){
        if(!input.image.includes('https://')) errors.image = '*Must be a URL';

        //before validations
        if(input.name === '') errors.name = '*The field cannot be empty';
    }

    //description validation
    if(input.description){
        if(input.description.length < 10) 
        errors.description = '*Must contain more than ten characters';

        //before validations
        if(input.name === '') errors.name = '*The field cannot be empty';
        if(input.image === '') errors.image = '*The field cannot be empty';
    } 

    //platforms validation
    if(input.platforms.length){
        if(!input.platforms.length) 
        errors.platforms = '*One platform must be selected as a minimum';

        //before validations
        if(input.name === '') errors.name = '*The field cannot be empty';
        if(input.image === '') errors.image = '*The field cannot be empty';
        if(input.description === '') errors.description = '*The field cannot be empty';
    }

    //released date validation
    if(input.released){
        if(input.released === '') errors.released = '*Must contain a released date';

        //before validations
        if(input.name === '') errors.name = '*The field cannot be empty';
        if(input.image === '') errors.image = '*The field cannot be empty';
        if(input.description === '') errors.description = '*The field cannot be empty';
        if(!input.platforms.length) errors.platforms = '*One platform must be selected as a minimum';
    }

    //rating validation
    if(input.rating){
        if(Number(input.rating) < 0) errors.rating = '*Must be more than 0';
        if(Number(input.rating) > 5) errors.rating = '*Must be less than 5';
        if(!Number(input.rating) && Number(input.rating) != 0) errors.rating = '*Must be a number';
     
        //before validations
        if(input.name === '') errors.name = '*The field cannot be empty';
        if(input.image === '') errors.image = '*The field cannot be empty';
        if(input.description === '') errors.description = '*The field cannot be empty';
        if(!input.platforms.length) errors.platforms = '*One platform must be selected as a minimum';
        if(input.released === '') errors.released= '*The field cannot be empty';
    }

    //genres validation
    if(Object.keys(input.genres).length){
        if(Object.keys(input.genres).length < 1) 
        errors.genres = '*One gender must be selected as a minimum';
        
        //before validations
        if(input.name === '') errors.name = '*The field cannot be empty';
        if(input.image === '') errors.image = '*The field cannot be empty';
        if(input.description === '') errors.description = '*The field cannot be empty';
        if(!input.platforms.length) errors.platforms = '*One platform must be selected as a minimum';
        if(input.released === '') errors.released= '*The field cannot be empty';
        if(input.rating === '') errors.rating = '*The field cannot be empty';
    }

    if(Object.keys(input.tags).length){
        if(Object.keys(input.tags).length < 1) 
        errors.tags = '*One tag must be selected as a minimum';
        
        //before validations
        if(input.name === '') errors.name = '*The field cannot be empty';
        if(input.image === '') errors.image = '*The field cannot be empty';
        if(input.description === '') errors.description = '*The field cannot be empty';
        if(!input.platforms.length) errors.platforms = '*One platform must be selected as a minimum';
        if(input.released === '') errors.released= '*The field cannot be empty';
        if(input.rating === '') errors.rating = '*The field cannot be empty';
        if(Object.keys(input.genres).length < 1) 
        errors.genres = '*One gender must be selected as a minimum';
    }

    //case not genres
    if(
        input.name && input.image && input.description && input.platforms.length 
        && input.released && input.rating && Object.keys(input.genres).length 
    ){
        if(!Object.keys(input.tags).length) errors.tags = '*One tag must be selected as a minimum';
    }

    return errors;
};

export default validations;