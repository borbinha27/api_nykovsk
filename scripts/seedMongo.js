import connectDB from '../config/database.js';
import User from '../models/User.js';

const sampleData = [
    {
        nome: "ronaldo",
        idade: 5,
        profissao: "streamer"
    },
    {
        nome: "bola",
        idade: 60,
        profissao: "pastor"
    },
    {
        nome: "deusedide",
        idade: 90,
        profissao: "tio da merenda"
    },
    {
        nome: "chati",
        idade: 9999,
        profissao: "sábio antigo"
    },
    {
        nome: "baleia azul",
        idade: 15,
        profissao: "assassino de aluguel"
    }
];

async function seedDatabase() {
    await connectDB();
    await User.deleteMany({});
    await User.insertMany(sampleData);
    console.log('Dados inseridos com sucesso!');
    process.exit(0);
}

seedDatabase();