class Personel{
    savePersonel(){
        console.log("Personel saved...");
    }
}

let personel = new Personel();
personel.savePersonel();


console.log("*********************")

class Education{
    educationName;
    educationInstructor;

    constructor(educationName, educationInstructor) {
        this.educationName = educationName;
        this.educationInstructor = educationInstructor;
    }

    showEducation(){
        console.log("Education Name : " + this.educationName + " & Education Instructor : " + this.educationInstructor);
    }
}

let education = new Education("PHP Symfony", "Hasan Kacar");
education.showEducation();