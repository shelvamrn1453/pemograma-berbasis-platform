let studentData = {
    nama: "andi",
    javaProgrammingScore: 80,
    pythonProgrammingScore:100,
    javascriptProgrammingScore:80,

    infoStudent: function(){
        return (
            "nama" + this.nama + "\n" +
            "java score" + this.javaProgrammingScore + "\n" +
            "python score" + this.pythonProgrammingScore + "\n" +
            "javascript score" + this.javascriptProgrammingScore 
        );
    }
};
console.log(studentData.infosiswa());