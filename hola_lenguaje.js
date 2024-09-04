function main() {
    const username = process.env.USERNAME;
    const language = process.env.LANGUAGE;
    console.log(`¡Hola, ${username}! Veo que tu lenguaje favorito es ${language}.`);
}

main();