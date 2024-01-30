import client from "../postgreSQLConnection.js";


export const createNote = async (data) => {
    try {
        const { autor, titulo, contenido, fecha } = data
        
        const db = await client.query(
            'INSERT INTO public."Notes"(titulo, autor, fecha, contenido) VALUES ($1, $2, $3, $4)',
            [titulo, autor, fecha, contenido]
        );
        
        return db.rows
    } catch (e) {
        console.log(e, 'error-----------')
    }
}

export const getNotes = async () => {
    
    try {
        const db = await client.query('SELECT * FROM public."Notes"')
        return db.rows
    } catch (e) {
        console.log(e, 'error-----------!!!')
    }
}