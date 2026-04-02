const { Client } = require('pg');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { nim, nama, file_url } = req.body;
  if (!nim || !nama || !file_url) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    const result = await client.query(
      `INSERT INTO submissions (nim, nama, file_url) VALUES ($1, $2, $3) RETURNING id`,
      [nim, nama, file_url]
    );
    res.status(200).json({ success: true, id: result.rows[0].id });
  } catch (error) {
    console.error('Submission Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.end();
  }
}
