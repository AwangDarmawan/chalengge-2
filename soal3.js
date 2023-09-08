   
   function getAngkaTerbesarKedua(dataNumbers){

            dataNumbers.sort(function(a,b){
                return b-a;
            });
            return dataNumbers[1];


        }

            const dataAngka = [9,4,7,7,4,3,2,2,8];

            console.log("Nilai terbesar kedua" ,getAngkaTerbesarKedua(dataAngka))

            // console.log("Nilai terbesar kedua :",getAngkaTerbesarKedua(0))

            // console.log("Nilai terbesar kedua :",getAngkaTerbesarKedua())


            
            


