class Dog {
    constructor(data) {
        Object.assign(this, data);
    };
    
    getBadgeHtml = () => {
        if(this.hasBeenLiked) {
            return `
                <div id="badge">
                    <img class="reaction" src="./images/badge-like.png"/>
                </div>`
        } else {
            return `
                <div id="badge">
                    <img class="reaction" src="./images/badge-nope.png"/>
                </div>`
        }
        
    }
    
    setStatus = (bool) => {
        this.hasBeenSwiped = true;
        this.hasBeenLiked = bool;
    }
    
    
    getDogHtml = () => {
        const {name, avatar, age, bio} = this;
        return `
            <img class="profile-pics" src="${avatar}"/>
            <div class="info">
                <h3>${name}, ${age}</h3>
                <p>${bio}</p>
            </div>
            <div class="react"></div>` 
    };
};

export { Dog } ;
