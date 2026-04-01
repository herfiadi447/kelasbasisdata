module.exports = async function(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Server is missing GROQ_API_KEY environment variable.' });
    }

    try {
        // Forward the exact request to Groq API
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Groq API Error:', response.status, errorData);
            return res.status(response.status).json({ error: `Groq Error: ${response.status}` });
        }

        // Return the Groq response directly to the frontend
        const data = await response.json();
        res.status(200).json(data);

    } catch (error) {
        console.error('Failed to call Groq API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
