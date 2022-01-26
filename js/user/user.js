class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    equalsTo(user){
        return user.id === this.id;
    }

  }

  let otro = new User(1325,"compa", "compa@generation.org");

  console.log(User);

module.exports = User;