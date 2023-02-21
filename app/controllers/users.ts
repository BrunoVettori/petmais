import pg from "pg";

export async function CreateDono(req: any, res: any) {
    const dono = req.body;

    const client = new pg.Client({
        user: 'myusername',
        host: 'localhost',
        database: 'myusername',
        password: 'danonangus',
        port: 5432,
    });
    await client.connect();

    const resultDono = await client.query('SELECT * FROM dono;')

    console.log(resultDono)
    res.send("acerto mizeravel");
};
