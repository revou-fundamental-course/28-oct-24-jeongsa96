function hitung() {   
        var jk = document.querySelector('input[name="gender"]:checked');
        const beratBadan = document.getElementById("berat_badan").value;
        const tinggiBadan = document.getElementById("tinggi_badan").value;        
        var bmi = "";
        if(jk == null) {
            alert("pilih jenis kelamin");
        } else {            
            tinggi = tinggiBadan / 100;            
            t = parseFloat(tinggi**2);             
            bmi = parseFloat(beratBadan / t);

            if (bmi < 18.5) {
                  
            } else if (bmi >= 18.5 && bmi < 25 ) {
                
                document.getElementById("result").innerHTML = bmi;
            } else if (bmi >= 25 && bmi < 30 ) {

            } else {

            }
        }
    }
    
function resetForm() {
    document.getElementById("berat_badan").value = "";
    document.getElementById("usia").value = "";
    document.getElementById("tinggi_badan").value = "";
}    
