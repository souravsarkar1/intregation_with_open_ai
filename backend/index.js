const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
const apiKey = process.env.KEY;
// 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
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("yyyy")
})
app.post('/convert', async (req, res) => {
    try {
        const { keyword } = req.body;
        
        if (!keyword) {
            return res.status(400).json({ error: 'Keyword is required.' });
        }

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
            model: "gpt-3.5-turbo",
            messages: [
              {
                "role": "user",
                "content": `${keyword}`
              }
            ]},
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                }
            }
        );
        console.log(response.data.choices);
        const convertedCode = response.data.choices[0].message.content;
        res.json({ convertedCode });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
