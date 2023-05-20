export default ($axios) => {
    return {
        getInverse: (...args) => {
            const max = Math.max(...args)
            const string = String(max / (max - 1)).slice(0, 4)
            const rivalFactor = Number(string)
            return args.map((arg) => {
                if (arg === 1.00) {
                    return 1.00
                }
                if (arg > 1.00) {
                    if (arg === max) {
                        return 0.00
                    }
                    const string = String(1 - ((arg - 1) * (rivalFactor - 1))).slice(0, 4)
                    return Number(string)
                }
                if (arg < 1.00) {
                    const string = String(rivalFactor - (rivalFactor - 1) * arg).slice(0, 4)
                    return Number(string)
                }
            })
        },
        getSimulation: (...args) => {
            const simulation = {}
            const max = Math.max(...args[0])
            const amount_rival = args[2] * max - args[2]
            simulation.home = Number((args[0][0] * args[2]).toString().match(/^\d+(?:\.\d{0,8})?/)[0]).toFixed(8)
            simulation.draw = Number((args[0][1] * args[2]).toString().match(/^\d+(?:\.\d{0,8})?/)[0]).toFixed(8)
            simulation.away = Number((args[0][2] * args[2]).toString().match(/^\d+(?:\.\d{0,8})?/)[0]).toFixed(8)
            simulation.home_rival = Number((args[1][0] * amount_rival).toString().match(/^\d+(?:\.\d{0,8})?/)[0]).toFixed(8)
            simulation.draw_rival = Number((args[1][1] * amount_rival).toString().match(/^\d+(?:\.\d{0,8})?/)[0]).toFixed(8)
            simulation.away_rival = Number((args[1][2] * amount_rival).toString().match(/^\d+(?:\.\d{0,8})?/)[0]).toFixed(8)
            simulation.amount_rival = Number((amount_rival).toString().match(/^\d+(?:\.\d{0,8})?/)[0]).toFixed(8)
            simulation.jackpot = Number((args[2] + amount_rival).toString().match(/^\d+(?:\.\d{0,8})?/)[0]).toFixed(8)
            return simulation
        }
    }
}