const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI(process.env.WOLFRAM_APPID);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const answer = await waApi.getFull({
                input: JSON.parse(req.body).equation
            })
            res.status(200).json({answer});
        } catch (e) {
            console.log(e);
        }
    }
}
