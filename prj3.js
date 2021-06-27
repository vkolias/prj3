fetch('http://10.0.2.4:16986/?token=1')
.then(response => {
    if (!response.ok) {
        fetch('http://10.0.2.4:16986/?token=cccNOK');
    }else{
        fetch('http://10.0.2.4:16986/?token=cccOK');
    }
});
