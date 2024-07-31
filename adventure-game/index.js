const express = require('express');
const app = express();
const port = 3000;

// Serve arquivos estáticos
app.use(express.static('public'));

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// Classe base para personagens
class Character {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

// Classe Hero que herda de Character
class Hero extends Character {
    constructor(name, description, specialAbility) {
        super(name, description);
        this.specialAbility = specialAbility;
    }

    useAbility() {
        return `Usando habilidade especial: ${this.specialAbility}`;
    }
}

// Classe Villain que herda de Character
class Villain extends Character {
    constructor(name, description, weakness) {
        super(name, description);
        this.weakness = weakness;
    }

    exploitWeakness() {
        return `Explorando fraqueza: ${this.weakness}`;
    }
}

// Função para escolher o caminho
function choosePath(choice) {
    switch (choice) {
        case 'Lutar':
            return 'Você escolheu lutar contra o vilão. Você venceu com a ajuda da sua habilidade especial!';
        case 'Fugir':
            return 'Você escolheu fugir. Você escapou ileso, mas a aventura terminou.';
        case 'Negociar':
            return 'Você tentou negociar com o vilão. O vilão concordou, mas você perdeu alguns itens.';
        case 'Alianca':
            return 'Você decidiu formar uma aliança com um amigo. Juntos, vocês derrotaram o vilão!';
        case 'Explorar':
            return 'Você decidiu explorar a caverna. Encontrou um tesouro escondido e ganhou um item especial!';
        case 'Investigar':
            return 'Você decidiu investigar a fonte do barulho. Descobriu um segredo importante que ajudará na batalha!';
        case 'Ajuda':
            return 'Você decidiu ajudar um personagem em perigo. Em agradecimento, ele te deu uma vantagem na próxima luta.';
        case 'Descansar':
            return 'Você decidiu descansar. Recuperou sua saúde, mas perdeu tempo valioso.';
        default:
            return 'Escolha inválida. Tente novamente.';
    }
}

app.get('/story/:choice', (req, res) => {
    const choice = req.params.choice;
    const result = choosePath(choice);
    res.send(result);
});