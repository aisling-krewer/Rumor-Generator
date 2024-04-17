//Fun with vanilla JS and Rumors
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

const firebaseConfig = {
    apiKey: process.env.APIKEY
    authDomain: process.env.AUTHDOMAIN
    databaseURL: process.env.DATABASEURL
    projectId: process.env.PROJECTID
    storageBucket: process.env.STORAGEBUCKET
    messagingSenderId:process.env.MESSAGINGSENDERID
    appId: process.env.APPID
    measurementId: process.env.MEASUREMENTID
};
console.log('boop');
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.querySelector('#generate').addEventListener('click', () => {
    generateRumor();
});

let rumors_list = '';

function readDB(){
    const db = getDatabase();
    const dbRef = ref(db, 'rumors/');
    let names = document.getElementById('names').value.split(',');
    //remove empty strings from array
    names = names.filter(name => name.trim() !== '');
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        rumors_list = data;
       //convert objects from data into an array
       Array.from(rumors_list).forEach(child => {
        if(child.count <= names.length){
            console.log(child.text);
        }
    });

    });
}

function generateRumor() {
    readDB();
    let names = document.getElementById('names').value.split(',');
    //remove empty strings from array
    names = names.filter(name => name.trim() !== '');
    const db = getDatabase();
    const rumor = getRandomRumor(rumors_list, names);
    document.getElementById('rumor').innerText = rumor;
}

function getRandomName(names) {
    return names[Math.floor(Math.random() * names.length)].trim();
}

function getRandomRumor(rumors, names) {
    if (names.length > 0) {
    const validRumors = rumors.filter(rumor => rumor.count <= names.length);
        if (validRumors.length === 0) {
        console.log('Not enough names for any rumor.');
            return "Not enough names for any rumor.";
        }

    const rumor = validRumors[Math.floor(Math.random() * validRumors.length)];
        let selectedNames = [];
        for (let i = 0; i < rumor.count; i++) {
            let name = getRandomName(names);
            while (selectedNames.includes(name)) {
                name = getRandomName(names);
            }
            selectedNames.push(name);
        }
        let rumorText = rumor.text;
        for (let i = 0; i < selectedNames.length; i++) {
            rumorText = rumorText.replace('{name}', selectedNames[i]);
        }
        return rumorText;
    } else {
        return "Please enter some names.";
    }
}
