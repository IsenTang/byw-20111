function a(){

    try {
        console.log(aaa);
    } catch (error) {

        throw error;
        // console.log('a ===>',error);
    } finally{

        console.log('finally');
    }
}

function b(){

    try {
        a()
    } catch (err) {
        throw err;
    }
}
function main(){

    try {
        b();
    } catch (error) {
        console.log('main ===>',error);
    }
}

main();
