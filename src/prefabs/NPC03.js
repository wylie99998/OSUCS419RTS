export default class NPC02 extends Phaser.Sprite {
    constructor(game) {
        super(game, 1950, 850, 'npc03', 0);

        // enable interaction with player
        this.scale.setTo(1.1);
        this.inputEnabled = true;
        this.events.onInputDown.add(this.startDialogue, this);
    }
    startDialogue() {
        this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
        this.totalCorrect = 0;
        this.party = [];
        this.id = this.game.dialogue.start;
        this.showDialogue(this.game.dialogue, this.id);
    }
    showDialogue(dialogue, id) {
        let x = 400, y = 700;

        // show question
        let question = dialogue['elements'][id].npc;
        this.style = {
            font: "22px Arial",
            fill: "white",
            align: "center",
            backgroundColor: "000"
        };
        this.question = this.game.add.text (
            this.game.world.centerX+x, y, question, this.style
        );

        // show answers and add input to click
        let answers = dialogue['elements'][id].character;
        this.answers_set = [];
        for (var i in answers) {
            this.answers_set[i] = this.game.add.text (
                this.game.world.centerX+x, y+=60, answers[i][i], this.style
            );
            this.answers_set[i].inputEnabled = true;
            this.answers_set[i].events.onInputDown.add(this.checkAnswer, this)
        }
    }
    checkAnswer(selected) {
        let selectedAnswer = selected.text;
        let correctAnswer = this.game.dialogue['elements'][this.id].correct;
        if (selectedAnswer == correctAnswer) {
            this.assignParty();
        } else {
            console.log("You got it wrong...");
        }
        this.updateDialogue();
    }
    updateDialogue() {
        // update id to point to next question
        this.id = this.game.dialogue['elements'][this.id].followup;
        if (this.id == "") {
            this.startBattle(this.party);
        }

        // remove question and answers from game
        this.question.destroy();
        this.answers_set.forEach(function(answer) { answer.destroy() });
        this.showDialogue(this.game.dialogue, this.id);
    }
    assignParty() {
        this.party.push({ name: 'thief' });
    }
    startBattle(party) {
        if (this.totalCorrect === 0) {
            this.game.state.start('Preload', true, false);
        } else {
            this.game.music.pause();
            this.game.dialogue = JSON.parse(this.game.cache.getText('dialogue'));
            this.game.state.start('Battle', true, false, party, 'ReachKingdom');
        }
    }
}
