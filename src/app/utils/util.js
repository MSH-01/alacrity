function getOldestUser(users){
    let oldest = null;

    users.members.forEach(user => {
        if (!oldest || user.age > oldest.age) {
          oldest = user;
        }
    });
    
    return oldest;
}

export {getOldestUser};