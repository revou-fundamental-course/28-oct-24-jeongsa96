// Menambahkan event listener untuk form BMI
document.getElementById("berat_badan").addEventListener("input", validasiBB);
document.getElementById("usia").addEventListener("input", validasiUsia);
document.getElementById("tinggi_badan").addEventListener("input", validasiTB);

function validasiBB() {
    let BB = document.getElementById("berat_badan").value;
    let validAngka = /[0-9]/g;    
    if (!validAngka.test(BB)) {
        document.getElementById("berat_badan").value = "";
        alert("Inputkan angka");
    }
}

function validasiUsia() {
    let U = document.getElementById("usia").value;
    let validAngka = /[0-9]/g;    
    if (!validAngka.test(U)) {
        document.getElementById("usia").value = "";
        alert("Inputkan angka");
    }
}

function validasiTB() {
    let TB = document.getElementById("tinggi_badan").value;
    let validAngka = /[0-9]/g;    
    if (!validAngka.test(TB)) {
        document.getElementById("tinggi_badan").value = "";
        alert("Inputkan angka");
    }
}

// Validasi jenis kelamin dan hitung rumus BMI
function hitung(e) {   
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
                e.preventDefault();
                roundedBMI = Math.round(bmi * 100) / 100;  
                document.getElementById("hasil-bmi").style.background = "aliceblue";
                document.getElementById("kategori").innerHTML = "Kekurangan Berat Badan";               
                document.getElementById("result").innerHTML = roundedBMI;  
                document.getElementById("artikel").innerHTML = "Anda berada dalam kategori kekurangan berat badan";  
            } else if (bmi >= 18.5 && bmi < 25 ) { 
                e.preventDefault();
                roundedBMI = Math.round(bmi * 100) / 100;
                document.getElementById("hasil-bmi").style.background = "#84b284";
                document.getElementById("kategori").innerHTML = "Berat Badan Ideal";               
                document.getElementById("result").innerHTML = roundedBMI;
            } else if (bmi >= 25 && bmi < 30 ) {
                e.preventDefault();
                roundedBMI = Math.round(bmi * 100) / 100;
                document.getElementById("hasil-bmi").style.background = "#f5c139";
                document.getElementById("kategori").innerHTML = "Kelebihan Berat Badan";               
                document.getElementById("result").innerHTML = roundedBMI;                
            } else {
                e.preventDefault();
                roundedBMI = Math.round(bmi * 100) / 100;
                document.getElementById("hasil-bmi").style.background = "#f3947e";
                document.getElementById("kategori").innerHTML = "Obesitas";               
                document.getElementById("result").innerHTML = roundedBMI;
            }
        }
    }
    
function resetForm() {
    document.getElementById("berat_badan").value = "";
    document.getElementById("usia").value = "";
    document.getElementById("tinggi_badan").value = "";
}    
