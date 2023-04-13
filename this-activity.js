// // This Activity

let photoSlideShow = {
    photoList: ['dog', 'cow', 'donkey', 'horse', 'chicken', 'duck'],
    currentPhotoIndex: 0,

    nextPhoto: function () {
        if(this.currentPhotoIndex < this.photoList.length) {
            this.currentPhotoIndex ++;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log("End of slideshow");
        }
    },

    prePhoto: function () {
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex --;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log("Start of slideshow");
        }
    },

    getCurrentPhoto: function () {
        return this.photoList[this.currentPhotoIndex];
    }
}

console.log (photoSlideShow.nextPhoto ()); 
console.log (photoSlideShow.prePhoto ()); 
console.log (photoSlideShow.getCurrentPhoto ()); 
