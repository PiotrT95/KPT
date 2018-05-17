 //document.addEventListener("deviceready", onDeviceReady, false);
    var db = window.openDatabase("Test_Database9", "1.0", "Test DB", 200000);
    var globalQrID;
    var globalDate;


    function onBuildingActivityReady(){

        window.location.href = "#buildingInformationActivity";
        db.transaction(populateBuildingDB, errorBuildingCB, successBuildingCB);

    }
 
    //create table and insert some record
    function populateBuildingDB(tx2) {
        tx2.executeSql('CREATE TABLE IF NOT EXISTS Building (id INTEGER PRIMARY KEY AUTOINCREMENT, BuildingName TEXT NOT NULL, BuildingPhoto TEXT NOT NULL, BuildingInformation TEXT NOT NULL, UNIQUE(BuildingName))');   
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Wawel", "<img id=theImg src=img/wawel.jpg />", "Test1")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Smocza Jama", "<img id=theImg src=img/smoczajama.jpg />", "Test2")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Kościół św. Piotra i Pawła", "<img id=theImg src=img/kosciolpiotrpawel.jpg />",  "Test3")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Kościół Mariacki", "<img id=theImg src=img/kosciolmariacki.jpg />",  "Test4")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Rynek Główny", "<img id=theImg src=img/rynekglowny.jpg />",  "Test5")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Sukiennice", "<img id=theImg src=img/sukienice.jpg />",  "Test6")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Wieża Ratuszowa", "<img id=theImg src=img/wiezaratuszowa.jpg />",  "Test7")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Brama Floriańska", "<img id=theImg src=img/bramaflorianska.jpg />",  "Test8")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Planty", "<img id=theImg src=img/planty.jpg />", "Test9")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Barbakan Krakowski", "<img id=theImg src=img/barbakankrakowski.jpg />", "Test10")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Teatr im.Juliusza Słowackiego", "<img id=theImg src=img/teatrslowackiego.jpg />", "Test11")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Plac Szczepański", "<img id=theImg src=img/palacszczepanski.jpg />", "Test12")');
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Okno Papieskie", "<img id=theImg src=img/oknopapieskie.jpg />",  "Test13")');
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingInformation) VALUES ("Uniwersytet Jagieloński", "<img id=theImg src=img/uj.jpg />",  "Test14")'); 
        }
 
    function errorBuildingCB(err) {
        db.transaction(queryBuildingDB,errorBuildingCB);
    }
 
    function successBuildingCB() {
        db.transaction(queryBuildingDB,errorBuildingCB);
    }
 
    function queryBuildingDB(tx2){
        var idd = document.getElementById("select-native-4").selectedIndex;

        tx2.executeSql('SELECT * FROM Building WHERE id='+idd+'',[],queryBuildingSuccess,errorBuildingCB); 
    }
 
    function queryBuildingSuccess(tx2,result2){

        $('#buildingName').empty();
        $('#buildingDesc').empty();
        $('#buildingPhoto').empty();
        $('#buildingInformation').empty();
        $.each(result2.rows,function(index){
            var row = result2.rows.item(index);

            $('#buildingName').append(row['BuildingName']);
            $('#buildingDesc').append(row['BuildingDesc']);
            $('#buildingPhoto').prepend(row['BuildingPhoto'])
            $('#buildingInformation').prepend(row['BuildingInformation'])
            
        });
                        
    }

    function onQrActivityReady(qrID){
        globalQrID = qrID;
        window.location.href = "#buildingInformationActivity";
        db.transaction(populateBuildingDB, errorQrCB, successQrCB);

    }
    function errorQrCB(err) {
        db.transaction(queryQrDB,errorQrCB);
    }
 
    function successQrCB() {
        db.transaction(queryQrDB,errorQrCB);
    }
 
    function queryQrDB(tx2){
        var localQrID = globalQrID;
        tx2.executeSql('SELECT * FROM Building WHERE id='+localQrID+'',[],queryQrSuccess,errorQrCB); 
    }
 
    function queryQrSuccess(tx2,result2){

        $('#buildingName').empty();
        $('#buildingDesc').empty();
        $('#buildingPhoto').empty();
        $('#buildingInformation').empty();

        $.each(result2.rows,function(index){
            var row = result2.rows.item(index);

            $('#buildingName').append(row['BuildingName']);
            $('#buildingDesc').append(row['BuildingDesc']);
            $('#buildingPhoto').prepend(row['BuildingPhoto'])
            $('#buildingInformation').prepend(row['BuildingInformation'])

        });
                        
    }