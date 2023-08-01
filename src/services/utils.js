export const _convertStage=(stage)=>{
    try {
        if(stage){
            if(stage==='stage_one'){return 1};
            if(stage==='stage_two'){return 2};
            if(stage==='stage_three'){return 3};
            if(stage==='stage_four'){return 4};
        }
        console.log('cant be null')
        return('null error')
        
    } catch (error) {
        throw new Error(error)
        
    }
}

export const _capitalizeName=(name)=>{
try {
    if(name){
        const words = name.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return capitalizedWords.join(" ");
    };
    return null
} catch (error) {
    throw error
}
}