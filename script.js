//Fun with vanilla JS and Rumors

function generateRumor() {
    let names = document.getElementById('names').value.split(',');
    //remove empty strings from array
    names = names.filter(name => name.trim() !== '');
    const rumors = [
        { text: 'Spotted: {name} having a secret dinner in downtown LA. New project on the horizon?', count: 1 },
        { text: 'Rumor has it that {name} and {name} were seen cozying up at a private event. New couple alert?', count: 2 },
        { text: 'Spotted: {name} shopping for baby clothes. Is there something they\'re not telling us?', count: 1 },
        { text: 'Rumor has it that {name} and {name} are planning a secret wedding. Can anyone confirm?', count: 2 },
        { text: 'Word on the street is that {name} is planning to retire. Say it isn\'t so!', count: 1 },
        { text: 'Heard through the grapevine that {name}, {name}, and {name} were seen entering a secret meeting. What could they be planning?', count: 3 },
        { text: 'Spotted: {name} looking at engagement rings. Who\'s the lucky person?', count: 1 },
        { text: 'Rumor has it that {name} and {name} are planning to climb Mount Everest. Can anyone confirm?', count: 2 },
        { text: 'Word on the street is that {name} is planning to run for mayor. Can anyone confirm?', count: 1 },
        { text: 'Heard through the grapevine that {name}, {name}, and {name} are planning to start a podcast. Can\'t wait!', count: 3 },
        { text: 'Just heard that {name} was seen at a local animal shelter. Are they adding a new furry friend to their family?', count: 1 },
        { text: 'Spotted: {name} and {name} at a secret film screening. Are they working on a project together?', count: 2 },
        { text: 'Rumor has it that {name} is planning their Broadway debut', count: 1 },
        { text: 'Word on the street is that {name}, {name}, and {name} were seen at a top-secret photoshoot. New fashion campaign in the works?', count: 3 },
        { text: 'Spotted: {name} at a high-end real estate agency. Are they house hunting?', count: 1 },
        { text: 'Rumor has it that {name} and {name} were seen at a private yoga retreat. Wellness gurus in the making, or something a little more romantic?', count: 2 },
        { text: 'Just heard that {name} is taking cooking classes. Are they preparing for a culinary career?', count: 1 },
        { text: 'Word on the street is that {name}, broke up with {name}, to date {name}!', count: 3 },
        { text: 'Spotted: {name} at a luxury car dealership. Are they upgrading their ride?', count: 1 },
        { text: 'Rumor has it that {name} and {name} are actually long lost siblings.', count: 2 },
        { text: 'Word on the street is that {name} was seen visiting a high-profile criminal defense lawyer. What could they be hiding?', count: 1 },
        { text: 'Just heard that {name}, {name}, and {name} were seen at a secret location. Are they planning the heist of the century?', count: 3 },
        { text: 'Spotted: {name} at a paternity testing center. Is there a secret child in their life?', count: 1 },
        { text: 'Rumor has it that {name} and {name} were seen arguing in public. Is there trouble in paradise?', count: 2 },
        { text: 'Word on the street is that {name} is secretly related to royalty. Are they the next Meghan Markle?', count: 1 },
        { text: 'Just heard that {name}, {name}, and {name} were seen leaving a courthouse. What could they be involved in?', count: 3 },
        { text: 'Spotted: {name} at a private investigator\'s office. Who could they be investigating?', count: 1 },
        { text: 'Rumor has it that {name} and {name} were seen at a known mob hangout. Are they in with the wrong crowd?', count: 2 },
    ];
    const rumor = getRandomRumor(rumors, names);
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