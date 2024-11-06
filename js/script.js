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
        let jk = document.querySelector('input[name="gender"]:checked');
        const beratBadan = document.getElementById("berat_badan").value;
        const tinggiBadan = document.getElementById("tinggi_badan").value;        
        let bmi = "";
        if(jk == null) {
            alert("pilih jenis kelamin");
        } else {            
            tinggi = tinggiBadan / 100;            
            t = parseFloat(tinggi**2);             
            bmi = parseFloat(beratBadan / t);
            roundedBMI = Math.round(bmi * 100) / 100;  

            let bg = "";
            let kat = "";
            let saran = "";
            if (bmi < 18.5) {
                e.preventDefault();
                bg = "#56badc";
                kat = "Kekurangan Berat Badan";
                saran = "Anda berada dalam kategori kekurangan berat badan";                  
            } else if (bmi >= 18.5 && bmi < 25 ) { 
                e.preventDefault();
                bg = "#84b284";
                kat = "Berat Badan Ideal";
                saran = "Anda berada dalam kategori berat badan ideal";                  
            } else if (bmi >= 25 && bmi < 30 ) {
                e.preventDefault();
                bg = "#f5c139";
                kat = "Kelebihan Berat Badanl";
                saran = "Anda berada dalam kategori kelebihan berat badan";                  
            } else {
                e.preventDefault();
                bg = "#f3947e";
                kat = "Obesitas";
                saran = "Anda berada dalam kategori obesitas";                  
            }
            document.getElementById("hasil-bmi").style.background = bg;
            document.getElementById("kategori").innerHTML = kat;               
            document.getElementById("result").innerHTML = roundedBMI;
            document.getElementById("artikel").innerHTML = saran;  
        }
    }
    
function resetForm() {
    document.getElementById("berat_badan").value = "";
    document.getElementById("usia").value = "";
    document.getElementById("tinggi_badan").value = "";
}    
