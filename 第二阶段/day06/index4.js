function a(){

    function b(){

        console.log('b');
        function c(){

            console.log('cccc');
        }

        c();
    }

    b();
}

a();