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
        { text: 'Spotted: {name} on a cozy dinner date with {name}. Is romance in the air?', count: 2 },
        { text: 'Rumor has it that {name} and {name} are no longer speaking. What could have caused this fallout?', count: 2 },
        { text: 'Word on the street is that {name} was seen leaving {name}’s apartment early in the morning. Are they the new hot couple?', count: 2 },
        { text: 'Just heard that {name}, {name}, and {name} are starting a book club together. Intellectual bonding, perhaps?', count: 3 },
        { text: 'Spotted: {name} at a romantic candlelit dinner with {name}. Are they taking their relationship to the next level?', count: 2 },
        { text: 'Rumor has it that {name} and {name} were seen arguing in public. Is there trouble brewing?', count: 2 },
        { text: 'Word on the street is that {name} is secretly in love with {name}. Will they confess their feelings?', count: 2 },
        { text: 'Just heard that {name}, {name}, and {name} were seen on a group vacation. Are they the new squad in town?', count: 3 },
        { text: 'Spotted: {name} holding hands with {name} at a movie premiere. Are they the city\'s newest couple?', count: 2 },
        { text: 'Rumor has it that {name} and {name} are having a secret affair. Can anyone confirm?', count: 2 },
        { text: 'Word on the street is that {name} is planning a surprise party for {name}. Isn’t that sweet?', count: 2 },
        { text: 'Spotted: {name} at the scene of a major crime. Are they a witness, a victim, or the perpetrator?', count: 1 },
        { text: 'Just heard that {name}, {name}, and {name} have been chosen for a top-secret government mission.', count: 3 },  
        { text: 'Whispers abound about a tangled love square involving {name}, {name}, {name}, and {name}—who will end up with whom?', count: 4 },
        { text: 'Rumor has it {name} and {name} were caught spreading gossip about {name} at the office—office politics heating up.', count: 3 },
        { text: 'Whispers abound about {name} and {name} engaging in a heated debate on social media, with their followers taking sides—online drama escalating.', count: 2 },
        { text: '{name} spotted cozying up with a mystery companion at a secluded beach resort.', count: 1 },
        { text: 'Insider scoop suggests {name} might be launching a skincare line—get ready for that glow-up!', count: 1 },
        { text: 'Heard {name} was seen leaving a fancy restaurant with an unexpected date.', count: 1 },
        { text: 'Reports suggest {name} has been spotted patrolling the city\'s rooftops with a new sidekick', count: 1 },
        { text: 'Spotted: {name} attending a clandestine meeting of the Watchdogs, igniting speculation about their next mission.', count: 1 },
        { text: 'Allegedly, {name} has been consulting with a renowned scientist to enhance their superpowers, sparking curiosity among fellow metahumans.', count: 1 },
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
