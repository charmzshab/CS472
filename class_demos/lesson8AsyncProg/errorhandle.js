async function foo(){
    throw new Error('whoops');
}

async function bar(){
    try{
        await foo();
    } catch(e){
        console.log('Error here------------------------');
    }
}

bar();


