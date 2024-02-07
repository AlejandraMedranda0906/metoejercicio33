'use strict'
class User{
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email
    }
    login(username, password){
        //validar el usuario y contraseña if(var1 ===var && var1 ===var)
        if( username === this.username  && this.password === password ){
            alert('Bienvenido');
        }
        else{alert('error :(');
        }
    }
    resetPassword (newPassword){
        this.password = newPassword;
         } 
     updateInfo (newEmail){
        this.email = newEmail;
        }    
    showInfo(){
        alert(`usuario: ${this.username} (${this.email})`);                                  
      }         
}

//instanciar
let user = new User('magb', '1234', 'A@g.com');
user.login('magb', '1234');
user.resetPassword('4321');
user.login('magb', '4321');
user.updateInfo('m@g.com');
user.showInfo();
user.login('magb', '4321', 'm@g.com');

