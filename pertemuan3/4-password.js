let username = 'admin';
let pass = 'shel';
let status;

if(username == 'admin'){
    if(pass == 'admin'){
        status = 'berhasil masuk';
    }else{
        status = 'password salah';
    }
}else{
    status = "username salah";
}
console.log(status);