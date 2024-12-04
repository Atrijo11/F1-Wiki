import React from 'react'
import DriverName from './DriverName'

function DriverNames() {
    var drivernames = [
        { Name: "Max Verstappen", pole: "41", podium: "109", win: "61", image: "https://cdn-6.motorsport.com/images/mgl/6D1XbeV0/s8/max-verstappen-red-bull-racing.jpg", hoverGradient: "from-blue-800 to-zinc-900"},
        { Name: "Sergio Pérez", pole: "3", podium: "39", win: "6", image: "https://cdn-9.motorsport.com/images/mgl/2y3qRdo6/s400/sergio-perez-red-bull-racing.webp", hoverGradient: "from-blue-800 to-zinc-900" },
        { Name: "Lewis Hamilton", pole: "104", podium: "201", win: "105", image: "https://cdn-6.motorsport.com/images/mgl/YEQ1pGwY/s400/lewis-hamilton-mercedes.webp", hoverGradient: "from-teal-500 to-zinc-900" },
        { Name: "George Russell", pole: "3", podium: "14", win: "2", image: "https://cdn-2.motorsport.com/images/mgl/Y998Zb7Y/s400/george-russell-mercedes.webp", hoverGradient: "from-teal-500 to-zinc-900" },
        { Name: "Carlos Sainz", pole: "5", podium: "23", win: "3", image: "https://cdn-9.motorsport.com/images/mgl/63vnZMbY/s400/carlos-sainz-ferrari.webp",hoverGradient: "from-red-600 to-zinc-900" },
        { Name: "Charles Leclerc", pole: "26", podium: "39", win: "7", image: "https://cdn-1.motorsport.com/images/mgl/YMdm7R32/s400/charles-leclerc-ferrari.webp" , hoverGradient: "from-red-600 to-zinc-900"},
        { Name: "Oscar Piastri", pole: "0", podium: "9", win: "2", image: "https://cdn-1.motorsport.com/images/mgl/YBe5yNn2/s400/oscar-piastri-mclaren.webp" , hoverGradient: "from-orange-500 to-zinc-900"},
        { Name: "Lando Norris", pole: "6", podium: "24", win: "3", image: "https://cdn-2.motorsport.com/images/mgl/YEQ1jk1Y/s400/lando-norris-mclaren.webp" , hoverGradient: "from-orange-500 to-zinc-900"},
        { Name: "Fernando Alonso", pole: "22", podium: "106", win: "32", image: "https://cdn-8.motorsport.com/images/mgl/0ZRQbbN0/s400/fernando-alonso-aston-martin-r.webp" , hoverGradient: "from-green-700 to-zinc-900"},
        { Name: "Lance Stroll", pole: "1", podium: "3", win: "0", image: "https://cdn-9.motorsport.com/images/mgl/0ZRQlG80/s400/lance-stroll-aston-martin.webp" , hoverGradient: "from-green-700 to-zinc-900"},
        { Name: "Yuki Tsunoda", pole: "0", podium: "0", win: "0", image: "https://cdn-1.motorsport.com/images/mgl/2wBdQNB0/s400/yuki-tsunoda-racing-bulls.webp", hoverGradient: "from-purple-700 to-zinc-900" },
        { Name: "Daniel Ricciardo", pole: "3", podium: "32", win: "8", image: "https://cdn-5.motorsport.com/images/mgl/2d1ZDk5Y/s400/daniel-ricciardo-racing-bulls.webp" , hoverGradient: "from-purple-700 to-zinc-900"},
        { Name: "Nico Hülkenberg", pole: "1", podium: "0", win: "0", image: "https://cdn-2.motorsport.com/images/mgl/0rG3w3m2/s400/nico-hulkenberg-haas-f1-team.webp" , hoverGradient: "from-gray-700 to-zinc-900"},
        { Name: "Kevin Magnussen", pole: "1", podium: "1", win: "0", image: "https://cdn-9.motorsport.com/images/mgl/6gp9X9a0/s400/kevin-magnussen-haas-f1-team.webp" , hoverGradient: "from-gray-700 to-zinc-900"},
        { Name: "Alex Albon", pole: "0", podium: "2", win: "0", image: "https://cdn-7.motorsport.com/images/mgl/0rG38zm2/s400/alex-albon-williams.webp" , hoverGradient: "from-blue-500 to-zinc-900" },
        { Name: "Franco Colapinto", pole: "0", podium: "0", win: "0", image: "https://cdn-2.motorsport.com/images/mgl/6xEkVd50/s400/franco-colapinto-williams-raci.webp", hoverGradient: "from-blue-500 to-zinc-900" },
        { Name: "Pierre Gasly", pole: "0", podium: "4", win: "1", image: "https://cdn-3.motorsport.com/images/mgl/2eADy3P2/s400/pierre-gasly-alpine.webp" , hoverGradient: "from-pink-600 to-zinc-900"},
        { Name: "Esteban Ocon", pole: "0", podium: "3", win: "1", image: "https://cdn-7.motorsport.com/images/mgl/0k7Vlw80/s400/esteban-ocon-alpine.webp" , hoverGradient: "from-pink-600 to-zinc-900"},
        { Name: "Valtteri Bottas", pole: "20", podium: "67", win: "10", image: "https://cdn-6.motorsport.com/images/mgl/YBe51WB2/s400/valtteri-bottas-stake-f1-team-.webp" , hoverGradient: "from-green-500 to-zinc-900"},
        { Name: "Zhou Guanyu", pole: "0", podium: "0", win: "0", image: "https://cdn-9.motorsport.com/images/mgl/68yrEnG0/s400/zhou-guanyu-stake-f1-team-kick.webp", hoverGradient: "from-green-500 to-zinc-900"},
    ];

    return (
        <div>
            {drivernames.map((val, index) => (
                <DriverName key={index} val={val} />
            ))}
        </div>
    );
}

export default DriverNames;
